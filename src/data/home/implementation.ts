import { Building2, FileCheck2, Camera, CalendarClock, FileText, SearchCheck } from "lucide-react";

export const implementationSteps = {
  tag: "Como funciona",
  title: "Da rotina de campo ao relatório rastreável",
  steps: [
    { step: "01", icon: Building2, title: "Cadastre empresas e permissões", desc: "Organize unidades, usuários e responsabilidades para cada rotina de SST." },
    { step: "02", icon: FileCheck2, title: "Crie documentos de SST", desc: "Padronize APR, DDS, PT, inspeções, checklists e registros operacionais." },
    { step: "03", icon: Camera, title: "Colete evidências em campo", desc: "Vincule fotos, vídeos, assinaturas e observações ao documento correto." },
    { step: "04", icon: CalendarClock, title: "Acompanhe prazos e pendências", desc: "Veja vencimentos, ações abertas e documentos que precisam de atenção." },
    { step: "05", icon: FileText, title: "Gere relatórios e PDFs", desc: "Consolide registros em documentos oficiais para gestão e fiscalização." },
    { step: "06", icon: SearchCheck, title: "Responda auditorias com rastreabilidade", desc: "Tenha histórico por usuário, data, empresa, frente de serviço e documento." }
  ]
};
