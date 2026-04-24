"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function NewsletterOverlay() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Show after 10 seconds or scroll 50%
    const timer = setTimeout(() => {
      const hasSeen = localStorage.getItem("sgs-newsletter-seen");
      if (!hasSeen) {
        setIsVisible(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("sgs-newsletter-seen", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed bottom-10 right-10 z-[100] w-full max-w-sm"
        >
          <div className="bg-white rounded-[2.5rem] p-10 shadow-premium border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors duration-1000"></div>
            
            <button 
              onClick={handleClose}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Seu melhor e-mail"
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-12 pr-4 py-3 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all text-sgs-navy"
                    />
                  </div>
                  <button className="w-full bg-sgs-navy text-white font-black py-4 rounded-xl shadow-lg shadow-sgs-navy/10 hover:bg-primary transition-all flex items-center justify-center gap-3 group/btn">
                    Inscrever-se <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </form>
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
