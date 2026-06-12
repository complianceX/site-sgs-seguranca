"use client";

import { Shield, Target, TrendingUp, Users } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { MotionCard } from "@/components/animations/MotionCard";
import { MotionText } from "@/components/animations/MotionText";
import { MotionButton } from "@/components/animations/MotionButton";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const values = [
  { icon: Shield, title: "Segurança em Primeiro Lugar", desc: "Cada linha de código e cada funcionalidade são pensadas para fortalecer a cultura de segurança das empresas que confiam no SGS." },
  { icon: Target, title: "Tecnologia que Gera Resultados", desc: "Acreditamos que a tecnologia certa transforma a gestão de SST de obrigação em vantagem competitiva." },
  { icon: TrendingUp, title: "Melhoria Contínua", desc: "Ouvimos nossos clientes, analisamos dados e evoluímos o produto constantemente para atender às demandas reais do campo." },
  { icon: Users, title: "Parceria com o Cliente", desc: "Não somos apenas um software — somos um parceiro na jornada de maturidade em segurança do trabalho." },
];

export function AboutContent() {
  return (
    <div className="bg-white py-24 lg:py-40">
      <div className="container">
        <FadeIn direction="none" stagger>
          <div className="max-w-4xl mx-auto text-center mb-24">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
              <Shield className="w-4 h-4" />
              Sobre o SGS
            </div>
            <MotionText as="h1" className="text-5xl md:text-7xl font-black text-sgs-navy mb-10 tracking-tighter leading-[1.05] text-balance">
              Tecnologia que Protege Quem Produz o Brasil
            </MotionText>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium text-pretty max-w-3xl mx-auto mb-12">
              O SGS nasceu da necessidade de transformar a gestão de Segurança do Trabalho em algo mais eficiente, digital e confiável.
            </p>
            <Link href="/contato">
              <MotionButton size="lg" className="gap-3">
                Conversar conosco <ArrowRight className="w-5 h-5" />
              </MotionButton>
            </Link>
          </div>
        </FadeIn>

        <section className="mb-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-sgs-navy mb-8 tracking-tight">Nossa História</h2>
              <div className="space-y-6 text-slate-500 font-medium leading-relaxed">
                <p>Fundado por profissionais de segurança do trabalho e tecnologia, o SGS surgiu para resolver um problema comum: a gestão de SST ainda é feita no papel, em planilhas ou sistemas desconectados.</p>
                <p>Percebemos que faltava uma plataforma que integrasse APR, DDS, PT, checklists, inspeções, evidências e não conformidades em um só lugar — com a confiabilidade que auditorias e fiscalizações exigem.</p>
                <p>Hoje, o SGS é utilizado por construtoras, indústrias, mineradoras e empresas de engenharia em todo o Brasil, processando milhares de documentos de segurança por mês.</p>
              </div>
            </div>
            <div className="aspect-video bg-slate-50 rounded-[3rem] border border-slate-200 flex items-center justify-center p-12 text-center">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest leading-relaxed">
                Mais de 500 empresas confiam no SGS para gestão de SST.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-sgs-navy mb-6 tracking-tight">Nossos Valores</h2>
            <p className="text-lg text-slate-500 font-medium">O que guia cada decisão no SGS.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <MotionCard key={i} delay={i * 0.05}>
                <v.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-black mb-4 text-sgs-navy tracking-tight">{v.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{v.desc}</p>
              </MotionCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
