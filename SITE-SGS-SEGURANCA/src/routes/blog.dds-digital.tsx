import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { DemoForm } from "@/components/DemoForm";
import { MeshGradient } from "@/components/animations/MeshGradient";

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
      { property: "og:title", content: "DDS Digital: Como Engajar Equipes na SST — SGS" },
      {
        property: "og:description",
        content:
          "O Diálogo Diário de Segurança digital aumenta a participação, gera comprovantes e facilita o acompanhamento. Guia completo do SGS.",
      },
    ],
  }),
});

function DdsDigitalPage() {
  return (
    <main className="relative overflow-hidden">
      <MeshGradient className="opacity-20" />
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24 relative">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-sgs-blue/10 bg-sgs-blue/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-sgs-blue">
          <BookOpen className="h-3.5 w-3.5" />
          DDS Digital
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-sgs-night md:text-5xl">
          DDS Digital: como engajar equipes na segurança do trabalho
        </h1>
        <p className="mt-4 text-base text-sgs-slate">26 de maio de 2026 · 5 min de leitura</p>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-[#3a4a5e]">
          <p>
            O Diálogo Diário de Segurança (DDS) é uma ferramenta essencial para manter a equipe engajada e alinhada com as práticas de segurança do trabalho. Realizado antes do início das atividades, o DDS aborda temas relevantes do dia e reforça a cultura de prevenção.
          </p>
          <p>
            A versão digital do DDS — o <strong>DDS Digital</strong> — potencializa essa ferramenta ao eliminar listas de presença em papel, registrar evidências multimídia e gerar relatórios automáticos de participação.
          </p>

          <h2 className="text-2xl font-bold text-sgs-night">Por que digitalizar o DDS?</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Elimina papel:</strong> fim das listas de presença impressas.</li>
            <li><strong>Registro de presença automático:</strong> cada participante assina digitalmente.</li>
            <li><strong>Evidências multimídia:</strong> fotos e vídeos do DDS ficam anexados ao documento.</li>
            <li><strong>Histórico completo:</strong> consulte DDS anteriores por data, tema ou participante.</li>
            <li><strong>Relatórios:</strong> exporte relatórios de participação para auditoria.</li>
          </ul>

          <h2 className="text-2xl font-bold text-sgs-night">Como o DDS Digital funciona no SGS</h2>
          <p>
            No <Link to="/funcionalidades" className="text-sgs-blue font-semibold hover:underline">SGS</Link>, o DDS Digital é integrado aos demais módulos da plataforma. Você pode criar temas, agendar DDS por obra ou setor, registrar presença com assinatura digital e anexar evidências. Tudo em um só lugar.
          </p>
          <p>
            O dashboard de pendências mostra quais DDS estão atrasados por obra e colaborador, permitindo que o gestor tome ações corretivas imediatamente.
          </p>

          <div className="rounded-2xl border border-sgs-blue/20 bg-sgs-bg-hover p-8 my-10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-sgs-blue/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <h3 className="relative z-10 text-xl font-bold text-sgs-night">Quer ver o DDS Digital funcionando?</h3>
            <p className="relative z-10 mt-3 text-sgs-slate">Agende uma demonstração personalizada.</p>
            <div className="relative z-10 mt-6">
              <DemoForm triggerLabel="Agendar demonstração" showArrow triggerClassName="h-13 rounded-xl bg-sgs-blue px-8 text-sm font-bold text-white shadow-lg shadow-sgs-blue/20 transition-all hover:bg-sgs-blue-dark hover:scale-[1.02] active:scale-[0.98]" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-sgs-night">DDS Digital e a NR-1</h2>
          <p>
            A NR-1 determina que o empregador deve promover treinamentos e diálogos de segurança de forma contínua. O DDS Digital do <Link to="/" className="text-sgs-blue font-semibold hover:underline">SGS</Link> ajuda a comprovar o cumprimento dessa exigência com registros eletrônicos de presença, conteúdo e carga horária.
          </p>

          <h2 className="text-2xl font-bold text-sgs-night">Conclusão</h2>
          <p>
            O DDS Digital é mais do que uma planilha online — é uma ferramenta de gestão que engaja equipes, gera evidências e fortalece a cultura de segurança. Comece hoje com o <Link to="/" className="text-sgs-blue font-semibold hover:underline">SGS</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
