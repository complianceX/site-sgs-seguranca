"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, TrendingUp, ArrowRight } from "lucide-react";
import { MotionCard } from "@/components/ui/MotionCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MotionButton } from "@/components/ui/MotionButton";
import { transitions } from "@/lib/motion-variants";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { getSchedulingHref } from "@/lib/contact-links";

/**
 * Calculadora de ROI (Return on Investment)
 * Refatorada para maior impacto visual e conversão.
 */
export function ROICalculator() {
  const [workers, setWorkers] = useState(100);
  const [hoursPerDoc, setHoursPerDoc] = useState(2);
  const schedulingHref = getSchedulingHref();

  // Lógica de cálculo: horas totais economizadas considerando 22 dias úteis e 70% de eficiência
  const savings = Math.floor(workers * hoursPerDoc * 22 * 0.7);

  return (
    <section className="container py-24 lg:py-32">
      <FadeIn>
        <MotionCard className="p-8 md:p-12 lg:p-20 relative overflow-hidden group/card">
          <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover/card:opacity-[0.08] transition-opacity duration-1000 pointer-events-none">
            <TrendingUp className="w-64 h-64 rotate-12" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
                <BarChart3 className="w-4 h-4" />
                Simulador de Eficiência
              </div>
              <h2 className="text-4xl lg:text-6xl font-black mb-8 text-sgs-navy tracking-tight leading-[1.1] text-balance">
                Quanto sua operação economiza?
              </h2>
              <p className="text-lg text-slate-500 font-medium mb-14 text-pretty">
                Ajuste os parâmetros abaixo para ver o impacto direto na produtividade do seu time de SST.
              </p>
              
              <div className="space-y-14">
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <label 
                      htmlFor="workers-range" 
                      className="text-[11px] font-black text-sgs-navy uppercase tracking-[0.15em] cursor-pointer"
                    >
                      Nº de Trabalhadores
                    </label>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-primary tabular-nums tracking-tighter">{workers}</span>
                    </div>
                  </div>
                  <input
                    id="workers-range"
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={workers}
                    onChange={(e) => setWorkers(parseInt(e.target.value))}
                    className="w-full h-1.5 focus:outline-none"
                    aria-valuemin={10}
                    aria-valuemax={1000}
                    aria-valuenow={workers}
                  />
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <label 
                      htmlFor="hours-range" 
                      className="text-[11px] font-black text-sgs-navy uppercase tracking-[0.15em] cursor-pointer"
                    >
                      Horas/Mês por Doc (Manual)
                    </label>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-primary tabular-nums tracking-tighter">{hoursPerDoc}</span>
                      <span className="text-lg font-black text-primary/40 uppercase">h</span>
                    </div>
                  </div>
                  <input
                    id="hours-range"
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={hoursPerDoc}
                    onChange={(e) => setHoursPerDoc(parseInt(e.target.value))}
                    className="w-full h-1.5 focus:outline-none"
                    aria-valuemin={1}
                    aria-valuemax={10}
                    aria-valuenow={hoursPerDoc}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: transitions.expo }}
                className="w-full bg-sgs-navy rounded-[3rem] p-12 lg:p-16 text-center shadow-2xl shadow-sgs-navy/20 text-white relative group overflow-hidden border border-white/5"
              >
                {/* Background Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
                
                <p className="text-primary font-black uppercase tracking-[0.3em] text-[11px] mb-8 relative z-10">Economia Estimada</p>
                
                <div className="text-8xl lg:text-[10rem] font-black mb-6 flex items-baseline justify-center gap-3 tracking-[ -0.05em] relative z-10 tabular-nums">
                  <AnimatedCounter value={savings} /> 
                  <span className="text-3xl font-black text-white/30 tracking-normal uppercase">h</span>
                </div>
                
                <p className="text-white/70 text-xl font-medium mb-12 relative z-10">Poupadas mensalmente em burocracia.</p>
                
                <div className="h-[1px] bg-white/10 mb-12 relative z-10"></div>
                
                <Link href={schedulingHref} className="relative z-10 inline-block w-full">
                  <MotionButton size="lg" className="w-full h-20 text-lg gap-4 group/btn">
                    Receber estudo detalhado <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                  </MotionButton>
                </Link>
                
                <p className="mt-10 text-[10px] text-white/30 font-bold uppercase tracking-widest leading-relaxed relative z-10">
                  *Cálculo baseado em eficiência de 70% na gestão via SGS.
                </p>
              </motion.div>
            </div>
          </div>
        </MotionCard>
      </FadeIn>
    </section>
  );
}
