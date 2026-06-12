"use client";

import { Globe, Database, Users, FileText, Building, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { MotionText } from "@/components/animations/MotionText";
import { MotionCard } from "@/components/animations/MotionCard";
import { MotionButton } from "@/components/animations/MotionButton";
import Link from "next/link";

const integrations = [
  { icon: Globe, title: "API REST", desc: "Integre o SGS com seus sistemas via API REST documentada. Ideal para conectar ERP, RH, portarias e sistemas de ponto." },
  { icon: Database, title: "eSocial SST", desc: "Exporte dados estruturados para alimentar o eSocial SST com informações de CAT, ASO, treinamentos e documentos." },
  { icon: Users, title: "Google Workspace", desc: "Integração com Google Agenda, Drive e Gmail para sincronizar notificações, documentos e autenticação." },
  { icon: FileText, title: "Sistemas de Documentos", desc: "Conecte o SGS ao seu DMS (Document Management System) para arquivamento centralizado de documentos legais." },
  { icon: Building, title: "Portarias e Acesso", desc: "Integre com sistemas de controle de acesso para sincronizar trabalhadores, vínculos e documentos automaticamente." },
  { icon: ArrowRight, title: "Webhooks", desc: "Configure webhooks para receber notificações em tempo real sobre novos documentos, assinaturas e não conformidades." },
];

export function IntegrationsContent() {
  return (
    <div className="bg-white py-24 lg:py-40">
      <div className="container">
        <FadeIn direction="none" stagger>
          <div className="max-w-4xl mx-auto text-center mb-24">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
              <Globe className="w-4 h-4" />
              Integrações
            </div>
            <MotionText as="h1" className="text-5xl md:text-7xl font-black text-sgs-navy mb-10 tracking-tighter leading-[1.05] text-balance">
              Conecte o SGS aos seus Sistemas
            </MotionText>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium text-pretty max-w-3xl mx-auto mb-12">
              APIs, webhooks e integrações nativas para que o SGS converse com seu ecossistema de ferramentas.
            </p>
            <Link href="/contato">
              <MotionButton size="lg" className="gap-3">
                Solicitar Integração <ArrowRight className="w-5 h-5" />
              </MotionButton>
            </Link>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {integrations.map((item, i) => (
            <MotionCard key={i} delay={i * 0.05}>
              <item.icon className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-black mb-4 text-sgs-navy tracking-tight">{item.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
            </MotionCard>
          ))}
        </div>
      </div>
    </div>
  );
}
