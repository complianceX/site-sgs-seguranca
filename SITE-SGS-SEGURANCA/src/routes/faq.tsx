import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, MessageCircle, Mail, ShieldCheck } from "lucide-react";
import { DemoForm } from "@/components/DemoForm";
import logoSgs from "@/assets/logo-sgs.webp";

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
    <div className="min-h-screen bg-[#fbfcfe] text-[#142033] font-sans">
      <header className="sticky top-0 z-50 border-b border-[#dbe4ee]/50 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 md:h-20 md:px-8">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoSgs} alt="SGS Segurança" className="h-11 w-auto md:h-14" />
            <span className="hidden border-l border-[#dbe4ee] pl-3 text-sm font-semibold text-[#5b6878] sm:inline">
              FAQ
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-sm font-semibold text-[#5b6878] transition-colors hover:text-[#1d5b8d]">
              Início
            </Link>
            <Link to="/precos" className="text-sm font-semibold text-[#5b6878] transition-colors hover:text-[#1d5b8d]">
              Preços
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="border-b border-[#dbe4ee]/50 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6 sm:px-8 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1d5b8d]/10 bg-[#1d5b8d]/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1d5b8d]">
              <ShieldCheck className="h-3.5 w-3.5" />
              Perguntas Frequentes
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-[#0d2033] md:text-5xl">
              Dúvidas sobre o SGS?
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#5b6878]">
              As respostas que você precisa para tomar a melhor decisão.
            </p>
          </div>
        </section>

        <section className="bg-[#fbfcfe] py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <div className="space-y-3">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-[#dbe4ee] bg-white transition-shadow hover:shadow-md"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between px-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4 text-sm font-bold text-[#0d2033]">
                        {item.q}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#5b6878] transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-[#dbe4ee]/50 px-6 py-5">
                        <p className="text-sm leading-relaxed text-[#5b6878]">{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mx-auto mt-16 max-w-xl rounded-2xl border border-[#dbe4ee] bg-white p-8 text-center">
              <h2 className="text-lg font-bold text-[#0d2033]">
                Ainda tem dúvidas?
              </h2>
              <p className="mt-3 text-sm text-[#5b6878]">
                Fale diretamente com nossa equipe.
              </p>
              <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <DemoForm
                  triggerLabel="Falar com o SGS"
                  triggerClassName="h-12 rounded-xl bg-[#1d5b8d] px-6 text-sm font-bold text-white shadow-lg shadow-[#1d5b8d]/20 transition-all hover:bg-[#16486f]"
                />
                <a
                  href={`https://wa.me/5531986937268?text=${encodeURIComponent("Olá, equipe SGS. Tenho uma dúvida.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#25D366] px-6 text-sm font-bold text-white shadow-lg shadow-[#25D366]/20 transition-all hover:bg-[#20ba5a]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
              <a
                href="mailto:contato@sgsseguranca.com.br"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1d5b8d] transition-colors hover:text-[#16486f]"
              >
                <Mail className="h-4 w-4" />
                contato@sgsseguranca.com.br
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
