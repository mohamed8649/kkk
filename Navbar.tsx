"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, Sun, Moon, Phone } from "lucide-react";

interface NavbarProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

const navLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "خدماتنا" },
  { href: "#projects", label: "أعمالنا" },
  { href: "#testimonials", label: "آراء العملاء" },
  { href: "#faq", label: "الأسئلة الشائعة" },
  { href: "#contact", label: "تواصل معنا" },
];

export default function Navbar({ isDark, setIsDark }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0B6DFF] to-[#00D4FF] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 text-white animate-heartbeat" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#D4AF37] flex items-center justify-center">
                <span className="text-[8px] font-bold text-[#081226]">+</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gold-gradient leading-tight">
                نداء الحياة
              </span>
              <span className="text-xs text-[#0B6DFF] font-medium">
                الحلول الصحية المتكاملة
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-[#D4AF37] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gradient-to-l from-[#D4AF37] to-[#0B6DFF] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+218911234567"
              className="hidden md:flex items-center gap-2 btn-primary text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>اتصل بنا</span>
            </a>

            <button
              onClick={() => setIsDark(!isDark)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="تبديل الوضع"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-[#D4AF37]" />
              ) : (
                <Moon className="w-5 h-5 text-[#0B6DFF]" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full glass flex items-center justify-center"
              aria-label="القائمة"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden glass-strong mt-3 mx-4 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="p-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+218911234567"
                className="flex items-center justify-center gap-2 btn-primary mt-4"
              >
                <Phone className="w-4 h-4" />
                <span>+218 91 123 4567</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
