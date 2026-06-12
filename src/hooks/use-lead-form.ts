"use client";

import { useState, useCallback } from "react";
import { submitLead } from "@/lib/submit-lead";
import type { LeadResponse } from "@/types/lead";

type UseLeadFormOptions = {
  onSuccess?: () => void;
};

export function useLeadForm(opts?: UseLeadFormOptions) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [leadResult, setLeadResult] = useState<LeadResponse | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileReset, setTurnstileReset] = useState(0);
  const [honeypot, setHoneypot] = useState("");

  const requiresTurnstile =
    process.env.NODE_ENV === "production" ||
    Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

  const resetForm = useCallback(() => {
    setSubmitted(false);
    setSubmitError("");
    setLeadResult(null);
    setTurnstileToken("");
    setTurnstileReset((v) => v + 1);
    setHoneypot("");
  }, []);

  const handleSubmit = useCallback(
    async (formData: Record<string, unknown>) => {
      setSubmitError("");
      setLeadResult(null);

      if (requiresTurnstile && !turnstileToken) {
        setSubmitError("Conclua a verificação anti-spam antes de enviar.");
        return { ok: false as const };
      }

      setIsSubmitting(true);

      try {
        const { ok, result } = await submitLead({
          body: { ...formData, honeypot, turnstileToken },
        });

        if (!ok) {
          setSubmitError(
            result.error ?? "Não foi possível processar sua solicitação."
          );
          return { ok: false as const };
        }

        setLeadResult(result);
        setSubmitted(true);
        opts?.onSuccess?.();
        return { ok: true as const, result };
      } catch {
        setSubmitError("Falha de conexão. Tente novamente em instantes.");
        return { ok: false as const };
      } finally {
        setIsSubmitting(false);
      }
    },
    [honeypot, turnstileToken, requiresTurnstile, opts]
  );

  return {
    isSubmitting,
    submitted,
    submitError,
    leadResult,
    turnstileToken,
    turnstileReset,
    honeypot,
    requiresTurnstile,
    setHoneypot,
    setTurnstileToken,
    setTurnstileReset,
    setSubmitError,
    setSubmitted,
    resetForm,
    handleSubmit,
  };
}
