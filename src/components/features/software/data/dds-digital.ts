import { Video, MessageSquare, Users, FileSignature } from "lucide-react";
import type { SoftwarePageData } from "./types";

export const ddsDigitalData: SoftwarePageData = {
  badgeIcon: Users,
  badgeText: "DDS Digital",
  heroTitle: "Diálogo Diário de Segurança sem Papel",
  heroSubtitle: "Transforme o DDS em um ativo digital com vídeos, assinaturas e histórico completo acessível de qualquer lugar.",
  benefitsTitle: "Por que digitalizar o DDS?",
  benefitsSubtitle: "O DDS Digital engaja a equipe, organiza o histórico e protege sua empresa em auditorias.",
  benefits: [
    { icon: Video, title: "DDS com Vídeo", desc: "Grave ou vincula vídeos diretamente ao DDS. A equipe assiste pelo celular e confirma a visualização." },
    { icon: Users, title: "Registro de Participantes", desc: "Lista completa de presentes com foto, função e confirmação individual de participação." },
    { icon: MessageSquare, title: "Feedback da Equipe", desc: "Espaço para dúvidas, comentários e sugestões após cada DDS, registrados no histórico." },
    { icon: FileSignature, title: "Assinatura Coletiva", desc: "Assinatura digital de todos os participantes em um só documento com validade jurídica." },
  ],
  painsTitle: "Problemas que o DDS Digital resolve",
  painsVariant: "checklist",
  pains: [
    { title: "DDS no papel que nunca são arquivados ou viram pilhas inorganizáveis" },
    { title: "Dificuldade de comprovar a realização do DDS em auditorias e fiscalizações" },
    { title: "Equipes dispersas em múltiplos fronts que não participam do diálogo diário" },
    { title: "Sem histórico centralizado para consultar temas abordados por período" },
  ],
  sidebarText: "Em uma fiscalização, cada DDS não registrado pode representar multas e passivos trabalhistas evitáveis.",
  useCasesTitle: "Aplicação por setor",
  useCasesSubtitle: "O DDS Digital funciona para qualquer operação com equipe em campo.",
  useCasesColumns: 2,
  useCases: [
    { title: "Construção Civil", desc: "DDS diário obrigatório antes do início das atividades em cada frente de obra." },
    { title: "Indústria", desc: "Diálogos de segurança por turno com registros de cada equipe de produção." },
    { title: "Logística", desc: "DDS para motoristas e equipe de carregamento antes do início das rotas." },
    { title: "Agronegócio", desc: "Diálogos sazonais para safra, colheita e operação de máquinas pesadas." },
  ],
  faqTitle: "Perguntas Frequentes",
  faqSubtitle: "Tire suas dúvidas sobre o DDS Digital do SGS.",
  faqs: [
    { q: "O DDS Digital pode ser feito à distância?", a: "Sim. O colaborador acessa pelo celular, assiste ao conteúdo e confirma a participação com assinatura digital de qualquer lugar." },
    { q: "É possível agendar DDS recorrentes?", a: "Sim. Você define a periodicidade — diário, semanal ou por atividade — e o sistema notifica os participantes automaticamente." },
    { q: "O sistema armazena vídeos personalizados?", a: "Sim. Você pode gravar vídeos específicos para cada DDS ou reutilizar uma biblioteca de conteúdos gravados anteriormente." },
  ],
  ctaTitle: "Transforme seu DDS em um ativo digital",
  ctaSubtitle: "Agende uma demonstração e veja como engajar sua equipe com o DDS Digital do SGS.",
  trackLabel: "Agendar demonstração - DDS Digital",
};
