"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionText } from "@/components/ui/MotionText";
import { MotionButton } from "@/components/ui/MotionButton";
import { TechnicalElements } from "@/components/ui/TechnicalElements";
import { FadeIn } from "@/components/ui/FadeIn";
import { transitions, variants } from "@/lib/motion";
import { homeHero } from "@/content/home";

export function HeroSection() {
  return (
    <section className="relative min-h-[86vh] flex items-center overflow-hidden bg-slate-50 py-24 lg:py-28">
      <div className="absolute inset-0 bg-white/60 z-10 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10"></div>

      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: transitions.expo }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={homeHero.video} type="video/mp4" />
        </video>
      </motion.div>

      <TechnicalElements />

      <div className="container relative z-20">
        <div className="max-w-4xl">
          <FadeIn direction="none" stagger>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: transitions.expo }}
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-full text-[10px] font-black mb-10 text-primary tracking-[0.2em] uppercase"
            >
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
              {homeHero.tag}
            </motion.div>

            <MotionText
              as="h1"
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.08] tracking-tight text-sgs-navy text-balance"
            >
              {homeHero.title}
            </MotionText>

            <motion.p
              variants={variants.maskReveal}
              className="text-xl md:text-2xl text-slate-600 mb-14 leading-relaxed max-w-2xl font-medium text-pretty"
            >
              {homeHero.description}
            </motion.p>

            <div className="flex flex-wrap gap-6">
              <Link href={homeHero.ctaPrimary.href}>
                <MotionButton size="lg" className="gap-3 group">
                  {homeHero.ctaPrimary.text} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </MotionButton>
              </Link>
              <Link href={homeHero.ctaSecondary.href}>
                <MotionButton variant="outline" size="lg">
                  {homeHero.ctaSecondary.text}
                </MotionButton>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
