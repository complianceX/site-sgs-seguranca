import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen } from "lucide-react";
import { DemoForm } from "@/components/DemoForm";
import logoSgs from "@/assets/logo-sgs.webp";

export const Route = createFileRoute("/blog/dds-digital")({
  component: DdsDigitalPage,
  head: () => ({
    meta: [
      { title: "DDS Digital: Como Engajar Equipes na SST — SGS" },
      {
        name: "description",
        content:
          "O Diálogo Diário de Segurança digital aumenta a participação, gera comprovantes e facilita o acompanhamento. Guia completo do SGS.",
      },
    ],
  }),
});

function DdsDigitalPage() {
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
          <BookOpen className="h-3.5 w-3.5" />
          DDS Digital
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-[#0d2033] md:text-5xl">
          DDS Digital: como engajar equipes na segurança do trabalho
        </h1>
        <p className="mt-4 text-base text-[#5b6878]">26 de maio de 2026 · 5 min de leitura</p>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-[#3a4a5e]">
          <p>
            O Diálogo Diário de Segurança (DDS) é uma ferramenta essencial para manter a equipe engajada e alinhada com as práticas de segurança do trabalho. Realizado antes do início das atividades, o DDS aborda temas relevantes do dia e reforça a cultura de prevenção.
          </p>
          <p>
            A versão digital do DDS — o <strong>DDS Digital</strong> — potencializa essa ferramenta ao eliminar listas de presença em papel, registrar evidências multimídia e gerar relatórios automáticos de participação.
          </p>

          <h2 className="text-2xl font-bold text-[#0d2033]">Por que digitalizar o DDS?</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Elimina papel:</strong> fim das listas de presença impressas.</li>
            <li><strong>Registro de presença automático:</strong> cada participante assina digitalmente.</li>
            <li><strong>Evidências multimídia:</strong> fotos e vídeos do DDS ficam anexados ao documento.</li>
            <li><strong>Histórico completo:</strong> consulte DDS anteriores por data, tema ou participante.</li>
            <li><strong>Relatórios:</strong> exporte relatórios de participação para auditoria.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0d2033]">Como o DDS Digital funciona no SGS</h2>
          <p>
            No <Link to="/funcionalidades" className="text-[#1d5b8d] font-semibold hover:underline">SGS</Link>, o DDS Digital é integrado aos demais módulos da plataforma. Você pode criar temas, agendar DDS por obra ou setor, registrar presença com assinatura digital e anexar evidências. Tudo em um só lugar.
          </p>
          <p>
            O dashboard de pendências mostra quais DDS estão atrasados por obra e colaborador, permitindo que o gestor tome ações corretivas imediatamente.
          </p>

          <div className="rounded-2xl border border-[#1d5b8d]/20 bg-[#f4f8fc] p-8 my-10">
            <h3 className="text-xl font-bold text-[#0d2033]">Quer ver o DDS Digital funcionando?</h3>
            <p className="mt-3 text-[#5b6878]">Agende uma demonstração personalizada.</p>
            <div className="mt-6">
              <DemoForm triggerLabel="Agendar demonstração" showArrow triggerClassName="h-13 rounded-xl bg-[#1d5b8d] px-8 text-sm font-bold text-white shadow-lg shadow-[#1d5b8d]/20 transition-all hover:bg-[#16486f] hover:scale-[1.02] active:scale-[0.98]" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#0d2033]">DDS Digital e a NR-1</h2>
          <p>
            A NR-1 determina que o empregador deve promover treinamentos e diálogos de segurança de forma contínua. O DDS Digital do <Link to="/" className="text-[#1d5b8d] font-semibold hover:underline">SGS</Link> ajuda a comprovar o cumprimento dessa exigência com registros eletrônicos de presença, conteúdo e carga horária.
          </p>

          <h2 className="text-2xl font-bold text-[#0d2033]">Conclusão</h2>
          <p>
            O DDS Digital é mais do que uma planilha online — é uma ferramenta de gestão que engaja equipes, gera evidências e fortalece a cultura de segurança. Comece hoje com o <Link to="/" className="text-[#1d5b8d] font-semibold hover:underline">SGS</Link>.
          </p>
        </div>
      </main>
    </div>
  );
}
