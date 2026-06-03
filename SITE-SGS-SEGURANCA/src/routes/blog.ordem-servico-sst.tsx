import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, FileText } from "lucide-react";
import { DemoForm } from "@/components/DemoForm";
import logoSgs from "@/assets/logo-sgs.webp";

export const Route = createFileRoute("/blog/ordem-servico-sst")({
  component: OrdemServicoPage,
  head: () => ({
    meta: [
      { title: "Ordem de Serviço SST: Guia Completo — SGS" },
      {
        name: "description",
        content:
          "A OS de segurança do trabalho integrada ao colaborador e ao documento. Controle de versões, validade e conformidade com o SGS.",
      },
    ],
  }),
});

function OrdemServicoPage() {
  return (
    <div className="min-h-screen bg-[#fbfcfe] text-[#142033] font-sans">
      <header className="sticky top-0 z-50 border-b border-[#dbe4ee]/50 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 md:h-20 md:px-8">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoSgs} alt="SGS Segurança" className="h-11 w-auto md:h-14" />
          </Link>
          <Link to="/blog" className="text-sm font-semibold text-[#5b6878] hover:text-[#1d5b8d] flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" /> Voltar ao blog
          </Link>
        </nav>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#1d5b8d]/10 bg-[#1d5b8d]/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1d5b8d]">
          <FileText className="h-3.5 w-3.5" />
          Ordem de Serviço
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-[#0d2033] md:text-5xl">
          Ordem de Serviço de Segurança do Trabalho: guia completo
        </h1>
        <p className="mt-4 text-base text-[#5b6878]">28 de abril de 2026 · 6 min de leitura</p>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-[#3a4a5e]">
          <p>
            A Ordem de Serviço (OS) de Segurança do Trabalho é um documento que formaliza as instruções, procedimentos e medidas de segurança que o colaborador deve seguir ao executar determinada atividade.
          </p>
          <p>
            Diferente da APR (que analisa riscos), a OS é o documento que <strong>autoriza e orienta</strong> a execução do serviço, vinculando o colaborador às regras de segurança estabelecidas.
          </p>

          <h2 className="text-2xl font-bold text-[#0d2033]">Problemas da OS em papel</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Versões desatualizadas circulando entre equipes.</li>
            <li>Colaboradores executando serviços sem OS vigente.</li>
            <li>Dificuldade de comprovar que a OS foi entregue e lida.</li>
            <li>Arquivos perdidos ou danificados.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0d2033]">OS Digital no SGS</h2>
          <p>
            O módulo de <Link to="/funcionalidades" className="text-[#1d5b8d] font-semibold hover:underline">Ordem de Serviço</Link> do SGS permite criar, vincular a colaboradores e controlar versões digitalmente. Cada colaborador recebe sua OS e assina digitalmente, comprovando ciência. O sistema alerta quando uma OS precisa ser revisada ou renovada.
          </p>

          <div className="rounded-2xl border border-[#1d5b8d]/20 bg-[#f4f8fc] p-8 my-10">
            <h3 className="text-xl font-bold text-[#0d2033]">Quer ver na prática?</h3>
            <p className="mt-3 text-[#5b6878]">Agende uma demonstração personalizada.</p>
            <div className="mt-6">
              <DemoForm triggerLabel="Agendar demonstração" showArrow triggerClassName="h-13 rounded-xl bg-[#1d5b8d] px-8 text-sm font-bold text-white shadow-lg shadow-[#1d5b8d]/20 transition-all hover:bg-[#16486f] hover:scale-[1.02] active:scale-[0.98]" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#0d2033]">Vantagens da OS Digital</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Controle de versões:</strong> histórico completo de revisões.</li>
            <li><strong>Vínculo com colaborador:</strong> cada OS associada ao profissional e à função.</li>
            <li><strong>Assinatura digital:</strong> comprovação de ciência com validade jurídica.</li>
            <li><strong>Alertas de renovação:</strong> sistema notifica quando a OS precisa ser atualizada.</li>
            <li><strong>Relatórios:</strong> exporte OS por colaborador, função ou setor.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0d2033]">Conclusão</h2>
          <p>
            A Ordem de Serviço Digital é essencial para formalizar as regras de segurança de forma rastreável e com validade jurídica. Com o <Link to="/" className="text-[#1d5b8d] font-semibold hover:underline">SGS</Link>, sua empresa mantém todas as OS organizadas, atualizadas e prontas para auditoria.
          </p>
        </div>
      </main>
    </div>
  );
}
