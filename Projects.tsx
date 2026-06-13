"use client";

import { motion } from "framer-motion";
import { ExternalLink, MapPin, Calendar } from "lucide-react";

const projectsData = [
  {
    name: "مركز الشفاء الطبي",
    location: "طرابلس",
    year: "2025",
    description: "تجهيز كامل للمركز الطبي بأحدث الأجهزة التشخيصية والعلاجية",
    category: "تجهيز مراكز طبية",
  },
  {
    name: "مستشفى الأمل التخصصي",
    location: "بنغازي",
    year: "2025",
    description: "توريد أجهزة طبية متخصصة لقسمي العمليات والعناية المركزة",
    category: "توريد أجهزة",
  },
  {
    name: "عيادات الحياة الحديثة",
    location: "مصراتة",
    year: "2024",
    description: "تنفيذ مشروع تجهيز كامل للعيادات المتخصصة",
    category: "تجهيز عيادات",
  },
  {
    name: "مركز النخبة الطبي",
    location: "طرابلس",
    year: "2024",
    description: "تجهيز مركز طبي متكامل بأحدث التقنيات الطبية",
    category: "تجهيز مراكز",
  },
  {
    name: "مستشفى الرحمة",
    location: "الزاوية",
    year: "2024",
    description: "توريد وتجهيز مستشفى عام بسعة 100 سرير",
    category: "تجهيز مستشفيات",
  },
  {
    name: "مركز المستقبل الصحي",
    location: "سبها",
    year: "2023",
    description: "تجهيز مركز صحي متكامل مع أنظمة المعلومات الطبية",
    category: "تجهيز مراكز",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#D4AF37] text-sm font-bold tracking-wider uppercase mb-2 block">
            أعمالنا ومشاريعنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            مشاريعنا <span className="text-gold-gradient">المتميزة</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.name}
              className="glass-card rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Project Header */}
              <div className="relative h-48 bg-gradient-to-br from-[#0B6DFF]/30 to-[#081226] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwQjZERkYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2NGgtNHptNiA2aDR2NGgtNHptLTEyLTY0djRoLTR2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

                <div className="relative text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0B6DFF] to-[#D4AF37] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xs font-medium text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#081226] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
