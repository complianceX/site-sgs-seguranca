import { createPageMetadata } from "@/lib/seo/seo";
import { GestaoSstPage } from "@/components/pages/software/GestaoSstPage";

export const metadata = createPageMetadata({
  title: "Software de Gestão de Segurança do Trabalho (SST) | Gestão Operacional",
  description: "Plataforma SaaS para gestão operacional de SST. Centralize APR, DDS, PT, evidências e prazos em uma jornada de governança rastreável.",
  path: "/software-gestao-sst",
  keywords: ["Software de Gestão de SST", "Sistema SST Digital", "Gestão Operacional de Segurança", "Plataforma de SST", "SGS Segurança"],
});

export default function Page() {
  return <GestaoSstPage />;
}
