"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { readCookieConsent } from "@/lib/cookie-consent";

export function ConsentScripts() {
  const [consent, setConsent] = useState<{ analytics: boolean; marketing: boolean } | null>(null);
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    const checkConsent = () => {
      const saved = readCookieConsent();
      setConsent(saved ? { analytics: saved.analytics, marketing: saved.marketing } : null);
    };

    checkConsent();
    window.addEventListener("cookie-consent-updated", checkConsent);
    return () => window.removeEventListener("cookie-consent-updated", checkConsent);
  }, []);

  if (!consent?.analytics || !gaId) return null;

  return (
    <>
      <Script
        id="google-analytics"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
