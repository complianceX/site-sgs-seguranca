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
import { trackEvent } from "@/lib/analytics";
import { TurnstileWidget } from "@/components/TurnstileWidget";

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
    if (!validate()) return;

    trackEvent("form_demo_click", "Agendar demonstração");
    setStatus("loading");
    setServerMsg("");

    try {
      const result: DemoResult = await submitDemo({
        ...fields,
        turnstileToken: turnstileToken || undefined,
      });

      setStatus(result.success ? "success" : "error");
      setServerMsg(result.message);

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
      <DialogContent className="max-h-[92vh] max-w-xl overflow-y-auto border-none bg-white p-0 shadow-2xl sm:rounded-2xl">
        <div className="border-b border-[#dbe4ee]/50 px-8 py-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold tracking-tight text-[#0d2033]">
              {status === "success" ? "Solicitação enviada" : "Agendar demonstração"}
            </DialogTitle>
            <DialogDescription className="pt-2 text-base leading-relaxed text-[#5b6878]">
              {status === "success"
                ? "Entraremos em contato em até 24h úteis."
                : "Preencha os dados abaixo para conhecer o SGS."}
            </DialogDescription>
          </DialogHeader>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center px-8 py-16 text-center">
            <CheckCircle2 className="mb-4 h-16 w-16 text-[#22c55e]" />
            <p className="text-lg font-bold text-[#0d2033]">{serverMsg}</p>
            <Button
              onClick={handleClose}
              className="mt-8 h-12 rounded-xl bg-[#1d5b8d] px-8 text-sm font-bold text-white"
            >
              Fechar
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 px-8 py-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Nome" error={errors.name}>
                <input
                  value={fields.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="h-12 w-full rounded-xl border border-[#dbe4ee] bg-[#fbfcfe] px-4 text-sm font-medium text-[#142033] outline-none transition-all focus:border-[#1d5b8d] focus:bg-white focus:ring-4 focus:ring-[#1d5b8d]/5"
                  placeholder="Seu nome completo"
                />
              </Field>
              <Field label="E-mail" error={errors.email}>
                <input
                  type="email"
                  value={fields.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="h-12 w-full rounded-xl border border-[#dbe4ee] bg-[#fbfcfe] px-4 text-sm font-medium text-[#142033] outline-none transition-all focus:border-[#1d5b8d] focus:bg-white focus:ring-4 focus:ring-[#1d5b8d]/5"
                  placeholder="voce@empresa.com.br"
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
                  className="h-12 w-full rounded-xl border border-[#dbe4ee] bg-[#fbfcfe] px-4 text-sm font-medium text-[#142033] outline-none transition-all focus:border-[#1d5b8d] focus:bg-white focus:ring-4 focus:ring-[#1d5b8d]/5"
                  placeholder="(00) 00000-0000"
                />
              </Field>
              <Field label="Empresa" error={errors.company}>
                <input
                  value={fields.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  required
                  className="h-12 w-full rounded-xl border border-[#dbe4ee] bg-[#fbfcfe] px-4 text-sm font-medium text-[#142033] outline-none transition-all focus:border-[#1d5b8d] focus:bg-white focus:ring-4 focus:ring-[#1d5b8d]/5"
                  placeholder="Nome da sua empresa"
                />
              </Field>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Colaboradores">
                <select
                  value={fields.employees}
                  onChange={(e) => handleChange("employees", e.target.value)}
                  className="h-12 w-full rounded-xl border border-[#dbe4ee] bg-[#fbfcfe] px-4 text-sm font-medium text-[#5b6878] outline-none transition-all focus:border-[#1d5b8d] focus:bg-white focus:ring-4 focus:ring-[#1d5b8d]/5"
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
                  className="h-12 w-full rounded-xl border border-[#dbe4ee] bg-[#fbfcfe] px-4 text-sm font-medium text-[#5b6878] outline-none transition-all focus:border-[#1d5b8d] focus:bg-white focus:ring-4 focus:ring-[#1d5b8d]/5"
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

            <div className="flex flex-col gap-4 border-t border-[#dbe4ee]/50 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs font-medium text-[#5b6878]">
                Seus dados estão protegidos pela{" "}
                <a href="/privacidade" className="underline hover:text-[#1d5b8d]">
                  Política de Privacidade
                </a>
                .
              </p>
              <Button
                type="submit"
                disabled={status === "loading"}
                className="h-12 rounded-xl bg-[#1d5b8d] px-8 text-sm font-bold text-white shadow-lg shadow-[#1d5b8d]/20 transition-all hover:bg-[#16486f] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
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
    <label className="space-y-2 text-sm font-bold text-[#0d2033]">
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
