"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp, CheckCircle2, HardHat, Factory, Truck } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { MotionText } from "@/components/animations/MotionText";
import { MotionCard } from "@/components/animations/MotionCard";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { getSchedulingHref } from "@/lib/contact-links";

const cases = [
  {
    icon: HardHat, company: "Construtora Nova Era", industry: "Construção Civil",
    challenge: "Gestão manual de APR em 15 canteiros de obra distintos, com perda de documentos e dificuldade em auditorias.",
    solution: "Implantação do módulo de APR Digital integrado ao DDS e PT, com evidências fotográficas por obra.",
    results: ["70% redução no tempo de preparação para auditorias", "100% digitalização das APRs emitidas", "95% de adesão da equipe de campo em 60 dias"],
  },
  {
    icon: Factory, company: "MetalTech Indústria", industry: "Indústria",
    challenge: "DDS realizados em papel, sem registros padronizados e sem rastreabilidade para o eSocial.",
    solution: "Módulo DDS Digital com biblioteca de temas, assinatura eletrônica e envio automático de relatórios.",
    results: ["100% de adoção digital do DDS em 3 turnos", "60% redução de horas administrativas com SST", "Zero não conformidades em auditoria ISO 45001"],
  },
  {
    icon: Truck, company: "TransBrasil Logística", industry: "Logística",
    challenge: "Operação descentralizada com 12 filiais, cada uma com processos de SST diferentes e sem governança unificada.",
    solution: "Centralização de toda a gestão de SST no SGS, com dashboards unificados e fluxos padronizados.",
    results: ["Centralização de 12 unidades em uma única plataforma", "80% redução em retrabalho documental", "Relatórios gerenciais em tempo real para diretoria"],
  },
];

export function SuccessStoriesContent() {
  const schedulingHref = getSchedulingHref();

  return (
    <div className="bg-white py-24 lg:py-40">
      <div className="container">
        <FadeIn>
          <header className="mx-auto mb-20 max-w-4xl text-center">
            <p className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-primary">Casos de Sucesso</p>
            <h1 className="mb-8 text-5xl font-black tracking-tight text-sgs-navy text-balance md:text-7xl">
              <MotionText delay={0.1}>Casos de Sucesso</MotionText>
            </h1>
            <p className="text-xl font-medium leading-relaxed text-slate-500 text-pretty">
              Resultados reais de empresas que transformaram a gestão de SST com o SGS. Cada caso representa um passo rumo à excelência operacional.
            </p>
          </header>
        </FadeIn>

        <div className="mb-32 space-y-16">
          {cases.map((study, index) => (
            <FadeIn key={study.company} delay={0.1 * (index + 1)}>
              <MotionCard>
                <div className="grid gap-10 lg:grid-cols-5">
                  <div className="lg:col-span-3">
                    <div className="mb-4 flex items-center gap-3">
                      <study.icon className="h-8 w-8 text-primary" />
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-primary">{study.industry}</span>
                    </div>
                    <h2 className="mb-4 text-3xl font-black text-sgs-navy">{study.company}</h2>
                    <div className="mb-6">
                      <h3 className="mb-2 flex items-center gap-2 text-sm font-black uppercase tracking-tight text-slate-400">Desafio</h3>
                      <p className="font-medium leading-relaxed text-slate-500">{study.challenge}</p>
                    </div>
                    <div className="mb-6">
                      <h3 className="mb-2 flex items-center gap-2 text-sm font-black uppercase tracking-tight text-slate-400">Solução</h3>
                      <p className="font-medium leading-relaxed text-slate-500">{study.solution}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="rounded-[2rem] bg-sgs-navy p-8 text-white h-full flex flex-col justify-center">
                      <h3 className="mb-6 flex items-center gap-2 text-sm font-black uppercase tracking-wider text-primary">
                        <TrendingUp className="h-4 w-4" /> Resultados
                      </h3>
                      <ul className="space-y-4">
                        {study.results.map((result) => (
                          <li key={result} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sgs-green" />
                            <span className="text-sm font-bold leading-relaxed">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </MotionCard>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <section className="rounded-[3rem] bg-primary p-12 text-center text-white lg:p-20">
            <h2 className="mb-6 text-3xl font-black lg:text-5xl">Seu case pode ser o próximo</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
              Descubra como o SGS pode transformar a gestão de SST da sua empresa com resultados mensuráveis.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <TrackedLink href={schedulingHref} trackLabel="Agendar demonstração - Casos de Sucesso"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-black text-primary shadow-xl">
                Agendar demonstração <ArrowRight className="h-4 w-4" />
              </TrackedLink>
              <Link href="/clientes" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-sm font-black text-white">
                Ver clientes
              </Link>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
