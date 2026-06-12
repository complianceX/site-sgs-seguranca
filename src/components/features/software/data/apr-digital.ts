import { FileWarning, Shield, ClipboardCheck, Eye } from "lucide-react";
import type { SoftwarePageData } from "./types";

export const aprDigitalData: SoftwarePageData = {
  badgeIcon: FileWarning,
  badgeText: "APR Digital",
  heroTitle: "Análise Preliminar de Risco 100% Digital",
  heroSubtitle: "Elimine o papel nas suas APR. Crie, revise, assine e arquive análises de risco com rastreabilidade total e evidências de campo.",
  benefitsTitle: "Por que digitalizar sua APR?",
  benefitsSubtitle: "A APR digital elimina retrabalho, garante conformidade e fortalece a cultura de segurança.",
  benefits: [
    { icon: FileWarning, title: "Matriz de Riscos Inteligente", desc: "Identificação e classificação automática de riscos com base nas atividades cadastradas." },
    { icon: Shield, title: "Controle de Versões", desc: "Histórico completo de revisões com rastreabilidade de quem alterou o quê e quando." },
    { icon: ClipboardCheck, title: "Assinatura Digital", desc: "Coleta de assinaturas dos envolvidos diretamente no documento com validade jurídica." },
    { icon: Eye, title: "Evidências Vinculadas", desc: "Fotos e vídeos do ambiente conectados a cada risco identificado na APR." },
  ],
  painsTitle: "Problemas que a APR Digital resolve",
  painsVariant: "checklist",
  pains: [
    { title: "Perda de documentos físicos em auditorias e fiscalizações" },
    { title: "Dificuldade de localizar versões anteriores de uma APR" },
    { title: "Riscos identificados que nunca são corrigidos por falta de vínculo com ações" },
    { title: "Assinaturas ilegíveis ou sem validade documental" },
  ],
  sidebarText: "Uma APR mal documentada pode invalidar sua defesa em uma ação trabalhista ou fiscalização do MPT.",
  useCasesTitle: "Aplicação por setor",
  useCasesSubtitle: "A APR Digital se adapta à realidade de cada operação.",
  useCasesColumns: 2,
  useCases: [
    { title: "Construção Civil", desc: "APR para serviços em altura, escavações, içamento de cargas e demolições." },
    { title: "Indústria Química", desc: "Análise de riscos em áreas classificadas, liberação de produtos perigosos e manutenção." },
    { title: "Mineração", desc: "APR para detonação, transporte de minério, operação de britagem e barragens." },
    { title: "Agronegócio", desc: "Identificação de riscos em silos, pulverização aérea, operação de colheitadeiras." },
  ],
  faqTitle: "Perguntas Frequentes",
  faqSubtitle: "Tire suas dúvidas sobre a APR Digital do SGS.",
  faqs: [
    { q: "O SGS permite criar APR a partir de templates?", a: "Sim. Você pode criar modelos de APR por tipo de atividade e reutilizá-los, agilizando a abertura de novas análises no campo." },
    { q: "A assinatura digital na APR tem validade jurídica?", a: "Sim. As assinaturas são capturadas com registro de data, hora e geolocalização, seguindo os requisitos da MP 2.200-2 e ICP-Brasil." },
    { q: "É possível vincular uma APR a uma Permissão de Trabalho?", a: "Sim. O SGS permite associar a APR diretamente à PT, garantindo que os riscos identificados sejam considerados antes da liberação." },
    { q: "Posso anexar fotos e vídeos como evidência na APR?", a: "Sim. Cada risco pode conter fotos, vídeos e observações do TST, criando um dossiê completo da análise." },
  ],
  ctaTitle: "Transforme sua gestão de APR",
  ctaSubtitle: "Agende uma demonstração e veja como o SGS pode digitalizar suas análises de risco.",
  trackLabel: "Agendar demonstração - APR Digital",
};
