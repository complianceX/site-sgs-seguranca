"use client";

import {
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { MotionText } from "@/components/ui/MotionText";
import { MotionButton } from "@/components/ui/MotionButton";
import { MotionCard } from "@/components/ui/MotionCard";
import { variants, transitions } from "@/lib/motion";
import { FadeIn } from "@/components/ui/FadeIn";

import { servedSegments, implementationSteps } from "@/content/home";

// Novas seções extraídas
import { HeroSection } from "@/components/sections/HeroSection";
import { ValuePropositionSection } from "@/components/sections/ValuePropositionSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export function HomePage() {
  const [workers, setWorkers] = useState(100);
  const [hoursPerDoc, setHoursPerDoc] = useState(2);

  const savings = Math.floor(workers * hoursPerDoc * 22 * 0.7);
  const ImplementationTagIcon = implementationSteps.steps[3].icon;

  return (
    <div className="flex flex-col gap-24 lg:gap-40 pb-24 overflow-hidden bg-white">
      <HeroSection />

      {/* Client Logos Section */}
      <section className="container">
        <FadeIn>
          <div className="flex flex-col items-center">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-16 relative">
              <span className="absolute -left-12 top-1/2 w-8 h-[1px] bg-slate-200"></span>
              Setores onde o SGS gera valor
              <span className="absolute -right-12 top-1/2 w-8 h-[1px] bg-slate-200"></span>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-1000 w-full">
              {servedSegments.map((segment, i) => (
                <motion.div
                  key={i}
                  variants={variants.technicalFormation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="flex justify-center group cursor-crosshair"
                >
                  <div aria-label={segment.label} className="h-12 w-full max-w-[140px] bg-slate-50 rounded-2xl flex items-center justify-center font-black text-[11px] text-slate-400 border border-slate-100 uppercase tracking-tighter group-hover:border-primary/20 group-hover:bg-white group-hover:shadow-sgs transition-all duration-500">
                    {segment.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <ValuePropositionSection />

      {/* How it Works Section */}
      <section className="container">
        <FadeIn className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-sgs-green/5 text-sgs-green rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
            <ImplementationTagIcon className="w-4 h-4" />
            {implementationSteps.tag}
          </div>
          <MotionText as="h2" className="text-4xl lg:text-6xl font-black mb-8 text-sgs-navy tracking-tight">
            {implementationSteps.title}
          </MotionText>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-slate-100 -translate-y-1/2 z-0"></div>

          {implementationSteps.steps.map((item, i) => (
            <MotionCard key={i} delay={i * 0.1} className="text-center lg:text-left">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 mx-auto lg:mx-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-sm border border-slate-100">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">{item.step}</div>
              <h3 className="text-xl font-black mb-4 text-sgs-navy tracking-tight">{item.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed text-sm">{item.desc}</p>
            </MotionCard>
          ))}
        </div>
      </section>

      <TestimonialsSection />

      {/* ROI Calculator */}
      <section className="container">
        <FadeIn>
          <MotionCard className="p-10 lg:p-20 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
                  <BarChart3 className="w-4 h-4" />
                  Calculadora de ROI
                </div>
                <h2 className="text-4xl lg:text-6xl font-black mb-8 text-sgs-navy tracking-tight leading-[1.1]">Quanto sua empresa economiza?</h2>
                <div className="space-y-12">
                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                      <label className="text-xs font-black text-sgs-navy uppercase tracking-widest">Nº de Trabalhadores</label>
                      <span className="text-3xl font-black text-primary leading-none">{workers}</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      step="10"
                      value={workers}
                      onChange={(e) => setWorkers(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-primary"
                    />
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                      <label className="text-xs font-black text-sgs-navy uppercase tracking-widest">Horas/Mês por Doc (Manual)</label>
                      <span className="text-3xl font-black text-primary leading-none">{hoursPerDoc}h</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      step="1"
                      value={hoursPerDoc}
                      onChange={(e) => setHoursPerDoc(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-primary"
                    />
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: transitions.expo }}
                className="bg-sgs-navy rounded-[2.5rem] p-12 lg:p-16 text-center shadow-2xl shadow-sgs-navy/20 text-white relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
                <p className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6">Economia Estimada</p>
                <div className="text-7xl lg:text-9xl font-black mb-6 flex items-baseline justify-center gap-3 tracking-tighter">
                  {savings} <span className="text-2xl font-bold text-white/40 tracking-normal">h</span>
                </div>
                <p className="text-white/60 text-xl font-medium mb-10">Poupadas todos os meses.</p>
                <div className="h-[1px] bg-white/10 mb-10"></div>
                <p className="text-xs text-white/40 font-medium italic leading-relaxed">
                  *Cálculo baseado em ganho de eficiência de 70% na geração, assinatura e arquivamento de documentos digitais via SGS.
                </p>
              </motion.div>
            </div>
          </MotionCard>
        </FadeIn>
      </section>

      <FAQSection />

      <FinalCTASection />
    </div>
  );
}
