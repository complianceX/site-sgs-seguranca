"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { ChatWidget, SophieCapabilities, SophieEthics } from "@/components/features/sophie";

export function SophiePage() {
  return (
    <div className="py-24 lg:py-40 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <FadeIn direction="right">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
              <Sparkles className="w-4 h-4" />
              IA Assistiva para SST
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-sgs-navy mb-10 tracking-tighter leading-[1.05] text-balance">
              Conheça a <span className="text-primary">Sophie IA</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium mb-12 text-pretty">
              Sua assistente inteligente desenhada especificamente para a segurança do trabalho.
              A Sophie apoia a operação, reduz o trabalho manual e gera insights valiosos em tempo real.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="px-10 py-5 bg-sgs-navy text-white rounded-2xl font-black text-lg hover:bg-primary transition-all shadow-xl shadow-sgs-navy/10 flex items-center gap-3 group">
                Ver Demonstração <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Demonstração ilustrativa. A Sophie real opera dentro da plataforma SGS com contexto autorizado.
            </p>
          </FadeIn>

          <ChatWidget />
        </div>

        <SophieCapabilities />
        <SophieEthics />
      </div>
    </div>
  );
}
