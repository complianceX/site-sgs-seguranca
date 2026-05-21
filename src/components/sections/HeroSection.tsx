"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Pause, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MotionText } from "@/components/ui/MotionText";
import { MotionButton } from "@/components/ui/MotionButton";
import { TechnicalElements } from "@/components/ui/TechnicalElements";
import { FadeIn } from "@/components/ui/FadeIn";
import { TrackedLink } from "@/components/ui/TrackedLink";
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
  const [enableVideo, setEnableVideo] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(true);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const media = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    const update = () => setEnableVideo(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [shouldReduceMotion]);

  return (
    <section className="relative flex min-h-[86vh] items-center overflow-hidden bg-slate-50 py-24 lg:py-28">
      <div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-[2px]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/40 to-transparent" />

      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/images/hero-poster.svg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {enableVideo && (
          <video
            autoPlay={videoPlaying}
            muted
            loop
            playsInline
            preload="none"
            poster="/images/hero-poster.svg"
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden="true"
          >
            <source src={homeHero.video} type="video/mp4" />
          </video>
        )}
      </div>

      {enableVideo && (
        <button
          type="button"
          className="absolute bottom-8 right-8 z-30 rounded-full border border-white/60 bg-white/80 p-3 text-sgs-navy shadow-sgs backdrop-blur"
          onClick={() => setVideoPlaying((value) => !value)}
          aria-label={videoPlaying ? "Pausar vídeo de fundo" : "Reproduzir vídeo de fundo"}
        >
          {videoPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>
      )}

      <TechnicalElements />

      <div className="container relative z-20">
        <div className="max-w-4xl">
          <FadeIn direction="none" stagger>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: transitions.expo }}
              className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary backdrop-blur-md"
            >
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              {homeHero.tag}
            </motion.div>

            <MotionText
              as="h1"
              className="mb-8 text-4xl font-black leading-[1.08] tracking-tight text-sgs-navy text-balance md:text-5xl lg:text-6xl"
            >
              {homeHero.title}
            </MotionText>

            <motion.p
              variants={variants.maskReveal}
              className="mb-14 max-w-2xl text-xl font-medium leading-relaxed text-slate-600 text-pretty md:text-2xl"
            >
              {homeHero.description}
            </motion.p>

            <div className="flex flex-wrap gap-6">
              <TrackedLink href={schedulingHref} trackLabel="Agendar demonstração - Hero">
                <MotionButton size="lg" className="group gap-3">
                  {homeHero.ctaPrimary.text}{" "}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </MotionButton>
              </TrackedLink>
              <TrackedLink href={homeHero.ctaSecondary.href} trackLabel="Ver módulos - Hero">
                <MotionButton variant="outline" size="lg">
                  {homeHero.ctaSecondary.text}
                </MotionButton>
              </TrackedLink>
            </div>

            <motion.div variants={variants.maskReveal} className="mt-6 max-w-2xl">
              <p className="mb-4 text-sm font-bold text-slate-500">{homeHero.trustText}</p>
              <div className="flex flex-wrap gap-3">
                {homeHero.proofPoints.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-2 text-[11px] font-black uppercase tracking-widest text-sgs-navy shadow-sm backdrop-blur"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-sgs-green" aria-hidden="true" />
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
                  <p className="text-sm font-black text-sgs-navy">{metric.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
