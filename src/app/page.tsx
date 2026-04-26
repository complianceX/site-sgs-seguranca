import { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "SGS - Gestão de Segurança do Trabalho e Governança Documental",
  description: "Software de gestão de SST para organizar documentos, evidências de campo, prazos e governança em uma plataforma SaaS segura.",
  keywords: ["SST", "Segurança do Trabalho", "Governança Documental", "APR", "PT", "DDS", "SaaS", "Gestão de Segurança"],
  openGraph: {
    title: "SGS - Gestão de Segurança do Trabalho",
    description: "Organize documentos oficiais, evidências de campo e governança de SST.",
    type: "website",
    locale: "pt_BR",
    url: "https://sgsseguranca.com.br",
  }
};

export default function Page() {
  return <HomePage />;
}
