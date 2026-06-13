"use client";

import { motion } from "framer-motion";
import { Truck, ClipboardList, Building2, Wrench } from "lucide-react";

const servicesData = [
  {
    icon: Truck,
    title: "توريد الأجهزة والمعدات الطبية",
    description: "نوفر أحدث الأجهزة والمعدات الطبية من أفضل المصنعين العالميين بضمانات كاملة وشهادات معتمدة.",
    features: ["أجهزة تشخيصية", "معدات جراحية", "أجهزة مراقبة", "معدات مختبرية"],
  },
  {
    icon: ClipboardList,
    title: "الاستشارات الطبية والإدارية",
    description: "استشارات متخصصة للمؤسسات الصحية في مجال التخطيط والتطوير وإدارة الموارد.",
    features: ["تخطيط استراتيجي", "إدارة الجودة", "تطوير العمليات", "تدريب الكوادر"],
  },
  {
    icon: Building2,
    title: "تجهيز العيادات والمراكز الطبية",
    description: "حلول متكاملة لتجهيز العيادات والمراكز الطبية بأحدث التقنيات والتصاميم العصرية.",
    features: ["تصميم داخلي", "تركيب الأجهزة", "تجهيز المختبرات", "أنظمة المعلومات"],
  },
  {
    icon: Wrench,
    title: "الصيانة والدعم الفني",
    description: "خدمات صيانة دورية ودعم فني على مدار الساعة لضمان استمرارية العمل بكفاءة.",
    features: ["صيانة وقائية", "إصلاح طارئ", "عقود صيانة", "استشارات فنية"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#081226] via-[#0a1a3a]/50 to-[#081226]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#D4AF37] text-sm font-bold tracking-wider uppercase mb-2 block">
            خدماتنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            حلول صحية <span className="text-gold-gradient">متكاملة</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass-card rounded-3xl p-8 group relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              {/* Hover Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#0B6DFF]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0B6DFF] to-[#00D4FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[#0B6DFF]/10 text-[#0B6DFF] border border-[#0B6DFF]/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
