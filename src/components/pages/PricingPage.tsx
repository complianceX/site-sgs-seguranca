"use client";

import { Check, Shield, Zap, Crown, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { MotionCard } from "@/components/animations/MotionCard";
import { MotionButton } from "@/components/animations/MotionButton";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { transitions } from "@/lib/motion-variants";
import { getSchedulingHref, getSpecialistHref } from "@/lib/contact-links";

const plans = [
  {
    name: "Básico",
    icon: Shield,
    price: "R$ 197",
    description: "Para pequenas equipes que querem sair das planilhas e organizar documentos essenciais de SST.",
    features: [
      "Até 25 Trabalhadores",
      "Módulos APR, PT e DDS",
      "Checklists e Inspeções",
      "Storage para Anexos (1GB)",
      "Suporte via E-mail",
      "1 Unidade (Site)",
    ],
    cta: "Agendar demonstração",
    popular: false,
  },
  {
    name: "Operacional",
    icon: Zap,
    price: "R$ 397",
    description: "Para operações que precisam de controle completo, evidências e governança documental.",
    features: [
      "Até 100 Trabalhadores",
      "Todos os módulos do plano anterior",
      "IA Sophie Assistiva (Rascunhos)",
      "Gestão de Treinamentos e Exames",
      "Controle de EPI Completo",
      "Storage para Anexos (5GB)",
      "Até 3 Unidades (Sites)",
      "Suporte Prioritário via Chat",
    ],
    cta: "Agendar demonstração",
    popular: true,
  },
  {
    name: "Profissional",
    icon: Crown,
    price: "R$ 797",
    description: "Para operações multi-site com alto volume, integrações e requisitos avançados de governança.",
    features: [
      "Até 500 Trabalhadores",
      "Todos os módulos do SGS",
      "IA Sophie Avançada",
      "Integração via API (Google, ERP)",
      "Dashboard Executivo Customizado",
      "Storage para Vídeos (20GB)",
      "Até 10 Unidades (Sites)",
      "Suporte Dedicado",
    ],
    cta: "Agendar demonstração",
    popular: false,
  },
];

const pricingFaqs = [
  {
    question: "Os preços incluem implantação e suporte?",
    answer: "Sim. Todos os planos incluem implantação assistida e suporte técnico. O diferencial está no nível de prioridade conforme o plano contratado."
  },
  {
    question: "Posso começar apenas com APR, DDS e PT?",
    answer: "Sim. A demonstração ajuda a definir os módulos prioritários para a sua operação antes de expandir."
  },
  {
    question: "A implantação inclui orientação da rotina?",
    answer: "Sim. O objetivo é mapear documentos, usuários, permissões e principais fluxos de SST antes do uso em campo."
  },
  {
    question: "O SGS atende empresas com várias unidades?",
    answer: "Sim. Os planos podem considerar empresas, sites, frentes de serviço e permissões conforme o cenário operacional."
  }
];

export function PricingPage() {
  const schedulingHref = getSchedulingHref();
  const specialistHref = getSpecialistHref();

  return (
    <div className="py-24 lg:py-40 bg-white">
      <div className="container">
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

        <div className="grid lg:grid-cols-3 gap-10 items-stretch">
          {plans.map((plan, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.1}>
              <MotionCard
                className={cn(
                  "relative flex flex-col h-full",
                  plan.popular ? "border-primary/20 scale-105 z-10" : ""
                )}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, ease: transitions.expo }}
                    className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-primary/20 z-20"
                  >
                    Mais Escolhido
                  </motion.div>
                )}

                <div className="mb-10">
                  <div className={cn(
                    "w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-sm",
                    plan.popular ? "bg-primary text-white" : "bg-primary/5 text-primary"
                  )}>
                    <plan.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-black mb-4 text-sgs-navy tracking-tight">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-black text-sgs-navy tracking-tight">{plan.price}</span>
                    {plan.price.startsWith("R$") && <span className="text-slate-400 font-bold text-sm">/mês</span>}
                  </div>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="flex-grow space-y-5 mb-12">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">O que está incluso:</p>
                  {plan.features.map((feature, fIdx) => (
                    <motion.div
                      key={fIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + fIdx * 0.05 }}
                      className="flex items-start gap-3.5"
                    >
                      <div className="w-5 h-5 rounded-full bg-sgs-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-sgs-green" />
                      </div>
                      <span className="text-sm font-bold text-slate-500">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <Link href={plan.name === "Profissional" ? specialistHref : schedulingHref} className="block w-full">
                  <MotionButton
                    variant={plan.popular ? "primary" : "outline"}
                    className="w-full text-lg group py-5"
                  >
                    {plan.cta} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </MotionButton>
                </Link>
              </MotionCard>
            </FadeIn>
          ))}
        </div>

        {/* Enterprise Highlight */}
        <FadeIn direction="up">
          <MotionCard className="mt-32 p-12 lg:p-20 border-none bg-slate-50 shadow-none rounded-[3rem] flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group">
            <div className="relative z-10 max-w-3xl text-center lg:text-left">
              <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tight">Mais de 500 colaboradores?</h2>
              <p className="text-slate-500 text-xl font-medium leading-relaxed">
                Para grandes operações com múltiplos sites, demandas específicas de integração ou requisitos avançados de segurança, temos planos Enterprise com condições especiais.
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <Link href={specialistHref}>
                <MotionButton variant="secondary" size="lg" className="group">
                  Falar com especialista <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </MotionButton>
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full -mr-64 -mt-64 group-hover:bg-primary/10 transition-all duration-1000"></div>
          </MotionCard>
        </FadeIn>

        <FadeIn direction="up">
          <div className="mt-24 overflow-x-auto rounded-[2rem] border border-slate-100">
            <table className="w-full min-w-[720px] text-left text-sm">
              <caption className="sr-only">Comparativo de planos SGS</caption>
              <thead className="bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <tr>
                  <th className="px-6 py-4">Recurso</th>
                  <th className="px-6 py-4">Básico</th>
                  <th className="px-6 py-4">Operacional</th>
                  <th className="px-6 py-4">Profissional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Trabalhadores", "Até 25", "Até 100", "Até 500"],
                  ["Unidades (sites)", "1", "Até 3", "Até 10"],
                  ["Módulos APR, DDS, PT", "Sim", "Sim", "Sim"],
                  ["IA Sophie", "—", "Assistiva", "Avançada"],
                  ["Integrações API", "—", "—", "Sim"],
                  ["Storage", "1GB", "5GB", "20GB"],
                  ["Suporte", "E-mail", "Prioritário", "Dedicado"],
                ].map((row) => (
                  <tr key={row[0]}>
                    <th className="px-6 py-4 font-black text-sgs-navy">{row[0]}</th>
                    <td className="px-6 py-4 font-medium text-slate-500">{row[1]}</td>
                    <td className="px-6 py-4 font-medium text-slate-500">{row[2]}</td>
                    <td className="px-6 py-4 font-medium text-slate-500">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        <FadeIn direction="up">
          <div className="mt-24 grid gap-6 lg:grid-cols-4">
            {pricingFaqs.map((item, index) => (
              <MotionCard key={item.question} delay={index * 0.05} className="p-8">
                <h3 className="mb-4 text-lg font-black tracking-tight text-sgs-navy">
                  {item.question}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-slate-500">
                  {item.answer}
                </p>
              </MotionCard>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
