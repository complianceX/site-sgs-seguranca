"use client";

import Script from "next/script";
import { useEffect, useId, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
        }
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

type TurnstileWidgetProps = {
  onTokenChange: (token: string) => void;
  resetSignal?: number;
  className?: string;
};

export function TurnstileWidget({ onTokenChange, resetSignal = 0, className }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const instanceId = useId().replace(/:/g, "");
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim();
  const isDevBypass = process.env.NODE_ENV !== "production" && !siteKey;

  useEffect(() => {
    if (isDevBypass) {
      onTokenChange("development-bypass");
      return;
    }

    if (!siteKey || !scriptReady || !containerRef.current || !window.turnstile) return;

    if (widgetIdRef.current) {
      window.turnstile.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      theme: "light",
      callback: (token) => onTokenChange(token),
      "expired-callback": () => onTokenChange(""),
      "error-callback": () => onTokenChange(""),
    });

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [isDevBypass, onTokenChange, scriptReady, siteKey, resetSignal]);

  if (isDevBypass) {
    return (
      <p className={className} role="status">
        <span className="rounded-lg border border-dashed border-slate-200 bg-slate-50 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          Verificação anti-spam desativada em desenvolvimento
        </span>
      </p>
    );
  }

  if (!siteKey) {
    return (
      <p className={className} role="alert">
        <span className="text-xs font-bold text-sgs-red">
          Turnstile não configurado. Defina NEXT_PUBLIC_TURNSTILE_SITE_KEY.
        </span>
      </p>
    );
  }

  return (
    <div className={className}>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
      />
      <div ref={containerRef} id={`turnstile-${instanceId}`} />
    </div>
  );
}
