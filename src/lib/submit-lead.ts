import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

export type LeadResponse = {
  success: boolean;
  error?: string;
  referenceId?: string;
  delivery?: "webhook" | "local";
  fallbackEmail?: string;
  fallbackSubject?: string;
};

type SubmitLeadOptions = {
  body: Record<string, unknown>;
  analyticsEvent?: AnalyticsEvent;
  analyticsParams?: Record<string, string>;
};

export async function submitLead({
  body,
  analyticsEvent,
  analyticsParams,
}: SubmitLeadOptions): Promise<{ ok: boolean; result: LeadResponse; status: number }> {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const result = (await response.json()) as LeadResponse;
  const ok = response.ok && result.success;

  if (ok && analyticsEvent) {
    trackEvent(analyticsEvent, analyticsParams);
  }

  return { ok, result, status: response.status };
}
