"use client";

import { 
  FileText, 
  Users, 
  Activity, 
  ShieldCheck, 
  ClipboardList, 
  AlertTriangle, 
  Search, 
  GraduationCap, 
  Stethoscope, 
  HardHat, 
  Building2, 
  BarChart2,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";

const moduleGroups = [
  {
    title: "Documentos de SST",
    description: "Módulos operacionais para criação e gestão de documentos críticos.",
    modules: [
      { icon: FileText, name: "APR", desc: "Análise Preliminar de Riscos com controle de versões e evidências." },
      { icon: ShieldCheck, name: "PT", desc: "Permissão de Trabalho com fluxos de aprovação e histórico." },
      { icon: ClipboardList, name: "DDS", desc: "Diálogo Diário de Segurança com assinaturas e vídeos." },
      { icon: Activity, name: "RDO", desc: "Registro Diário de Obra com evidências e assinaturas." },
      { icon: AlertTriangle, name: "CAT", desc: "Comunicação de Acidente de Trabalho e investigação." },
      { icon: CheckCircle2, name: "Checklists", desc: "Padronização de verificações a partir de templates." },
      { icon: Search, name: "Inspeções & Auditorias", desc: "Registros formais, rastreáveis e integrados a ações." }
    ]
  },
  {
    title: "Pessoas e Conformidade",
    description: "Gestão do capital humano e requisitos legais de saúde e segurança.",
    modules: [
      { icon: Users, name: "Trabalhadores", desc: "Cadastro centralizado com timeline e status operacional." },
      { icon: GraduationCap, name: "Treinamentos", desc: "Controle de vencimentos e compliance por usuário." },
      { icon: Stethoscope, name: "Exames Médicos", desc: "Monitoramento de ASOs e exames com visibilidade de prazos." },
      { icon: HardHat, name: "EPI", desc: "Controle de entrega, devolução e substituição com histórico." }
    ]
  },
  {
    title: "Gestão Operacional",
    description: "Estrutura e suporte para as atividades do dia a dia.",
    modules: [
      { icon: Building2, name: "Sites & Empresas", desc: "Estrutura multi-tenant para unidades e permissões (RBAC)." },
      { icon: AlertTriangle, name: "Riscos & Atividades", desc: "Base operacional reutilizável para documentos." },
      { icon: ClipboardList, name: "Ações Corretivas", desc: "Planos de ação, prazos, responsáveis e escalonamento." }
    ]
  },
  {
    title: "Inteligência e Governança",
    description: "Visibilidade, dados e integridade documental.",
    modules: [
      { icon: BarChart2, name: "Dashboards & KPIs", desc: "Indicadores executivos e operacionais em tempo real." },
      { icon: FileText, name: "Registry Documental", desc: "Central de documentos oficiais com validação pública." },
      { icon: AlertTriangle, name: "Central de Pendências", desc: "Visão consolidada de gargalos e ações necessárias." }
    ]
  }
];

export function ModulesPage() {
  return (
    <div className="py-24 lg:py-40 bg-white">
      <div className="container">
        <div className="max-w-4xl mb-24">
          <FadeIn direction="right">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
              <HardHat className="w-4 h-4" />
              Ecossistema Completo
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-sgs-navy mb-10 tracking-tighter leading-[1.05] text-balance">
              Módulos do <span className="text-primary">Sistema</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium text-pretty max-w-3xl">
              O SGS é composto por módulos integrados que cobrem todas as necessidades de gestão de SST, 
              desde a operação no campo até a governança executiva.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-32">
          {moduleGroups.map((group, idx) => (
            <section key={idx} className="scroll-mt-32">
              <FadeIn direction="up">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="max-w-2xl">
                    <h2 className="text-3xl lg:text-4xl font-black mb-4 text-sgs-navy tracking-tight">{group.title}</h2>
                    <p className="text-lg text-slate-500 font-medium">{group.description}</p>
                  </div>
                  <div className="hidden md:block h-[1px] flex-grow mx-12 bg-slate-100"></div>
                </div>
              </FadeIn>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.modules.map((module, mIdx) => (
                  <FadeIn key={mIdx} direction="up" delay={mIdx * 0.05}>
                    <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sgs hover:shadow-premium transition-all duration-700 group h-full">
                      <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-sm">
                        <module.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-black mb-4 text-sgs-navy tracking-tight group-hover:text-primary transition-colors">{module.name}</h3>
                      <p className="text-slate-500 font-medium leading-relaxed">
                        {module.desc}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Call to Action - Refined */}
        <FadeIn direction="up">
          <div className="mt-32 p-12 lg:p-24 bg-white border border-slate-100 shadow-premium rounded-[3rem] text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-black mb-8 text-sgs-navy tracking-tight">Precisa de uma demonstração detalhada?</h2>
              <p className="text-slate-500 mb-12 text-xl font-medium leading-relaxed">
                Agende uma conversa com nossos especialistas para ver como cada módulo pode ser aplicado à realidade da sua empresa.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="px-10 py-5 bg-primary text-white rounded-2xl font-black text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center gap-3 group">
                  Solicitar Demonstração <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link href="/" className="px-10 py-5 bg-slate-50 text-sgs-navy border border-slate-200 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all">
                  Voltar ao Início
                </Link>
              </div>
            </div>
            {/* Premium shapes */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[80px] rounded-full -mr-48 -mt-48 group-hover:bg-primary/10 transition-all duration-1000"></div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
