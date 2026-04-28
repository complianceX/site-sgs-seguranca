import {
  Shield,
  FileText,
  ClipboardCheck,
  FolderKanban,
  Camera,
  CalendarClock,
  History,
  FileWarning,
  Building2,
  FileCheck2,
  BarChart3,
  SearchCheck
} from "lucide-react";

export const homeHero = {
  tag: "Software de gestão de SST para operações reais",
  title: "Controle APR, DDS, PT e evidências de SST em uma plataforma rastreável",
  description: "O SGS centraliza documentos críticos, assinaturas, prazos e evidências de campo para reduzir retrabalho e dar resposta segura em auditorias.",
  ctaPrimary: { text: "Agendar demonstração", href: "/contato" },
  ctaSecondary: { text: "Ver módulos do SGS", href: "/modulos" },
  video: "/videos/dds-campo.mp4",
  trustText: "Feito para rotinas reais de SST: APR, DDS, PT, inspeções e evidências em um só lugar.",
  proofPoints: [
    "Mais rastreabilidade",
    "Menos planilhas",
    "Menos WhatsApp perdido"
  ]
};

export const servedSegments = [
  { name: "Indústria", label: "Setor industrial" },
  { name: "Construção", label: "Construção civil" },
  { name: "Mineração", label: "Operações de mineração" },
  { name: "Logística", label: "Logística e transporte" },
  { name: "Facilities", label: "Facilities e manutenção" },
  { name: "Energia", label: "Energia e utilities" },
];

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

export const conversionBenefits = [
  {
    icon: FolderKanban,
    title: "Menos documentos perdidos",
    text: "Cada registro fica organizado por contexto operacional, com histórico e status de acompanhamento."
  },
  {
    icon: ClipboardCheck,
    title: "Mais controle de APR, DDS e PT",
    text: "Documentos críticos deixam de depender de troca manual entre campo, escritório e gestão."
  },
  {
    icon: Shield,
    title: "Mais segurança em auditorias",
    text: "A empresa consegue demonstrar quando, onde e por quem cada etapa foi registrada."
  },
  {
    icon: History,
    title: "Rastreabilidade das ações",
    text: "Pendências, aprovações e evidências ficam ligadas a usuários, datas, documentos e unidades."
  },
  {
    icon: FileWarning,
    title: "Menos retrabalho para TST e gestor",
    text: "Rotinas repetitivas ganham padrão, reduzindo busca por anexos, versões e informações soltas."
  },
  {
    icon: BarChart3,
    title: "Visão operacional clara",
    text: "Indicadores de pendências, vencimentos e documentos críticos ajudam a priorizar o que precisa de ação."
  }
];

export const productProof = {
  tag: "SGS em uso",
  title: "Uma visão prática do que sua equipe passa a controlar",
  description: "Mockup ilustrativo baseado nos módulos do SGS para mostrar a jornada de documentos, evidências, prazos e auditoria.",
  modules: [
    { label: "APR", status: "Em aprovação", detail: "Frente de serviço A" },
    { label: "DDS", status: "Assinado", detail: "18 participantes" },
    { label: "PT", status: "Vence hoje", detail: "Trabalho em altura" },
    { label: "Evidências", status: "12 anexos", detail: "Fotos e vídeos" },
  ],
  timeline: [
    "APR criada pelo TST",
    "Evidências coletadas em campo",
    "Assinaturas vinculadas",
    "PDF pronto para auditoria"
  ]
};

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

export const testimonials = [
  {
    name: "Governança documental",
    role: "Capacidade do SGS",
    company: "APR · DDS · PT · relatórios",
    text: "Projetado para rotinas reais de SST, onde documentos críticos precisam ter contexto, versão, responsável, evidência e histórico defensável.",
    stars: 0
  },
  {
    name: "Evidências organizadas",
    role: "Capacidade do SGS",
    company: "Campo conectado à gestão",
    text: "Fotos, vídeos e assinaturas ficam vinculados ao registro certo, reduzindo perda de informação em grupos, pastas e planilhas paralelas.",
    stars: 0
  },
  {
    name: "Controle em auditorias",
    role: "Capacidade do SGS",
    company: "Rastreabilidade operacional",
    text: "A estrutura foi pensada para apoiar LGPD, segurança, governança e respostas rápidas sobre quem registrou, aprovou e evidenciou cada etapa.",
    stars: 0
  }
];

export const faqs = [
  {
    question: "O SGS substitui planilhas de controle de SST?",
    answer: "Sim. O objetivo é tirar APR, DDS, PT, evidências, prazos e pendências de planilhas soltas e levar tudo para uma rotina rastreável."
  },
  {
    question: "O sistema ajuda no controle de APR, DDS e PT?",
    answer: "Sim. Esses documentos críticos são parte central da proposta do SGS, com foco em criação, acompanhamento, evidências e governança."
  },
  {
    question: "O SGS gera relatórios e PDFs?",
    answer: "Sim. A plataforma foi pensada para consolidar registros em documentos e relatórios que apoiam gestão, fiscalização e auditoria."
  },
  {
    question: "Consigo controlar evidências de campo?",
    answer: "Sim. Evidências como fotos, vídeos, observações e assinaturas podem ser tratadas como parte da rastreabilidade do documento."
  },
  {
    question: "O sistema pode ser usado por TST, gestor e equipe operacional?",
    answer: "Sim. A jornada foi desenhada para conectar quem registra no campo, quem valida tecnicamente e quem acompanha indicadores e pendências."
  },
  {
    question: "O SGS tem controle por empresa e permissões?",
    answer: "Sim. O sistema considera empresas, unidades e permissões para organizar acesso e responsabilidade operacional."
  },
  {
    question: "Como funciona a implantação?",
    answer: "A implantação começa com entendimento da operação, configuração das unidades, módulos prioritários, usuários e treinamento do fluxo de uso."
  },
  {
    question: "Posso solicitar uma demonstração?",
    answer: "Sim. A melhor forma de avaliar o SGS é agendar uma demonstração para mapear seus documentos, volume operacional e principais gargalos."
  },
  {
    question: "O SGS atende quais tipos de empresa?",
    answer: "Indústrias, construtoras, operações de mineração, logística, facilities, energia e empresas que precisam organizar rotinas de SST."
  },
  {
    question: "O sistema ajuda em auditorias?",
    answer: "Sim. O SGS organiza histórico, evidências, documentos e pendências para facilitar respostas técnicas e reduzir busca manual por registros."
  }
];

export const finalCTA = {
  title: "Pronto para tirar sua rotina de SST das planilhas?",
  description: "Agende uma demonstração e veja como o SGS organiza APR, DDS, PT, evidências e prazos em uma jornada rastreável.",
  ctaPrimary: { text: "Agendar demonstração", href: "/contato" },
  ctaSecondary: { text: "Ver módulos do SGS", href: "/modulos" }
};
