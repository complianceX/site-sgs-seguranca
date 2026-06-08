import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, MessageCircle, Mail, ShieldCheck } from "lucide-react";
import { DemoForm } from "@/components/DemoForm";
import { TextReveal } from "@/components/animations/TextReveal";
import { MeshGradient } from "@/components/animations/MeshGradient";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
  head: () => ({
    meta: [
      { title: "FAQ — Perguntas Frequentes SGS | Sistema de Gestão de SST" },
      {
        name: "description",
        content:
          "Tire suas dúvidas sobre o SGS: implantação, preços, segurança, LGPD, integrações, suporte e mais.",
      },
      { property: "og:title", content: "FAQ — Perguntas Frequentes SGS | Sistema de Gestão de SST" },
      {
        property: "og:description",
        content:
          "Tire suas dúvidas sobre o SGS: implantação, preços, segurança, LGPD, integrações, suporte e mais.",
      },
    ],
  }),
});

const faqItems = [
  {
    q: "O que é o SGS Segurança?",
    a: "O SGS é uma plataforma digital para gestão de Saúde e Segurança do Trabalho. Centraliza APR, DDS, PT, ASO, treinamentos, ordens de serviço, documentos e indicadores em um só lugar, com rastreabilidade completa e segurança jurídica.",
  },
  {
    q: "O SGS atende a minha empresa?",
    a: "O SGS é indicado para indústrias, construtoras, empresas de serviços, condomínios corporativos e qualquer organização que precise gerenciar documentos de SST, controlar colaboradores em campo e comprovar conformidade em auditorias.",
  },
  {
    q: "Preciso instalar algum software?",
    a: "Não. O SGS é 100% web, acessado pelo navegador. Não requer instalação, servidor próprio ou manutenção de infraestrutura.",
  },
  {
    q: "Quanto tempo leva para implantar?",
    a: "A implantação básica pode ser feita em até 5 dias úteis. Planos profissionais incluem onboarding personalizado e treinamento da equipe.",
  },
  {
    q: "O SGS é compatível com a LGPD?",
    a: "Sim. O SGS adota segregação lógica por tenant, controle de acesso por perfil, trilhas de auditoria e canal dedicado de privacidade. Consulte nossa Política de Privacidade para detalhes.",
  },
  {
    q: "Os dados ficam seguros?",
    a: "Sim. Utilizamos infraestrutura em nuvem com criptografia em trânsito e em repouso, backups automáticos, controle de acesso granular e monitoramento contínuo.",
  },
  {
    q: "Como funciona o período de teste?",
    a: "Oferecemos 7 dias de teste grátis sem compromisso. Você pode configurar sua empresa, cadastrar colaboradores e testar todos os módulos disponíveis no seu plano.",
  },
  {
    q: "Quais módulos estão disponíveis?",
    a: "APR Digital, DDS Digital, Permissão de Trabalho, ASO Digital, Controle de Treinamentos, Ordem de Serviço, Mobilização de Terceiros, Gestão de Documentos, Assinaturas Digitais, Dashboard de Pendências, Relatórios Gerenciais e mais.",
  },
  {
    q: "O SGS emite documentos com validade jurídica?",
    a: "Sim. Os documentos gerados no SGS contêm assinatura digital com registro de data, IP e identificação do signatário, garantindo validade jurídica para auditorias e fiscalizações.",
  },
  {
    q: "Posso integrar o SGS com outros sistemas?",
    a: "Planos Enterprise oferecem API REST para integração com sistemas legados, RH, portais de fornecedores e sistemas de gestão empresarial.",
  },
  {
    q: "Como funciona o suporte?",
    a: "Oferecemos suporte por e-mail para planos Básicos, suporte prioritário para planos Profissionais e gerente de sucesso dedicado para planos Enterprise.",
  },
  {
    q: "Quanto custa o SGS?",
    a: "Os planos variam conforme o número de colaboradores e módulos contratados. Consulte nossa página de Preços ou solicite um orçamento personalizado.",
  },
];

function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
      <main className="relative overflow-hidden">
        <section className="relative border-b border-sgs-border/50 bg-white py-20 md:py-28">
          <MeshGradient className="opacity-15" />
          <div className="mx-auto max-w-3xl px-6 sm:px-8 text-center sgs-reveal relative">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sgs-blue/10 bg-sgs-blue/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-sgs-blue animate-sgs-soft-in">
              <ShieldCheck className="h-3.5 w-3.5" />
              Perguntas Frequentes
            </div>
            <TextReveal
              text="Dúvidas sobre o SGS?"
              as="h1"
              className="text-4xl font-black tracking-tight text-sgs-night md:text-5xl"
              stagger={40}
            />
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-sgs-slate">
              As respostas que você precisa para tomar a melhor decisão.
            </p>
          </div>
        </section>

        <section className="relative bg-sgs-bg py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6 sm:px-8 relative">
            <div className="space-y-3 sgs-reveal sgs-stagger">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-sgs-border bg-white transition-all duration-300 hover:shadow-md hover:border-sgs-blue/10"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between px-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4 text-sm font-extrabold text-sgs-night">
                        {item.q}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-sgs-slate transition-all duration-300 ${
                          isOpen ? "rotate-180 text-sgs-blue" : ""
                        }`}
                      />
                    </button>
                    <div className={`sgs-faq-content ${isOpen ? "sgs-faq-open" : ""}`}>
                      <div>
                        <div className="border-t border-sgs-border/50 px-6 py-5">
                          <p className="text-sm leading-relaxed text-sgs-slate">{item.a}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mx-auto mt-16 max-w-xl rounded-2xl border border-sgs-border bg-white p-8 text-center sgs-reveal transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-sgs-blue/5">
              <h2 className="text-lg font-black text-sgs-night">
                Ainda tem dúvidas?
              </h2>
              <p className="mt-3 text-sm text-sgs-slate">
                Fale diretamente com nossa equipe.
              </p>
              <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <DemoForm
                  triggerLabel="Falar com o SGS"
                  triggerClassName="h-12 rounded-xl bg-sgs-blue px-6 text-sm font-bold text-white shadow-lg shadow-sgs-blue/20 transition-all hover:bg-sgs-blue-dark hover:scale-[1.02] active:scale-[0.98]"
                />
                <a
                  href={`https://wa.me/5531986937268?text=${encodeURIComponent("Olá, equipe SGS. Tenho uma dúvida.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-xl bg-sgs-whatsapp px-6 text-sm font-bold text-white shadow-lg shadow-sgs-whatsapp/20 transition-all hover:bg-sgs-whatsapp-dark hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
              <a
                href="mailto:contato@sgsseguranca.com.br"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sgs-blue transition-all hover:text-sgs-blue-dark hover:gap-3"
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
