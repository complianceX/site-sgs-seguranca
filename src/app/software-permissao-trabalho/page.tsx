import { createPageMetadata } from "@/lib/seo/seo";
import { PermissaoTrabalhoPage } from "@/components/pages/software/PermissaoTrabalhoPage";

export const metadata = createPageMetadata({
  title: "Sistema de Permissão de Trabalho (PT) Online | PT Digital",
  description: "Gerencie Permissões de Trabalho de forma digital. Controle riscos, validade, assinaturas e conformidade técnica em tempo real.",
  path: "/software-permissao-trabalho",
  keywords: ["Permissão de Trabalho Digital", "PT Digital", "Sistema de PT Online", "Liberação de Trabalho SST", "SGS PT"],
});

export default function Page() {
  return <PermissaoTrabalhoPage />;
}
