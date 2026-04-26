import { Metadata } from "next";
import { ModulesPage } from "@/components/pages/ModulesPage";

export const metadata: Metadata = {
  title: "Recursos do Software SGS para Gestão de SST",
  description: "Conheça as capacidades do SGS para APR, PT, DDS, RDO, treinamentos, exames, EPI, auditorias e governança documental.",
  keywords: ["Módulos SST", "Software de Segurança do Trabalho", "Gestão de EPI", "Controle de Treinamentos"],
};

export default function Page() {
  return <ModulesPage />;
}
