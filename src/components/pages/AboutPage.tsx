import Link from "next/link";
import { ArrowRight, Building2, ShieldCheck, Target, Users } from "lucide-react";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { getSchedulingHref } from "@/lib/contact-links";

const pillars = [
  {
    icon: Target,
    title: "Missão",
    text: "Organizar a rotina de SST com rastreabilidade, reduzindo dispersão entre campo, TST e gestão.",
  },
  {
    icon: ShieldCheck,
    title: "Proposta",
    text: "Software SaaS para APR, DDS, PT, evidências, prazos e governança documental em operações reais.",
  },
  {
    icon: Users,
    title: "Para quem",
    text: "Empresas com equipes de campo, múltiplas unidades e necessidade de resposta rápida em auditorias.",
  },
  {
    icon: Building2,
    title: "Implantação",
    text: "Mapeamento da operação, configuração de módulos prioritários, permissões e treinamento do fluxo.",
  },
];

export function AboutPage() {
  const schedulingHref = getSchedulingHref();

  return (
    <div className="bg-white py-24 lg:py-40">
      <div className="container">
        <header className="mx-auto mb-20 max-w-4xl text-center">
          <p className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-primary">Sobre o SGS</p>
          <h1 className="mb-8 text-5xl font-black tracking-tight text-sgs-navy text-balance md:text-7xl">
            Tecnologia para quem precisa de <span className="text-primary">controle</span> em SST
          </h1>
          <p className="text-xl font-medium leading-relaxed text-slate-500 text-pretty">
            O SGS é o site institucional do sistema de gestão de segurança do trabalho voltado a operações que
            não podem depender de planilhas, mensagens soltas e documentos sem contexto.
          </p>
        </header>

        <div className="mb-20 grid gap-8 md:grid-cols-2">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-[2rem] border border-slate-100 bg-slate-50 p-10 shadow-sgs"
            >
              <pillar.icon className="mb-6 h-10 w-10 text-primary" aria-hidden="true" />
              <h2 className="mb-4 text-2xl font-black text-sgs-navy">{pillar.title}</h2>
              <p className="font-medium leading-relaxed text-slate-500">{pillar.text}</p>
            </article>
          ))}
        </div>

        <section className="rounded-[3rem] bg-primary p-12 text-center text-white lg:p-20">
          <h2 className="mb-6 text-3xl font-black lg:text-5xl">Quer ver o SGS na sua operação?</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
            Agende uma demonstração e mapeie documentos críticos, volume de evidências e principais gargalos da sua rotina.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <TrackedLink
              href={schedulingHref}
              trackLabel="Agendar demonstração - Sobre"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-black text-primary shadow-xl"
            >
              Agendar demonstração <ArrowRight className="h-4 w-4" />
            </TrackedLink>
            <Link
              href="/modulos"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-sm font-black text-white"
            >
              Ver módulos
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
