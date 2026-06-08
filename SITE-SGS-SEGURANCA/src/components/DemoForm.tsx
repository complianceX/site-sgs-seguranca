import { useState, useCallback, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2, Mail, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { submitDemo, type DemoResult } from "@/lib/demo";
import type { DemoFormData } from "@/lib/api";
import { trackEvent } from "@/lib/analytics";
import { TurnstileWidget } from "@/components/TurnstileWidget";
import { Confetti } from "@/components/animations/Confetti";

interface DemoFormProps {
  triggerLabel: string;
  triggerClassName?: string;
  showArrow?: boolean;
}

interface FormFields {
  name: string;
  email: string;
  phone: string;
  company: string;
  employees: string;
  needs: string;
}

const initialFields: FormFields = {
  name: "",
  email: "",
  phone: "",
  company: "",
  employees: "",
  needs: "",
};

type Status = "idle" | "loading" | "success" | "error";

export function DemoForm({
  triggerLabel,
  triggerClassName = "",
  showArrow = false,
}: DemoFormProps) {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [errors, setErrors] = useState<Partial<Record<keyof FormFields, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMsg, setServerMsg] = useState("");
  const [open, setOpen] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [shake, setShake] = useState(false);

  const handleChange = useCallback((field: keyof FormFields, value: string) => {
    setFields((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }, [errors]);

  const handleTurnstileToken = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  function validate(): boolean {
    const errs: Partial<Record<keyof FormFields, string>> = {};
    if (fields.name.trim().length < 2) errs.name = "Informe seu nome.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errs.email = "Informe um e-mail válido.";
    const digits = fields.phone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 11) errs.phone = "Informe um telefone com DDD.";
    if (fields.company.trim().length < 2) errs.company = "Informe sua empresa.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!validate()) {
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return;
    }

    trackEvent("form_demo_click", "Agendar demonstração");
    setStatus("loading");
    setServerMsg("");

    try {
      const data: DemoFormData = {
        name: fields.name,
        email: fields.email,
        phone: fields.phone,
        company: fields.company,
        employees: fields.employees || undefined,
        needs: fields.needs || undefined,
        turnstileToken: turnstileToken || undefined,
      };
      const result: DemoResult = await (submitDemo as (data: DemoFormData) => Promise<DemoResult>)(data);

      setStatus(result.success ? "success" : "error");
      setServerMsg(result.message ?? "");

      if (result.success) {
        trackEvent("form_demo_success", "Formulário enviado");
        setFields(initialFields);
        setTurnstileToken("");
      } else {
        trackEvent("form_demo_error", result.message);
      }
    } catch {
      setStatus("error");
      setServerMsg("Erro de conexão. Verifique sua internet e tente novamente.");
      trackEvent("form_demo_error", "Erro de conexão");
    }
  }

  function handleClose() {
    setOpen(false);
    setTimeout(() => {
      setStatus("idle");
      setServerMsg("");
      setErrors({});
      setTurnstileToken("");
    }, 300);
  }

  return (
    <Dialog open={open} onOpenChange={(next) => {
      if (!next) handleClose();
      else setOpen(true);
    }}>
      <DialogTrigger asChild>
        <Button className={triggerClassName}>
          {triggerLabel}
          {showArrow ? <ArrowRight className="ml-2 h-4 w-4" /> : null}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[92vh] max-w-xl overflow-y-auto border-none bg-white p-0 pt-10 shadow-2xl sm:rounded-2xl">
        <div className="border-b border-sgs-border/50 px-8 py-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold tracking-tight text-sgs-night">
              {status === "success" ? "Solicitação enviada" : "Ver o SGS em ação"}
            </DialogTitle>
            <DialogDescription className="pt-2 text-base leading-relaxed text-sgs-slate">
              {status === "success"
                ? "Entraremos em contato em até 24h úteis."
                : "Veja em 2 minutos como o SGS pode transformar sua gestão de SST."}
            </DialogDescription>
          </DialogHeader>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center px-8 py-16 text-center relative overflow-hidden">
            <Confetti active={status === "success"} />
            <CheckCircle2 className="mb-4 h-16 w-16 text-sgs-green" />
            <p className="text-lg font-bold text-sgs-night">{serverMsg}</p>
            <Button
              onClick={handleClose}
              className="mt-8 h-12 rounded-xl bg-sgs-blue px-8 text-sm font-bold text-white relative z-10"
            >
              Fechar
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={`space-y-6 px-8 py-8 ${shake ? "animate-sgs-shake" : ""}`}>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Nome" error={errors.name}>
                <input
                  value={fields.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="h-12 w-full rounded-xl border border-sgs-border bg-sgs-bg px-4 text-sm font-medium text-sgs-night outline-none transition-all focus:border-sgs-blue focus:bg-white focus:ring-4 focus:ring-sgs-blue/5"
                  placeholder="Seu nome completo"
                />
              </Field>
              <Field label="E-mail" error={errors.email}>
                <input
                  type="email"
                  value={fields.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="h-12 w-full rounded-xl border border-sgs-border bg-sgs-bg px-4 text-sm font-medium text-sgs-night outline-none transition-all focus:border-sgs-blue focus:bg-white focus:ring-4 focus:ring-sgs-blue/5"
                  placeholder="você@empresa.com.br"
                />
              </Field>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Telefone / WhatsApp" error={errors.phone}>
                <input
                  type="tel"
                  value={fields.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                  className="h-12 w-full rounded-xl border border-sgs-border bg-sgs-bg px-4 text-sm font-medium text-sgs-night outline-none transition-all focus:border-sgs-blue focus:bg-white focus:ring-4 focus:ring-sgs-blue/5"
                  placeholder="(00) 00000-0000"
                />
              </Field>
              <Field label="Empresa" error={errors.company}>
                <input
                  value={fields.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  required
                  className="h-12 w-full rounded-xl border border-sgs-border bg-sgs-bg px-4 text-sm font-medium text-sgs-night outline-none transition-all focus:border-sgs-blue focus:bg-white focus:ring-4 focus:ring-sgs-blue/5"
                  placeholder="Nome da sua empresa"
                />
              </Field>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Colaboradores">
                <select
                  value={fields.employees}
                  onChange={(e) => handleChange("employees", e.target.value)}
                  className="h-12 w-full rounded-xl border border-sgs-border bg-sgs-bg px-4 text-sm font-medium text-sgs-slate outline-none transition-all focus:border-sgs-blue focus:bg-white focus:ring-4 focus:ring-sgs-blue/5"
                >
                  <option value="">Selecione</option>
                  <option value="1-10">1 a 10</option>
                  <option value="11-50">11 a 50</option>
                  <option value="51-200">51 a 200</option>
                  <option value="201-500">201 a 500</option>
                  <option value="500+">Mais de 500</option>
                </select>
              </Field>
              <Field label="Necessidade principal">
                <select
                  value={fields.needs}
                  onChange={(e) => handleChange("needs", e.target.value)}
                  className="h-12 w-full rounded-xl border border-sgs-border bg-sgs-bg px-4 text-sm font-medium text-sgs-slate outline-none transition-all focus:border-sgs-blue focus:bg-white focus:ring-4 focus:ring-sgs-blue/5"
                >
                  <option value="">Selecione</option>
                  <option value="apr">APR Digital</option>
                  <option value="dds">DDS Digital</option>
                  <option value="documentos">Gestão de Documentos</option>
                  <option value="aso">ASO e Treinamentos</option>
                  <option value="mobilizacao">Mobilização de Terceiros</option>
                  <option value="completa">Gestão Completa de SST</option>
                </select>
              </Field>
            </div>

            <TurnstileWidget onToken={handleTurnstileToken} />

            {status === "error" && serverMsg && (
              <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
                <AlertCircle className="h-5 w-5 shrink-0" />
                {serverMsg}
              </div>
            )}

            <div className="flex flex-col gap-4 border-t border-sgs-border/50 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs font-medium text-sgs-slate">
                Seus dados estão protegidos pela{" "}
                <a href="/privacidade" className="underline hover:text-sgs-blue">
                  Política de Privacidade
                </a>
                .
              </p>
              <Button
                type="submit"
                disabled={status === "loading"}
                className="h-12 rounded-xl bg-sgs-blue px-8 text-sm font-bold text-white shadow-lg shadow-sgs-blue/20 transition-all hover:bg-sgs-blue-dark hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar solicitação
                    <Mail className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="space-y-2 text-sm font-bold text-sgs-night">
      {label}
      {children}
      {error && (
        <p className="flex items-center gap-1 text-xs font-medium text-red-500">
          <AlertCircle className="h-3 w-3" />
          {error}
        </p>
      )}
    </label>
  );
}
