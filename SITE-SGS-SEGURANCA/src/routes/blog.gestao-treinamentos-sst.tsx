import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { DemoForm } from "@/components/DemoForm";
import { MeshGradient } from "@/components/animations/MeshGradient";

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
      { property: "og:title", content: "Gestão de Treinamentos SST: Digitalize e Controle — SGS" },
      {
        property: "og:description",
        content:
          "Registro de treinamentos NRs com data, carga horária, instrutor e reciclagem automática. Centralize tudo em uma plataforma.",
      },
    ],
  }),
});

function GestaoTreinamentosPage() {
  return (
    <main className="relative overflow-hidden">
      <MeshGradient className="opacity-20" />
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24 relative">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-sgs-blue/10 bg-sgs-blue/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-sgs-blue">
          <GraduationCap className="h-3.5 w-3.5" />
          Treinamentos SST
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-sgs-night md:text-5xl">
          Gestão de Treinamentos SST: como digitalizar e controlar
        </h1>
        <p className="mt-4 text-base text-sgs-slate">12 de maio de 2026 · 5 min de leitura</p>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-[#3a4a5e]">
          <p>
            Os treinamentos de Segurança do Trabalho são exigidos por diversas Normas Regulamentadoras (NRs) e são fundamentais para capacitar os colaboradores a executar suas atividades com segurança.
          </p>
          <p>
            Gerenciar treinamentos em planilhas ou pastas físicas é ineficiente: prazos de reciclagem passam despercebidos, documentos se perdem e auditorias consomem horas de preparação. A <strong>gestão digital de treinamentos SST</strong> resolve isso.
          </p>

          <h2 className="text-2xl font-bold text-sgs-night">O que a gestão digital de treinamentos oferece</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Registro completo de cada treinamento: data, carga horária, instrutor e conteúdo.</li>
            <li>Reciclagem automática: o sistema alerta quando um treinamento está próximo do vencimento.</li>
            <li>Lista de presença digital com assinatura dos participantes.</li>
            <li>Certificados emitidos automaticamente.</li>
            <li>Relatórios consolidados por colaborador, função ou NR.</li>
          </ul>

          <h2 className="text-2xl font-bold text-sgs-night">Gestão de Treinamentos no SGS</h2>
          <p>
            O módulo de <Link to="/funcionalidades" className="text-sgs-blue font-semibold hover:underline">Gestão de Treinamentos</Link> do SGS permite cadastrar matriz de treinamentos por função, planejar calendários, registrar execuções e acompanhar a situação de cada colaborador. A reciclagem automática garante que nenhum treinamento obrigatório fique vencido.
          </p>

          <div className="rounded-2xl border border-sgs-blue/20 bg-sgs-bg-hover p-8 my-10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-sgs-blue/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <h3 className="relative z-10 text-xl font-bold text-sgs-night">Quer ver na prática?</h3>
            <p className="relative z-10 mt-3 text-sgs-slate">Agende uma demonstração personalizada.</p>
            <div className="relative z-10 mt-6">
              <DemoForm triggerLabel="Agendar demonstração" showArrow triggerClassName="h-13 rounded-xl bg-sgs-blue px-8 text-sm font-bold text-white shadow-lg shadow-sgs-blue/20 transition-all hover:bg-sgs-blue-dark hover:scale-[1.02] active:scale-[0.98]" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-sgs-night">NRs que exigem treinamentos</h2>
          <p>
            Diversas NRs exigem treinamentos específicos: NR-10 (eletricidade), NR-11 (transporte), NR-20 (inflamáveis), NR-33 (espaço confinado), NR-35 (altura), entre outras. O <Link to="/" className="text-sgs-blue font-semibold hover:underline">SGS</Link> permite mapear cada treinamento à NR correspondente e acompanhar a conformidade.
          </p>

          <h2 className="text-2xl font-bold text-sgs-night">Conclusão</h2>
          <p>
            Digitalizar a gestão de treinamentos SST elimina retrabalho, evita não conformidades e fortalece a cultura de segurança. Com o <Link to="/" className="text-sgs-blue font-semibold hover:underline">SGS</Link>, sua empresa mantém todos os registros organizados e prontos para auditoria.
          </p>
        </div>
      </div>
    </main>
  );
}
