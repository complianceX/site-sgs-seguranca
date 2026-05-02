"use client";

import { Check, Shield, Zap, Building2, Crown, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { MotionText } from "@/components/ui/MotionText";
import { MotionCard } from "@/components/ui/MotionCard";
import { MotionButton } from "@/components/ui/MotionButton";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { transitions } from "@/lib/motion-variants";
import { getSchedulingHref, getSpecialistHref } from "@/lib/contact-links";

const plans = [
  {
    name: "Operacional",
    icon: Shield,
    price: "Consulte",
    description: "Para empresas que querem sair das planilhas e controlar documentos essenciais de SST com rastreabilidade.",
    features: [
      "Até 50 Trabalhadores",
      "Módulos APR, PT e DDS",
      "Checklists e Inspeções",
      "Storage para Anexos (2GB)",
      "Suporte via E-mail",
      "1 Unidade (Site)",
    ],
    cta: "Agendar demonstração",
    popular: false,
  },
  {
    name: "Profissional",
    icon: Zap,
    price: "Consulte",
    description: "Para operações com mais unidades, evidências, prazos e necessidade de governança documental contínua.",
    features: [
      "Até 250 Trabalhadores",
      "Todos os módulos do plano anterior",
      "IA Sophie Assistiva (Rascunhos)",
      "Gestão de Treinamentos e Exames",
      "Controle de EPI Completo",
      "Storage para Vídeos (10GB)",
      "Até 5 Unidades (Sites)",
      "Suporte Prioritário",
    ],
    cta: "Agendar demonstração",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "Sob Consulta",
    description: "Para empresas com múltiplos sites, alto volume operacional, integrações e requisitos avançados de governança.",
    features: [
      "Grandes volumes de trabalhadores",
      "Módulos Customizados",
      "IA Sophie avançada mediante escopo",
      "Integração via API (Google, ERP)",
      "Dashboard Executivo Customizado",
      "SSO mediante projeto técnico",
      "Unidades Ilimitadas",
      "Acompanhamento comercial e técnico dedicado",
    ],
    cta: "Falar com especialista",
    popular: false,
  },
];

const pricingFaqs = [
  {
    question: "Por que os planos são sob consulta?",
    answer: "Porque o escopo varia conforme número de empresas, usuários, módulos, volume de evidências e necessidade de implantação."
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
            <MotionText as="h1" className="text-5xl md:text-7xl font-black text-sgs-navy mb-10 tracking-tighter leading-[1.05] text-balance">
              Planos ajustados à maturidade da sua operação de SST
            </MotionText>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium text-pretty">
              O SGS é dimensionado conforme número de empresas, usuários, módulos e volume operacional.
              Agende uma demonstração para definir o melhor escopo antes da contratação.
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

                <Link href={plan.name === "Enterprise" ? specialistHref : schedulingHref} className="block w-full">
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
              <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tight">Precisa de algo sob medida?</h2>
              <p className="text-slate-500 text-xl font-medium leading-relaxed">
                Para empresas com demandas específicas de integração, volumes massivos de dados ou requisitos de segurança avançados, nossa equipe pode desenhar uma solução exclusiva.
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
