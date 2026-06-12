import { handleLeadPost, handleLeadOptions } from "@/services/api/leads";
import { logSecurityEvent } from "@/lib/security/security-logger";
import type { LeadResponse } from "@/types/lead";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const referenceId = crypto.randomUUID();

  try {
    return await handleLeadPost(req, referenceId);
  } catch (err) {
    logSecurityEvent("LEAD_INTERNAL_ERROR", {
      path: "/api/leads",
      referenceId,
    });

    return NextResponse.json<LeadResponse>(
      {
        success: false,
        error: "Erro inesperado.",
        referenceId,
      },
      { status: 500, headers: { "X-Correlation-ID": referenceId } }
    );
  }
}

export function OPTIONS() {
  return handleLeadOptions();
}
