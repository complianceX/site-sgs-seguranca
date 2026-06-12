import { createPageMetadata } from "@/lib/seo/seo";
import { InspecoesPage } from "@/components/pages/software/InspecoesPage";

export const metadata = createPageMetadata({
  title: "Software de Inspeções de Segurança do Trabalho | Inspeção Digital",
  description: "Padronize e agilize suas inspeções de segurança. Registre não-conformidades com fotos, geolocalização e gere planos de ação imediatos.",
  path: "/software-inspecoes",
  keywords: ["Inspeção de Segurança Digital", "Software de Inspeção SST", "Checklist de Inspeção Online", "Gestão de Não Conformidades SST", "SGS Inspeções"],
});

export default function Page() {
  return <InspecoesPage />;
}
