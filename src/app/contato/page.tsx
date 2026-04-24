import { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contato - SGS",
  description: "Fale com nossa equipe, tire dúvidas ou agende uma demonstração do sistema SGS.",
  keywords: ["Contato SGS", "Suporte SST", "Demonstração Software SST"],
};

export default function Page() {
  return <ContactPage />;
}
