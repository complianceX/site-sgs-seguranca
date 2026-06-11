"use client";

import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  BarChart3,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { MotionCard } from "@/components/animations/MotionCard";
import { MotionButton } from "@/components/animations/MotionButton";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { getSchedulingHref } from "@/lib/contact-links";

const comparisons = [
  {
    category: "Documentos",
    items: [
      { label: "APR, DDS, PT centralizados", sgs: true, planilha: false },
      { label: "Versão única por documento", sgs: true, planilha: false },
      { label: "Busca por palavra-chave", sgs: true, planilha: "Depende" },
      { label: "Histórico de alterações", sgs: true, planilha: false },
    ],
  },
  {
    category: "Evidências",
    items: [
      { label: "Fotos vinculadas ao registro", sgs: true, planilha: false },
      { label: "Assinatura digital", sgs: true, planilha: false },
      { label: "Vídeos como evidência", sgs: true, planilha: false },
      { label: "Anexos por documento", sgs: true, planilha: "Manual" },
    ],
  },
  {
    category: "Gestão e Prazos",
    items: [
      { label: "Controle de vencimentos", sgs: true, planilha: "Manual" },
      { label: "Notificações automáticas", sgs: true, planilha: false },
      { label: "Dashboard de pendências", sgs: true, planilha: false },
      { label: "Relatórios automáticos", sgs: true, planilha: false },
    ],
  },
  {
    category: "Governança",
    items: [
      { label: "Trilha de auditoria", sgs: true, planilha: false },
      { label: "Permissões por usuário", sgs: true, planilha: false },
      { label: "LGPD compliance", sgs: true, planilha: false },
      { label: "PDF consolidado", sgs: true, planilha: "Manual" },
    ],
  },
  {
    category: "Operação",
    items: [
      { label: "Uso em campo (tablet/celular)", sgs: true, planilha: "Limitado" },
      { label: "Offline com sincronização", sgs: true, planilha: false },
      { label: "IA assistiva (Sophie)", sgs: true, planilha: false },
      { label: "API e integrações", sgs: true, planilha: false },
    ],
  },
];

const stats = [
  { value: "70%", label: "menos tempo em auditorias" },
  { value: "100%", label: "rastreabilidade documental" },
  { value: "3x", label: "mais produtividade do TST" },
  { value: "0", label: "planilhas perdidas" },
];

export function ComparativoPage() {
  const schedulingHref = getSchedulingHref();

  return (
    <div className="py-24 lg:py-40 bg-white">
      <div className="container">
        {/* Hero */}
        <div className="max-w-5xl mx-auto mb-32 text-center">
          <FadeIn direction="none" stagger>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
              <BarChart3 className="w-4 h-4" />
              Comparativo
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-sgs-navy mb-10 tracking-tighter leading-[1.05] text-balance">
              SGS vs Planilhas:<br />a diferença que o controle faz
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium text-pretty max-w-3xl mx-auto">
              Planilhas são flexíveis, mas não foram feitas para o controle exigido pela SST moderna.
              Veja lado a lado o que muda quando você centraliza sua gestão no SGS.
            </p>
          </FadeIn>
        </div>

        {/* Stats bar */}
        <FadeIn direction="up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {stats.map((stat, i) => (
              <div key={i} className="rounded-[2rem] bg-slate-50 border border-slate-100 p-8 text-center shadow-sgs">
                <p className="text-4xl lg:text-5xl font-black text-primary mb-3">{stat.value}</p>
                <p className="text-sm font-bold text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Comparison Table Categories */}
        {comparisons.map((group, gIdx) => (
          <FadeIn key={group.category} direction="up" delay={gIdx * 0.1}>
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-8 w-1 bg-primary rounded-full" />
                <h2 className="text-3xl font-black text-sgs-navy tracking-tight">{group.category}</h2>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-slate-100">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400">
                      <th className="px-8 py-5 w-1/2">Item</th>
                      <th className="px-8 py-5 w-1/4">
                        <span className="text-primary">SGS</span>
                      </th>
                      <th className="px-8 py-5 w-1/4">Planilhas</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {group.items.map((item, iIdx) => (
                      <tr key={item.label} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-8 py-5 font-bold text-sgs-navy">{item.label}</td>
                        <td className="px-8 py-5">
                          {item.sgs === true ? (
                            <span className="inline-flex items-center gap-2 text-sgs-green font-bold">
                              <CheckCircle2 className="w-5 h-5" /> Sim
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-2 text-sgs-red font-bold">
                              <XCircle className="w-5 h-5" /> Não
                            </span>
                          )}
                        </td>
                        <td className="px-8 py-5">
                          {item.planilha === false ? (
                            <span className="inline-flex items-center gap-2 text-sgs-red font-bold">
                              <XCircle className="w-5 h-5" /> Não
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-2 text-sgs-orange font-bold">
                              <TrendingUp className="w-5 h-5" /> {item.planilha}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        ))}

        {/* CTA */}
        <FadeIn direction="up">
          <MotionCard className="mt-20 p-12 lg:p-20 border-none bg-sgs-navy text-white rounded-[3rem] text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full -mr-64 -mt-64 group-hover:bg-primary/20 transition-all duration-1000"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-8" />
              <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tight leading-tight">
                Chega de planilhas perdidas
              </h2>
              <p className="text-xl text-white/70 font-medium mb-12 leading-relaxed max-w-2xl mx-auto">
                Agende uma demonstração e veja na prática como o SGS organiza sua rotina de SST.
              </p>
              <TrackedLink href={schedulingHref} trackLabel="Agendar - Comparativo">
                <MotionButton size="lg" variant="primary" className="group gap-3 text-lg">
                  Agendar demonstração <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </MotionButton>
              </TrackedLink>
            </div>
          </MotionCard>
        </FadeIn>
      </div>
    </div>
  );
}
