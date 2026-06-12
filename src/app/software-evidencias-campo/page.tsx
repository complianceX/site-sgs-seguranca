import { createPageMetadata } from "@/lib/seo/seo";
import { EvidenciasCampoPage } from "@/components/pages/software/EvidenciasCampoPage";

export const metadata = createPageMetadata({
  title: "Gestão de Evidências de Campo em SST | Fotos e Rastreabilidade",
  description: "Transforme fotos e vídeos de campo em ativos de segurança jurídica. Rastreabilidade total de evidências vinculadas a APR, DDS e PT.",
  path: "/software-evidencias-campo",
  keywords: ["Evidências de Campo SST", "Rastreabilidade SST", "Fotos de Segurança do Trabalho", "Prova Digital SST", "SGS Evidências"],
});

export default function Page() {
  return <EvidenciasCampoPage />;
}
