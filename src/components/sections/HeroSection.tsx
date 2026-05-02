"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { MotionText } from "@/components/ui/MotionText";
import { MotionButton } from "@/components/ui/MotionButton";
import { TechnicalElements } from "@/components/ui/TechnicalElements";
import { FadeIn } from "@/components/ui/FadeIn";
import { transitions, variants } from "@/lib/motion-variants";
import { useReducedMotion } from "@/hooks/use-motion";
import { homeHero } from "@/data/home";
import { getSchedulingHref } from "@/lib/contact-links";

const heroMetrics = [
  { label: "Documentos", value: "APR · DDS · PT" },
  { label: "Governança", value: "Registry + evidências" },
  { label: "IA assistiva", value: "Sophie com revisão humana" },
];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const schedulingHref = getSchedulingHref();

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
              <Link href={schedulingHref}>
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

            <motion.div
              variants={variants.maskReveal}
              className="mt-6 max-w-2xl"
            >
              <p className="mb-4 text-sm font-bold text-slate-500">
                {homeHero.trustText}
              </p>
              <div className="flex flex-wrap gap-3">
                {homeHero.proofPoints.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-2 text-[11px] font-black uppercase tracking-widest text-sgs-navy shadow-sm backdrop-blur"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-sgs-green" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: transitions.expo }}
              className="mt-14 grid max-w-3xl gap-3 sm:grid-cols-3"
            >
              {heroMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.12, duration: 0.7, ease: transitions.expo }}
                  whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.02 }}
                  className="rounded-2xl border border-white/50 bg-white/65 p-4 shadow-sgs backdrop-blur-xl"
                >
                  <p className="mb-2 text-[9px] font-black uppercase tracking-[0.2em] text-primary">
                    {metric.label}
                  </p>
                  <p className="text-sm font-black text-sgs-navy">
                    {metric.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
