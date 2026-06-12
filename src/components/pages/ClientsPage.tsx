"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { MotionText } from "@/components/animations/MotionText";
import { MotionButton } from "@/components/animations/MotionButton";
import { MotionCard } from "@/components/animations/MotionCard";
import Link from "next/link";
import { ArrowRight, HardHat, Factory, Mountain, Truck, Zap, Star, Quote, Shield, BarChart3, Users } from "lucide-react";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { getSchedulingHref } from "@/lib/contact-links";

const segments = [
  { icon: HardHat, name: "Construção Civil" },
  { icon: Factory, name: "Indústria" },
  { icon: Mountain, name: "Mineração" },
  { icon: Truck, name: "Logística" },
  { icon: Zap, name: "Energia" },
];

const testimonials = [
  {
    quote: "O SGS reduziu em 70% o tempo de preparação para auditorias internas. Hoje temos rastreabilidade completa de cada APR emitida.",
    author: "Carlos Mendes",
    role: "Coordenador de SST",
    company: "Construtora Nova Era",
    industry: "Construção Civil",
  },
  {
    quote: "Implantações de DDS que antes tomavam dias agora são feitas em minutos. A adesão dos colaboradores subiu 95%.",
    author: "Ana Beatriz Oliveira",
    role: "Gerente de Segurança do Trabalho",
    company: "MetalTech Indústria",
    industry: "Indústria",
  },
  {
    quote: "Com o SGS unificamos a gestão de SST de 12 filiais em uma única plataforma. A transparência com a diretoria mudou completamente.",
    author: "Ricardo Alves",
    role: "Diretor de Operações",
    company: "TransBrasil Logística",
    industry: "Logística",
  },
  {
    quote: "A integração com eSocial e a governança documental nos deram tranquilidade em todas as fiscalizações do último ano.",
    author: "Juliana Costa",
    role: "Técnica de Segurança",
    company: "Minério Vale do Norte",
    industry: "Mineração",
  },
];

const trustIndicators = [
  { icon: Shield, value: "400+", label: "Empresas atendidas" },
  { icon: BarChart3, value: "98%", label: "Retenção anual" },
  { icon: Users, value: "15K+", label: "Usuários ativos" },
  { icon: Star, value: "4.8", label: "Nota média" },
];

export function ClientsPage() {
  const schedulingHref = getSchedulingHref();

  return (
    <div className="bg-white py-24 lg:py-40">
      <div className="container">
        <FadeIn>
          <header className="mx-auto mb-20 max-w-4xl text-center">
            <p className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-primary">Clientes</p>
            <h1 className="mb-8 text-5xl font-black tracking-tight text-sgs-navy text-balance md:text-7xl">
              <MotionText delay={0.1}>Clientes que Confiam no SGS</MotionText>
            </h1>
            <p className="text-xl font-medium leading-relaxed text-slate-500 text-pretty">
              De construtoras a mineradoras, centenas de empresas já transformaram sua gestão de SST 
              com nossa plataforma. Conheça quem confia no SGS.
            </p>
          </header>
        </FadeIn>

        {/* Industry Segments */}
        <FadeIn delay={0.2}>
          <section className="mb-32">
            <h2 className="mb-12 text-center text-3xl font-black text-sgs-navy lg:text-5xl">Segmentos Atendidos</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {segments.map((segment) => (
                <div
                  key={segment.name}
                  className="rounded-[2rem] border border-slate-100 bg-slate-50 p-8 text-center shadow-sgs transition-colors hover:border-primary/20 hover:bg-primary/[0.02]"
                >
                  <segment.icon className="mx-auto mb-4 h-8 w-8 text-primary" />
                  <span className="text-sm font-black text-sgs-navy">{segment.name}</span>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Testimonials */}
        <FadeIn delay={0.3}>
          <section className="mb-32">
            <h2 className="mb-12 text-center text-3xl font-black text-sgs-navy lg:text-5xl">O que dizem nossos clientes</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {testimonials.map((item) => (
                <MotionCard key={item.author} className="flex flex-col">
                  <Quote className="mb-4 h-8 w-8 text-primary/30" />
                  <blockquote className="mb-6 flex-1 text-lg font-medium leading-relaxed text-slate-600">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <div className="border-t border-slate-100 pt-4">
                    <p className="font-black text-sgs-navy">{item.author}</p>
                    <p className="text-sm font-medium text-slate-500">{item.role} — {item.company}</p>
                    <span className="mt-1 inline-block rounded-full bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-primary">
                      {item.industry}
                    </span>
                  </div>
                </MotionCard>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Trust Indicators */}
        <FadeIn delay={0.3}>
          <section className="mb-32 rounded-[3rem] bg-slate-50 p-12 lg:p-20">
            <h2 className="mb-12 text-center text-3xl font-black text-sgs-navy lg:text-5xl">Números que inspiram confiança</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {trustIndicators.map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-5xl font-black text-primary">{item.value}</p>
                  <p className="mt-2 text-sm font-black text-sgs-navy">{item.label}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <section className="rounded-[3rem] bg-primary p-12 text-center text-white lg:p-20">
            <h2 className="mb-6 text-3xl font-black lg:text-5xl">Junte-se a quem já transformou a SST</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
              Agende uma demonstração e descubra como o SGS pode fazer a diferença na sua operação.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <TrackedLink
                href={schedulingHref}
                trackLabel="Agendar demonstração - Clientes"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-black text-primary shadow-xl"
              >
                Agendar demonstração <ArrowRight className="h-4 w-4" />
              </TrackedLink>
              <Link
                href="/casos-de-sucesso"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-sm font-black text-white"
              >
                Ver casos de sucesso
              </Link>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
