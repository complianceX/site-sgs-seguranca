import { Link } from "@tanstack/react-router";
import { ShieldAlert, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 animate-sgs-ping rounded-full bg-red-500/20" />
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400">
          <ShieldAlert className="h-12 w-12" />
        </div>
      </div>
      
      <h1 className="text-4xl font-black tracking-tight text-sgs-night md:text-5xl dark:text-white">
        Área Não Segura
      </h1>
      
      <p className="mt-4 max-w-md text-lg text-sgs-slate dark:text-sgs-slate-light">
        Ops! Esta página não existe ou você entrou em uma zona restrita sem a devida sinalização.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link to="/">
          <Button className="h-12 rounded-xl bg-sgs-blue px-8 text-sm font-bold text-white shadow-lg shadow-sgs-blue/20 transition-all hover:bg-sgs-blue-dark hover:scale-[1.02] active:scale-[0.98]">
            <Home className="mr-2 h-4 w-4" />
            Voltar para a Base
          </Button>
        </Link>
        <Button
          variant="outline"
          onClick={() => window.history.back()}
          className="h-12 rounded-xl border-sgs-border bg-white px-8 text-sm font-bold text-sgs-blue hover:bg-sgs-bg-hover dark:border-white/10 dark:bg-white/5 dark:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retornar
        </Button>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-8 opacity-40">
        <div className="flex flex-col items-center gap-2">
          <div className="h-2 w-16 rounded-full bg-sgs-border" />
          <p className="text-[10px] font-bold uppercase tracking-widest">Código 404</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-2 w-16 rounded-full bg-sgs-border" />
          <p className="text-[10px] font-bold uppercase tracking-widest">Acesso Negado</p>
        </div>
      </div>
    </div>
  );
}
