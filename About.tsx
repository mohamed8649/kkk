"use client";

import { motion } from "framer-motion";
import { Eye, Target, Heart, Shield, Zap, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#D4AF37] text-sm font-bold tracking-wider uppercase mb-2 block">
            من نحن
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            شريكك الموثوق في <span className="text-gold-gradient">الرعاية الصحية</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            className="glass-card rounded-3xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0B6DFF] to-[#00D4FF] flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">عن الشركة</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg">
              شركة نداء الحياة هي شركة متخصصة في تقديم الحلول الصحية والخدمات الطبية الحديثة وتسعى إلى تحسين جودة الحياة من خلال توفير منتجات وخدمات عالية الجودة تلبي احتياجات الأفراد والمؤسسات الصحية.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Vision */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#F4E4BC]/20 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">الرؤية</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    أن نكون من الشركات الرائدة في قطاع الخدمات الصحية والطبية على المستوى المحلي والإقليمي.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B6DFF]/20 to-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-[#0B6DFF]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">الرسالة</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    تقديم خدمات ومنتجات صحية مبتكرة وموثوقة تساهم في تحسين حياة الأفراد ودعم القطاع الصحي بأعلى معايير الجودة.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            لماذا <span className="text-gold-gradient">نداء الحياة</span>
          </h3>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Users, title: "فريق عمل متخصص", desc: "فريق عمل متخصص وذو خبرة عالية في المجال الطبي" },
            { icon: Shield, title: "معايير الجودة", desc: "التزام كامل بمعايير الجودة والسلامة الدولية" },
            { icon: Clock, title: "دعم 24/7", desc: "خدمة عملاء ودعم فني على مدار الساعة" },
            { icon: Zap, title: "سرعة التنفيذ", desc: "سرعة في التنفيذ مع الحفاظ على أعلى معايير الجودة" },
            { icon: Heart, title: "حلول موثوقة", desc: "حلول صحية موثوقة ومعتمدة من الجهات المختصة" },
            { icon: Target, title: "شراكات طويلة", desc: "شراكات طويلة الأمد مع المؤسسات الصحية" },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="glass-card rounded-2xl p-6 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B6DFF]/20 to-[#D4AF37]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-[#0B6DFF]" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
