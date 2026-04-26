import { Metadata } from "next";
import { SecurityPage } from "@/components/pages/SecurityPage";

export const metadata: Metadata = {
  title: "Segurança e LGPD - SGS",
  description: "Segurança, LGPD, isolamento de dados por empresa, controles de acesso e governança para o software SGS.",
  keywords: ["Segurança da Informação", "LGPD SST", "Multi-tenancy", "SST Seguro"],
};

export default function Page() {
  return <SecurityPage />;
}
