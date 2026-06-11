"use client";

import { useEffect } from "react";
import { RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-sgs-red/5">
        <RefreshCw className="h-12 w-12 text-sgs-red" />
      </div>
      <h1 className="mb-6 text-4xl font-black tracking-tight text-sgs-navy lg:text-5xl">
        Algo deu errado
      </h1>
      <p className="mb-12 max-w-md text-lg font-medium leading-relaxed text-slate-500">
        Ocorreu um erro inesperado ao carregar esta página. Nossa equipe já foi notificada.
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center gap-3 rounded-2xl bg-sgs-navy px-8 py-5 text-base font-black text-white shadow-xl shadow-sgs-navy/10 transition-all hover:bg-primary"
      >
        <RefreshCw className="h-5 w-5" />
        Tentar novamente
      </button>
    </div>
  );
}
