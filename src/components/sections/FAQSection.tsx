"use client";

import { HelpCircle } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { MotionText } from "@/components/ui/MotionText";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/data/home";

export function FAQSection() {
  return (
    <section className="container py-24 lg:py-32">
      <FadeIn className="mx-auto mb-20 max-w-3xl text-center">
        <div className="mb-10 inline-flex items-center gap-2.5 rounded-full bg-primary/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
          <HelpCircle className="h-4 w-4" />
          Perguntas frequentes
        </div>
        <MotionText
          as="h2"
          className="mb-8 text-4xl font-black tracking-tight text-sgs-navy text-balance lg:text-6xl"
        >
          Dúvidas comuns antes da demonstração
        </MotionText>
        <p className="text-lg font-medium leading-relaxed text-slate-500">
          Respostas objetivas sobre segurança, IA, validação documental e uso do SGS em operações com múltiplas unidades.
        </p>
      </FadeIn>

      <Accordion items={faqs} />
    </section>
  );
}
