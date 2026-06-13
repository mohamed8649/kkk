"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Monitor, Briefcase, Award, ThumbsUp, Clock } from "lucide-react";

const statsData = [
  { icon: Users, value: 350, suffix: "+", label: "عميل" },
  { icon: Monitor, value: 1200, suffix: "+", label: "جهاز ومعدة طبية" },
  { icon: Briefcase, value: 180, suffix: "+", label: "مشروع منجز" },
  { icon: Award, value: 35, suffix: "+", label: "خبير ومتخصص" },
  { icon: ThumbsUp, value: 98, suffix: "%", label: "رضا العملاء" },
  { icon: Clock, value: 24, suffix: "/7", label: "دعم فني" },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="text-4xl md:text-5xl font-bold text-gold-gradient">
      {count.toLocaleString("ar-SA")}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="relative py-20" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B6DFF]/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0B6DFF]/20 to-[#D4AF37]/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-[#0B6DFF]" />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
              <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
