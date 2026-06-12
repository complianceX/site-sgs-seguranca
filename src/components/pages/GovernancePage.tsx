import { FileCheck, History, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { GovernancePillar, DocumentValidator, PendenciesCentral } from "@/components/features/governance";

export function GovernancePage() {
  return (
    <div className="py-24 lg:py-40 bg-white">
      <div className="container">
        <div className="max-w-4xl mb-24">
          <FadeIn direction="right">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
              <ShieldCheck className="w-4 h-4" />
              Governança e Compliance
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-sgs-navy mb-10 tracking-tighter leading-[1.05] text-balance">
              A Autoridade Técnica da sua <span className="text-primary">Operação</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium text-pretty max-w-3xl">
              No SGS, documentos oficiais não ficam soltos. Cada artefato tem origem, controle,
              acesso seguro e uma trilha de verificação completa para garantir a integridade da sua empresa.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          <GovernancePillar
            icon={FileCheck}
            iconColor="bg-primary/5"
            title="PDF Final Oficial"
            description='Todo documento finalizado no sistema gera um PDF oficial imutável. Este arquivo é o "selo de verdade" da sua operação, pronto para auditorias e fiscalizações.'
            items={["Storage governado e seguro", "Hash de integridade único por documento", "URLs assinadas e temporárias para acesso", "Lock automático após finalização"]}
            direction="right"
          />
          <GovernancePillar
            icon={History}
            iconColor="bg-sgs-orange/5"
            title="Trilha Forense"
            description="Mantemos um registro append-only de todos os eventos críticos. Saiba exatamente quem, quando e onde cada documento foi criado, alterado ou visualizado."
            items={["Log de auditoria inalterável", "Rastreabilidade de assinaturas", "Histórico de versões completo", "Evidências digitais vinculadas"]}
            direction="left"
          />
        </div>

        <DocumentValidator />
        <PendenciesCentral />
      </div>
    </div>
  );
}
