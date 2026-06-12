import { createPageMetadata } from "@/lib/seo/seo";
import { DdsDigitalPage } from "@/components/pages/software/DdsDigitalPage";

export const metadata = createPageMetadata({
  title: "Software de DDS Digital | Diálogo Diário de Segurança Online",
  description: "Elimine o papel no seu DDS. Colete assinaturas digitais, registre fotos da equipe em campo e tenha histórico completo com o SGS.",
  path: "/software-dds-digital",
  keywords: ["DDS Digital", "Diálogo Diário de Segurança Online", "Assinatura Digital DDS", "App de DDS", "SGS DDS"],
});

export default function Page() {
  return <DdsDigitalPage />;
}
