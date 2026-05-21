import { IntegrationsPage } from "@/components/pages/IntegrationsPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Integrações",
  description:
    "Integrações do SGS com IA assistiva, calendário, e-mail, storage, banco de dados gerenciado e APIs.",
  path: "/integracoes",
  keywords: ["Integrações SST", "API Segurança do Trabalho"],
});

export default function Page() {
  return <IntegrationsPage />;
}
