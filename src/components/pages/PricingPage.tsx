"use client";

import { Check, Shield, Zap, Building2, Crown, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Operacional",
    icon: Shield,
    price: "Consulte",
    description: "Ideal para pequenas empresas que precisam digitalizar suas rotinas básicas de SST.",
    features: [
      "Até 50 Trabalhadores",
      "Módulos APR, PT e DDS",
      "Checklists e Inspeções",
      "Storage para Anexos (2GB)",
      "Suporte via E-mail",
      "1 Unidade (Site)",
    ],
    cta: "Começar Agora",
    popular: false,
  },
  {
    name: "Profissional",
    icon: Zap,
    price: "Consulte",
    description: "Para empresas em crescimento que buscam governança e automação com IA.",
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
    cta: "Testar Grátis",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "Sob Consulta",
    description: "Solução completa para grandes corporações com múltiplos sites e alta complexidade.",
    features: [
      "Trabalhadores Ilimitados",
      "Módulos Customizados",
      "IA Sophie Full (Insights & Imagem)",
      "Integração via API (Google, ERP)",
      "Dashboard Executivo Customizado",
      "Single Sign-On (SAML/SSO)",
      "Unidades Ilimitadas",
      "Account Manager Dedicado",
    ],
    cta: "Falar com Consultor",
    popular: false,
  },
];

export function PricingPage() {
  return (
    <div className="py-24 lg:py-40 bg-white">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
              <Crown className="w-4 h-4" />
              Preços e Planos
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-sgs-navy mb-10 tracking-tighter leading-[1.05] text-balance">
              Planos que crescem com a sua <span className="text-primary">Segurança</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium text-pretty">
              Escolha o plano ideal para a maturidade da sua gestão de SST. 
              Transparência, governança e tecnologia para todos os tamanhos de empresa.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-stretch">
          {plans.map((plan, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.1}>
              <div className={cn(
                "relative p-10 lg:p-12 rounded-[3rem] border transition-all duration-700 flex flex-col h-full group",
                plan.popular 
                  ? "bg-white border-primary/20 shadow-premium scale-105 z-10" 
                  : "bg-white border-slate-100 hover:border-primary/20 shadow-sgs hover:shadow-premium"
              )}>
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-primary/20">
                    Mais Escolhido
                  </div>
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
                    {plan.price !== "Sob Consulta" && <span className="text-slate-400 font-bold text-sm">/mês</span>}
                  </div>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="flex-grow space-y-5 mb-12">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">O que está incluso:</p>
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3.5">
                      <div className="w-5 h-5 rounded-full bg-sgs-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-sgs-green" />
                      </div>
                      <span className="text-sm font-bold text-slate-500">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contato"
                  className={cn(
                    "w-full py-5 rounded-2xl font-black text-center transition-all flex items-center justify-center gap-3 text-lg group",
                    plan.popular 
                      ? "bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20" 
                      : "bg-slate-50 text-sgs-navy hover:bg-primary hover:text-white hover:shadow-xl hover:shadow-primary/20"
                  )}
                >
                  {plan.cta} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Enterprise Highlight - Refined */}
        <FadeIn direction="up">
          <div className="mt-32 p-12 lg:p-20 bg-white text-sgs-navy border border-slate-100 shadow-premium rounded-[3rem] flex flex-col lg:row items-center justify-between gap-12 relative overflow-hidden group">
            <div className="relative z-10 max-w-3xl text-center lg:text-left">
              <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tight">Precisa de algo sob medida?</h2>
              <p className="text-slate-500 text-xl font-medium leading-relaxed">
                Para empresas com demandas específicas de integração, volumes massivos de dados ou requisitos de segurança avançados, nossa equipe pode desenhar uma solução exclusiva.
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <Link 
                href="/contato" 
                className="px-12 py-6 bg-sgs-navy text-white rounded-2xl font-black text-lg hover:bg-primary transition-all inline-block shadow-2xl shadow-sgs-navy/10 group"
              >
                Solicitar Proposta <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full -mr-64 -mt-64 group-hover:bg-primary/10 transition-all duration-1000"></div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
