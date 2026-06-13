"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonialsData = [
  {
    text: "تعامل احترافي وجودة ممتازة في الخدمات. فريق العمل متعاون ومتميز في تقديم الحلول الصحية.",
    author: "د. أحمد المحمودي",
    role: "مدير مركز الشفاء الطبي",
    rating: 5,
  },
  {
    text: "من أفضل الشركات التي تعاملنا معها في مجال التجهيزات الطبية. سرعة في التنفيذ ودقة في العمل.",
    author: "م. فاطمة السنوسي",
    role: "مديرة مستشفى الأمل",
    rating: 5,
  },
  {
    text: "سرعة في التنفيذ ودعم فني متميز. الشركة تتميز بالمصداقية والالتزام بالمواعيد.",
    author: "د. خالد العرابي",
    role: "صاحب عيادات الحياة",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonialsData.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);

  return (
    <section id="testimonials" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#081226] via-[#0B6DFF]/5 to-[#081226]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#D4AF37] text-sm font-bold tracking-wider uppercase mb-2 block">
            آراء العملاء
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ما يقوله <span className="text-gold-gradient">عملاؤنا</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="glass-strong rounded-3xl p-8 md:p-12 text-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Quote className="w-12 h-12 text-[#D4AF37]/30 mx-auto mb-6" />

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                "{testimonialsData[current].text}"
              </p>

              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonialsData[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>

              <h4 className="text-lg font-bold text-white">{testimonialsData[current].author}</h4>
              <p className="text-[#0B6DFF] text-sm">{testimonialsData[current].role}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-[#0B6DFF]/20 transition-colors"
              aria-label="السابق"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            <div className="flex items-center gap-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === current ? "bg-[#D4AF37] w-8" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`الشهادة ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-[#0B6DFF]/20 transition-colors"
              aria-label="التالي"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
