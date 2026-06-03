import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Stethoscope } from "lucide-react";
import { DemoForm } from "@/components/DemoForm";
import logoSgs from "@/assets/logo-sgs.webp";

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
    ],
  }),
});

function ControleAsoPage() {
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
          <Stethoscope className="h-3.5 w-3.5" />
          ASO Digital
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-[#0d2033] md:text-5xl">
          Controle de ASO Digital: eliminando o papel na gestão ocupacional
        </h1>
        <p className="mt-4 text-base text-[#5b6878]">19 de maio de 2026 · 6 min de leitura</p>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-[#3a4a5e]">
          <p>
            O Atestado de Saúde Ocupacional (ASO) é um documento obrigatório previsto na NR-7, que estabelece a obrigatoriedade de exames médicos admissionais, periódicos, de retorno ao trabalho, de mudança de função e demissionais.
          </p>
          <p>
            Gerenciar ASOs em papel é um desafio logístico: pastas que se perdem, prazos de validade que vencem sem alerta, dificuldade de localizar exames por colaborador. O <strong>ASO Digital</strong> resolve tudo isso.
          </p>

          <h2 className="text-2xl font-bold text-[#0d2033]">Problemas do ASO em papel</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Pastas físicas ocupam espaço e se deterioram.</li>
            <li>Documentos perdem a validade sem que ninguém seja alertado.</li>
            <li>Dificuldade de localizar o ASO de um colaborador específico.</li>
            <li>Riscos de não conformidade em auditorias trabalhistas.</li>
            <li>Retrabalho para solicitar novos exames.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0d2033]">Como o ASO Digital funciona no SGS</h2>
          <p>
            O <Link to="/funcionalidades" className="text-[#1d5b8d] font-semibold hover:underline">SGS</Link> armazena todos os ASOs dos colaboradores em um repositório digital seguro. Cada ASO é associado ao colaborador, com data de emissão e validade. Alertas automáticos avisam quando um exame está próximo do vencimento.
          </p>
          <p>
            A plataforma também permite integração com clínicas parceiras para envio e recebimento digital de exames. O histórico completo de cada colaborador fica disponível em segundos.
          </p>

          <div className="rounded-2xl border border-[#1d5b8d]/20 bg-[#f4f8fc] p-8 my-10">
            <h3 className="text-xl font-bold text-[#0d2033]">Quer ver o ASO Digital funcionando?</h3>
            <p className="mt-3 text-[#5b6878]">Agende uma demonstração personalizada.</p>
            <div className="mt-6">
              <DemoForm triggerLabel="Agendar demonstração" showArrow triggerClassName="h-13 rounded-xl bg-[#1d5b8d] px-8 text-sm font-bold text-white shadow-lg shadow-[#1d5b8d]/20 transition-all hover:bg-[#16486f] hover:scale-[1.02] active:scale-[0.98]" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#0d2033]">Benefícios do ASO Digital</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Alerta de vencimento:</strong> o sistema avisa com 30, 15 e 7 dias de antecedência.</li>
            <li><strong>Histórico completo:</strong> todos os exames do colaborador em uma linha do tempo.</li>
            <li><strong>Relatórios:</strong> exporte a situação de ASOs por obra, setor ou função.</li>
            <li><strong>Segurança:</strong> dados protegidos com criptografia e controle de acesso.</li>
            <li><strong>Acesso mobile:</strong> consulte o ASO de qualquer colaborador pelo celular.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0d2033]">Conclusão</h2>
          <p>
            Digitalizar o controle de ASO é o primeiro passo para uma gestão ocupacional eficiente e sem riscos. Com o <Link to="/" className="text-[#1d5b8d] font-semibold hover:underline">SGS</Link>, sua empresa elimina papel, reduz retrabalho e garante conformidade com a NR-7.
          </p>
        </div>
      </main>
    </div>
  );
}
