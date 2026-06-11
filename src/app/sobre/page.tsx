import { AboutPage } from "@/components/pages/AboutPage";
import { createPageMetadata } from "@/lib/seo/seo";

export const metadata = createPageMetadata({
  title: "Sobre o SGS",
  description:
    "Conheça a missão do SGS: transformar rotinas de SST em governança rastreável com documentos, evidências e controle operacional.",
  path: "/sobre",
  keywords: ["Sobre SGS", "Empresa SST", "Software Segurança do Trabalho"],
});

export default function Page() {
  return <AboutPage />;
}
