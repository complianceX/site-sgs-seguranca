"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { TurnstileWidget } from "@/components/forms/TurnstileWidget";

export function NewsletterOverlay() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileReset, setTurnstileReset] = useState(0);
  const [submitError, setSubmitError] = useState("");
  const requiresTurnstile = process.env.NODE_ENV === "production" || Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

  useEffect(() => {
    const canShow = () => {
      const hasSeen = localStorage.getItem("sgs-newsletter-seen");
      const cookieConsentResolved = localStorage.getItem("sgs-cookie-consent");
      return !hasSeen && !!cookieConsentResolved;
    };

    const maybeShow = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (canShow() && progress > 0.45) {
        setIsVisible(true);
        window.removeEventListener("scroll", maybeShow);
      }
    };

    const timer = setTimeout(maybeShow, 30000);
    window.addEventListener("scroll", maybeShow, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", maybeShow);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("sgs-newsletter-seen", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (requiresTurnstile && !turnstileToken) {
      setSubmitError("Conclua a verificação anti-spam antes de enviar.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "newsletter",
          email,
          turnstileToken,
        }),
      });
      const result = (await response.json()) as { success: boolean; error?: string };

      if (!response.ok || !result.success) {
        setSubmitError(result.error ?? "Não foi possível registrar o e-mail agora.");
        return;
      }

      setSubmitted(true);
      setTurnstileToken("");
      setTurnstileReset((value) => value + 1);
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch {
      setSubmitError("Falha de conexão. Tente novamente em instantes.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          className="fixed left-4 right-4 bottom-4 z-[100] w-auto max-w-none sm:left-auto sm:right-10 sm:bottom-10 sm:max-w-sm"
        >
          <div className="bg-white rounded-[2.5rem] p-10 shadow-premium border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors duration-1000"></div>

            <button
              onClick={handleClose}
              aria-label="Fechar inscrição na newsletter"
              className="absolute top-6 right-6 text-slate-300 hover:text-sgs-navy transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-primary/10">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-sgs-navy mb-4 tracking-tight leading-tight">
                  Mantenha-se <span className="text-primary">Atualizado</span>
                </h3>
                <p className="text-sm text-slate-500 font-medium mb-8 leading-relaxed">
                  Receba nossa curadoria semanal de NRs, tecnologia aplicada ao SST e gestão de risco.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                    <input
                      required
                      type="email"
                      maxLength={160}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Seu melhor e-mail"
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-12 pr-4 py-3 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all text-sgs-navy"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting || (requiresTurnstile && !turnstileToken)}
                    className="w-full bg-sgs-navy text-white font-black py-4 rounded-xl shadow-lg shadow-sgs-navy/10 hover:bg-primary transition-all flex items-center justify-center gap-3 group/btn disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Enviando..." : "Inscrever-se"} <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                  <TurnstileWidget
                    onTokenChange={setTurnstileToken}
                    resetSignal={turnstileReset}
                  />
                </form>
                {submitError && (
                  <p role="alert" className="mt-4 text-xs font-bold text-sgs-red">
                    {submitError}
                  </p>
                )}
                <p className="mt-4 text-[10px] leading-relaxed text-slate-400">
                  Ao informar seu e-mail, você autoriza o envio de conteúdo técnico do SGS e pode solicitar descadastro a qualquer momento.
                </p>
              </div>
            ) : (
              <div className="relative z-10 text-center py-6">
                <div className="w-16 h-16 bg-sgs-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-sgs-green" />
                </div>
                <h3 className="text-xl font-black text-sgs-navy mb-2 tracking-tight">Bem-vindo!</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  Você agora faz parte da nossa comunidade técnica.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
