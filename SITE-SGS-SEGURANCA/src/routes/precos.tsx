import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoForm } from "@/components/DemoForm";
import logoSgs from "@/assets/logo-sgs.webp";

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
    <div className="min-h-screen bg-[#fbfcfe] text-[#142033] font-sans">
      <header className="sticky top-0 z-50 border-b border-[#dbe4ee]/50 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 md:h-20 md:px-8">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoSgs} alt="SGS Segurança" className="h-11 w-auto md:h-14" />
            <span className="hidden border-l border-[#dbe4ee] pl-3 text-sm font-semibold text-[#5b6878] sm:inline">
              Planos
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="text-sm font-semibold text-[#5b6878] transition-colors hover:text-[#1d5b8d]"
            >
              Voltar
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="border-b border-[#dbe4ee]/50 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1d5b8d]/10 bg-[#1d5b8d]/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1d5b8d]">
              <ShieldCheck className="h-3.5 w-3.5" />
              Planos e Preços
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-[#0d2033] md:text-5xl">
              O plano certo para a sua operação de SST
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#5b6878]">
              Do básico ao enterprise, o SGS se adapta ao tamanho da sua equipe e à
              complexidade dos seus contratos.
            </p>
          </div>
        </section>

        <section className="bg-[#fbfcfe] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="grid gap-8 md:grid-cols-3 items-stretch">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                    plan.highlight
                      ? "border-[#1d5b8d] bg-white shadow-2xl shadow-[#1d5b8d]/10 scale-[1.02] md:scale-105"
                      : "border-[#dbe4ee] bg-white hover:shadow-xl"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#1d5b8d] px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                      Mais popular
                    </div>
                  )}

                  <h2 className="text-2xl font-bold text-[#0d2033]">{plan.name}</h2>
                  <p className="mt-2 text-sm text-[#5b6878]">{plan.subtitle}</p>

                  <div className="my-8">
                    <span className="text-3xl font-black text-[#0d2033]">{plan.price}</span>
                    {plan.period && (
                      <span className="text-sm text-[#5b6878]">/{plan.period}</span>
                    )}
                  </div>

                  <ul className="flex-1 space-y-4">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#22c55e]" />
                        <span className="text-[#0d2033]">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 space-y-3">
                    <DemoForm
                      triggerLabel="Solicitar orçamento"
                      showArrow
                      triggerClassName={`w-full h-12 rounded-xl text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] ${
                        plan.highlight
                          ? "bg-[#1d5b8d] shadow-[#1d5b8d]/20 hover:bg-[#16486f]"
                          : "bg-[#5b6878] shadow-[#5b6878]/20 hover:bg-[#4a5a6a]"
                      }`}
                    />
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#dbe4ee] bg-white py-3 text-sm font-bold text-[#1d5b8d] transition-colors hover:bg-[#f4f8fc]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Falar no WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-[#dbe4ee] bg-white p-8 text-center">
              <h3 className="text-lg font-bold text-[#0d2033]">
                Precisa de um plano personalizado?
              </h3>
              <p className="mt-3 text-sm text-[#5b6878]">
                Atendemos requisitos específicos de compliance, integração com sistemas
                legados e contratos corporativos de grande porte.
              </p>
              <a
                href={`mailto:contato@sgsseguranca.com.br`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#1d5b8d] transition-colors hover:text-[#16486f]"
              >
                <Mail className="h-4 w-4" />
                contato@sgsseguranca.com.br
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1d5b8d] py-16 text-white/90">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 sm:px-8 md:flex-row">
          <p className="text-sm text-white/60">
            © 2026 SGS Segurança
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacidade" className="text-white/70 transition-colors hover:text-white">
              Privacidade
            </Link>
            <Link to="/termos" className="text-white/70 transition-colors hover:text-white">
              Termos
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
