'use client';
import Script from 'next/script';
import { useEffect, useState } from 'react';

export function ConsentScripts() {
  const [consent, setConsent] = useState<{ analytics: boolean; marketing: boolean } | null>(null);

  useEffect(() => {
    const checkConsent = () => {
      const saved = localStorage.getItem('sgs-cookie-consent');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setConsent({ analytics: !!parsed.analytics, marketing: !!parsed.marketing });
        } catch (e) {
          setConsent(null);
        }
      }
    };

    checkConsent();
    window.addEventListener('cookie-consent-updated', checkConsent);
    return () => window.removeEventListener('cookie-consent-updated', checkConsent);
  }, []);

  if (!consent) return null;

  return (
    <>
      {consent.analytics && (
        <Script
          id="google-analytics"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
      )}
    </>
  );
}