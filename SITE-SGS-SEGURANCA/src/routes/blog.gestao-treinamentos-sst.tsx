import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, GraduationCap } from "lucide-react";
import { DemoForm } from "@/components/DemoForm";
import logoSgs from "@/assets/logo-sgs.webp";

export const Route = createFileRoute("/blog/gestao-treinamentos-sst")({
  component: GestaoTreinamentosPage,
  head: () => ({
    meta: [
      { title: "Gestão de Treinamentos SST: Digitalize e Controle — SGS" },
      {
        name: "description",
        content:
          "Registro de treinamentos NRs com data, carga horária, instrutor e reciclagem automática. Centralize tudo em uma plataforma.",
      },
    ],
  }),
});

function GestaoTreinamentosPage() {
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
          <GraduationCap className="h-3.5 w-3.5" />
          Treinamentos SST
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-[#0d2033] md:text-5xl">
          Gestão de Treinamentos SST: como digitalizar e controlar
        </h1>
        <p className="mt-4 text-base text-[#5b6878]">12 de maio de 2026 · 5 min de leitura</p>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-[#3a4a5e]">
          <p>
            Os treinamentos de Segurança do Trabalho são exigidos por diversas Normas Regulamentadoras (NRs) e são fundamentais para capacitar os colaboradores a executar suas atividades com segurança.
          </p>
          <p>
            Gerenciar treinamentos em planilhas ou pastas físicas é ineficiente: prazos de reciclagem passam despercebidos, documentos se perdem e auditorias consomem horas de preparação. A <strong>gestão digital de treinamentos SST</strong> resolve isso.
          </p>

          <h2 className="text-2xl font-bold text-[#0d2033]">O que a gestão digital de treinamentos oferece</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Registro completo de cada treinamento: data, carga horária, instrutor e conteúdo.</li>
            <li>Reciclagem automática: o sistema alerta quando um treinamento está próximo do vencimento.</li>
            <li>Lista de presença digital com assinatura dos participantes.</li>
            <li>Certificados emitidos automaticamente.</li>
            <li>Relatórios consolidados por colaborador, função ou NR.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0d2033]">Gestão de Treinamentos no SGS</h2>
          <p>
            O módulo de <Link to="/funcionalidades" className="text-[#1d5b8d] font-semibold hover:underline">Gestão de Treinamentos</Link> do SGS permite cadastrar matriz de treinamentos por função, planejar calendários, registrar execuções e acompanhar a situação de cada colaborador. A reciclagem automática garante que nenhum treinamento obrigatório fique vencido.
          </p>

          <div className="rounded-2xl border border-[#1d5b8d]/20 bg-[#f4f8fc] p-8 my-10">
            <h3 className="text-xl font-bold text-[#0d2033]">Quer ver na prática?</h3>
            <p className="mt-3 text-[#5b6878]">Agende uma demonstração personalizada.</p>
            <div className="mt-6">
              <DemoForm triggerLabel="Agendar demonstração" showArrow triggerClassName="h-13 rounded-xl bg-[#1d5b8d] px-8 text-sm font-bold text-white shadow-lg shadow-[#1d5b8d]/20 transition-all hover:bg-[#16486f] hover:scale-[1.02] active:scale-[0.98]" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#0d2033]">NRs que exigem treinamentos</h2>
          <p>
            Diversas NRs exigem treinamentos específicos: NR-10 (eletricidade), NR-11 (transporte), NR-20 (inflamáveis), NR-33 (espaço confinado), NR-35 (altura), entre outras. O <Link to="/" className="text-[#1d5b8d] font-semibold hover:underline">SGS</Link> permite mapear cada treinamento à NR correspondente e acompanhar a conformidade.
          </p>

          <h2 className="text-2xl font-bold text-[#0d2033]">Conclusão</h2>
          <p>
            Digitalizar a gestão de treinamentos SST elimina retrabalho, evita não conformidades e fortalece a cultura de segurança. Com o <Link to="/" className="text-[#1d5b8d] font-semibold hover:underline">SGS</Link>, sua empresa mantém todos os registros organizados e prontos para auditoria.
          </p>
        </div>
      </main>
    </div>
  );
}
