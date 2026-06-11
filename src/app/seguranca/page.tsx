import { SecurityPage } from "@/components/pages/SecurityPage";
import { createPageMetadata } from "@/lib/seo/seo";

export const metadata = createPageMetadata({
  title: "Segurança e LGPD",
  description:
    "Segurança, LGPD, isolamento de dados por empresa, controles de acesso e governança para o software SGS.",
  path: "/seguranca",
  keywords: ["Segurança da Informação", "LGPD SST", "Multi-tenancy"],
});

export default function Page() {
  return <SecurityPage />;
}
