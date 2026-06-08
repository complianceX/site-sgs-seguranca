import { z } from "zod";

const siteUrl =
  (typeof import.meta.env.VITE_SITE_URL === "string" &&
    import.meta.env.VITE_SITE_URL) ||
  "https://www.sgsseguranca.com.br";

export const demoFormSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(120, "Nome muito longo"),
  email: z
    .string()
    .email("Informe um e-mail válido")
    .max(200, "E-mail muito longo"),
  phone: z
    .string()
    .min(10, "Informe um telefone com DDD")
    .max(20, "Telefone inválido"),
  company: z
    .string()
    .min(2, "Informe o nome da empresa")
    .max(200, "Nome da empresa muito longo"),
  employees: z.string().optional(),
  needs: z.string().optional(),
  turnstileToken: z.string().optional(),
});

export type DemoFormData = z.infer<typeof demoFormSchema>;

export interface SubmitResult {
  success: boolean;
  message: string;
}

export async function submitDemoForm(
  data: DemoFormData,
): Promise<SubmitResult> {
  const parsed = demoFormSchema.safeParse(data);
  if (!parsed.success) {
    const firstError = parsed.error.errors[0];
    return {
      success: false,
      message: firstError?.message ?? "Dados inválidos.",
    };
  }

  try {
    const response = await fetch(`${siteUrl}/api/demo`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });

    if (!response.ok) {
      const body = await response.json().catch(() => null);
      return {
        success: false,
        message: body?.message ?? "Erro ao enviar. Tente novamente.",
      };
    }

    return {
      success: true,
      message: "Solicitação recebida! Entraremos em contato em até 24h úteis.",
    };
  } catch {
    return {
      success: false,
      message:
        "Não foi possível enviar. Verifique sua conexão e tente novamente.",
    };
  }
}
