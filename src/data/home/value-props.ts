import { FolderKanban, Camera, CalendarClock } from "lucide-react";

export const valueProps = {
  title: "Benefícios que aparecem na rotina do TST e do gestor",
  description: "O SGS foi pensado para reduzir dispersão operacional, organizar evidências e dar controle sobre documentos críticos antes que eles virem pendência.",
  items: [
    {
      icon: FolderKanban,
      color: "primary",
      title: "Menos planilhas espalhadas",
      text: "Centralize APR, DDS, PT, inspeções e vencimentos em uma rotina única, sem depender de arquivos soltos."
    },
    {
      icon: Camera,
      color: "sgs-orange",
      title: "Evidências no documento certo",
      text: "Fotos, vídeos, assinaturas e observações ficam conectados à empresa, obra ou frente de serviço correta."
    },
    {
      icon: CalendarClock,
      color: "sgs-green",
      title: "Prazos sob controle",
      text: "Vencimentos, pendências e ações corretivas ficam visíveis para reduzir retrabalho e risco em auditorias."
    }
  ]
};
