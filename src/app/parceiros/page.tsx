import { PartnersPage } from "@/components/pages/PartnersPage";
import { createPageMetadata } from "@/lib/seo/seo";

export const metadata = createPageMetadata({
  title: "Parceiros e Canais",
  description:
    "Torne-se parceiro SGS e ofereça a melhor plataforma de SST do mercado. Programas de Consultoria, Tecnologia e Distribuição.",
  path: "/parceiros",
  keywords: ["Parceiros SGS", "Canais SGS", "Revenda SST", "Software Segurança do Trabalho parceiros"],
});

export default function Page() {
  return <PartnersPage />;
}
