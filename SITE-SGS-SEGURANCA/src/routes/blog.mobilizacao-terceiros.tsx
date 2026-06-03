import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, UserCheck } from "lucide-react";
import { DemoForm } from "@/components/DemoForm";
import logoSgs from "@/assets/logo-sgs.webp";

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
    ],
  }),
});

function MobilizacaoPage() {
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
          <UserCheck className="h-3.5 w-3.5" />
          Mobilização
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-[#0d2033] md:text-5xl">
          Mobilização de Terceiros: como evitar riscos trabalhistas e documentais
        </h1>
        <p className="mt-4 text-base text-[#5b6878]">05 de maio de 2026 · 4 min de leitura</p>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-[#3a4a5e]">
          <p>
            A mobilização de terceiros é um dos processos mais críticos na gestão de segurança do trabalho. Envolver trabalhadores terceirizados sem o controle documental adequado expõe a empresa contratante a riscos trabalhistas, fiscais e de segurança.
          </p>
          <p>
            Um processo de mobilização eficiente precisa verificar documentos como ASO, treinamentos, ficha de EPI, contrato e certificações antes da liberação do trabalhador para a atividade.
          </p>

          <h2 className="text-2xl font-bold text-[#0d2033]">Riscos da mobilização manual</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Documentos vencidos ou irregulares passam despercebidos.</li>
            <li>Trabalhadores iniciam atividades sem treinamento obrigatório.</li>
            <li>ASO vencido expõe a empresa a riscos ocupacionais e multas.</li>
            <li>Dificuldade de localizar documentos em auditorias.</li>
            <li>Retrabalho para solicitar documentação repetidas vezes.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0d2033]">Como o SGS automatiza a mobilização</h2>
          <p>
            O módulo de <Link to="/funcionalidades" className="text-[#1d5b8d] font-semibold hover:underline">Mobilização de Terceiros</Link> do SGS cria checklists documentais personalizados. Cada trabalhador terceirizado tem seus documentos verificados eletronicamente antes da liberação. Alertas automáticos avisam sobre documentação próxima do vencimento.
          </p>

          <div className="rounded-2xl border border-[#1d5b8d]/20 bg-[#f4f8fc] p-8 my-10">
            <h3 className="text-xl font-bold text-[#0d2033]">Quer ver a Mobilização Digital funcionando?</h3>
            <p className="mt-3 text-[#5b6878]">Agende uma demonstração personalizada.</p>
            <div className="mt-6">
              <DemoForm triggerLabel="Agendar demonstração" showArrow triggerClassName="h-13 rounded-xl bg-[#1d5b8d] px-8 text-sm font-bold text-white shadow-lg shadow-[#1d5b8d]/20 transition-all hover:bg-[#16486f] hover:scale-[1.02] active:scale-[0.98]" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#0d2033]">Documentos controlados na mobilização</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>ASO (Atestado de Saúde Ocupacional)</li>
            <li>Treinamentos NRs (NR-10, NR-20, NR-33, NR-35, etc.)</li>
            <li>Ficha de EPI</li>
            <li>Contrato social e alvará da prestadora</li>
            <li>Certidões fiscais e trabalhistas</li>
            <li>Ordem de Serviço</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0d2033]">Conclusão</h2>
          <p>
            Automatizar a mobilização de terceiros com o <Link to="/" className="text-[#1d5b8d] font-semibold hover:underline">SGS</Link> reduz riscos, elimina papel e garante que cada trabalhador esteja com a documentação regular antes de iniciar suas atividades.
          </p>
        </div>
      </main>
    </div>
  );
}
