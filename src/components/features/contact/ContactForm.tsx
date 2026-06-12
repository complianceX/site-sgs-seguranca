"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useLeadForm } from "@/hooks/use-lead-form";
import { ContactFormFields } from "./ContactFormFields";
import { ContactFormActions } from "./ContactFormActions";
import { ContactFormStatus } from "./ContactFormStatus";
import { ContactFormTurnstile } from "./ContactFormTurnstile";

export function ContactForm() {
  const router = useRouter();
  const {
    isSubmitting,
    submitted,
    submitError,
    turnstileToken,
    turnstileReset,
    requiresTurnstile,
    setHoneypot,
    setTurnstileToken,
    setTurnstileReset,
    handleSubmit,
  } = useLeadForm({
    onSuccess: () => router.push("/obrigado"),
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const { ok } = await handleSubmit({
      source: "contact",
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      whatsapp: String(formData.get("whatsapp") ?? ""),
      message: String(formData.get("message") ?? ""),
      analyticsEvent: "generate_lead",
      analyticsParams: { form: "contact" },
    });

    if (ok) {
      form.reset();
      setHoneypot("");
      setTurnstileToken("");
      setTurnstileReset((value) => value + 1);
    }
  };

  return (
    <div className="bg-white border border-slate-100 rounded-[3rem] p-10 lg:p-16 shadow-premium relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full -mr-48 -mt-48"></div>
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onSubmit={onSubmit}
            className="space-y-8 relative z-10"
          >
            <ContactFormFields onHoneypotChange={setHoneypot} />
            <ContactFormTurnstile
              onTokenChange={setTurnstileToken}
              resetSignal={turnstileReset}
            />
            <ContactFormActions
              isSubmitting={isSubmitting}
              disabled={isSubmitting || (requiresTurnstile && !turnstileToken)}
            />
            <ContactFormStatus submitted={false} submitError={submitError} />
          </motion.form>
        ) : (
          <div className="relative z-10">
            <ContactFormStatus submitted={true} submitError="" />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
