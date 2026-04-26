import { ResourcesPage } from "@/components/pages/ResourcesPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recursos e Templates Gratuitos | SGS - Segurança do Trabalho",
  description: "Baixe templates, guias e checklists de apoio para estruturar rotinas de SST com revisão do responsável técnico.",
};

export default function Page() {
  return <ResourcesPage />;
}
