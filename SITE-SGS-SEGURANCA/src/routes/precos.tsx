import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle, ShieldCheck, Mail } from "lucide-react";
import { DemoForm } from "@/components/DemoForm";
import { TextReveal } from "@/components/animations/TextReveal";
import { TiltCard } from "@/components/animations/TiltCard";
import { MeshGradient } from "@/components/animations/MeshGradient";

const whatsappNumber = "5531986937268";
const whatsappMessage = "Olá, equipe SGS. Quero saber mais sobre os planos.";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const Route = createFileRoute("/precos")({
  component: PricingPage,
  head: () => ({
    meta: [
      {
        title: "Planos SGS — Sistema de Gestão de Segurança do Trabalho | Preços",
      },
      {
        name: "description",
        content:
          "Conheça os planos do SGS para gestão digital de SST. Do básico ao enterprise, com APR, DDS, PT, ASO, treinamentos e indicadores.",
      },
    ],
  }),
});

const plans = [
  {
    name: "Básico",
    subtitle: "Para equipes que estão começando a digitalizar a SST",
    price: "Sob consulta",
    period: "",
    highlight: false,
    features: [
      "APR Digital",
      "DDS Digital",
      "PT Digital",
      "Gestão de colaboradores",
      "Até 50 colaboradores",
      "Relatórios básicos",
      "Suporte por e-mail",
    ],
  },
  {
    name: "Profissional",
    subtitle: "Para empresas com operação estruturada de SST",
    price: "Sob consulta",
    period: "",
    highlight: true,
    features: [
      "Tudo do Básico",
      "ASO Digital",
      "Controle de Treinamentos",
      "Ordem de Serviço",
      "Mobilização de Terceiros",
      "Gestão de obras/sites",
      "Dashboard de pendências",
      "Relatórios gerenciais",
      "Suporte prioritário",
      "Até 500 colaboradores",
    ],
  },
  {
    name: "Enterprise",
    subtitle: "Para grandes operações e múltiplos contratos",
    price: "Sob consulta",
    period: "",
    highlight: false,
    features: [
      "Tudo do Profissional",
      "Colaboradores ilimitados",
      "Assinaturas Digitais",
      "API e integrações",
      "Multi-tenancy avançado",
      "Auditoria completa",
      "SLA de disponibilidade",
      "Gerente de sucesso dedicado",
      "Onboarding personalizado",
      "Treinamento da equipe",
    ],
  },
];

function PricingPage() {
  return (
      <main className="relative overflow-hidden">
        <section className="relative border-b border-sgs-border/50 bg-white py-20 md:py-28">
          <MeshGradient className="opacity-15" />
          <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center sgs-reveal relative">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sgs-blue/10 bg-sgs-blue/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-sgs-blue animate-sgs-soft-in">
              <ShieldCheck className="h-3.5 w-3.5" />
              Planos e Preços
            </div>
            <TextReveal
              text="O plano certo para a sua operação de SST"
              as="h1"
              className="text-4xl font-black tracking-tight text-sgs-night md:text-5xl"
              stagger={40}
            />
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sgs-slate">
              Do básico ao enterprise, o SGS se adapta ao tamanho da sua equipe e à
              complexidade dos seus contratos.
            </p>
          </div>
        </section>

        <section className="relative bg-sgs-bg py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0 sgs-grid-bg opacity-20" />
          <div className="mx-auto max-w-7xl px-6 sm:px-8 relative">
            <div className="grid gap-8 md:grid-cols-3 items-stretch sgs-reveal sgs-stagger">
              {plans.map((plan) => {
                const TiltWrapper = plan.highlight ? "div" : TiltCard;
                const tiltProps = plan.highlight ? {} : { maxTilt: 3, scale: 1.01 };
                return (
                <TiltWrapper
                  key={plan.name}
                  {...tiltProps}
                  className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-500 ${
                    plan.highlight
                      ? "border-sgs-blue bg-white shadow-2xl shadow-sgs-blue/10 scale-[1.02] md:scale-105 hover:shadow-3xl hover:shadow-sgs-blue/15 sgs-card-gradient-border"
                      : "border-sgs-border bg-white hover:shadow-xl hover:-translate-y-1 sgs-hover-glow"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sgs-blue px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white animate-sgs-soft-in">
                      Mais popular
                    </div>
                  )}

                  <h2 className="text-2xl font-extrabold text-sgs-night">{plan.name}</h2>
                  <p className="mt-2 text-sm text-sgs-slate">{plan.subtitle}</p>

                  <div className="my-8">
                    <span className="text-3xl font-black text-sgs-night">{plan.price}</span>
                    {plan.period && (
                      <span className="text-sm text-sgs-slate">/{plan.period}</span>
                    )}
                  </div>

                  <ul className="flex-1 space-y-4 sgs-stagger-children">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm transition-all duration-300 group-hover:translate-x-0.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sgs-green" />
                        <span className="text-sgs-night">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 space-y-3">
                    <DemoForm
                      triggerLabel="Solicitar orçamento"
                      showArrow
                      triggerClassName={`w-full h-12 rounded-xl text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] ${
                        plan.highlight
                          ? "bg-sgs-blue shadow-sgs-blue/20 hover:bg-sgs-blue-dark"
                          : "bg-sgs-slate shadow-sgs-slate/20 hover:bg-[#4a5a6a]"
                      }`}
                    />
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-sgs-border bg-white py-3 text-sm font-bold text-sgs-blue transition-all hover:bg-sgs-bg-hover hover:shadow-md"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Falar no WhatsApp
                    </a>
                  </div>
                </TiltWrapper>
              );
            })}
            </div>

            <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-sgs-border bg-white p-8 text-center sgs-reveal sgs-card-float transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sgs-blue/5">
              <h3 className="text-lg font-extrabold text-sgs-night">
                Precisa de um plano personalizado?
              </h3>
              <p className="mt-3 text-sm text-sgs-slate">
                Atendemos requisitos específicos de compliance, integração com sistemas
                legados e contratos corporativos de grande porte.
              </p>
              <a
                href={`mailto:contato@sgsseguranca.com.br`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sgs-blue transition-all hover:text-sgs-blue-dark hover:gap-3"
              >
                <Mail className="h-4 w-4" />
                contato@sgsseguranca.com.br
              </a>
            </div>
          </div>
        </section>
      </main>
  );
}
