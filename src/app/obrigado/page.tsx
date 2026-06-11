import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Solicitação recebida | SGS",
  description:
    "Recebemos sua solicitação. Nossa equipe vai retornar o contato em breve.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="bg-white py-24 lg:py-40">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-10 flex h-20 w-20 items-center justify-center rounded-full bg-sgs-green/10">
            <CheckCircle2 className="h-10 w-10 text-sgs-green" />
          </div>

          <h1 className="mb-6 text-4xl font-black leading-[1.05] tracking-tight text-sgs-navy md:text-5xl">
            Solicitação recebida!
          </h1>
          <p className="mb-6 text-lg font-medium leading-relaxed text-slate-500">
            Recebemos sua mensagem e nossa equipe vai retornar o contato em até
            24 horas úteis pelo e-mail ou WhatsApp informado.
          </p>
          <p className="mb-16 text-sm font-bold text-slate-400">
            Se preferir, você pode falar conosco diretamente pelo{" "}
            <Link
              href="mailto:contato@sgsseguranca.com.br"
              className="text-primary underline"
            >
              contato@sgsseguranca.com.br
            </Link>
            .
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-2xl bg-primary px-10 py-5 text-base font-black text-white shadow-xl shadow-primary/20 transition-all hover:bg-primary/90"
            >
              <ArrowLeft className="h-5 w-5" />
              Voltar para o início
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-10 py-5 text-base font-black text-sgs-navy transition-all hover:border-primary/20 hover:bg-primary/5"
            >
              Explorar o blog
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-20 rounded-[2rem] border border-primary/10 bg-primary/5 p-10 text-left">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-primary/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              <HelpCircle className="h-4 w-4" />
              Enquanto isso
            </div>
            <ul className="space-y-4 text-sm font-medium leading-relaxed text-slate-600">
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                Conheça nossos{" "}
                <Link href="/modulos" className="font-black text-primary underline">
                  módulos do SGS
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                Leia artigos técnicos no{" "}
                <Link href="/blog" className="font-black text-primary underline">
                  blog do SGS
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                Entenda nossa{" "}
                <Link href="/governanca" className="font-black text-primary underline">
                  governança documental
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
