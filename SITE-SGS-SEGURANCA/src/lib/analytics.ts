const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;

export function trackEvent(action: string, label?: string, value?: number) {
  if (typeof window === "undefined" || !GA_ID) return;

  try {
    const w = window as Window & { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag === "function") {
      w.gtag("event", action, {
        event_label: label,
        value,
        send_to: GA_ID,
      });
    }
  } catch {
    // analytics silencioso
  }
}

export function getGaId() {
  return GA_ID;
}
