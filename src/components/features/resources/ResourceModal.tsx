"use client";

import {
  ArrowRight,
  CheckCircle2,
  Download,
  Lock,
  Mail,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TurnstileWidget } from "@/components/forms/TurnstileWidget";
import { useLeadForm } from "@/hooks/use-lead-form";
import { getResourceFileUrl } from "@/lib/resource-files";
import type { ResourceFile } from "@/lib/resource-files";

type ResourceModalProps = {
  resource: ResourceFile | null;
  onClose: () => void;
};

export function ResourceModal({ resource, onClose }: ResourceModalProps) {
  const {
    isSubmitting,
    submitted,
    submitError,
    turnstileToken,
    turnstileReset,
    requiresTurnstile,
    setTurnstileToken,
    setTurnstileReset,
    handleSubmit,
    resetForm,
  } = useLeadForm();

  if (!resource) return null;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    await handleSubmit({
      source: "resource",
      email: String(formData.get("email") ?? ""),
      resourceTitle: resource.title,
      analyticsEvent: "resource_download",
      analyticsParams: { resource: resource.title },
    });
  };

  const handleClose = () => {
    if (!submitted) {
      onClose();
      setTurnstileToken("");
      setTurnstileReset((v) => v + 1);
    }
  };

  return (
    <AnimatePresence>
      {resource && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
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
                    <Download className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-black text-sgs-navy tracking-tight leading-none mb-1">Download</h4>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{resource.title}</p>
                  </div>
                </div>

                <h2 id="resource-dialog-title" className="text-3xl font-black text-sgs-navy mb-6 tracking-tight">
                  Onde enviamos seu material?
                </h2>
                <p className="text-slate-500 font-medium mb-10 leading-relaxed">
                  Informe seu e-mail corporativo para receber o link de download e comunicações técnicas relacionadas.
                </p>

                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="relative group">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-primary transition-colors" />
                    <input
                      required
                      aria-label="E-mail corporativo para receber material"
                      type="email"
                      name="email"
                      maxLength={160}
                      placeholder="seu@email.com.br"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-16 pr-6 py-5 text-lg font-bold focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all text-sgs-navy"
                    />
                  </div>
                  <TurnstileWidget
                    className="flex justify-center"
                    onTokenChange={setTurnstileToken}
                    resetSignal={turnstileReset}
                  />
                  <button
                    disabled={isSubmitting || (requiresTurnstile && !turnstileToken)}
                    className="w-full bg-primary text-white font-black py-5 rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-3 text-lg group/btn disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>Receber Agora <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" /></>
                    )}
                  </button>
                </form>

                {submitError && (
                  <p role="alert" className="mt-4 text-sm font-bold text-sgs-red">
                    {submitError}
                  </p>
                )}

                <p className="mt-5 text-[10px] leading-relaxed text-slate-400">
                  Usaremos seu e-mail para enviar o link de download do material solicitado e comunicações técnicas relacionadas. Você pode solicitar descadastro a qualquer momento.
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
                <h2 className="text-3xl font-black text-sgs-navy mb-4 tracking-tight">Material liberado!</h2>
                <p className="text-slate-500 font-medium mb-6 leading-relaxed">
                  Seu download está pronto! Enviamos o link também para o e-mail informado.
                </p>
                <a
                  href={getResourceFileUrl(resource.fileName)}
                  download
                  className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-black text-lg rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all mb-6"
                >
                  <Download className="w-5 h-5" /> Baixar Agora
                </a>
                <button onClick={resetForm} className="text-sm font-bold text-primary hover:underline block mx-auto">
                  Baixar outro material
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
