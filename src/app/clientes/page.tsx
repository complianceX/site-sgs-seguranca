import { ClientsPage } from "@/components/pages/ClientsPage";
import { createPageMetadata } from "@/lib/seo/seo";

export const metadata = createPageMetadata({
  title: "Clientes que Confiam no SGS",
  description:
    "Empresas de construção civil, indústria, mineração, logística e energia que confiam no SGS para transformar a gestão de SST.",
  path: "/clientes",
  keywords: ["Clientes SGS", "Cases SST", "Segurança do Trabalho clientes", "Software SST empresas"],
});

export default function Page() {
  return <ClientsPage />;
}
