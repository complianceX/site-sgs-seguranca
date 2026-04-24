import { Metadata } from "next";
import { GovernancePage } from "@/components/pages/GovernancePage";

export const metadata: Metadata = {
  title: "Governança Documental - SGS",
  description: "Trilha forense, PDF oficial imutável e validação pública de documentos SST.",
  keywords: ["Governança Documental", "SST Digital", "Validação de Documentos", "Compliance SST"],
};

export default function Page() {
  return <GovernancePage />;
}
