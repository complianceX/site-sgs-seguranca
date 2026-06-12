import { createPageMetadata } from "@/lib/seo/seo";
import { AuditoriaSstPage } from "@/components/pages/software/AuditoriaSstPage";

export const metadata = createPageMetadata({
  title: "Software para Auditoria de SST e Inspeções | Auditoria Digital",
  description: "Prepare-se para auditorias ISO 45001 e fiscalizações do MTE com dados rastreáveis, fotos e histórico completo de conformidade operacional.",
  path: "/software-auditoria-sst",
  keywords: ["Auditoria SST Digital", "Software de Auditoria de Segurança", "Inspeções de SST Online", "Conformidade SST", "SGS Auditoria"],
});

export default function Page() {
  return <AuditoriaSstPage />;
}
