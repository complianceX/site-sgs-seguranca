"use client";

import { 
  FileCheck, 
  History, 
  ShieldCheck, 
  Globe, 
  Search,
  CheckCircle2,
  QrCode,
  Loader2,
  AlertCircle,
  ArrowRight
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function GovernancePage() {
  const [code, setCode] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [result, setResult] = useState<null | "valid" | "invalid">(null);

  const handleValidate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code) return;
    
    setIsValidating(true);
    setResult(null);
    
    setTimeout(() => {
      setIsValidating(false);
      if (code.toUpperCase().includes("SGS-")) {
        setResult("valid");
      } else {
        setResult("invalid");
      }
    }, 1500);
  };

  return (
    <div className="py-24 lg:py-40 bg-white">
      <div className="container">
        {/* Header - Refined */}
        <div className="max-w-4xl mb-24">
          <FadeIn direction="right">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
              <ShieldCheck className="w-4 h-4" />
              Governança e Compliance
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-sgs-navy mb-10 tracking-tighter leading-[1.05] text-balance">
              A Autoridade Técnica da sua <span className="text-primary">Operação</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium text-pretty max-w-3xl">
              No SGS, documentos oficiais não ficam soltos. Cada artefato tem origem, controle, 
              acesso seguro e uma trilha de verificação completa para garantir a integridade da sua empresa.
            </p>
          </FadeIn>
        </div>

        {/* Core Pillars - Refined */}
        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          <FadeIn direction="right" delay={0.1}>
            <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sgs hover:shadow-premium transition-all duration-700 h-full group">
              <div className="w-20 h-20 bg-primary/5 rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                <FileCheck className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-black mb-6 text-sgs-navy tracking-tight">PDF Final Oficial</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
                Todo documento finalizado no sistema gera um PDF oficial imutável. Este arquivo é o 
                "selo de verdade" da sua operação, pronto para auditorias e fiscalizações.
              </p>
              <ul className="space-y-4">
                {[
                  "Storage governado e seguro",
                  "Hash de integridade único por documento",
                  "URLs assinadas e temporárias para acesso",
                  "Lock automático após finalização"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-500">
                    <div className="w-5 h-5 bg-sgs-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sgs-green" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sgs hover:shadow-premium transition-all duration-700 h-full group">
              <div className="w-20 h-20 bg-sgs-orange/5 rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                <History className="w-10 h-10 text-sgs-orange" />
              </div>
              <h2 className="text-3xl font-black mb-6 text-sgs-navy tracking-tight">Trilha Forense</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
                Mantemos um registro append-only de todos os eventos críticos. Saiba exatamente quem, 
                quando e onde cada documento foi criado, alterado ou visualizado.
              </p>
              <ul className="space-y-4">
                {[
                  "Log de auditoria inalterável",
                  "Rastreabilidade de assinaturas",
                  "Histórico de versões completo",
                  "Evidências digitais vinculadas"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-500">
                    <div className="w-5 h-5 bg-sgs-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sgs-green" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Validation & Registry Simulator - Refined */}
        <section className="bg-white rounded-[3rem] p-10 lg:p-24 mb-32 overflow-hidden relative border border-slate-100 shadow-premium">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full -mr-64 -mt-64"></div>
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <FadeIn direction="right">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-sgs-orange/5 text-sgs-orange rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
                <QrCode className="w-4 h-4" />
                Registry Simulator
              </div>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 text-sgs-navy tracking-tight">Validação Pública</h2>
              <p className="text-slate-500 text-xl font-medium mb-12 leading-relaxed">
                No sistema real, qualquer fiscal ou contratante pode verificar a autenticidade de um documento instantaneamente via QR Code.
              </p>
              
              <form onSubmit={handleValidate} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="text" 
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Ex: SGS-8829-PX"
                    className="flex-grow bg-slate-50 border border-slate-200 rounded-[1.25rem] px-8 py-5 text-lg font-bold text-sgs-navy focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all"
                  />
                  <button 
                    disabled={isValidating || !code}
                    className="bg-primary hover:bg-primary/90 disabled:opacity-50 text-white font-black px-10 py-5 rounded-[1.25rem] flex items-center justify-center gap-3 transition-all shadow-xl shadow-primary/20 text-lg group"
                  >
                    {isValidating ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Validar <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>}
                  </button>
                </div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest italic">Dica: Use um código começando com "SGS-" para o simulador.</p>
              </form>

              <AnimatePresence mode="wait">
                {result && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={cn(
                      "mt-10 p-8 rounded-[2rem] border flex items-start gap-6",
                      result === "valid" ? "bg-sgs-green/5 border-sgs-green/10" : "bg-sgs-red/5 border-sgs-red/10"
                    )}
                  >
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm",
                      result === "valid" ? "bg-sgs-green/10 text-sgs-green" : "bg-sgs-red/10 text-sgs-red"
                    )}>
                      {result === "valid" ? <ShieldCheck className="w-8 h-8" /> : <AlertCircle className="w-8 h-8" />}
                    </div>
                    <div>
                      <h4 className={cn("text-xl font-black mb-2", result === "valid" ? "text-sgs-green" : "text-sgs-red")}>
                        {result === "valid" ? "Documento Autêntico" : "Documento não encontrado"}
                      </h4>
                      <p className="text-slate-500 font-medium leading-relaxed">
                        {result === "valid" 
                          ? "Este documento foi gerado pelo sistema SGS e possui integridade garantida por hash criptográfico." 
                          : "O código informado não corresponde a nenhum documento oficial em nossa base de dados."}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="bg-slate-50/50 border border-slate-100 rounded-[2.5rem] p-10 lg:p-12 shadow-sgs relative group hover:shadow-premium transition-all duration-700">
                <div className="flex items-center justify-between mb-10 border-b border-slate-200/50 pb-6">
                  <div className="flex items-center gap-3">
                    <QrCode className="w-5 h-5 text-primary" />
                    <span className="font-black uppercase tracking-[0.2em] text-[10px] text-sgs-navy">Acesso Externo</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Registry Portal</span>
                </div>
                
                <div className="space-y-8 mb-12">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-black text-sgs-navy mb-1 tracking-tight">Acesso Descentralizado</h4>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">Verificação rápida para fiscais e terceiros autorizados.</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                      <Search className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-black text-sgs-navy mb-1 tracking-tight">Transparência Real</h4>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">Prova de conformidade em tempo real sem necessidade de login.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-10 border-t border-slate-200/50 text-center">
                   <div className="inline-block p-6 bg-white border border-slate-100 rounded-3xl mb-6 shadow-sgs group-hover:rotate-3 transition-transform duration-500">
                      <QrCode className="w-28 h-28 text-sgs-navy" />
                   </div>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Escaneie para validar</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Pendencies Central - Refined */}
        <div className="grid lg:grid-cols-3 gap-16 mb-24 items-center">
          <FadeIn direction="right" className="lg:col-span-1">
            <h2 className="text-4xl lg:text-5xl font-black mb-8 text-sgs-navy tracking-tight leading-tight">Central de Pendências</h2>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              Não perca prazos. Nossa central agrega gargalos documentais e classifica criticidades 
              automaticamente para que você saiba exatamente onde agir primeiro.
            </p>
          </FadeIn>
          
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
             {[
               { title: "Classificação de Risco", desc: "O sistema prioriza pendências com base no impacto operacional e normativo." },
               { title: "Ação Direta", desc: "Links diretos para nova versão, validação ou correção imediata do documento." },
               { title: "Notificação Inteligente", desc: "Alertas via sistema e e-mail para os responsáveis técnicos da unidade." },
               { title: "Visão Multi-site", desc: "Controle todas as suas unidades ou obras em uma única tela de governança." }
             ].map((p, i) => (
               <FadeIn key={i} direction="up" delay={i * 0.1}>
                 <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sgs hover:shadow-premium transition-all duration-700 h-full group">
                   <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <div className="w-2 h-2 bg-primary rounded-full" />
                   </div>
                   <h4 className="text-xl font-black text-sgs-navy mb-4 tracking-tight">{p.title}</h4>
                   <p className="text-slate-500 font-medium leading-relaxed">{p.desc}</p>
                 </div>
               </FadeIn>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
