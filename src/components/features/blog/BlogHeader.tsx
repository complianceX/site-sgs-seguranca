"use client";

import { Sparkles } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export function BlogHeader() {
  return (
    <div className="max-w-4xl mb-24">
      <FadeIn direction="right">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
          <Sparkles className="w-4 h-4" />
          SGS Insights
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-sgs-navy mb-10 tracking-tighter leading-[1.05] text-balance">
          Inteligência e <span className="text-primary">Conhecimento</span> para sua Gestão
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium text-pretty max-w-3xl">
          Artigos técnicos, tendências do mercado de SST e guias práticos escritos pelos nossos especialistas em governança e tecnologia.
        </p>
        <a href="/rss.xml" className="mt-8 inline-flex text-xs font-black uppercase tracking-widest text-primary hover:text-sgs-navy">
          Assinar feed RSS
        </a>
      </FadeIn>
    </div>
  );
}
