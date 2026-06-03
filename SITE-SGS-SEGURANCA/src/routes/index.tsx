import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  FileWarning,
  FolderOpen,
  GraduationCap,
  HardHat,
  ExternalLink,
  KeyRound,
  LayoutDashboard,
  Mail,
  MessageCircle,
  PenTool,
  Scale,
  ShieldCheck,
  Stethoscope,
  UserCheck,
  Users,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from "@/components/ui/drawer"
import { DemoForm } from "@/components/DemoForm";

import dashboardImg from "@/assets/sgs-dashboard.webp";
import logoSgs from "@/assets/logo-sgs.webp";

const contactEmail = "contato@sgsseguranca.com.br";
const privacyEmail = "privacidade@sgsseguranca.com.br";
const whatsappNumber = "5531986937268";
const whatsappMessage = "Olá, equipe SGS. Quero falar sobre uma demonstração do sistema.";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
const instagramUrl = "https://www.instagram.com/sgs_seguranca?igsh=MmpnbmszOWUyd3Vo&utm_source=qr";

export const Route = createFileRoute("/")({
  component: SGSLandingPage,
  head: () => ({
    meta: [
      { title: "SGS — Sistema de Gestão de Segurança do Trabalho | Plataforma SST" },
      {
        name: "description",
        content:
          "Centralize APR, DDS, PT, ASO, treinamentos e indicadores de SST em uma plataforma rastreável. Gestão digital de segurança do trabalho para sua empresa.",
      },
    ],
  }),
});

const allModules = [
  { icon: Building2, title: "Gestão de Empresas", desc: "Cadastro de múltiplas empresas com dados segregados por tenant. Cada contrato com sua própria base." },
  { icon: Users, title: "Gestão de Colaboradores", desc: "Funcionários, terceiros e prestadores com documentação centralizada. Vínculo por obra e função." },
  { icon: HardHat, title: "Gestão de Obras", desc: "Vincule colaboradores e documentos a obras, frentes de serviço e setores." },
  { icon: ClipboardCheck, title: "APR Digital", desc: "Riscos e medidas de controle rastreáveis por atividade. Aprovação e histórico completos." },
  { icon: BookOpen, title: "DDS Digital", desc: "Presença e evidências sem depender de listas em papel. Comprovante por participante." },
  { icon: FileWarning, title: "Permissão de Trabalho", desc: "PT com anexos no mesmo fluxo de controle. Liberação com validação e assinatura digital." },
  { icon: Stethoscope, title: "ASO Digital", desc: "Atestado de Saúde Ocupacional digital, com alerta de vencimento e histórico por colaborador." },
  { icon: GraduationCap, title: "Controle de Treinamentos", desc: "Registro de treinamentos NRs com data, carga horária e reciclagem automática." },
  { icon: FileText, title: "Ordem de Serviço", desc: "OS de segurança do trabalho integrada ao colaborador. Controle de versões." },
  { icon: UserCheck, title: "Mobilização", desc: "Checklist de documentos para liberação de terceiros em obra com validação documental." },
  { icon: FolderOpen, title: "Gestão de Documentos", desc: "Centralize programas, relatórios, laudos e certificações SST." },
  { icon: PenTool, title: "Assinaturas Digitais", desc: "Assinatura eletrônica com registro de data, IP e identificação. Validade jurídica." },
  { icon: LayoutDashboard, title: "Dashboard", desc: "Visão consolidada de pendências por obra, colaborador e tipo. Alertas automáticos." },
  { icon: BarChart3, title: "Relatórios", desc: "Exporte relatórios completos para auditoria. Indicadores de desempenho em SST." },
  { icon: KeyRound, title: "Controle de Acessos", desc: "Permissões por perfil e função. Princípio do menor privilégio." },
  { icon: Scale, title: "Conformidade NRs", desc: "Mapeamento automático de documentos por NR aplicável. Alertas de não conformidade." },
];

const faqItems = [
  {
    q: "O que é o SGS?",
    a: "O SGS é uma plataforma digital para gestão de Saúde e Segurança do Trabalho. Centraliza APR, DDS, PT, ASO, treinamentos, documentos e indicadores em um só lugar, com rastreabilidade completa.",
  },
  {
    q: "Preciso instalar algum software?",
    a: "Não. O SGS é 100% web, acessado pelo navegador. Não requer instalação, servidor próprio ou manutenção de infraestrutura.",
  },
  {
    q: "O SGS é compatível com a LGPD?",
    a: "Sim. Adotamos segregação lógica por cliente, controle de acesso por perfil, trilhas de auditoria e canal dedicado de privacidade.",
  },
  {
    q: "Quanto tempo leva para implantar?",
    a: "A implantação básica pode ser feita em até 5 dias úteis. Planos profissionais incluem onboarding personalizado e treinamento.",
  },
  {
    q: "Quanto custa?",
    a: "Os planos variam conforme o número de colaboradores e módulos. Consulte nossa página de Preços ou solicite um orçamento.",
  },
];

