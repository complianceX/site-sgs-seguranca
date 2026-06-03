import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2,
  Users,
  HardHat,
  ClipboardCheck,
  BookOpen,
  FileWarning,
  Stethoscope,
  GraduationCap,
  FileText,
  UserCheck,
  FolderOpen,
  PenTool,
  LayoutDashboard,
  BarChart3,
  KeyRound,
  Scale,
} from "lucide-react";
import { DemoForm } from "@/components/DemoForm";
import logoSgs from "@/assets/logo-sgs.webp";

export const Route = createFileRoute("/funcionalidades")({
  component: FeaturesPage,
  head: () => ({
    meta: [
      {
        title: "Funcionalidades do SGS — Módulos de Gestão de SST",
      },
      {
        name: "description",
        content:
          "Conheça todos os módulos do SGS: APR Digital, DDS Digital, PT, ASO, Treinamentos, Ordem de Serviço, Mobilização, Indicadores e mais.",
      },
    ],
  }),
});

const allModules = [
  { icon: Building2, title: "Gestão de Empresas", desc: "Cadastro de múltiplas empresas com dados segregados por tenant. Cada contrato com sua própria base de colaboradores, documentos e configurações." },
  { icon: Users, title: "Gestão de Colaboradores", desc: "Funcionários, terceiros e prestadores com documentação centralizada. Vínculo por obra, função e contrato." },
  { icon: HardHat, title: "Gestão de Obras / Sites", desc: "Vincule colaboradores e documentos a obras, frentes de serviço e setores. Acompanhe por unidade operacional." },
  { icon: ClipboardCheck, title: "APR Digital", desc: "Análise Preliminar de Riscos com riscos e medidas de controle rastreáveis por atividade. Aprovação e histórico completos." },
  { icon: BookOpen, title: "DDS Digital", desc: "Diálogo Diário de Segurança com presença e evidências sem depender de listas em papel. Comprovante por participante." },
  { icon: FileWarning, title: "Permissão de Trabalho (PT)", desc: "Permissões e anexos no mesmo fluxo de controle. PT liberada com validação e assinatura digital." },
  { icon: Stethoscope, title: "ASO Digital", desc: "Atestado de Saúde Ocupacional digital, com alerta de vencimento e histórico por colaborador. Integração com clínicas." },
  { icon: GraduationCap, title: "Controle de Treinamentos", desc: "Registro de treinamentos NRs com data, carga horária, instrutor e reciclagem automática." },
  { icon: FileText, title: "Ordem de Serviço (OS)", desc: "OS de segurança do trabalho integrada ao colaborador e ao documento. Controle de versões." },
  { icon: UserCheck, title: "Mobilização de Terceiros", desc: "Checklist de documentos para liberação de terceiros em obra. Validação documental antes do acesso." },
  { icon: FolderOpen, title: "Gestão de Documentos", desc: "Centralize todos os documentos SST: programas, relatórios, laudos e certificações." },
  { icon: PenTool, title: "Assinaturas Digitais", desc: "Assinatura eletrônica com registro de data, IP e identificação do signatário. Validade jurídica." },
  { icon: LayoutDashboard, title: "Dashboard de Pendências", desc: "Visão consolidada de documentos atrasados por obra, colaborador e tipo. Alertas automáticos." },
  { icon: BarChart3, title: "Relatórios Gerenciais", desc: "Exporte relatórios completos para auditoria e DDS. Indicadores de desempenho em SST." },
  { icon: KeyRound, title: "Controle de Acessos", desc: "Permissões por perfil, função e nível hierárquico. Princípio do menor privilégio." },
  { icon: Scale, title: "Conformidade com NRs", desc: "Mapeamento automático de documentos por NR aplicável. Alertas de não conformidade regulatória." },
];

function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#fbfcfe] text-[#142033] font-sans">
      <header className="sticky top-0 z-50 border-b border-[#dbe4ee]/50 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 md:h-20 md:px-8">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoSgs} alt="SGS Segurança" className="h-11 w-auto md:h-14" />
            <span className="hidden border-l border-[#dbe4ee] pl-3 text-sm font-semibold text-[#5b6878] sm:inline">
              Funcionalidades
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
          <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#0d2033] md:text-5xl">
              Todas as funcionalidades do SGS
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#5b6878]">
              Da APR ao relatório de auditoria, o SGS cobre cada etapa da gestão de
              segurança do trabalho em uma única plataforma.
            </p>
          </div>
        </section>

        <section className="bg-[#fbfcfe] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {allModules.map((mod) => (
                <div
                  key={mod.title}
                  className="group relative flex flex-col rounded-2xl border border-[#dbe4ee] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1d5b8d]/20 hover:shadow-xl hover:shadow-[#1d5b8d]/5"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#1d5b8d]/5 text-[#1d5b8d] transition-colors group-hover:bg-[#1d5b8d] group-hover:text-white">
                    <mod.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0d2033]">{mod.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5b6878]">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#dbe4ee]/50 bg-white py-20">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 sm:px-8 md:flex-row">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#0d2033] md:text-3xl">
                Quer ver na prática?
              </h2>
              <p className="mt-3 text-base text-[#5b6878]">
                Agende uma demonstração personalizada com nossa equipe.
              </p>
            </div>
            <DemoForm
              triggerLabel="Agendar demonstração"
              showArrow
              triggerClassName="h-13 rounded-xl bg-[#1d5b8d] px-8 text-sm font-bold text-white shadow-lg shadow-[#1d5b8d]/20 transition-all hover:bg-[#16486f] hover:scale-[1.02] active:scale-[0.98]"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
