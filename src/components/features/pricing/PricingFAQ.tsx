"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { MotionCard } from "@/components/animations/MotionCard";

const faqs = [
  { question: "Os preços incluem implantação e suporte?", answer: "Sim. Todos os planos incluem implantação assistida e suporte técnico. O diferencial está no nível de prioridade conforme o plano contratado." },
  { question: "Posso começar apenas com APR, DDS e PT?", answer: "Sim. A demonstração ajuda a definir os módulos prioritários para a sua operação antes de expandir." },
  { question: "A implantação inclui orientação da rotina?", answer: "Sim. O objetivo é mapear documentos, usuários, permissões e principais fluxos de SST antes do uso em campo." },
  { question: "O SGS atende empresas com várias unidades?", answer: "Sim. Os planos podem considerar empresas, sites, frentes de serviço e permissões conforme o cenário operacional." },
];

export function PricingFAQ() {
  return (
    <FadeIn direction="up">
      <div className="mt-24 grid gap-6 lg:grid-cols-4">
        {faqs.map((item, index) => (
          <MotionCard key={item.question} delay={index * 0.05} className="p-8">
            <h3 className="mb-4 text-lg font-black tracking-tight text-sgs-navy">{item.question}</h3>
            <p className="text-sm font-medium leading-relaxed text-slate-500">{item.answer}</p>
          </MotionCard>
        ))}
      </div>
    </FadeIn>
  );
}
