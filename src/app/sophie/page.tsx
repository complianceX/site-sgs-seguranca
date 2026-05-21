import { SophiePage } from "@/components/pages/SophiePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "IA Sophie - Assistente SST Inteligente",
  description: "Conheça a Sophie, a IA assistiva do SGS para rascunhos de APR, DDS e análises de risco.",
  path: "/sophie",
  keywords: ["IA para SST", "Sophie IA", "Automação SST"],
});

export default function Page() {
  return <SophiePage />;
}
