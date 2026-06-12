"use client";

import { Check, X, Minus, Shield, Zap, Crown, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { MotionText } from "@/components/animations/MotionText";
import { MotionCard } from "@/components/animations/MotionCard";
import { MotionButton } from "@/components/animations/MotionButton";
import Link from "next/link";
import { cn } from "@/lib/utils";

const competitors = ["Planilhas", "Papel", "Sistemas Genéricos", "SGS"];
const comparisons = [
  { feature: "APR, DDS e PT Digitais", values: ["❌", "❌", "Parcial", "✅"] },
  { feature: "Assinatura Digital com Validade Jurídica", values: ["❌", "❌", "❌", "✅"] },
  { feature: "Evidências com Fotos e Vídeos", values: ["❌", "❌", "Parcial", "✅"] },
  { feature: "Checklists e Inspeções", values: ["Parcial", "❌", "✅", "✅"] },
  { feature: "Geolocalização", values: ["❌", "❌", "❌", "✅"] },
  { feature: "IA para Rascunhos Automáticos", values: ["❌", "❌", "❌", "✅"] },
  { feature: "Dashboard e KPIs", values: ["Parcial", "❌", "✅", "✅"] },
  { feature: "API e Integrações", values: ["❌", "❌", "Parcial", "✅"] },
  { feature: "Suporte Especializado em SST", values: ["❌", "❌", "❌", "✅"] },
];

const plans = [
  { icon: Shield, name: "Básico", price: "R$ 197/mês", desc: "Até 25 trabalhadores. Essencial para pequenas equipes." },
  { icon: Zap, name: "Operacional", price: "R$ 397/mês", desc: "Até 100 trabalhadores. Controle completo com IA." },
  { icon: Crown, name: "Profissional", price: "R$ 797/mês", desc: "Até 500 trabalhadores. Multi-site e API." },
];

export function ComparativoContent() {
  return (
    <div className="bg-white py-24 lg:py-40">
      <div className="container">
        <FadeIn direction="none" stagger>
          <div className="max-w-4xl mx-auto text-center mb-24">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
              <Shield className="w-4 h-4" />
              Comparativo
            </div>
            <MotionText as="h1" className="text-5xl md:text-7xl font-black text-sgs-navy mb-10 tracking-tighter leading-[1.05] text-balance">
              Por que o SGS é a Melhor Escolha?
            </MotionText>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium text-pretty max-w-3xl mx-auto mb-12">
              Compare com outras alternativas e veja por que o SGS é a plataforma mais completa de SST do mercado.
            </p>
            <Link href="/contato"><MotionButton size="lg" className="gap-3">Solicitar Demonstração <ArrowRight className="w-5 h-5" /></MotionButton></Link>
          </div>
        </FadeIn>

        <section className="mb-32">
          <h2 className="text-4xl font-black text-sgs-navy mb-16 text-center tracking-tight">Comparativo de Funcionalidades</h2>
          <div className="overflow-x-auto rounded-[2rem] border border-slate-100">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <tr><th className="px-6 py-4">Funcionalidade</th>{competitors.map(c => <th key={c} className="px-6 py-4 text-center">{c}</th>)}</tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisons.map(row => (
                  <tr key={row.feature}>
                    <td className="px-6 py-5 font-black text-sgs-navy">{row.feature}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className={cn("px-6 py-5 text-center text-lg font-bold", i === 3 ? "text-sgs-green" : "text-slate-400")}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-black text-sgs-navy mb-6 text-center tracking-tight">Planos e Preços</h2>
          <p className="text-lg text-slate-500 font-medium text-center mb-16">Escolha o plano ideal para o tamanho da sua operação.</p>
          <div className="grid md:grid-cols-3 gap-10">
            {plans.map((plan, i) => (
              <MotionCard key={i} delay={i * 0.05}>
                <plan.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-black mb-4 text-sgs-navy tracking-tight">{plan.name}</h3>
                <p className="text-4xl font-black mb-8">{plan.price}</p>
                <p className="text-slate-500 font-medium mb-10">{plan.desc}</p>
                <Link href="/contato"><MotionButton className="w-full group">Contratar <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></MotionButton></Link>
              </MotionCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
