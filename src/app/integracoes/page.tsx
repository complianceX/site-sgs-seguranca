import { Metadata } from "next";
import { IntegrationsPage } from "@/components/pages/IntegrationsPage";

export const metadata: Metadata = {
  title: "Integrações - SGS",
  description: "Conheça o ecossistema do SGS: OpenAI, Google Calendar, Cloudflare, Supabase e muito mais.",
  keywords: ["Integrações SST", "API Segurança do Trabalho", "SGS Tech Stack", "Ecossistema Digital SST"],
};

export default function Page() {
  return <IntegrationsPage />;
}
