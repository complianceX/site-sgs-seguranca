const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;

export function trackEvent(action: string, label?: string, value?: number) {
  if (typeof window === "undefined" || !GA_ID) return;

  try {
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", action, {
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
