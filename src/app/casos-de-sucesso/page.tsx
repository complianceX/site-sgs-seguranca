import { SuccessStoriesPage } from "@/components/pages/SuccessStoriesPage";
import { createPageMetadata } from "@/lib/seo/seo";

export const metadata = createPageMetadata({
  title: "Casos de Sucesso",
  description:
    "Conheça como empresas de diferentes setores transformaram a gestão de SST com o SGS. Resultados reais com métricas comprovadas.",
  path: "/casos-de-sucesso",
  keywords: ["Casos de sucesso SGS", "Cases SST", "Resultados SGS", "Depoimentos SGS"],
});

export default function Page() {
  return <SuccessStoriesPage />;
}
