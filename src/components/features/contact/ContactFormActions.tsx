"use client";

import { Send, Loader2 } from "lucide-react";

type ContactFormActionsProps = {
  isSubmitting: boolean;
  disabled: boolean;
};

export function ContactFormActions({ isSubmitting, disabled }: ContactFormActionsProps) {
  return (
    <button
      disabled={disabled}
      className="w-full bg-primary text-white font-black py-5 rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-3 text-lg group/btn disabled:cursor-not-allowed disabled:opacity-70"
    >
      {isSubmitting ? (
        <Loader2 className="w-6 h-6 animate-spin" />
      ) : (
        <>
          Solicitar demonstração{" "}
          <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
        </>
      )}
    </button>
  );
}
