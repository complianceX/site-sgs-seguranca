import { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "SGS - Gestão de Segurança do Trabalho e Governança Documental",
  description: "A plataforma SaaS completa para controlar documentos oficiais, evidências, treinamentos e conformidade operacional em um ambiente seguro e multi-tenant.",
  keywords: ["SST", "Segurança do Trabalho", "Governança Documental", "APR", "PT", "DDS", "SaaS", "Gestão de Segurança"],
  openGraph: {
    title: "SGS - Gestão de Segurança do Trabalho",
    description: "Controle documentos oficiais, evidências e conformidade operacional.",
    type: "website",
    locale: "pt_BR",
    url: "https://sgsseguranca.com.br",
  }
};

export default function Page() {
  return <HomePage />;
}
