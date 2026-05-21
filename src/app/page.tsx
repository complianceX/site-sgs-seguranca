import { HomePage } from "@/components/pages/HomePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "SGS - Gestão de Segurança do Trabalho e Governança Documental",
  description:
    "Software de gestão de SST para organizar documentos, evidências de campo, prazos e governança em uma plataforma SaaS segura.",
  path: "/",
  keywords: ["SST", "Segurança do Trabalho", "Governança Documental", "APR", "PT", "DDS", "SaaS"],
});

export default function Page() {
  return <HomePage />;
}
