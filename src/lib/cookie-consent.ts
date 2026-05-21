export type CookieConsent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "sgs-cookie-consent";

export const defaultCookieConsent: CookieConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function readCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;

  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return null;

  try {
    const parsed = JSON.parse(saved) as Partial<CookieConsent>;
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
    };
  } catch {
    return null;
  }
}

export function writeCookieConsent(consent: CookieConsent) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new Event("cookie-consent-updated"));
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event("sgs-cookie-preferences"));
}
