"use client";

import { motion } from "framer-motion";
import { Heart, Activity, Stethoscope, ArrowDown, ChevronLeft } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#081226] via-[#0a1a3a] to-[#081226]" />

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#0B6DFF]/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D4FF]/5 rounded-full blur-3xl" />

      {/* Medical Cross Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern id="medical-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M45 30 h10 v15 h15 v10 h-15 v15 h-10 v-15 h-15 v-10 h15 z" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#medical-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Activity className="w-4 h-4 text-[#0B6DFF]" />
          <span className="text-sm font-medium text-gray-300">شركة رائدة في الحلول الصحية</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-white">نرتقي بالرعاية الصحية</span>
          <br />
          <span className="text-gold-gradient">نحو مستقبل أفضل</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          شركة نداء الحياة تقدم حلولاً صحية متكاملة وتجهيزات طبية حديثة واستشارات متخصصة بأعلى معايير الجودة والموثوقية.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#services" className="btn-primary flex items-center gap-2 group">
            <span>خدماتنا</span>
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="btn-gold flex items-center gap-2">
            <span>تواصل معنا</span>
          </a>
        </motion.div>

        {/* Animated Heart */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#0B6DFF]/20 to-[#D4AF37]/20 flex items-center justify-center glass">
              <Heart className="w-16 h-16 md:w-20 md:h-20 text-[#0B6DFF] animate-heartbeat" />
            </div>
            {/* Pulse Rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#0B6DFF]/30"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/20"
              animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Floating Medical Icons */}
        <motion.div
          className="absolute top-1/4 left-10 glass rounded-2xl p-4 hidden lg:block"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Stethoscope className="w-8 h-8 text-[#D4AF37]" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-10 glass rounded-2xl p-4 hidden lg:block"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Activity className="w-8 h-8 text-[#0B6DFF]" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#stats" className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#0B6DFF] transition-colors">
            <span className="text-sm">اكتشف المزيد</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
