"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

type ContactFormStatusProps = {
  submitted: boolean;
  submitError: string;
};

export function ContactFormStatus({ submitted, submitError }: ContactFormStatusProps) {
  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 relative z-10"
        role="status"
      >
        <div className="w-20 h-20 bg-sgs-green/10 text-sgs-green rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Solicitação registrada</h3>
        <p className="text-muted-foreground mb-8">
          Recebemos sua mensagem e vamos retornar pelo contato informado.
        </p>
      </motion.div>
    );
  }

  return (
    <>
      {submitError && (
        <p role="alert" className="text-sm font-bold text-sgs-red text-center">
          {submitError}
        </p>
      )}
      <p className="text-[10px] font-bold text-center text-slate-400 uppercase tracking-widest">
        Usaremos seus dados apenas para responder este contato. Consulte
        nossa Política de Privacidade.
      </p>
    </>
  );
}
