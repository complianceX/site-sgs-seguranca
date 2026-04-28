import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade | SGS Segurança",
  description:
    "Como o site institucional do SGS trata dados de contato, cookies, analytics e solicitações comerciais com foco em transparência e LGPD.",
};

const sections = [
  {
    title: "Dados coletados no site",
    text: "Coletamos apenas os dados informados voluntariamente em formulários de contato, newsletter ou solicitação de materiais, como nome, empresa, e-mail, WhatsApp e mensagem.",
  },
  {
    title: "Finalidades",
    text: "Usamos esses dados para responder contatos comerciais, enviar materiais solicitados, organizar retornos de demonstração e melhorar a comunicação institucional do SGS.",
  },
  {
    title: "Cookies e analytics",
    text: "Cookies necessários sustentam a navegação. Analytics e marketing só devem ser ativados após consentimento, quando configurados no ambiente do site.",
  },
  {
    title: "Compartilhamento",
    text: "Não vendemos dados pessoais. O compartilhamento pode ocorrer com provedores técnicos essenciais à hospedagem, entrega de mensagens, segurança e medição do site.",
  },
  {
    title: "Direitos do titular",
    text: "Você pode solicitar acesso, correção, exclusão, oposição ou esclarecimentos sobre o tratamento dos seus dados pelo e-mail contato@sgsseguranca.com.br.",
  },
  {
    title: "Segurança",
    text: "Aplicamos minimização de dados, validação de entradas, controles antiabuso e headers de segurança para reduzir riscos no site institucional.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-white py-24 lg:py-40">
      <div className="container">
        <div className="mb-20 max-w-4xl">
          <div className="mb-10 inline-flex items-center gap-2.5 rounded-full bg-primary/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
            <ShieldCheck className="h-4 w-4" />
            LGPD e transparência
          </div>
          <h1 className="mb-8 text-5xl font-black leading-[1.05] tracking-tight text-sgs-navy text-balance md:text-7xl">
            Política de Privacidade
          </h1>
          <p className="max-w-3xl text-xl font-medium leading-relaxed text-slate-500">
            Esta página descreve o tratamento de dados no site institucional do SGS. O app operacional possui controles próprios de autenticação, tenant e governança.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {sections.map((section) => (
            <section key={section.title} className="rounded-[2rem] border border-slate-100 bg-slate-50 p-8">
              <h2 className="mb-4 text-xl font-black tracking-tight text-sgs-navy">
                {section.title}
              </h2>
              <p className="text-sm font-medium leading-relaxed text-slate-500">
                {section.text}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-primary/10 bg-primary/5 p-8">
          <p className="text-sm font-bold leading-relaxed text-sgs-navy">
            Para dúvidas ou solicitações de privacidade, entre em contato por{" "}
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
