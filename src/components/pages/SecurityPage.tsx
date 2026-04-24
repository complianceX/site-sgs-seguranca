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
import { motion } from "framer-motion";

export function SecurityPage() {
  return (
    <div className="py-24 lg:py-40 bg-white">
      <div className="container">
        {/* Header - Refined */}
        <div className="max-w-4xl mb-24">
          <FadeIn direction="right">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
              <ShieldCheck className="w-4 h-4" />
              Segurança de Elite
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-sgs-navy mb-10 tracking-tighter leading-[1.05] text-balance">
              SST com <span className="text-primary">Conformidade</span> Total
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium text-pretty max-w-3xl">
              O SGS foi desenhado considerando dados sensíveis e os mais rigorosos padrões 
              de conformidade global. Segurança não é um adicional, é o nosso alicerce.
            </p>
          </FadeIn>
        </div>

        {/* Security Grid - Refined */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {[
            {
              icon: Server,
              title: "Multi-tenancy com RLS",
              desc: "Isolamento lógico rigoroso no nível do banco de dados (Row Level Security), garantindo que um tenant jamais acesse dados de outro."
            },
            {
              icon: Lock,
              title: "Criptografia em Repouso",
              desc: "Dados sensíveis são criptografados no PostgreSQL usando AES-256. Documentos possuem criptografia server-side ativada por padrão."
            },
            {
              icon: Key,
              title: "Zero Trust Architecture",
              desc: "Nenhum acesso é confiado por padrão. Todas as requisições passam por verificação de JWT, Tenant ID e permissões RBAC."
            },
            {
              icon: EyeOff,
              title: "Sanitização via IA",
              desc: "Nossa camada de middleware remove PII (nomes, CPFs) antes de enviar dados para provedores de IA, protegendo a identidade."
            },
            {
              icon: FileLock,
              title: "Hardened Auth",
              desc: "Implementação robusta de MFA (TOTP), proteção contra brute-force com Rate Limiting agressivo e gestão segura de segredos."
            },
            {
              icon: Database,
              title: "Infraestrutura Imutável",
              desc: "Nossos servidores rodam em containers efêmeros e imutáveis, reduzindo a superfície de ataque e garantindo deploy determinístico."
            }
          ].map((item, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.05}>
              <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sgs hover:shadow-premium transition-all duration-700 h-full group">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-sm">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-sgs-navy tracking-tight">{item.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* LGPD Focus - Refined */}
        <FadeIn direction="up">
          <section className="bg-white rounded-[3rem] p-10 lg:p-24 mb-32 relative overflow-hidden border border-slate-100 shadow-premium group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sgs-green/5 blur-[100px] rounded-full -mr-64 -mt-64 group-hover:bg-sgs-green/10 transition-all duration-1000"></div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-sgs-green/5 text-sgs-green rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
                Privacy by Design
              </div>
              <h2 className="text-4xl lg:text-6xl font-black mb-8 text-sgs-navy tracking-tight">Compromisso com a LGPD</h2>
              <p className="text-slate-500 text-xl font-medium mb-16 leading-relaxed max-w-3xl mx-auto">
                Implementamos controles nativos para que sua empresa esteja sempre em conformidade 
                com a Lei Geral de Proteção de Dados de forma automática.
              </p>
              <div className="grid sm:grid-cols-2 gap-10 text-left">
                <div className="space-y-6">
                  {[
                    "Consentimento versionado e específico por finalidade.",
                    "Direito ao esquecimento com rotas de exclusão segura.",
                    "Trilha de auditoria completa para acesso a dados."
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100 hover:bg-white hover:shadow-sgs transition-all duration-500 group/item">
                      <div className="w-8 h-8 bg-sgs-green/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <CheckCircle2 className="w-5 h-5 text-sgs-green" />
                      </div>
                      <p className="text-sm font-bold text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-6">
                  {[
                    "CPF tratado como dado sensível com hash/ciphertext.",
                    "Revogação de consentimento a qualquer momento.",
                    "Políticas de retenção configuráveis por tipo de dado."
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100 hover:bg-white hover:shadow-sgs transition-all duration-500 group/item">
                      <div className="w-8 h-8 bg-sgs-green/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <CheckCircle2 className="w-5 h-5 text-sgs-green" />
                      </div>
                      <p className="text-sm font-bold text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Observability & Monitoring - Refined */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <FadeIn direction="right">
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
                Disponibilidade 99.9%
              </div>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 text-sgs-navy tracking-tight">Monitoramento 24/7</h2>
              <p className="text-xl text-slate-500 leading-relaxed font-medium mb-12">
                Nossa infraestrutura é monitorada em tempo real para garantir disponibilidade máxima e detecção precoce de anomalias operacionais.
              </p>
              <div className="space-y-4">
                {[
                  "Captura de exceções e erros em tempo real.",
                  "Logs estruturados em formato JSON para auditoria.",
                  "Health checks constantes de serviços e integrações."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sgs hover:shadow-sgs-hover transition-all duration-500">
                    <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-black text-sm text-sgs-navy uppercase tracking-tight">{item}</span>
                  </div>
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
