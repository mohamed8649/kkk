"use client";

import { motion } from "framer-motion";
import { Heart, Activity, Stethoscope } from "lucide-react";

export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, visibility: "hidden" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Animated Logo */}
        <div className="relative">
          <motion.div
            className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0B6DFF] to-[#00D4FF] flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 360],
            }}
            transition={{
              scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 3, repeat: Infinity, ease: "linear" },
            }}
          >
            <Heart className="w-12 h-12 text-white animate-heartbeat" />
          </motion.div>

          {/* Orbiting elements */}
          <motion.div
            className="absolute -top-2 -right-2"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Activity className="w-6 h-6 text-[#D4AF37]" />
          </motion.div>

          <motion.div
            className="absolute -bottom-2 -left-2"
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Stethoscope className="w-6 h-6 text-[#0B6DFF]" />
          </motion.div>
        </div>

        {/* Company Name */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold text-gold-gradient mb-2">
            نداء الحياة
          </h1>
          <p className="text-[#0B6DFF] text-lg font-medium">
            شركة الحلول الصحية المتكاملة
          </p>
        </motion.div>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-[#081226] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#0B6DFF] via-[#D4AF37] to-[#0B6DFF]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>

        <motion.p
          className="text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          جاري تحميل الموقع...
        </motion.p>
      </div>
    </motion.div>
  );
}
