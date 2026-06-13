"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import LoadingScreen from "@/components/LoadingScreen";
import ParticlesBackground from "@/components/ParticlesBackground";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="ar" dir="rtl" className={isDark ? "dark" : ""}>
      <head>
        <title>شركة نداء الحياة | الحلول الصحية المتكاملة</title>
        <meta name="description" content="شركة نداء الحياة - تقدم حلولاً صحية متكاملة وتجهيزات طبية حديثة واستشارات متخصصة بأعلى معايير الجودة والموثوقية" />
        <meta name="keywords" content="شركة نداء الحياة, تجهيزات طبية, أجهزة طبية, استشارات طبية, ليبيا, طرابلس" />
        <meta name="author" content="شركة نداء الحياة" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="شركة نداء الحياة | الحلول الصحية المتكاملة" />
        <meta property="og:description" content="نرتقي بالرعاية الصحية نحو مستقبل أفضل - حلول صحية متكاملة وتجهيزات طبية حديثة" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nidaalhayat.com" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:locale" content="ar_LY" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="شركة نداء الحياة | الحلول الصحية المتكاملة" />
        <meta name="twitter:description" content="نرتقي بالرعاية الصحية نحو مستقبل أفضل" />
        <meta name="twitter:image" content="/og-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <AnimatePresence mode="wait">
          {isLoading && <LoadingScreen key="loading" />}
        </AnimatePresence>

        <ParticlesBackground />

        <div className="relative z-10">
          <Navbar isDark={isDark} setIsDark={setIsDark} />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}
