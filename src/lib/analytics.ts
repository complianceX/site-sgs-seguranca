export type AnalyticsEvent =
  | "generate_lead"
  | "newsletter_signup"
  | "resource_download"
  | "cta_demo_click"
  | "cta_whatsapp_click"
  | "cta_modules_click";

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: AnalyticsEvent, params?: EventParams) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", event, {
    event_category: "conversion",
    ...params,
  });
}

export function trackCtaClick(label: string, href: string) {
  const isWhatsApp = href.includes("wa.me") || href.includes("whatsapp");
  const isModules = href.includes("/modulos");

  if (isWhatsApp) {
    trackEvent("cta_whatsapp_click", { link_text: label, link_url: href });
    return;
  }

  if (isModules) {
    trackEvent("cta_modules_click", { link_text: label, link_url: href });
    return;
  }

  trackEvent("cta_demo_click", { link_text: label, link_url: href });
}
