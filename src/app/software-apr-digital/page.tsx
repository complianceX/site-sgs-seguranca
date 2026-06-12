import { createPageMetadata } from "@/lib/seo/seo";
import { AprDigitalPage } from "@/components/pages/software/AprDigitalPage";

export const metadata = createPageMetadata({
  title: "Software de APR Digital | Análise Preliminar de Risco Online",
  description: "Digitalize sua APR (Análise Preliminar de Risco). Controle versões, colete evidências de campo e assinaturas digitais com o SGS.",
  path: "/software-apr-digital",
  keywords: ["APR Digital", "Software APR", "Análise Preliminar de Risco Online", "SST Digital", "SGS APR"],
});

export default function Page() {
  return <AprDigitalPage />;
}
