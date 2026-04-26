import { Metadata } from "next";
import { IntegrationsPage } from "@/components/pages/IntegrationsPage";

export const metadata: Metadata = {
  title: "Integrações - SGS",
  description: "Conheça integrações do SGS com IA assistiva, calendário, e-mail, storage, banco de dados gerenciado e APIs.",
  keywords: ["Integrações SST", "API Segurança do Trabalho", "SGS Tech Stack", "Ecossistema Digital SST"],
};

export default function Page() {
  return <IntegrationsPage />;
}
