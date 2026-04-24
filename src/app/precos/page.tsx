import { Metadata } from "next";
import { PricingPage } from "@/components/pages/PricingPage";

export const metadata: Metadata = {
  title: "Planos e Preços - SGS",
  description: "Escolha o plano ideal para sua gestão de SST. Operacional, Profissional e Enterprise.",
  keywords: ["Preços Software SST", "Planos Gestão de Segurança", "SGS SaaS", "Custo SST Digital"],
};

export default function Page() {
  return <PricingPage />;
}
