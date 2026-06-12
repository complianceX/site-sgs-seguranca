"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { MotionCard } from "@/components/animations/MotionCard";

const leftItems = [
  "Consentimento versionado e específico por finalidade.",
  "Processos para apoiar solicitações de titulares quando aplicável.",
  "Trilha de auditoria completa para acesso a dados.",
];

const rightItems = [
  "Dados pessoais tratados com controles proporcionais ao risco.",
  "Revogação de consentimento a qualquer momento.",
  "Políticas de retenção configuráveis por tipo de dado.",
];

export function SecurityLGPD() {
  return (
    <FadeIn direction="up">
      <MotionCard className="p-10 lg:p-24 mb-32 relative overflow-hidden group bg-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sgs-green/5 blur-[100px] rounded-full -mr-64 -mt-64 group-hover:bg-sgs-green/10 transition-all duration-1000"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-sgs-green/5 text-sgs-green rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
            Privacidade desde a concepção
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-8 text-sgs-navy tracking-tight">Compromisso com a LGPD</h2>
          <p className="text-slate-500 text-xl font-medium mb-16 leading-relaxed max-w-3xl mx-auto">
            Implementamos controles para apoiar a conformidade com a Lei Geral de Proteção de Dados, mantendo decisões e responsabilidades alinhadas à sua governança interna.
          </p>
          <div className="grid sm:grid-cols-2 gap-10 text-left">
            <div className="space-y-6">
              {leftItems.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-center p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100 hover:bg-white hover:shadow-sgs transition-all duration-500 group/item">
                  <div className="w-8 h-8 bg-sgs-green/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-sgs-green" />
                  </div>
                  <p className="text-sm font-bold text-slate-600">{item}</p>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {rightItems.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-center p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100 hover:bg-white hover:shadow-sgs transition-all duration-500 group/item">
                  <div className="w-8 h-8 bg-sgs-green/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-sgs-green" />
                  </div>
                  <p className="text-sm font-bold text-slate-600">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </MotionCard>
    </FadeIn>
  );
}
