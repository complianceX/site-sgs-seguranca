import { createPageMetadata } from "@/lib/seo/seo";
import { ChecklistsDigitaisPage } from "@/components/pages/software/ChecklistsDigitaisPage";

export const metadata = createPageMetadata({
  title: "Checklists Digitais de Segurança do Trabalho | App de Checklist SST",
  description: "Crie e gerencie checklists de SST de forma digital. Elimine formulários em papel, colete evidências e tenha relatórios automáticos de conformidade.",
  path: "/software-checklists-digitais",
  keywords: ["Checklist Digital SST", "App de Checklist Segurança", "Checklist NR-18 Digital", "Sistema de Checklist Online", "SGS Checklists"],
});

export default function Page() {
  return <ChecklistsDigitaisPage />;
}
