import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Página não encontrada | SGS",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-8 text-[10rem] font-black leading-none text-slate-100 select-none">404</div>
      <h1 className="mb-6 text-4xl font-black tracking-tight text-sgs-navy lg:text-5xl">
        Página não encontrada
      </h1>
      <p className="mb-12 max-w-md text-lg font-medium leading-relaxed text-slate-500">
        A página que você procura pode ter sido movida ou não existe mais.
        Verifique o endereço ou volte para a página inicial.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-3 rounded-2xl bg-sgs-navy px-8 py-5 text-base font-black text-white shadow-xl shadow-sgs-navy/10 transition-all hover:bg-primary"
      >
        <ArrowLeft className="h-5 w-5" />
        Voltar ao início
      </Link>
    </div>
  );
}
