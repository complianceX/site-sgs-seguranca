"use client";

import { ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { MotionText } from "@/components/animations/MotionText";

export function SecurityHero() {
  return (
    <div className="max-w-4xl mb-24">
      <FadeIn direction="none" stagger>
        <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
          <ShieldCheck className="w-4 h-4" />
          Segurança e LGPD
        </div>
        <MotionText as="h1" className="text-5xl md:text-7xl font-black text-sgs-navy mb-10 tracking-tighter leading-[1.05] text-balance">
          Segurança, privacidade e governança para SST
        </MotionText>
        <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium text-pretty max-w-3xl">
          O SGS foi desenhado considerando dados sensíveis, isolamento entre empresas e controles que ajudam sua operação a trabalhar com mais rastreabilidade.
        </p>
      </FadeIn>
    </div>
  );
}
