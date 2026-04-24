import { Metadata } from "next";
import { SecurityPage } from "@/components/pages/SecurityPage";

export const metadata: Metadata = {
  title: "Segurança e LGPD - SGS",
  description: "Isolamento multi-tenant, criptografia, conformidade LGPD e monitoramento 24/7.",
  keywords: ["Segurança da Informação", "LGPD SST", "Multi-tenancy", "SST Seguro"],
};

export default function Page() {
  return <SecurityPage />;
}
