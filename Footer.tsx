"use client";

import { motion } from "framer-motion";
import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#081226] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0B6DFF] to-[#00D4FF] flex items-center justify-center">
                <Heart className="w-6 h-6 text-white animate-heartbeat" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gold-gradient">نداء الحياة</h3>
                <p className="text-xs text-[#0B6DFF]">الحلول الصحية المتكاملة</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              نقدم حلولاً صحية متكاملة وتجهيزات طبية حديثة واستشارات متخصصة بأعلى معايير الجودة والموثوقية.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com/nidaalhayat" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#0B6DFF]/20 transition-colors">
                <Facebook className="w-5 h-5 text-[#0B6DFF]" />
              </a>
              <a href="https://instagram.com/nidaalhayat" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#D4AF37]/20 transition-colors">
                <Instagram className="w-5 h-5 text-[#D4AF37]" />
              </a>
              <a href="https://linkedin.com/company/nidaalhayat" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#0B6DFF]/20 transition-colors">
                <Linkedin className="w-5 h-5 text-[#0B6DFF]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {["الرئيسية", "من نحن", "خدماتنا", "أعمالنا", "الأسئلة الشائعة", "تواصل معنا"].map((link) => (
                <li key={link}>
                  <a href={`#${link}`} className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {[
                "توريد الأجهزة الطبية",
                "الاستشارات الطبية",
                "تجهيز العيادات",
                "الصيانة والدعم الفني",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0B6DFF] mt-0.5" />
                <span className="text-gray-400 text-sm">طرابلس - ليبيا</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0B6DFF]" />
                <span className="text-gray-400 text-sm" dir="ltr">+218 91 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#0B6DFF]" />
                <span className="text-gray-400 text-sm">info@nidaalhayat.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 شركة نداء الحياة. جميع الحقوق محفوظة.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-[#0B6DFF]/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="العودة للأعلى"
          >
            <ArrowUp className="w-5 h-5 text-[#D4AF37]" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
