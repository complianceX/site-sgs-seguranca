import { ContactPage } from "@/components/pages/ContactPage";
import { createPageMetadata } from "@/lib/seo/seo";

export const metadata = createPageMetadata({
  title: "Contato",
  description: "Fale com nossa equipe, tire dúvidas ou agende uma demonstração do sistema SGS.",
  path: "/contato",
  keywords: ["Contato SGS", "Demonstração Software SST"],
});

export default function Page() {
  return <ContactPage />;
}
