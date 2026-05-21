import { PricingPage } from "@/components/pages/PricingPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Planos e Preços",
  description: "Planos Operacional, Profissional e Enterprise para gestão de SST. Valores sob consulta conforme operação.",
  path: "/precos",
  keywords: ["Preços Software SST", "Planos Gestão de Segurança", "SGS SaaS"],
});

export default function Page() {
  return <PricingPage />;
}
