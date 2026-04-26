"use client";

import {
  Cloud,
  Mail,
  Calendar,
  Database,
  Cpu,
  Shield,
  ArrowRight,
  ExternalLink,
  Code2,
  Box,
  MessageSquare
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";

const integrationGroups = [
  {
    category: "Inteligência & IA",
    integrations: [
      {
        name: "OpenAI / Sophie",
        icon: Cpu,
        desc: "Motor de IA assistiva para geração de rascunhos de APR, PT e DDS, além de análise de imagens de risco.",
        features: ["Sanitização de PII", "Consentimento do Usuário", "Circuit Breaker"]
      },
    ]
  },
  {
    category: "Produtividade & Eventos",
    integrations: [
      {
        name: "Google Calendar API",
        icon: Calendar,
        desc: "Sincronização automática de vencimentos de exames, treinamentos e eventos operacionais no calendário.",
        features: ["Timezone Brasil", "Eventos Críticos", "Alertas Push"]
      },
    ]
  },
  {
    category: "Comunicação & Notificações",
    integrations: [
      {
        name: "Brevo / SMTP / Resend",
        icon: Mail,
        desc: "Fluxos de e-mail automatizados para envio de documentos, alertas de pendências e notificações de sistema.",
        features: ["Filas BullMQ", "Logs de Envio", "Retries Automáticos"]
      },
    ]
  },
  {
    category: "Storage & Infraestrutura",
    integrations: [
      {
        name: "Cloudflare R2 / S3",
        icon: Box,
        desc: "Armazenamento governado de PDFs oficiais, evidências em vídeo e anexos com URLs assinadas.",
        features: ["Integridade Hash", "URLs Temporárias", "Disaster Recovery"]
      },
      {
        name: "PostgreSQL gerenciado",
        icon: Database,
        desc: "Banco de dados relacional para dados estruturados da plataforma, com governança de schema e isolamento por empresa.",
        features: ["Isolamento por Empresa", "Migrations Versionadas", "Operação Gerenciada"]
      },
    ]
  }
];

export function IntegrationsPage() {
  return (
    <div className="py-24 lg:py-40 bg-white">
      <div className="container">
        <div className="max-w-4xl mb-24">
          <FadeIn direction="right">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
              <Box className="w-4 h-4" />
              Ecossistema SGS
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-sgs-navy mb-10 tracking-tighter leading-[1.05] text-balance">
              Integrações que potencializam sua <span className="text-primary">Operação</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium text-pretty max-w-3xl">
              O SGS não é uma ilha. Nossa arquitetura foi desenhada para se conectar aos melhores provedores
              de tecnologia, garantindo escalabilidade e segurança para seus dados.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-32">
          {integrationGroups.map((group, gIdx) => (
            <section key={gIdx}>
              <FadeIn direction="up">
                <div className="flex items-center gap-6 mb-12">
                  <h2 className="text-2xl lg:text-3xl font-black text-sgs-navy tracking-tight whitespace-nowrap">
                    {group.category}
                  </h2>
                  <div className="h-[1px] w-full bg-slate-100"></div>
                </div>
              </FadeIn>
              <div className="grid md:grid-cols-2 gap-10">
                {group.integrations.map((int, iIdx) => (
                  <FadeIn key={iIdx} direction="up" delay={iIdx * 0.1}>
                    <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 lg:p-12 hover:shadow-premium transition-all duration-700 h-full flex flex-col group shadow-sgs">
                      <div className="flex items-center justify-between mb-8">
                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                          <int.icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="px-4 py-1.5 bg-sgs-green/5 text-sgs-green rounded-full text-[10px] font-black uppercase tracking-widest border border-sgs-green/10">
                          Ativo
                        </div>
                      </div>
                      <h3 className="text-2xl font-black mb-4 text-sgs-navy tracking-tight group-hover:text-primary transition-colors">{int.name}</h3>
                      <p className="text-slate-500 font-medium leading-relaxed mb-10 flex-grow text-lg">
                        {int.desc}
                      </p>
                      <div className="space-y-5 pt-8 border-t border-slate-50">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Recursos Principais</p>
                        <div className="flex flex-wrap gap-3">
                          {int.features.map((feat, fIdx) => (
                            <span key={fIdx} className="text-[11px] font-black text-slate-500 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 uppercase tracking-tight">
                              {feat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Developer / API Section - Refined */}
        <FadeIn direction="up">
          <div className="mt-32 p-12 lg:p-24 bg-sgs-navy text-white rounded-[3rem] relative overflow-hidden group shadow-2xl shadow-sgs-navy/20">
            <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-3 mb-10">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                    <Code2 className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl lg:text-4xl font-black tracking-tight leading-none">
                    API para Desenvolvedores
                  </h2>
                </div>
                <p className="text-white/60 text-xl font-medium mb-12 leading-relaxed">
                  Exemplo ilustrativo de integração para equipes técnicas. APIs e chaves reais ficam no ambiente operacional do SGS, com controles próprios de autenticação e autorização.
                </p>
                <div className="flex flex-wrap gap-6">
                  <button className="px-10 py-5 bg-primary text-white rounded-2xl font-black text-lg hover:bg-primary/90 transition-all flex items-center gap-3 shadow-xl shadow-primary/20 group/btn">
                    Conversar sobre integrações <ExternalLink className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                  </button>
                  <button className="px-10 py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-black text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                    Agendar avaliação técnica
                  </button>
                </div>
              </div>
              <div className="bg-slate-900 rounded-3xl p-10 font-mono text-sm border border-white/5 shadow-2xl hidden lg:block transform group-hover:-translate-y-2 transition-transform duration-700">
                <div className="flex gap-2 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="space-y-2">
                  <p className="text-primary mb-4 font-black">GET /exemplo/kpis/site-status</p>
                  <p className="text-white/30">{"{"}</p>
                  <p className="pl-6 text-white/80">"site": <span className="text-sgs-orange">"Planta-Industrial-04"</span>,</p>
                  <p className="pl-6 text-white/80">"status": <span className="text-sgs-green">"compliant"</span>,</p>
                  <p className="pl-6 text-white/80">"pending_aprs": <span className="text-primary">2</span>,</p>
                  <p className="pl-6 text-white/80">"last_dds": <span className="text-sgs-orange">"2026-04-23"</span></p>
                  <p className="text-white/30">{"}"}</p>
                </div>
              </div>
            </div>
            {/* Premium shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full -mr-64 -mt-64 group-hover:bg-primary/10 transition-all duration-1000"></div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
