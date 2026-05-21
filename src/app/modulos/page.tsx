import { ModulesPage } from "@/components/pages/ModulesPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Recursos do Software SGS para Gestão de SST",
  description:
    "Conheça as capacidades do SGS para APR, PT, DDS, RDO, treinamentos, exames, EPI, auditorias e governança documental.",
  path: "/modulos",
  keywords: ["Módulos SST", "Software de Segurança do Trabalho", "Gestão de EPI"],
});

export default function Page() {
  return <ModulesPage />;
}
