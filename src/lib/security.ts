import { z } from "zod";

// FASE 5: Esquema de validação rigoroso para formulários
export const ContactSchema = z.object({
  name: z.string().min(2).max(120).trim(),
  email: z.string().email().toLowerCase(),
  company: z.string().max(150).optional(),
  message: z.string().min(10).max(2000).trim(),
  turnstileToken: z.string().min(1, "Verificação anti-bot obrigatória"),
});

// FASE 3: Verificação de Turnstile no Servidor
export async function verifyTurnstile(token: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  
  if (!secret) {
    console.error("TURNSTILE_SECRET_KEY não configurada");
    return false;
  }

  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);

  try {
    const result = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        body: formData,
        method: "POST",
      }
    );
    const outcome = await result.json();
    return outcome.success;
  } catch (err) {
    return false;
  }
}