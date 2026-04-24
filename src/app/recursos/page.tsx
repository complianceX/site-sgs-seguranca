import { ResourcesPage } from "@/components/pages/ResourcesPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recursos e Templates Gratuitos | SGS - Segurança do Trabalho",
  description: "Baixe templates, guias e checklists profissionais validados por especialistas em SST. Prontos para uso imediato.",
};

export default function Page() {
  return <ResourcesPage />;
}
