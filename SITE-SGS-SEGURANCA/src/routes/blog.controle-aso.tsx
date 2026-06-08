import { createFileRoute, Link } from "@tanstack/react-router";
import { Stethoscope } from "lucide-react";
import { DemoForm } from "@/components/DemoForm";
import { MeshGradient } from "@/components/animations/MeshGradient";

export const Route = createFileRoute("/blog/controle-aso")({
  component: ControleAsoPage,
  head: () => ({
    meta: [
      { title: "Controle de ASO Digital: Gestão Ocupacional — SGS" },
      {
        name: "description",
        content:
          "O Atestado de Saúde Ocupacional digital reduz retrabalho, evita perda de documentos e alerta sobre vencimentos. Guia completo do SGS.",
      },
      { property: "og:title", content: "Controle de ASO Digital: Gestão Ocupacional — SGS" },
      {
        property: "og:description",
        content:
          "O Atestado de Saúde Ocupacional digital reduz retrabalho, evita perda de documentos e alerta sobre vencimentos. Guia completo do SGS.",
      },
    ],
  }),
});

function ControleAsoPage() {
  return (
    <main className="relative overflow-hidden">
      <MeshGradient className="opacity-20" />
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24 relative">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-sgs-blue/10 bg-sgs-blue/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-sgs-blue">
          <Stethoscope className="h-3.5 w-3.5" />
          ASO Digital
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-sgs-night md:text-5xl">
          Controle de ASO Digital: eliminando o papel na gestão ocupacional
        </h1>
        <p className="mt-4 text-base text-sgs-slate">19 de maio de 2026 · 6 min de leitura</p>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-[#3a4a5e]">
          <p>
            O Atestado de Saúde Ocupacional (ASO) é um documento obrigatório previsto na NR-7, que estabelece a obrigatoriedade de exames médicos admissionais, periódicos, de retorno ao trabalho, de mudança de função e demissionais.
          </p>
          <p>
            Gerenciar ASOs em papel é um desafio logístico: pastas que se perdem, prazos de validade que vencem sem alerta, dificuldade de localizar exames por colaborador. O <strong>ASO Digital</strong> resolve tudo isso.
          </p>

          <h2 className="text-2xl font-bold text-sgs-night">Problemas do ASO em papel</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Pastas físicas ocupam espaço e se deterioram.</li>
            <li>Documentos perdem a validade sem que ninguém seja alertado.</li>
            <li>Dificuldade de localizar o ASO de um colaborador específico.</li>
            <li>Riscos de não conformidade em auditorias trabalhistas.</li>
            <li>Retrabalho para solicitar novos exames.</li>
          </ul>

          <h2 className="text-2xl font-bold text-sgs-night">Como o ASO Digital funciona no SGS</h2>
          <p>
            O <Link to="/funcionalidades" className="text-sgs-blue font-semibold hover:underline">SGS</Link> armazena todos os ASOs dos colaboradores em um repositório digital seguro. Cada ASO é associado ao colaborador, com data de emissão e validade. Alertas automáticos avisam quando um exame está próximo do vencimento.
          </p>
          <p>
            A plataforma também permite integração com clínicas parceiras para envio e recebimento digital de exames. O histórico completo de cada colaborador fica disponível em segundos.
          </p>

          <div className="rounded-2xl border border-sgs-blue/20 bg-sgs-bg-hover p-8 my-10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-sgs-blue/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <h3 className="relative z-10 text-xl font-bold text-sgs-night">Quer ver o ASO Digital funcionando?</h3>
            <p className="relative z-10 mt-3 text-sgs-slate">Agende uma demonstração personalizada.</p>
            <div className="relative z-10 mt-6">
              <DemoForm triggerLabel="Agendar demonstração" showArrow triggerClassName="h-13 rounded-xl bg-sgs-blue px-8 text-sm font-bold text-white shadow-lg shadow-sgs-blue/20 transition-all hover:bg-sgs-blue-dark hover:scale-[1.02] active:scale-[0.98]" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-sgs-night">Benefícios do ASO Digital</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Alerta de vencimento:</strong> o sistema avisa com 30, 15 e 7 dias de antecedência.</li>
            <li><strong>Histórico completo:</strong> todos os exames do colaborador em uma linha do tempo.</li>
            <li><strong>Relatórios:</strong> exporte a situação de ASOs por obra, setor ou função.</li>
            <li><strong>Segurança:</strong> dados protegidos com criptografia e controle de acesso.</li>
            <li><strong>Acesso mobile:</strong> consulte o ASO de qualquer colaborador pelo celular.</li>
          </ul>

          <h2 className="text-2xl font-bold text-sgs-night">Conclusão</h2>
          <p>
            Digitalizar o controle de ASO é o primeiro passo para uma gestão ocupacional eficiente e sem riscos. Com o <Link to="/" className="text-sgs-blue font-semibold hover:underline">SGS</Link>, sua empresa elimina papel, reduz retrabalho e garante conformidade com a NR-7.
          </p>
        </div>
      </div>
    </main>
  );
}
