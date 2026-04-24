import { Metadata } from "next";
import { ModulesPage } from "@/components/pages/ModulesPage";

export const metadata: Metadata = {
  title: "Módulos do Sistema - SGS",
  description: "Conheça todos os módulos do SGS: APR, PT, DDS, RDO, CAT, Treinamentos, Exames e muito mais.",
  keywords: ["Módulos SST", "Software de Segurança do Trabalho", "Gestão de EPI", "Controle de Treinamentos"],
};

export default function Page() {
  return <ModulesPage />;
}
