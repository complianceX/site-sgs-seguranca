import { GovernancePage } from "@/components/pages/GovernancePage";
import { createPageMetadata } from "@/lib/seo/seo";

export const metadata = createPageMetadata({
  title: "Governança Documental",
  description: "Trilha forense, PDF oficial imutável e validação pública de documentos SST.",
  path: "/governanca",
  keywords: ["Governança Documental", "SST Digital", "Validação de Documentos"],
});

export default function Page() {
  return <GovernancePage />;
}
