type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
  turnstileToken: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactSchema = {
  safeParse(payload: unknown):
    | { success: true; data: ContactPayload }
    | { success: false } {
    if (!payload || typeof payload !== "object") return { success: false };

    const data = payload as Record<string, unknown>;
    const name = typeof data.name === "string" ? data.name.trim() : "";
    const email = typeof data.email === "string" ? data.email.trim().toLowerCase() : "";
    const company = typeof data.company === "string" ? data.company.trim() : undefined;
    const message = typeof data.message === "string" ? data.message.trim() : "";
    const turnstileToken = typeof data.turnstileToken === "string" ? data.turnstileToken.trim() : "";

    if (name.length < 2 || name.length > 120) return { success: false };
    if (!EMAIL_PATTERN.test(email)) return { success: false };
    if (company && company.length > 150) return { success: false };
    if (message.length < 10 || message.length > 2000) return { success: false };
    if (!turnstileToken) return { success: false };

    return { success: true, data: { name, email, company, message, turnstileToken } };
  },
};

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
  } catch {
    return false;
  }
}
