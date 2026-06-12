"use client";

import { Crown } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { MotionText } from "@/components/animations/MotionText";

export function PricingHero() {
  return (
    <div className="text-center max-w-4xl mx-auto mb-24">
      <FadeIn direction="none" stagger>
        <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
          <Crown className="w-4 h-4" />
          Preços e Planos
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-sgs-navy mb-10 tracking-tighter leading-[1.05] text-balance">
          Planos a partir de <span className="text-primary">R$ 197/mês</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium text-pretty">
          Preços fixos e transparentes. Escolha o plano ideal para o tamanho da sua operação
          ou agende uma demonstração para um dimensionamento personalizado.
        </p>
      </FadeIn>
    </div>
  );
}
