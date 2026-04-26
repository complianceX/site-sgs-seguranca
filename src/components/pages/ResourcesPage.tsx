"use client";

import {
  Download,
  FileText,
  Shield,
  Layout,
  Zap,
  ArrowRight,
  CheckCircle2,
  Lock,
  Mail,
  FileCheck
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const resources = [
  {
    id: 1,
    title: "Template APR Profissional",
    type: "Documento (DOCX)",
    desc: "Modelo completo de Análise Preliminar de Riscos estruturado conforme a NR-01, pronto para preencher.",
    icon: FileText,
    color: "primary"
  },
  {
    id: 2,
    title: "Checklist de Auditoria NR-10",
    type: "Planilha (XLSX)",
    desc: "Planilha automatizada para auditorias de segurança em eletricidade, com pontuação e priorização.",
    icon: Layout,
    color: "sgs-orange"
  },
  {
    id: 3,
    title: "Guia de Implementação GRO/PGR",
    type: "E-book (PDF)",
    desc: "Passo a passo estratégico para implementar o Gerenciamento de Riscos Ocupacionais na sua empresa.",
    icon: Shield,
    color: "sgs-green"
  },
  {
    id: 4,
    title: "Modelo de PT para Altura",
    type: "Documento (PDF)",
    desc: "Permissão de Trabalho específica para atividades críticas em altura, validada por engenheiros de segurança.",
    icon: FileCheck,
    color: "primary"
  }
];

type LeadResponse = {
  success: boolean;
  error?: string;
  referenceId?: string;
  delivery?: "webhook" | "local";
};

export function ResourcesPage() {
  const [selectedResource, setSelectedResource] = useState<typeof resources[0] | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [leadResult, setLeadResult] = useState<LeadResponse | null>(null);

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !selectedResource) return;

    setIsSubmitting(true);
    setSubmitError("");
    setLeadResult(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "resource",
          email,
          resourceTitle: selectedResource.title,
        }),
      });
      const result = (await response.json()) as LeadResponse;

      if (!response.ok || !result.success) {
        setSubmitError(result.error ?? "Não foi possível solicitar o material agora.");
        return;
      }

      setLeadResult(result);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setSelectedResource(null);
        setEmail("");
        setLeadResult(null);
      }, 4500);
    } catch {
      setSubmitError("Falha de conexão. Tente novamente em instantes.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-24 lg:py-40 bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-4xl mb-24">
          <FadeIn direction="right">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-sgs-orange/5 text-sgs-orange rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
              <Download className="w-4 h-4" />
              Central de Recursos
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-sgs-navy mb-10 tracking-tighter leading-[1.05] text-balance">
              Ferramentas <span className="text-primary">Gratuitas</span> para sua Equipe
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium text-pretty max-w-3xl">
              Baixe templates, guias e checklists de apoio para estruturar sua rotina de SST.
              Revise e adapte cada material com o responsável técnico da sua empresa.
            </p>
          </FadeIn>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {resources.map((res, i) => (
            <FadeIn key={res.id} direction="up" delay={i * 0.1}>
              <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 lg:p-12 shadow-sgs hover:shadow-premium transition-all duration-700 h-full flex flex-col group">
                <div className="flex items-center justify-between mb-10">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-sm",
                    res.color === "primary" ? "bg-primary/5" :
                    res.color === "sgs-orange" ? "bg-sgs-orange/5" : "bg-sgs-green/5"
                  )}>
                    <res.icon className={cn("w-8 h-8",
                      res.color === "primary" ? "text-primary" :
                      res.color === "sgs-orange" ? "text-sgs-orange" : "text-sgs-green"
                    )} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 border border-slate-100 px-4 py-1.5 rounded-full">
                    {res.type}
                  </span>
                </div>
                <h3 className="text-2xl font-black mb-4 text-sgs-navy tracking-tight">{res.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-10 flex-grow text-lg">
                  {res.desc}
                </p>
                <button
                  onClick={() => setSelectedResource(res)}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-50 text-sgs-navy rounded-2xl font-black text-sm hover:bg-primary hover:text-white transition-all shadow-sm group/btn"
                >
                  Download Grátis <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Lead Capture Modal */}
        <AnimatePresence>
          {selectedResource && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => !submitted && setSelectedResource(null)}
                className="absolute inset-0 bg-sgs-navy/60 backdrop-blur-md"
              />
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="resource-dialog-title"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white rounded-[3rem] p-10 lg:p-16 max-w-xl w-full relative shadow-2xl overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 blur-[80px] rounded-full -mr-32 -mt-32"></div>

                {!submitted ? (
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <selectedResource.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-black text-sgs-navy tracking-tight leading-none mb-1">Download</h4>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{selectedResource.title}</p>
                      </div>
                    </div>

                    <h2 id="resource-dialog-title" className="text-3xl font-black text-sgs-navy mb-6 tracking-tight">Onde enviamos seu material?</h2>
                    <p className="text-slate-500 font-medium mb-10 leading-relaxed">
                      Informe seu e-mail corporativo para preparar a solicitação do material e receber comunicações técnicas relacionadas.
                    </p>

                    <form onSubmit={handleDownload} className="space-y-6">
                      <div className="relative group">
                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-primary transition-colors" />
                        <input
                          required
                          aria-label="E-mail corporativo para receber material"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="seu@email.com.br"
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-16 pr-6 py-5 text-lg font-bold focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all text-sgs-navy"
                        />
                      </div>
                      <button
                        disabled={isSubmitting}
                        className="w-full bg-primary text-white font-black py-5 rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-3 text-lg group/btn disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {isSubmitting ? "Enviando..." : "Receber Agora"} <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </form>
                    {submitError && (
                      <p role="alert" className="mt-4 text-sm font-bold text-sgs-red">
                        {submitError}
                      </p>
                    )}
                    <p className="mt-5 text-[10px] leading-relaxed text-slate-400">
                      Usaremos seu e-mail para enviar o material solicitado e comunicações técnicas relacionadas. Você pode solicitar descadastro a qualquer momento.
                    </p>

                    <div className="mt-10 flex items-center gap-3 justify-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                      <Lock className="w-3 h-3" /> Spam Free • Privacidade Garantida
                    </div>
                  </div>
                ) : (
                  <div className="relative z-10 text-center py-10">
                    <div className="w-20 h-20 bg-sgs-green/10 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-sm">
                      <CheckCircle2 className="w-10 h-10 text-sgs-green" />
                    </div>
                    <h2 className="text-3xl font-black text-sgs-navy mb-4 tracking-tight">Solicitação registrada</h2>
                    <p className="text-slate-500 font-medium mb-8 leading-relaxed">
                      Vamos enviar o material para o e-mail informado.
                      {leadResult?.referenceId ? ` Protocolo: ${leadResult.referenceId.slice(0, 8).toUpperCase()}.` : ""}
                    </p>
                    {leadResult?.delivery === "local" && (
                      <p className="text-xs font-bold text-slate-400 mb-8">
                        Encaminhamento externo ainda não configurado neste ambiente. Para urgências, escreva para contato@sgsseguranca.com.br.
                      </p>
                    )}
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Fechando em instantes...</p>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Benefits Section */}
        <FadeIn direction="up">
          <div className="mt-32 p-12 lg:p-24 bg-sgs-navy text-white rounded-[3rem] relative overflow-hidden group shadow-2xl shadow-sgs-navy/20">
            <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <div>
                <h2 className="text-3xl lg:text-5xl font-black mb-8 tracking-tight leading-tight">Por que baixar nossos recursos?</h2>
                <div className="space-y-8">
                  {[
                    { title: "Apoio Técnico", desc: "Materiais pensados para orientar rotinas de SST e acelerar a padronização interna." },
                    { title: "Base Editável", desc: "Templates estruturados para adaptação e revisão pelo responsável técnico." },
                    { title: "Pronto para Uso", desc: "Arquivos editáveis para você adaptar à realidade da sua empresa." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group/item">
                      <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10 group-hover/item:scale-110 transition-transform">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-black mb-2 tracking-tight">{item.title}</h4>
                        <p className="text-white/50 font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block relative">
                 <div className="aspect-square bg-white/5 rounded-full border border-white/5 flex items-center justify-center animate-pulse">
                    <Zap className="w-40 h-40 text-primary/30" />
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
