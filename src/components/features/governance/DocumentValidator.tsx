"use client";

import { useState } from "react";
import { ArrowRight, QrCode, Loader2, AlertCircle, ShieldCheck, Globe, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations/FadeIn";

export function DocumentValidator() {
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
      setResult(code.toUpperCase().includes("SGS-") ? "valid" : "invalid");
    }, 1500);
  };

  return (
    <section className="bg-white rounded-[3rem] p-10 lg:p-24 mb-32 overflow-hidden relative border border-slate-100 shadow-premium">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full -mr-64 -mt-64"></div>
      <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <FadeIn direction="right">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-sgs-orange/5 text-sgs-orange rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
            <QrCode className="w-4 h-4" />
            Simulação de validação documental
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
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest italic">Demonstração ilustrativa do fluxo de validação pública.</p>
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
              {[
                { icon: Globe, title: "Acesso Descentralizado", desc: "Verificação rápida para fiscais e terceiros autorizados." },
                { icon: Search, title: "Transparência Real", desc: "Prova de conformidade em tempo real sem necessidade de login." },
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-black text-sgs-navy mb-1 tracking-tight">{item.title}</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
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
  );
}
