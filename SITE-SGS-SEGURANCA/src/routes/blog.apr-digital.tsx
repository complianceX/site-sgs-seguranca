import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, ClipboardCheck } from "lucide-react";
import { DemoForm } from "@/components/DemoForm";
import { MeshGradient } from "@/components/animations/MeshGradient";

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
      { property: "og:title", content: "APR Digital: Guia Completo — SGS | Sistema de Gestão de SST" },
      {
        property: "og:description",
        content:
          "Saiba como a APR Digital elimina papel, padroniza procedimentos e gera evidências prontas para auditoria. Guia completo do SGS.",
      },
    ],
  }),
});

function AprDigitalPage() {
  return (
    <main className="relative overflow-hidden">
      <MeshGradient className="opacity-20" />
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24 relative">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-sgs-blue/10 bg-sgs-blue/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-sgs-blue">
          <ClipboardCheck className="h-3.5 w-3.5" />
          APR Digital
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-sgs-night md:text-5xl">
          APR Digital: o guia completo para sua empresa
        </h1>
        <p className="mt-4 text-base text-sgs-slate">02 de junho de 2026 · 5 min de leitura</p>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-[#3a4a5e]">
          <p>
            A Análise Preliminar de Riscos (APR) é um dos documentos mais críticos da gestão de Segurança do Trabalho. Ela registra os riscos de cada atividade e as medidas de controle necessárias antes da execução do serviço.
          </p>
          <p>
            No formato tradicional em papel, a APR enfrenta problemas como perda de documentos, rasuras, assinaturas ilegíveis e dificuldade de localização quando chega uma auditoria. A <strong>APR Digital</strong> resolve todos esses problemas de uma vez.
          </p>

          <h2 className="text-2xl font-bold text-sgs-night">O que é a APR Digital?</h2>
          <p>
            A APR Digital é a versão eletrônica da Análise Preliminar de Riscos, criada e assinada digitalmente dentro de uma plataforma como o <Link to="/funcionalidades" className="text-sgs-blue font-semibold hover:underline">SGS</Link>. Ela mantém todos os elementos obrigatórios da APR tradicional — identificação da atividade, riscos, medidas de controle, responsáveis — mas adiciona rastreabilidade, segurança jurídica e disponibilidade instantânea.
          </p>

          <h2 className="text-2xl font-bold text-sgs-night">Benefícios da APR Digital</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Sem papel:</strong> documentos nascem digitais, sem impressão, sem arquivamento físico.</li>
            <li><strong>Rastreabilidade total:</strong> saiba quem criou, quem aprovou e quando cada ação ocorreu.</li>
            <li><strong>Evidência pronta para auditoria:</strong> histórico completo em segundos.</li>
            <li><strong>Assinatura digital:</strong> com registro de data, IP e identificação do signatário.</li>
            <li><strong>Acesso de qualquer lugar:</strong> colaboradores em campo podem registrar a APR pelo celular.</li>
            <li><strong>Padronização:</strong> modelos pré-definidos garantem que nenhum campo obrigatório seja esquecido.</li>
          </ul>

          <h2 className="text-2xl font-bold text-sgs-night">Como implementar a APR Digital</h2>
          <p>
            Com o <Link to="/" className="text-sgs-blue font-semibold hover:underline">SGS</Link>, a implementação da APR Digital é simples e rápida:
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li><strong>Cadastre sua empresa e colaboradores</strong> na plataforma.</li>
            <li><strong>Crie modelos de APR</strong> para cada tipo de atividade.</li>
            <li><strong>Defina os riscos e medidas de controle</strong> para cada modelo.</li>
            <li><strong>Treine sua equipe</strong> para registrar as APRs diretamente no sistema.</li>
            <li><strong>Acompanhe pendências</strong> pelo dashboard em tempo real.</li>
          </ol>

          <div className="rounded-2xl border border-sgs-blue/20 bg-sgs-bg-hover p-8 my-10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-sgs-blue/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <h3 className="relative z-10 text-xl font-bold text-sgs-night">Quer ver a APR Digital funcionando?</h3>
            <p className="relative z-10 mt-3 text-sgs-slate">Agende uma demonstração personalizada com nossa equipe.</p>
            <div className="relative z-10 mt-6">
              <DemoForm triggerLabel="Agendar demonstração" showArrow triggerClassName="h-13 rounded-xl bg-sgs-blue px-8 text-sm font-bold text-white shadow-lg shadow-sgs-blue/20 transition-all hover:bg-sgs-blue-dark hover:scale-[1.02] active:scale-[0.98]" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-sgs-night">APR Digital e a conformidade com NRs</h2>
          <p>
            A APR Digital atende aos requisitos das principais Normas Regulamentadoras, incluindo NR-1 (GRO), NR-18 (condições de trabalho na construção), NR-20 (líquidos inflamáveis) e NR-35 (trabalho em altura). O <Link to="/funcionalidades" className="text-sgs-blue font-semibold hover:underline">SGS</Link> mantém um mapeamento automático de documentos por NR aplicável, facilitando a conformidade regulatória.
          </p>

          <h2 className="text-2xl font-bold text-sgs-night">Conclusão</h2>
          <p>
            A APR Digital não é apenas uma substituição do papel — é uma evolução no processo de gestão de riscos. Com rastreabilidade, evidências digitais e acesso mobile, sua empresa ganha em eficiência, segurança jurídica e conformidade.
          </p>
          <p>
            Quer saber mais? <Link to="/contato" className="text-sgs-blue font-semibold hover:underline">Entre em contato</Link> com a equipe SGS ou consulte nossos <Link to="/precos" className="text-sgs-blue font-semibold hover:underline">planos</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
