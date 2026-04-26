"use client";

import {
  ShieldCheck,
  Lock,
  Key,
  Database,
  FileLock,
  UserCheck,
  Server,
  EyeOff,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { MotionText } from "@/components/ui/MotionText";
import { MotionCard } from "@/components/ui/MotionCard";
import { TechnicalElements } from "@/components/ui/TechnicalElements";
import { motion } from "framer-motion";
import { transitions } from "@/lib/motion";

export function SecurityPage() {
  return (
    <div className="py-24 lg:py-40 bg-white relative overflow-hidden">
      {/* Background Technical Decoration */}
      <div className="opacity-30">
        <TechnicalElements />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-24">
          <FadeIn direction="none" stagger>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
              <ShieldCheck className="w-4 h-4" />
              Segurança e LGPD
            </div>
            <MotionText as="h1" className="text-5xl md:text-7xl font-black text-sgs-navy mb-10 tracking-tighter leading-[1.05] text-balance">
              Segurança, privacidade e governança para SST
            </MotionText>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium text-pretty max-w-3xl">
              O SGS foi desenhado considerando dados sensíveis, isolamento entre empresas e controles que ajudam sua operação a trabalhar com mais rastreabilidade.
            </p>
          </FadeIn>
        </div>

        {/* Security Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {[
            {
              icon: Server,
              title: "Isolamento multi-tenant",
              desc: "Arquitetura projetada para separar dados por empresa e reduzir risco de exposição cruzada entre clientes."
            },
            {
              icon: Lock,
              title: "Proteção de dados sensíveis",
              desc: "Controles de proteção, armazenamento governado e acesso restrito ajudam a manter documentos e evidências sob controle."
            },
            {
              icon: Key,
              title: "Acesso por identidade e permissão",
              desc: "Requisições e áreas sensíveis dependem de autenticação, contexto da empresa e permissões compatíveis com a função do usuário."
            },
            {
              icon: EyeOff,
              title: "Sanitização via IA",
              desc: "Fluxos de IA devem passar por minimização e sanitização de dados antes de qualquer processamento externo autorizado."
            },
            {
              icon: FileLock,
              title: "Autenticação endurecida",
              desc: "Camadas de autenticação, proteção contra abuso e gestão de sessão reduzem risco de acesso indevido."
            },
            {
              icon: Database,
              title: "Infraestrutura Imutável",
              desc: "Nossos servidores rodam em containers efêmeros e imutáveis, reduzindo a superfície de ataque e garantindo deploy determinístico."
            }
          ].map((item, i) => (
            <MotionCard key={i} delay={i * 0.05}>
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-sm">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-sgs-navy tracking-tight">{item.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                {item.desc}
              </p>
            </MotionCard>
          ))}
        </div>

        {/* LGPD Focus */}
        <FadeIn direction="up">
          <MotionCard className="p-10 lg:p-24 mb-32 relative overflow-hidden group bg-white">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sgs-green/5 blur-[100px] rounded-full -mr-64 -mt-64 group-hover:bg-sgs-green/10 transition-all duration-1000"></div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-sgs-green/5 text-sgs-green rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
                Privacidade desde a concepção
              </div>
              <h2 className="text-4xl lg:text-6xl font-black mb-8 text-sgs-navy tracking-tight">Compromisso com a LGPD</h2>
              <p className="text-slate-500 text-xl font-medium mb-16 leading-relaxed max-w-3xl mx-auto">
                Implementamos controles para apoiar a conformidade com a Lei Geral de Proteção de Dados, mantendo decisões e responsabilidades alinhadas à sua governança interna.
              </p>
              <div className="grid sm:grid-cols-2 gap-10 text-left">
                <div className="space-y-6">
                  {[
                    "Consentimento versionado e específico por finalidade.",
                    "Processos para apoiar solicitações de titulares quando aplicável.",
                    "Trilha de auditoria completa para acesso a dados."
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 items-center p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100 hover:bg-white hover:shadow-sgs transition-all duration-500 group/item"
                    >
                      <div className="w-8 h-8 bg-sgs-green/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <CheckCircle2 className="w-5 h-5 text-sgs-green" />
                      </div>
                      <p className="text-sm font-bold text-slate-600">{item}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-6">
                  {[
                    "Dados pessoais tratados com controles proporcionais ao risco.",
                    "Revogação de consentimento a qualquer momento.",
                    "Políticas de retenção configuráveis por tipo de dado."
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 items-center p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100 hover:bg-white hover:shadow-sgs transition-all duration-500 group/item"
                    >
                      <div className="w-8 h-8 bg-sgs-green/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <CheckCircle2 className="w-5 h-5 text-sgs-green" />
                      </div>
                      <p className="text-sm font-bold text-slate-600">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </MotionCard>
        </FadeIn>

        {/* Observability & Monitoring */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <FadeIn direction="right">
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
                Observabilidade operacional
              </div>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 text-sgs-navy tracking-tight">Monitoramento e health checks</h2>
              <p className="text-xl text-slate-500 leading-relaxed font-medium mb-12">
                A operação do SGS usa monitoramento, logs e verificações de saúde para detectar falhas e apoiar respostas técnicas com mais rapidez.
              </p>
              <div className="space-y-4">
                {[
                  "Captura de exceções e erros em tempo real.",
                  "Logs estruturados em formato JSON para auditoria.",
                  "Health checks constantes de serviços e integrações."
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, ease: transitions.expo }}
                    className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sgs hover:shadow-sgs-hover transition-all duration-500"
                  >
                    <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-black text-sm text-sgs-navy uppercase tracking-tight">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="relative aspect-square lg:aspect-video bg-sgs-navy rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center group">
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] group-hover:scale-110 transition-transform duration-[10s]"></div>
               <div className="relative z-10 flex flex-col items-center">
                 <ShieldCheck className="w-40 h-40 text-primary animate-pulse mb-6" />
                 <p className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">System Protected</p>
               </div>
               <div className="absolute bottom-10 left-10 right-10 h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="h-full bg-gradient-to-r from-primary to-sgs-blue shadow-[0_0_15px_rgba(2,132,199,0.5)]"
                  />
               </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
