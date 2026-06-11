import { ComparativoPage } from "@/components/pages/ComparativoPage";
import { createPageMetadata } from "@/lib/seo/seo";

export const metadata = createPageMetadata({
  title: "SGS vs Planilhas",
  description: "Veja a comparação direta entre o SGS e o controle manual de SST com planilhas. Entenda por que empresas estão migrando para uma plataforma rastreável.",
  path: "/comparativo",
});

export default function Page() {
  return <ComparativoPage />;
}
