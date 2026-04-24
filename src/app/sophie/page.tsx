import { Metadata } from "next";
import { SophiePage } from "@/components/pages/SophiePage";

export const metadata: Metadata = {
  title: "IA Sophie - Assistente SST Inteligente",
  description: "Conheça a Sophie, a IA assistiva do SGS para rascunhos de APR, DDS e análises de risco.",
  keywords: ["IA para SST", "Inteligência Artificial Segurança do Trabalho", "Sophie IA", "Automação SST"],
};

export default function Page() {
  return <SophiePage />;
}
