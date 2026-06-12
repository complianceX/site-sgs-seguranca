"use client";

import Link from "next/link";
import { ArrowRight, Handshake, Cpu, Globe, BarChart3, HeadphonesIcon, Wallet, BadgeCheck } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { MotionText } from "@/components/animations/MotionText";
import { MotionCard } from "@/components/animations/MotionCard";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { getSchedulingHref } from "@/lib/contact-links";

const tiers = [
  { icon: Handshake, name: "Consultoria", description: "Parceiros de consultoria em SST que implementam o SGS em seus clientes.", benefits: ["Comissionamento por cliente indicado", "Suporte técnico dedicado", "Materiais de vendas exclusivos", "Treinamento certificado"] },
  { icon: Cpu, name: "Tecnologia", description: "Integradores e ISVs que conectam o SGS a outras plataformas do ecossistema corporativo.", benefits: ["API e webhooks prioritários", "Ambiente sandbox exclusivo", "Roadmap compartilhado", "Co-marketing técnico"] },
  { icon: Globe, name: "Distribuição", description: "Revendas e distribuidores que comercializam o SGS como parte de seu portfólio de SST.", benefits: ["Margens diferenciadas", "Lead sharing program", "Portal do parceiro", "Eventos e workshops exclusivos"] },
];

const benefits = [
  { icon: BarChart3, text: "Receita recorrente com modelo SaaS" },
  { icon: HeadphonesIcon, text: "Suporte técnico e comercial dedicado" },
  { icon: Wallet, text: "Margens competitivas do mercado" },
  { icon: BadgeCheck, text: "Materiais de marketing e vendas" },
];

export function PartnersContent() {
  const schedulingHref = getSchedulingHref();

  return (
    <div className="bg-white py-24 lg:py-40">
      <div className="container">
        <FadeIn>
          <header className="mx-auto mb-20 max-w-4xl text-center">
            <p className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-primary">Parceiros</p>
            <h1 className="mb-8 text-5xl font-black tracking-tight text-sgs-navy text-balance md:text-7xl"><MotionText delay={0.1}>Parceiros e Canais</MotionText></h1>
            <p className="text-xl font-medium leading-relaxed text-slate-500 text-pretty">O SGS é construído em parceria com os melhores profissionais e empresas do mercado de SST. Junte-se a um ecossistema que transforma a gestão de segurança do trabalho no Brasil.</p>
          </header>
        </FadeIn>

        <div className="mb-32 grid gap-8 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <FadeIn key={tier.name} delay={0.1 * (index + 1)}>
              <MotionCard className="flex flex-col">
                <tier.icon className="mb-6 h-10 w-10 text-primary" />
                <h2 className="mb-3 text-2xl font-black text-sgs-navy">{tier.name}</h2>
                <p className="mb-8 font-medium leading-relaxed text-slate-500">{tier.description}</p>
                <ul className="mb-8 space-y-3">
                  {tier.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm font-semibold text-sgs-navy">{b}</span>
                    </li>
                  ))}
                </ul>
              </MotionCard>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <section className="mb-32 rounded-[3rem] bg-slate-50 p-12 lg:p-20">
            <h2 className="mb-12 text-center text-3xl font-black text-sgs-navy lg:text-5xl">Benefícios do Programa</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item) => (
                <div key={item.text} className="rounded-2xl bg-white p-8 text-center shadow-sgs">
                  <item.icon className="mx-auto mb-4 h-8 w-8 text-primary" />
                  <p className="text-sm font-black text-sgs-navy leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="rounded-[3rem] bg-primary p-12 text-center text-white lg:p-20">
            <h2 className="mb-6 text-3xl font-black lg:text-5xl">Quer ser parceiro SGS?</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">Entre em contato com nossa equipe de canais e descubra o melhor modelo de parceria para seu negócio.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <TrackedLink href={schedulingHref} trackLabel="Ser parceiro - Parceiros" className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-black text-primary shadow-xl">
                Falar com equipe de canais <ArrowRight className="h-4 w-4" />
              </TrackedLink>
              <Link href="/contato" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-sm font-black text-white">Enviar mensagem</Link>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
