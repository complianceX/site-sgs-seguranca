"use client";

import { useEffect, useState } from "react";
import {
  defaultCookieConsent,
  openCookiePreferences,
  readCookieConsent,
  writeCookieConsent,
  type CookieConsent,
} from "@/lib/cookie-consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [draft, setDraft] = useState<CookieConsent>(defaultCookieConsent);

  useEffect(() => {
    const openPanel = () => {
      const current = readCookieConsent();
      setDraft(current ?? defaultCookieConsent);
      setShowPreferences(true);
      setShow(true);
    };

    queueMicrotask(() => {
      if (!readCookieConsent()) setShow(true);
    });

    window.addEventListener("sgs-cookie-preferences", openPanel);
    return () => window.removeEventListener("sgs-cookie-preferences", openPanel);
  }, []);

  const saveConsent = (consent: CookieConsent) => {
    writeCookieConsent(consent);
    setShow(false);
    setShowPreferences(false);
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[9999] border-t border-slate-200 bg-white p-4 shadow-2xl"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4">
        <div>
          <h2 id="cookie-banner-title" className="text-sm font-black text-sgs-navy">
            Preferências de cookies
          </h2>
          <p id="cookie-banner-desc" className="mt-2 text-sm text-slate-600">
            Cookies necessários mantêm o site funcionando. Analytics e marketing só são ativados com seu
            consentimento. Consulte a{" "}
            <a href="/privacidade" className="font-bold text-primary underline">
              Política de Privacidade
            </a>
            .
          </p>
        </div>

        {showPreferences && (
          <div className="grid gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm">
            <label className="flex items-center justify-between gap-4">
              <span>
                <span className="font-bold text-sgs-navy">Necessários</span>
                <span className="mt-1 block text-xs text-slate-500">Sempre ativos para segurança e navegação.</span>
              </span>
              <input type="checkbox" checked disabled className="h-4 w-4 accent-primary" />
            </label>
            <label className="flex items-center justify-between gap-4">
              <span>
                <span className="font-bold text-sgs-navy">Analytics</span>
                <span className="mt-1 block text-xs text-slate-500">Medição de uso (ex.: Google Analytics).</span>
              </span>
              <input
                type="checkbox"
                checked={draft.analytics}
                onChange={(e) => setDraft((prev) => ({ ...prev, analytics: e.target.checked }))}
                className="h-4 w-4 accent-primary"
              />
            </label>
            <label className="flex items-center justify-between gap-4">
              <span>
                <span className="font-bold text-sgs-navy">Marketing</span>
                <span className="mt-1 block text-xs text-slate-500">Campanhas e remarketing, quando habilitados.</span>
              </span>
              <input
                type="checkbox"
                checked={draft.marketing}
                onChange={(e) => setDraft((prev) => ({ ...prev, marketing: e.target.checked }))}
                className="h-4 w-4 accent-primary"
              />
            </label>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => saveConsent(defaultCookieConsent)}
            className="rounded-md px-4 py-2 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-100"
          >
            Recusar opcionais
          </button>
          {!showPreferences && (
            <button
              type="button"
              onClick={() => {
                setDraft(readCookieConsent() ?? defaultCookieConsent);
                setShowPreferences(true);
              }}
              className="rounded-md px-4 py-2 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-100"
            >
              Personalizar
            </button>
          )}
          {showPreferences && (
            <button
              type="button"
              onClick={() => saveConsent(draft)}
              className="rounded-md px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary/5"
            >
              Salvar preferências
            </button>
          )}
          <button
            type="button"
            onClick={() => saveConsent({ necessary: true, analytics: true, marketing: true })}
            className="rounded-md bg-primary px-6 py-2 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
          >
            Aceitar todos
          </button>
        </div>
      </div>
    </div>
  );
}

export function CookiePreferencesLink() {
  return (
    <button
      type="button"
      onClick={openCookiePreferences}
      className="text-[10px] font-black uppercase tracking-widest text-slate-400 transition-colors hover:text-primary"
    >
      Cookies
    </button>
  );
}
