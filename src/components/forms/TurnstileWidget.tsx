"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
          "error-callback": () => void;
          theme?: "light" | "dark" | "auto";
        }
      ) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
  }
}

type TurnstileWidgetProps = {
  onTokenChange: (token: string) => void;
  onError?: () => void;
  resetSignal?: number;
  className?: string;
};

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const SCRIPT_ID = "cf-turnstile-script";
const INITIAL_STATUS = SITE_KEY ? "loading" : process.env.NODE_ENV === "production" ? "error" : "disabled";

function loadTurnstileScript() {
  if (typeof window === "undefined") return Promise.reject();
  if (window.turnstile) return Promise.resolve();

  const existingScript = document.getElementById(SCRIPT_ID);
  if (existingScript) {
    return new Promise<void>((resolve, reject) => {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(), { once: true });
    });
  }

  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => reject(), { once: true });
    document.head.appendChild(script);
  });
}

export function TurnstileWidget({ onTokenChange, onError, resetSignal, className }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "disabled" | "error">(INITIAL_STATUS);

  useEffect(() => {
    let active = true;

    if (!SITE_KEY) {
      onTokenChange("");
      return;
    }

    loadTurnstileScript()
      .then(() => {
        if (!active || !containerRef.current || !window.turnstile || widgetIdRef.current) return;

        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: SITE_KEY,
          theme: "light",
          callback: (token) => {
            onTokenChange(token);
            setStatus("ready");
          },
          "expired-callback": () => {
            onTokenChange("");
            setStatus("loading");
          },
          "error-callback": () => {
            onTokenChange("");
            setStatus("error");
            onError?.();
          },
        });
      })
      .catch(() => {
        if (!active) return;
        onTokenChange("");
        setStatus("error");
        onError?.();
      });

    return () => {
      active = false;
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [onError, onTokenChange]);

  useEffect(() => {
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
      onTokenChange("");
      setStatus("loading");
    }
  }, [onTokenChange, resetSignal]);

  return (
    <div className={className}>
      <div ref={containerRef} className="min-h-[65px]" />
      {status === "disabled" && (
        <p className="text-[10px] font-bold text-slate-400">
          Anti-spam desativado apenas em desenvolvimento sem chave pública.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-xs font-bold text-sgs-red">
          Não foi possível carregar a verificação anti-spam.
        </p>
      )}
    </div>
  );
}
