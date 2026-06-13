"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqsData = [
  {
    question: "ما هي الخدمات التي تقدمها شركة نداء الحياة؟",
    answer: "نقدم مجموعة متكاملة من الخدمات تشمل: توريد الأجهزة والمعدات الطبية، الاستشارات الطبية والإدارية، تجهيز العيادات والمراكز الطبية، وخدمات الصيانة والدعم الفني.",
  },
  {
    question: "هل تقدمون ضمان على الأجهزة الطبية؟",
    answer: "نعم، جميع الأجهزة الطبية تأتي بضمان شامل يمتد من سنة إلى سنتين حسب نوع الجهاز، مع عقود صيانة دورية متاحة.",
  },
  {
    question: "ما هي مدة تنفيذ مشاريع التجهيز؟",
    answer: "تختلف المدة حسب حجم المشروع، ولكننا نلتزم بجدول زمني واضح. عادةً تستغرق المشاريع الصغيرة 2-4 أسابيع والمشاريع الكبيرة 2-6 أشهر.",
  },
  {
    question: "هل تقدمون خدمات الصيانة بعد البيع؟",
    answer: "نعم، نقدم خدمات صيانة دورية ودعم فني على مدار الساعة من خلال فريق متخصص من المهندسين والفنيين.",
  },
  {
    question: "هل يمكنكم تجهيز مستشفى كامل؟",
    answer: "بالتأكيد، لدينا خبرة واسعة في تجهيز المستشفيات والمراكز الطبية الكبيرة بشكل متكامل من الألف إلى الياء.",
  },
  {
    question: "كيف يمكنني التواصل معكم؟",
    answer: "يمكنك التواصل معنا عبر الهاتف: +218 91 123 4567، أو الواتساب: +218 92 765 4321، أو البريد الإلكتروني: info@nidaalhayat.com",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#D4AF37] text-sm font-bold tracking-wider uppercase mb-2 block">
            الأسئلة الشائعة
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            أسئلة <span className="text-gold-gradient">متكررة</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="space-y-4">
          {faqsData.map((faq, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-right"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B6DFF]/20 to-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-5 h-5 text-[#0B6DFF]" />
                  </div>
                  <span className="text-white font-semibold text-lg">{faq.question}</span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-[#D4AF37]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pr-20">
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
