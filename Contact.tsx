"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send, User, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
  };

  const contactInfo = [
    { icon: Phone, label: "الهاتف", value: "+218 91 123 4567", href: "tel:+218911234567" },
    { icon: MessageCircle, label: "واتساب", value: "+218 92 765 4321", href: "https://wa.me/218927654321" },
    { icon: Mail, label: "البريد الإلكتروني", value: "info@nidaalhayat.com", href: "mailto:info@nidaalhayat.com" },
    { icon: MapPin, label: "العنوان", value: "طرابلس - ليبيا", href: "#" },
  ];

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#081226] via-[#0a1a3a]/30 to-[#081226]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#D4AF37] text-sm font-bold tracking-wider uppercase mb-2 block">
            تواصل معنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            نحن هنا <span className="text-gold-gradient">لخدمتك</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">معلومات التواصل</h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B6DFF]/20 to-[#D4AF37]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-[#0B6DFF]" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">{item.label}</p>
                      <p className="text-white font-medium" dir={item.label === "الهاتف" || item.label === "واتساب" ? "ltr" : "rtl"}>{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-3xl p-4 h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[#0B6DFF] mx-auto mb-4" />
                <p className="text-gray-400">طرابلس - ليبيا</p>
                <p className="text-sm text-gray-500 mt-2">يمكنك التواصل معنا للحصول على العنوان التفصيلي</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass-card rounded-3xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6">أرسل رسالتك</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <User className="w-4 h-4" />
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#0B6DFF] focus:outline-none transition-colors"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <Mail className="w-4 h-4" />
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#0B6DFF] focus:outline-none transition-colors"
                  placeholder="example@email.com"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <Phone className="w-4 h-4" />
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#0B6DFF] focus:outline-none transition-colors"
                  placeholder="+218 91 123 4567"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <MessageSquare className="w-4 h-4" />
                  الرسالة
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#0B6DFF] focus:outline-none transition-colors resize-none"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                <span>إرسال الرسالة</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
