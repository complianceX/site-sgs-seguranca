import { ResourcesPage } from "@/components/pages/ResourcesPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Recursos e Templates Gratuitos",
  description:
    "Baixe templates, guias e checklists de apoio para estruturar rotinas de SST com revisão do responsável técnico.",
  path: "/recursos",
  keywords: ["Templates SST", "Checklist SST", "APR modelo"],
});

export default function Page() {
  return <ResourcesPage />;
}
