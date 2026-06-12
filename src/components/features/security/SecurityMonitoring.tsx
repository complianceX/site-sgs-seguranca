"use client";

import { AlertCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { transitions } from "@/lib/motion-variants";

const items = [
  "Captura de exceções e erros em tempo real.",
  "Logs estruturados em formato JSON para auditoria.",
  "Health checks constantes de serviços e integrações.",
];

export function SecurityMonitoring() {
  return (
    <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
      <FadeIn direction="right">
        <div>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
            Observabilidade operacional
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-8 text-sgs-navy tracking-tight">Monitoramento e health checks</h2>
          <p className="text-xl text-slate-500 leading-relaxed font-medium mb-12">
            A operação do SGS usa monitoramento, logs e verificações de saúde para detectar falhas e apoiar respostas técnicas com mais rapidez.
          </p>
          <div className="space-y-4">
            {items.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, ease: transitions.expo }}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sgs hover:shadow-sgs-hover transition-all duration-500">
                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>
                <span className="font-black text-sm text-sgs-navy uppercase tracking-tight">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>
      <FadeIn direction="left" delay={0.2}>
        <div className="relative aspect-square lg:aspect-video bg-sgs-navy rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center group">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] group-hover:scale-110 transition-transform duration-[10s]"></div>
          <div className="relative z-10 flex flex-col items-center">
            <ShieldCheck className="w-40 h-40 text-primary animate-pulse mb-6" />
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">System Protected</p>
          </div>
          <div className="absolute bottom-10 left-10 right-10 h-1.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="h-full bg-gradient-to-r from-primary to-sgs-blue shadow-[0_0_15px_rgba(2,132,199,0.5)]" />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
