"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { MotionCard } from "@/components/ui/MotionCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { transitions } from "@/lib/motion";
import { FadeIn } from "@/components/ui/FadeIn";

/**
 * Calculadora de ROI (Return on Investment)
 * Componente Cliente isolado para evitar re-renderização de toda a página
 * e melhorar a performance de hidratação.
 */
export function ROICalculator() {
  const [workers, setWorkers] = useState(100);
  const [hoursPerDoc, setHoursPerDoc] = useState(2);

  // Lógica de cálculo memorizada implicitamente pela renderização local
  const savings = Math.floor(workers * hoursPerDoc * 22 * 0.7);

  return (
    <section className="container">
      <FadeIn>
        <MotionCard className="p-10 lg:p-20 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
                <BarChart3 className="w-4 h-4" />
                Calculadora de ROI
              </div>
              <h2 className="text-4xl lg:text-6xl font-black mb-8 text-sgs-navy tracking-tight leading-[1.1]">
                Quanto sua empresa economiza?
              </h2>
              
              <div className="space-y-12">
                {/* Sliders com labels associados para Acessibilidade */}
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <label 
                      htmlFor="workers-range" 
                      className="text-xs font-black text-sgs-navy uppercase tracking-widest cursor-pointer"
                    >
                      Nº de Trabalhadores
                    </label>
                    <span className="text-3xl font-black text-primary leading-none">{workers}</span>
                  </div>
                  <input
                    id="workers-range"
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={workers}
                    onChange={(e) => setWorkers(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    aria-valuemin={10}
                    aria-valuemax={1000}
                    aria-valuenow={workers}
                  />
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <label 
                      htmlFor="hours-range" 
                      className="text-xs font-black text-sgs-navy uppercase tracking-widest cursor-pointer"
                    >
                      Horas/Mês por Doc (Manual)
                    </label>
                    <span className="text-3xl font-black text-primary leading-none">{hoursPerDoc}h</span>
                  </div>
                  <input
                    id="hours-range"
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={hoursPerDoc}
                    onChange={(e) => setHoursPerDoc(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    aria-valuemin={1}
                    aria-valuemax={10}
                    aria-valuenow={hoursPerDoc}
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
                <AnimatedCounter value={savings} /> 
                <span className="text-2xl font-bold text-white/40 tracking-normal">h</span>
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
  );
}