function SGSLandingPage() {
  return (
    <div className="min-h-screen bg-[#fbfcfe] text-[#142033] font-sans selection:bg-[#1d5b8d]/10 selection:text-[#1d5b8d]">
      <Header />
      <main className="pb-24 md:pb-0">
        <Hero />
        <Summary />
        <Workflow />
        <Modules />
        <FAQSection />
        <Governance />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#dbe4ee]/50 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 md:h-20 md:px-8">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoSgs} alt="SGS Segurança" className="h-11 w-auto md:h-14" />
            <span className="hidden border-l border-[#dbe4ee] pl-3 text-sm font-semibold text-[#5b6878] sm:inline">
              Segurança do Trabalho
            </span>
          </Link>

          <div className="hidden items-center gap-7 text-sm font-semibold text-[#5b6878] lg:flex">
            <a href="#plataforma" className="hover:text-[#1d5b8d] transition-colors">
              Plataforma
            </a>
            <a href="#modulos" className="hover:text-[#1d5b8d] transition-colors">
              Módulos
            </a>
            <Link to="/funcionalidades" className="hover:text-[#1d5b8d] transition-colors">
              Funcionalidades
            </Link>
            <Link to="/precos" className="hover:text-[#1d5b8d] transition-colors">
              Preços
            </Link>
            <Link to="/faq" className="hover:text-[#1d5b8d] transition-colors">
              FAQ
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram do SGS Segurança"
              className="hidden h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white transition-colors hover:opacity-90 sm:inline-flex"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden h-10 items-center gap-2 rounded-md bg-[#25D366] px-4 text-sm font-bold text-white transition-colors hover:bg-[#20ba5a] md:inline-flex"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <DemoForm
              triggerLabel="Demo"
              triggerClassName="h-10 rounded-md bg-[#1d5b8d] px-4 text-sm font-bold text-white hover:bg-[#16486f] md:px-5"
            />
            <button
              type="button"
              className="md:hidden h-10 w-10 flex items-center justify-center rounded-md bg-[#1d5b8d]/10 text-[#1d5b8d]"
              aria-label="Abrir menu"
              onClick={() => setMobileOpen(true)}
            >
              &#9776;
            </button>
          </div>
        </nav>
      </header>
      <Drawer open={mobileOpen} onOpenChange={setMobileOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
          </DrawerHeader>
          <nav className="flex flex-col gap-4 p-4">
            <a href="#plataforma" onClick={() => setMobileOpen(false)} className="text-base font-medium text-[#1d5b8d] hover:underline">
              Plataforma
            </a>
            <a href="#modulos" onClick={() => setMobileOpen(false)} className="text-base font-medium text-[#1d5b8d] hover:underline">
              Módulos
            </a>
            <Link to="/funcionalidades" onClick={() => setMobileOpen(false)} className="text-base font-medium text-[#1d5b8d] hover:underline">
              Funcionalidades
            </Link>
            <Link to="/precos" onClick={() => setMobileOpen(false)} className="text-base font-medium text-[#1d5b8d] hover:underline">
              Preços
            </Link>
            <Link to="/faq" onClick={() => setMobileOpen(false)} className="text-base font-medium text-[#1d5b8d] hover:underline">
              FAQ
            </Link>
            <Link to="/contato" onClick={() => setMobileOpen(false)} className="text-base font-medium text-[#1d5b8d] hover:underline">
              Contato
            </Link>
            <Link to="/seguranca" onClick={() => setMobileOpen(false)} className="text-base font-medium text-[#1d5b8d] hover:underline">
              Segurança
            </Link>
          </nav>
          <DrawerClose asChild>
            <button className="mx-auto mb-4 rounded-md bg-[#1d5b8d] px-6 py-2 text-white" onClick={() => setMobileOpen(false)}>
              Fechar
            </button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function Hero() {
  return (
    <section id="plataforma" className="relative overflow-hidden border-b border-[#dbe4ee]/60 bg-white">
      <div className="sgs-grid-bg absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="animate-fade-up-blur">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1d5b8d]/10 bg-[#1d5b8d]/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1d5b8d] animate-sgs-soft-in">
            <ShieldCheck className="h-3.5 w-3.5" />
            Gestão digital de SST
          </div>

          <h1 className="max-w-2xl text-[2.75rem] font-bold leading-[1.02] tracking-tight text-[#0d2033] sm:text-5xl md:text-6xl">
            Gestão de SST que sua auditoria aprova.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-[#526274] md:text-[19px]">
            Controle APR, DDS, PT, ASO, treinamentos e documentos de segurança com evidências digitais, responsáveis definidos e rastreabilidade completa — do campo ao relatório final.
          </p>

          <div className="mt-8 h-1 w-24 overflow-hidden rounded-full bg-[#dbe4ee]/50" aria-hidden="true">
            <div className="h-full w-12 rounded-full bg-[#1d5b8d] animate-sgs-line-scan" />
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-sgs-soft-in [animation-delay:160ms]">
            <DemoForm
              triggerLabel="Agendar demonstração"
              showArrow
              triggerClassName="h-13 rounded-xl bg-[#1d5b8d] px-8 text-sm font-bold text-white shadow-lg shadow-[#1d5b8d]/20 transition-all hover:bg-[#16486f] hover:scale-[1.02] active:scale-[0.98]"
            />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 text-sm font-bold text-white shadow-lg shadow-[#25D366]/20 transition-all hover:bg-[#20ba5a] hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" />
              Chamar no WhatsApp
            </a>
            <a href="#modulos">
              <Button
                variant="outline"
                className="h-12 rounded-md border-[#c9d8e8] bg-white px-6 text-sm font-bold text-[#1d5b8d] hover:bg-[#f4f8fc]"
              >
                Ver módulos
              </Button>
            </a>
          </div>

          <div className="mt-8 grid gap-2 sm:grid-cols-3">
            {[
              ["APR, DDS, PT", "Documentos nascem digitais, sem papel"],
              ["Evidência pronta", "Fotos e assinaturas presas ao documento"],
              ["Auditoria resolvida", "Histórico completo em um clique"],
            ].map(([title, desc], index) => (
              <div
                key={title}
                className="border border-[#dbe4ee] bg-white/78 p-3 animate-sgs-soft-in"
                style={{ animationDelay: `${240 + index * 80}ms` }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#1d5b8d]">{title}</p>
                <p className="mt-1 text-xs font-semibold text-[#5b6878]">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-sgs-dashboard border border-[#dbe4ee] bg-[#f7fafd] p-2 md:p-3">
          <div className="overflow-hidden border border-[#dbe4ee] bg-white">
            <div className="flex flex-col gap-3 border-b border-[#dbe4ee] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#5b6878]">
                  Painel de controle SST
                </span>
                <p className="mt-1 text-xs font-medium text-[#7a8796]">
                  Documentos, pendências e evidências no mesmo painel
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#15803d]">
                <span className="h-2 w-2 rounded-full bg-[#22c55e] animate-sgs-status" />
                Online
              </div>
            </div>
            <div className="grid md:grid-cols-[1fr_140px]">
              <img
                src={dashboardImg}
                alt="Painel de controle do SGS com indicadores de APR, DDS, PT e pendências de SST"
                className="block h-auto w-full"
                loading="lazy"
              />
              <div className="hidden border-l border-[#dbe4ee] bg-[#fbfcfe] p-4 md:block">
                {[
                  ["APR", "Pronta"],
                  ["DDS", "Pendente"],
                  ["PT", "Em revisão"],
                ].map(([label, status], index) => (
                  <div key={label} className="border-b border-[#dbe4ee] py-3 last:border-b-0">
                    <p className="text-xs font-bold text-[#1d5b8d]">{label}</p>
                    <p className="mt-1 text-xs font-semibold text-[#5b6878]">{status}</p>
                    <div className="mt-2 h-1 overflow-hidden bg-[#dbe4ee]">
                      <div
                        className="h-full bg-[#22c55e] animate-sgs-width"
                        style={{ animationDelay: `${index * 180}ms` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Summary() {
  const items = [
    ["Registro digital", "APR, DDS e PT nascem digitais, com responsáveis e status claros. Sem papel, sem retrabalho."],
    ["Evidência comprovada", "Fotos, assinaturas e histórico ficam presos ao documento correto. Pronto para auditoria."],
    ["Gestão com dados", "Pendências e indicadores aparecem antes de virar problema. Decisão baseada em fato."],
  ];

  return (
    <section className="bg-[#fbfcfe] py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:px-8 md:grid-cols-3">
        {items.map(([title, desc], index) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-[#dbe4ee] bg-white p-8 animate-sgs-soft-in transition-all duration-300 hover:-translate-y-2 hover:border-[#1d5b8d]/20 hover:shadow-2xl hover:shadow-[#1d5b8d]/5"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-[#1d5b8d] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
            <p className="text-xl font-bold text-[#0d2033]">{title}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5b6878]">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Workflow() {
  const steps = [
    ["01", "Campo registra", "APR, DDS ou PT nasce na frente de serviço, direto do celular."],
    ["02", "Responsável valida", "Gestor acompanha pendências e aprovações em tempo real."],
    ["03", "Evidência fica presa", "Fotos e assinaturas seguem o documento. Nada se perde."],
    ["04", "Auditoria encontra", "Histórico completo e PDF final disponíveis em segundos."],
  ];

  return (
    <section className="bg-[#fbfcfe] pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="rounded-3xl border border-[#dbe4ee] bg-white p-8 md:p-12 shadow-sm">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-[#1d5b8d]">
                Fluxo operacional
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-[#0d2033] md:text-4xl">
                Do registro em campo à evidência pronta.
              </h2>
            </div>
          </div>

          <div className="relative grid gap-6 md:grid-cols-4">
            {steps.map(([number, title, desc], index) => (
              <div
                key={title}
                className="group relative rounded-2xl border border-[#dbe4ee]/60 bg-[#fbfcfe]/50 p-6 animate-sgs-soft-in transition-all hover:border-[#1d5b8d]/20 hover:bg-white hover:shadow-xl hover:shadow-[#1d5b8d]/5"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm font-black text-[#1d5b8d]/20">{number}</span>
                  <span className="h-2 w-2 rounded-full bg-[#22c55e] shadow-[0_0_10px_rgba(34,197,94,0.4)]" />
                </div>
                <h3 className="text-lg font-bold text-[#0d2033]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5b6878]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Modules() {
  return (
    <section id="modulos" className="border-y border-[#dbe4ee]/50 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-[#1d5b8d]">
            Módulos completos
          </p>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#0d2033] md:text-5xl">
            Tudo que sua SST precisa.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#5b6878]">
            Da APR ao relatório de auditoria, o SGS cobre cada etapa da gestão de segurança do trabalho em uma única plataforma. {allModules.length} módulos integrados.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allModules.map((mod, index) => (
            <div
              key={mod.title}
              className="group relative flex flex-col rounded-2xl border border-[#dbe4ee] bg-white p-6 animate-sgs-soft-in transition-all duration-300 hover:-translate-y-1 hover:border-[#1d5b8d]/20 hover:shadow-xl hover:shadow-[#1d5b8d]/5"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#1d5b8d]/5 text-[#1d5b8d] transition-colors group-hover:bg-[#1d5b8d] group-hover:text-white">
                <mod.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-[#0d2033]">{mod.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5b6878]">{mod.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/funcionalidades"
            className="inline-flex items-center gap-2 rounded-xl border border-[#1d5b8d] px-6 py-3 text-sm font-bold text-[#1d5b8d] transition-all hover:bg-[#f4f8fc]"
          >
            Ver todas as funcionalidades
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#fbfcfe] py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-[#1d5b8d]">
            Perguntas frequentes
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#0d2033] md:text-4xl">
            Dúvidas comuns sobre o SGS
          </h2>
        </div>

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
                  <span className="pr-4 text-sm font-bold text-[#0d2033]">{item.q}</span>
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

        <div className="mt-8 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1d5b8d] transition-colors hover:text-[#16486f]"
          >
            Ver todas as perguntas
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Governance() {
  const controls = [
    "Dados separados por empresa (multi-tenancy)",
    "Acesso por perfil e função",
    "Histórico completo de ações e evidências",
    "Canal dedicado de privacidade LGPD",
    "Criptografia em trânsito e em repouso",
    "Backup automático e redundância",
  ];

  return (
    <section id="governanca" className="bg-[#fbfcfe] py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-[#1d5b8d]">
            Segurança e LGPD
          </p>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#0d2033] md:text-5xl">
            Seus dados protegidos por padrão.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#5b6878]">
            O SGS foi construído com segurança desde a primeira linha de código. Seus dados e os dados dos seus colaboradores estão protegidos com criptografia, controle de acesso granular e conformidade com a LGPD.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/seguranca"
              className="inline-flex items-center gap-2 rounded-xl bg-[#1d5b8d] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#1d5b8d]/20 transition-all hover:bg-[#16486f]"
            >
              Saiba mais
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`mailto:${privacyEmail}`}
              className="inline-flex items-center gap-3 text-sm font-bold text-[#1d5b8d] transition-colors hover:text-[#16486f]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1d5b8d]/5">
                <Mail className="h-4 w-4" />
              </div>
              {privacyEmail}
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {controls.map((control, index) => (
            <div
              key={control}
              className="group flex items-center gap-4 rounded-2xl border border-[#dbe4ee] bg-white p-6 animate-sgs-soft-in transition-all hover:border-[#22c55e]/20 hover:shadow-xl hover:shadow-[#22c55e]/5"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#22c55e]/10 text-[#22c55e]">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <p className="text-sm font-bold text-[#0d2033]">{control}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="border-y border-[#dbe4ee]/50 bg-white py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-6 sm:px-8 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-[#0d2033] md:text-4xl">
            Veja o SGS no seu cenário.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#5b6878]">
            A demonstração parte da sua rotina real: quais documentos você emite, quantos colaboradores precisa gerenciar e onde precisa de mais controle.
          </p>
        </div>
        <DemoForm
          triggerLabel="Falar com o SGS"
          showArrow
          triggerClassName="h-14 rounded-xl bg-[#1d5b8d] px-8 text-base font-bold text-white shadow-xl shadow-[#1d5b8d]/20 transition-all hover:bg-[#16486f] hover:scale-[1.02] active:scale-[0.98]"
        />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1d5b8d] py-16 text-white/90">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <Link
            to="/"
            className="group relative inline-flex items-center"
          >
            <span className="absolute inset-0 -z-0 bg-white/90 blur-xl transition-opacity duration-300 group-hover:opacity-100 opacity-60" />
            <span className="absolute inset-1 -z-0 bg-white/55 blur-md" />
            <img
              src={logoSgs}
              alt="SGS Segurança"
              className="relative h-13 w-auto transition-transform duration-300 group-hover:scale-[1.03] md:h-16"
            />
          </Link>
          <p className="mt-6 text-sm leading-relaxed text-white/60">
            Plataforma digital para documentos, evidências e governança de SST. APR, DDS, PT, ASO, treinamentos e indicadores em um só lugar.
          </p>
          <p className="mt-8 text-[10px] font-bold uppercase tracking-widest text-white/40">
            © 2026 SGS Segurança
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 md:gap-16">
          <div>
            <h4 className="mb-4 text-sm font-bold text-white">Plataforma</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#plataforma" className="transition-colors hover:text-white">Visão geral</a></li>
              <li><a href="#modulos" className="transition-colors hover:text-white">Módulos</a></li>
              <li><Link to="/funcionalidades" className="transition-colors hover:text-white">Funcionalidades</Link></li>
              <li><Link to="/precos" className="transition-colors hover:text-white">Preços</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold text-white">Empresa</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link to="/contato" className="transition-colors hover:text-white">Contato</Link></li>
              <li><Link to="/faq" className="transition-colors hover:text-white">FAQ</Link></li>
              <li><Link to="/seguranca" className="transition-colors hover:text-white">Segurança</Link></li>
              <li><Link to="/blog" className="transition-colors hover:text-white">Blog</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-8 text-sm md:items-end">
          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#25D366] px-5 font-bold text-white shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] px-5 font-bold text-white shadow-lg shadow-[#dd2a7b]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <ExternalLink className="h-4 w-4" />
              Instagram
            </a>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <a href={`mailto:${contactEmail}`} className="text-white/70 transition-colors hover:text-white">
              {contactEmail}
            </a>
            <div className="flex gap-6 pt-4 text-[11px] font-bold uppercase tracking-widest text-white/40">
              <Link to="/privacidade" className="transition-colors hover:text-white">
                Privacidade
              </Link>
              <Link to="/termos" className="transition-colors hover:text-white">
                Termos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[0.85fr_1.15fr] gap-3 border-t border-[#dbe4ee]/50 bg-white/80 p-4 backdrop-blur-xl md:hidden">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-[#25D366] text-sm font-bold text-white shadow-lg shadow-[#25D366]/10"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
      <DemoForm
        triggerLabel="Agendar demo"
        showArrow
        triggerClassName="h-13 w-full rounded-xl bg-[#1d5b8d] px-6 text-sm font-bold text-white shadow-lg shadow-[#1d5b8d]/10"
      />
    </div>
  );
}
