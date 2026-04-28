"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { MotionCard } from "@/components/ui/MotionCard";
import { MotionText } from "@/components/ui/MotionText";
import { conversionBenefits } from "@/content/home";

export function ConversionBenefitsSection() {
  return (
    <section className="container">
      <FadeIn className="mx-auto mb-20 max-w-4xl text-center">
        <div className="mb-10 inline-flex items-center rounded-full bg-sgs-orange/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-sgs-orange">
          Benefícios comerciais
        </div>
        <MotionText
          as="h2"
          className="mb-8 text-4xl font-black tracking-tight text-sgs-navy text-balance lg:text-6xl"
        >
          Menos retrabalho, mais controle e mais segurança para decidir
        </MotionText>
        <p className="mx-auto max-w-3xl text-lg font-medium leading-relaxed text-slate-500">
          O SGS organiza o que costuma ficar espalhado entre planilhas, grupos de mensagem, pastas e documentos sem histórico.
        </p>
      </FadeIn>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {conversionBenefits.map((item, index) => (
          <MotionCard key={item.title} delay={index * 0.06} className="p-8 lg:p-10">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary">
              <item.icon className="h-7 w-7" />
            </div>
            <h3 className="mb-4 text-xl font-black tracking-tight text-sgs-navy">
              {item.title}
            </h3>
            <p className="text-sm font-medium leading-relaxed text-slate-500">
              {item.text}
            </p>
          </MotionCard>
        ))}
      </div>
    </section>
  );
}
