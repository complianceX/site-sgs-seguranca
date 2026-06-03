import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck, ClipboardCheck } from "lucide-react";
import { DemoForm } from "@/components/DemoForm";
import logoSgs from "@/assets/logo-sgs.webp";

export const Route = createFileRoute("/blog/apr-digital")({
  component: AprDigitalPage,
  head: () => ({
    meta: [
      { title: "APR Digital: Guia Completo — SGS | Sistema de Gestão de SST" },
      {
        name: "description",
        content:
          "Saiba como a APR Digital elimina papel, padroniza procedimentos e gera evidências prontas para auditoria. Guia completo do SGS.",
      },
    ],
  }),
});

function AprDigitalPage() {
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
          <ClipboardCheck className="h-3.5 w-3.5" />
          APR Digital
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-[#0d2033] md:text-5xl">
          APR Digital: o guia completo para sua empresa
        </h1>
        <p className="mt-4 text-base text-[#5b6878]">02 de junho de 2026 · 5 min de leitura</p>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-[#3a4a5e]">
          <p>
            A Análise Preliminar de Riscos (APR) é um dos documentos mais críticos da gestão de Segurança do Trabalho. Ela registra os riscos de cada atividade e as medidas de controle necessárias antes da execução do serviço.
          </p>
          <p>
            No formato tradicional em papel, a APR enfrenta problemas como perda de documentos, rasuras, assinaturas ilegíveis e dificuldade de localização quando chega uma auditoria. A <strong>APR Digital</strong> resolve todos esses problemas de uma vez.
          </p>

          <h2 className="text-2xl font-bold text-[#0d2033]">O que é a APR Digital?</h2>
          <p>
            A APR Digital é a versão eletrônica da Análise Preliminar de Riscos, criada e assinada digitalmente dentro de uma plataforma como o <Link to="/funcionalidades" className="text-[#1d5b8d] font-semibold hover:underline">SGS</Link>. Ela mantém todos os elementos obrigatórios da APR tradicional — identificação da atividade, riscos, medidas de controle, responsáveis — mas adiciona rastreabilidade, segurança jurídica e disponibilidade instantânea.
          </p>

          <h2 className="text-2xl font-bold text-[#0d2033]">Benefícios da APR Digital</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Sem papel:</strong> documentos nascem digitais, sem impressão, sem arquivamento físico.</li>
            <li><strong>Rastreabilidade total:</strong> saiba quem criou, quem aprovou e quando cada ação ocorreu.</li>
            <li><strong>Evidência pronta para auditoria:</strong> histórico completo em segundos.</li>
            <li><strong>Assinatura digital:</strong> com registro de data, IP e identificação do signatário.</li>
            <li><strong>Acesso de qualquer lugar:</strong> colaboradores em campo podem registrar a APR pelo celular.</li>
            <li><strong>Padronização:</strong> modelos pré-definidos garantem que nenhum campo obrigatório seja esquecido.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0d2033]">Como implementar a APR Digital</h2>
          <p>
            Com o <Link to="/" className="text-[#1d5b8d] font-semibold hover:underline">SGS</Link>, a implementação da APR Digital é simples e rápida:
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li><strong>Cadastre sua empresa e colaboradores</strong> na plataforma.</li>
            <li><strong>Crie modelos de APR</strong> para cada tipo de atividade.</li>
            <li><strong>Defina os riscos e medidas de controle</strong> para cada modelo.</li>
            <li><strong>Treine sua equipe</strong> para registrar as APRs diretamente no sistema.</li>
            <li><strong>Acompanhe pendências</strong> pelo dashboard em tempo real.</li>
          </ol>

          <div className="rounded-2xl border border-[#1d5b8d]/20 bg-[#f4f8fc] p-8 my-10">
            <h3 className="text-xl font-bold text-[#0d2033]">Quer ver a APR Digital funcionando?</h3>
            <p className="mt-3 text-[#5b6878]">Agende uma demonstração personalizada com nossa equipe.</p>
            <div className="mt-6">
              <DemoForm triggerLabel="Agendar demonstração" showArrow triggerClassName="h-13 rounded-xl bg-[#1d5b8d] px-8 text-sm font-bold text-white shadow-lg shadow-[#1d5b8d]/20 transition-all hover:bg-[#16486f] hover:scale-[1.02] active:scale-[0.98]" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#0d2033]">APR Digital e a conformidade com NRs</h2>
          <p>
            A APR Digital atende aos requisitos das principais Normas Regulamentadoras, incluindo NR-1 (GRO), NR-18 (condições de trabalho na construção), NR-20 (líquidos inflamáveis) e NR-35 (trabalho em altura). O <Link to="/funcionalidades" className="text-[#1d5b8d] font-semibold hover:underline">SGS</Link> mantém um mapeamento automático de documentos por NR aplicável, facilitando a conformidade regulatória.
          </p>

          <h2 className="text-2xl font-bold text-[#0d2033]">Conclusão</h2>
          <p>
            A APR Digital não é apenas uma substituição do papel — é uma evolução no processo de gestão de riscos. Com rastreabilidade, evidências digitais e acesso mobile, sua empresa ganha em eficiência, segurança jurídica e conformidade.
          </p>
          <p>
            Quer saber mais? <Link to="/contato" className="text-[#1d5b8d] font-semibold hover:underline">Entre em contato</Link> com a equipe SGS ou consulte nossos <Link to="/precos" className="text-[#1d5b8d] font-semibold hover:underline">planos</Link>.
          </p>
        </div>
      </main>
    </div>
  );
}
