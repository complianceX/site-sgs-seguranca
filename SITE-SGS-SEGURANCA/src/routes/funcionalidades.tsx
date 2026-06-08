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
import { TextReveal } from "@/components/animations/TextReveal";
import { TiltCard } from "@/components/animations/TiltCard";
import { MeshGradient } from "@/components/animations/MeshGradient";

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
      <main className="relative overflow-hidden">
        <section className="relative border-b border-sgs-border/50 bg-white py-20 md:py-28">
          <MeshGradient className="opacity-15" />
          <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center sgs-reveal relative">
            <TextReveal
              text="Todas as funcionalidades do SGS"
              as="h1"
              className="text-4xl font-black tracking-tight text-sgs-night md:text-5xl"
              stagger={40}
            />
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sgs-slate">
              Da APR ao relatório de auditoria, o SGS cobre cada etapa da gestão de
              segurança do trabalho em uma única plataforma.
            </p>
          </div>
        </section>

        <section className="relative bg-sgs-bg py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0 sgs-grid-bg opacity-30" />
          <div className="mx-auto max-w-7xl px-6 sm:px-8 relative">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sgs-reveal sgs-stagger">
              {allModules.map((mod) => (
                <TiltCard
                  key={mod.title}
                  maxTilt={4}
                  scale={1.01}
                  className="group relative flex flex-col rounded-2xl border border-sgs-border bg-white p-6 transition-all duration-300 hover:border-sgs-blue/20 hover:shadow-xl hover:shadow-sgs-blue/5 sgs-hover-glow sgs-card-gradient-border"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sgs-blue/5 text-sgs-blue transition-all duration-300 group-hover:bg-sgs-blue group-hover:text-white group-hover:shadow-lg group-hover:shadow-sgs-blue/20 sgs-shine">
                    <mod.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-base font-extrabold text-sgs-night">{mod.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sgs-slate">{mod.desc}</p>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-y border-sgs-border/50 bg-white py-20">
          <MeshGradient className="opacity-10" />
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 sm:px-8 md:flex-row sgs-reveal-left relative">
            <div>
              <h2 className="text-2xl font-black tracking-tight text-sgs-night md:text-3xl">
                Quer ver na prática?
              </h2>
              <p className="mt-3 text-base text-sgs-slate">
                Agende uma demonstração personalizada com nossa equipe.
              </p>
            </div>
            <DemoForm
              triggerLabel="Agendar demonstração"
              showArrow
              triggerClassName="h-13 rounded-xl bg-sgs-blue px-8 text-sm font-bold text-white shadow-lg shadow-sgs-blue/20 transition-all hover:bg-sgs-blue-dark hover:scale-[1.02] active:scale-[0.98]"
            />
          </div>
        </section>
      </main>
  );
}
