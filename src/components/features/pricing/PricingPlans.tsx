"use client";

import Link from "next/link";
import { Check, Shield, Zap, Crown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { transitions } from "@/lib/motion-variants";
import { FadeIn } from "@/components/animations/FadeIn";
import { MotionCard } from "@/components/animations/MotionCard";
import { MotionButton } from "@/components/animations/MotionButton";
import { getSchedulingHref, getSpecialistHref } from "@/lib/contact-links";

const plans = [
  {
    name: "Básico", icon: Shield, price: "R$ 197",
    description: "Para pequenas equipes que querem sair das planilhas e organizar documentos essenciais de SST.",
    features: ["Até 25 Trabalhadores", "Módulos APR, PT e DDS", "Checklists e Inspeções", "Storage para Anexos (1GB)", "Suporte via E-mail", "1 Unidade (Site)"],
    cta: "Agendar demonstração", popular: false,
  },
  {
    name: "Operacional", icon: Zap, price: "R$ 397",
    description: "Para operações que precisam de controle completo, evidências e governança documental.",
    features: ["Até 100 Trabalhadores", "Todos os módulos do plano anterior", "IA Sophie Assistiva (Rascunhos)", "Gestão de Treinamentos e Exames", "Controle de EPI Completo", "Storage para Anexos (5GB)", "Até 3 Unidades (Sites)", "Suporte Prioritário via Chat"],
    cta: "Agendar demonstração", popular: true,
  },
  {
    name: "Profissional", icon: Crown, price: "R$ 797",
    description: "Para operações multi-site com alto volume, integrações e requisitos avançados de governança.",
    features: ["Até 500 Trabalhadores", "Todos os módulos do SGS", "IA Sophie Avançada", "Integração via API (Google, ERP)", "Dashboard Executivo Customizado", "Storage para Vídeos (20GB)", "Até 10 Unidades (Sites)", "Suporte Dedicado"],
    cta: "Agendar demonstração", popular: false,
  },
];

export function PricingPlans() {
  const schedulingHref = getSchedulingHref();
  const specialistHref = getSpecialistHref();

  return (
    <div className="grid lg:grid-cols-3 gap-10 items-stretch">
      {plans.map((plan, i) => (
        <FadeIn key={i} direction="up" delay={i * 0.1}>
          <MotionCard className={cn("relative flex flex-col h-full", plan.popular ? "border-primary/20 scale-105 z-10" : "")}>
            {plan.popular && (
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, ease: transitions.expo }}
                className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-primary/20 z-20">
                Mais Escolhido
              </motion.div>
            )}
            <div className="mb-10">
              <div className={cn("w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-sm",
                plan.popular ? "bg-primary text-white" : "bg-primary/5 text-primary")}>
                <plan.icon className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black mb-4 text-sgs-navy tracking-tight">{plan.name}</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-black text-sgs-navy tracking-tight">{plan.price}</span>
                {plan.price.startsWith("R$") && <span className="text-slate-400 font-bold text-sm">/mês</span>}
              </div>
              <p className="text-slate-500 font-medium leading-relaxed">{plan.description}</p>
            </div>
            <div className="flex-grow space-y-5 mb-12">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">O que está incluso:</p>
              {plan.features.map((feature, fIdx) => (
                <motion.div key={fIdx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + fIdx * 0.05 }} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-sgs-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-sgs-green" />
                  </div>
                  <span className="text-sm font-bold text-slate-500">{feature}</span>
                </motion.div>
              ))}
            </div>
            <Link href={plan.name === "Profissional" ? specialistHref : schedulingHref} className="block w-full">
              <MotionButton variant={plan.popular ? "primary" : "outline"} className="w-full text-lg group py-5">
                {plan.cta} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </MotionButton>
            </Link>
          </MotionCard>
        </FadeIn>
      ))}
    </div>
  );
}
