import { createFileRoute, Link } from "@tanstack/react-router";
import { UserCheck } from "lucide-react";
import { DemoForm } from "@/components/DemoForm";
import { MeshGradient } from "@/components/animations/MeshGradient";

export const Route = createFileRoute("/blog/mobilizacao-terceiros")({
  component: MobilizacaoPage,
  head: () => ({
    meta: [
      { title: "Mobilização de Terceiros: Controle Documental — SGS" },
      {
        name: "description",
        content:
          "A mobilização de terceiros exige controle documental rigoroso. Saiba como digitalizar e automatizar esse processo com o SGS.",
      },
      { property: "og:title", content: "Mobilização de Terceiros: Controle Documental — SGS" },
      {
        property: "og:description",
        content:
          "A mobilização de terceiros exige controle documental rigoroso. Saiba como digitalizar e automatizar esse processo com o SGS.",
      },
    ],
  }),
});

function MobilizacaoPage() {
  return (
    <main className="relative overflow-hidden">
      <MeshGradient className="opacity-20" />
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24 relative">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-sgs-blue/10 bg-sgs-blue/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-sgs-blue">
          <UserCheck className="h-3.5 w-3.5" />
          Mobilização
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-sgs-night md:text-5xl">
          Mobilização de Terceiros: como evitar riscos trabalhistas e documentais
        </h1>
        <p className="mt-4 text-base text-sgs-slate">05 de maio de 2026 · 4 min de leitura</p>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-[#3a4a5e]">
          <p>
            A mobilização de terceiros é um dos processos mais críticos na gestão de segurança do trabalho. Envolver trabalhadores terceirizados sem o controle documental adequado expõe a empresa contratante a riscos trabalhistas, fiscais e de segurança.
          </p>
          <p>
            Um processo de mobilização eficiente precisa verificar documentos como ASO, treinamentos, ficha de EPI, contrato e certificações antes da liberação do trabalhador para a atividade.
          </p>

          <h2 className="text-2xl font-bold text-sgs-night">Riscos da mobilização manual</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Documentos vencidos ou irregulares passam despercebidos.</li>
            <li>Trabalhadores iniciam atividades sem treinamento obrigatório.</li>
            <li>ASO vencido expõe a empresa a riscos ocupacionais e multas.</li>
            <li>Dificuldade de localizar documentos em auditorias.</li>
            <li>Retrabalho para solicitar documentação repetidas vezes.</li>
          </ul>

          <h2 className="text-2xl font-bold text-sgs-night">Como o SGS automatiza a mobilização</h2>
          <p>
            O módulo de <Link to="/funcionalidades" className="text-sgs-blue font-semibold hover:underline">Mobilização de Terceiros</Link> do SGS cria checklists documentais personalizados. Cada trabalhador terceirizado tem seus documentos verificados eletronicamente antes da liberação. Alertas automáticos avisam sobre documentação próxima do vencimento.
          </p>

          <div className="rounded-2xl border border-sgs-blue/20 bg-sgs-bg-hover p-8 my-10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-sgs-blue/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <h3 className="relative z-10 text-xl font-bold text-sgs-night">Quer ver a Mobilização Digital funcionando?</h3>
            <p className="relative z-10 mt-3 text-sgs-slate">Agende uma demonstração personalizada.</p>
            <div className="relative z-10 mt-6">
              <DemoForm triggerLabel="Agendar demonstração" showArrow triggerClassName="h-13 rounded-xl bg-sgs-blue px-8 text-sm font-bold text-white shadow-lg shadow-sgs-blue/20 transition-all hover:bg-sgs-blue-dark hover:scale-[1.02] active:scale-[0.98]" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-sgs-night">Documentos controlados na mobilização</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>ASO (Atestado de Saúde Ocupacional)</li>
            <li>Treinamentos NRs (NR-10, NR-20, NR-33, NR-35, etc.)</li>
            <li>Ficha de EPI</li>
            <li>Contrato social e alvará da prestadora</li>
            <li>Certidões fiscais e trabalhistas</li>
            <li>Ordem de Serviço</li>
          </ul>

          <h2 className="text-2xl font-bold text-sgs-night">Conclusão</h2>
          <p>
            Automatizar a mobilização de terceiros com o <Link to="/" className="text-sgs-blue font-semibold hover:underline">SGS</Link> reduz riscos, elimina papel e garante que cada trabalhador esteja com a documentação regular antes de iniciar suas atividades.
          </p>
        </div>
      </div>
    </main>
  );
}
