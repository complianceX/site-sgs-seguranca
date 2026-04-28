import type { Metadata } from "next";
import Link from "next/link";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso | SGS Segurança",
  description:
    "Termos institucionais para navegação no site SGS Segurança, materiais, conteúdos técnicos e canais de contato.",
};

const terms = [
  {
    title: "Natureza do site",
    text: "Este é o site institucional do SGS. Ele apresenta informações comerciais, conteúdos técnicos e canais de contato, sem substituir contratos, propostas ou o app operacional.",
  },
  {
    title: "Conteúdo técnico",
    text: "Materiais, artigos e exemplos publicados têm finalidade informativa. Cada empresa deve validar documentos e decisões de SST com seus responsáveis técnicos.",
  },
  {
    title: "Solicitações e propostas",
    text: "O envio de formulários não cria obrigação de contratação. Condições comerciais, escopo, integrações e suporte dependem de proposta formal aceita entre as partes.",
  },
  {
    title: "Uso adequado",
    text: "É proibido tentar explorar vulnerabilidades, automatizar abuso de formulários, interferir na disponibilidade do site ou usar conteúdo de forma fraudulenta.",
  },
  {
    title: "Propriedade intelectual",
    text: "Marcas, textos, layout, componentes visuais e materiais do SGS pertencem aos seus titulares e não podem ser reproduzidos sem autorização.",
  },
  {
    title: "Atualizações",
    text: "Estes termos podem ser atualizados para refletir ajustes de produto, segurança, privacidade, legislação ou operação comercial.",
  },
];

export default function TermsPage() {
  return (
    <div className="bg-white py-24 lg:py-40">
      <div className="container">
        <div className="mb-20 max-w-4xl">
          <div className="mb-10 inline-flex items-center gap-2.5 rounded-full bg-primary/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
            <FileText className="h-4 w-4" />
            Condições institucionais
          </div>
          <h1 className="mb-8 text-5xl font-black leading-[1.05] tracking-tight text-sgs-navy text-balance md:text-7xl">
            Termos de Uso
          </h1>
          <p className="max-w-3xl text-xl font-medium leading-relaxed text-slate-500">
            Regras gerais para navegação, conteúdos, materiais e contatos realizados por meio do site institucional do SGS.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {terms.map((term) => (
            <section key={term.title} className="rounded-[2rem] border border-slate-100 bg-slate-50 p-8">
              <h2 className="mb-4 text-xl font-black tracking-tight text-sgs-navy">
                {term.title}
              </h2>
              <p className="text-sm font-medium leading-relaxed text-slate-500">
                {term.text}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-primary/10 bg-primary/5 p-8">
          <p className="text-sm font-bold leading-relaxed text-sgs-navy">
            Dúvidas sobre estes termos podem ser enviadas para{" "}
            <Link className="text-primary underline" href="mailto:contato@sgsseguranca.com.br">
              contato@sgsseguranca.com.br
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
