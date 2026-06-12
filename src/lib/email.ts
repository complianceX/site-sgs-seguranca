import { Resend } from "resend";

export type SendResourceEmailParams = {
  to: string;
  resourceTitle: string;
  resourceFileName: string;
  referenceId: string;
};

const FROM_EMAIL = "SGS <contato@sgsseguranca.com.br>";

function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export async function sendResourceEmail({
  to,
  resourceTitle,
  resourceFileName,
  referenceId,
}: SendResourceEmailParams) {
  const resend = getResendClient();
  if (!resend) {
    console.warn(
      `[EMAIL] RESEND_API_KEY not configured. Would send to ${to} for ${resourceTitle}. Reference: ${referenceId}`
    );
    return { sent: false, reason: "not_configured" };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sgsseguranca.com.br";
  const downloadUrl = `${baseUrl}/resources/${resourceFileName}`;

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject: `Seu material: ${resourceTitle}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head><meta charset="utf-8"></head>
          <body style="font-family: -apple-system, sans-serif; background: #f8fafc; padding: 40px 20px;">
            <div style="max-width: 560px; margin: 0 auto; background: white; border-radius: 24px; padding: 40px; box-shadow: 0 4px 24px rgba(0,0,0,0.06);">
              <div style="text-align: center; margin-bottom: 32px;">
                <img src="${baseUrl}/images/logo-sgs.svg" alt="SGS" style="height: 48px;" />
              </div>
              <h1 style="font-size: 24px; font-weight: 800; color: #1e293b; margin: 0 0 12px; text-align: center;">
                Material liberado!
              </h1>
              <p style="font-size: 16px; color: #64748b; line-height: 1.6; text-align: center; margin: 0 0 32px;">
                Seu material <strong style="color: #1e293b;">${resourceTitle}</strong> está pronto para download.
              </p>
              <div style="text-align: center; margin-bottom: 32px;">
                <a href="${downloadUrl}" 
                   style="display: inline-block; background: #1e3a5f; color: white; font-weight: 800; font-size: 16px; 
                          padding: 16px 40px; border-radius: 12px; text-decoration: none;">
                  Baixar Material
                </a>
              </div>
              <p style="font-size: 13px; color: #94a3b8; text-align: center; margin: 0 0 8px;">
                Protocolo: ${referenceId.slice(0, 8).toUpperCase()}
              </p>
              <p style="font-size: 12px; color: #94a3b8; text-align: center; margin: 0;">
                Se tiver dificuldades, responda a este e-mail ou contate <a href="mailto:contato@sgsseguranca.com.br" style="color: #1e3a5f;">contato@sgsseguranca.com.br</a>
              </p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("[EMAIL] Send failed:", error);
      return { sent: false, reason: error.message };
    }

    return { sent: true, id: data?.id };
  } catch (err) {
    console.error("[EMAIL] Exception:", err);
    return { sent: false, reason: "exception" };
  }
}
