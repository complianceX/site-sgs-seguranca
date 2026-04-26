import {
  Shield,
  FileText,
  Cpu,
  Lock,
  LayoutDashboard,
  UserPlus,
  Settings,
  Rocket
} from "lucide-react";

export const homeHero = {
  tag: "Site institucional do SGS",
  title: "Gestão de SST com evidências em campo",
  description: "O SGS conecta documentos críticos, evidências de campo e prazos de SST em uma governança rastreável para empresas que precisam reduzir retrabalho e risco operacional.",
  ctaPrimary: { text: "Agendar demonstração", href: "/contato" },
  ctaSecondary: { text: "Ver Planos", href: "/precos" },
  video: "/videos/dds-campo.mp4"
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
  title: "A autoridade em Gestão de SST",
  description: "O SGS combina tecnologia de ponta com as melhores práticas de governança documental para sua empresa.",
  items: [
    {
      icon: Lock,
      color: "primary",
      title: "Segurança & LGPD",
      text: "Isolamento de dados e controles nativos de privacidade para apoiar sua conformidade."
    },
    {
      icon: FileText,
      color: "sgs-orange",
      title: "Governança Documental",
      text: "Registry de documentos com trilha forense e validação pública para auditorias impecáveis."
    },
    {
      icon: Cpu,
      color: "sgs-green",
      title: "IA Sophie Assistiva",
      text: "Inteligência artificial que apoia a operação, reduzindo o trabalho manual e aumentando a precisão."
    }
  ]
};

export const implementationSteps = {
  tag: "Implementação Rápida",
  title: "Como o SGS entra na sua Operação",
  steps: [
    { step: "01", icon: LayoutDashboard, title: "Setup & Unidades", desc: "Estruturamos suas unidades, sites e hierarquia de acesso (RBAC) em minutos." },
    { step: "02", icon: UserPlus, title: "Importação de Dados", desc: "Sincronizamos sua base de trabalhadores, treinamentos e exames atuais." },
    { step: "03", icon: Settings, title: "Customização IA", desc: "A Sophie aprende o contexto técnico da sua empresa para rascunhos precisos." },
    { step: "04", icon: Rocket, title: "Go-Live no Campo", desc: "Treinamento focado no TST e Supervisores para uso direto via tablet ou mobile." }
  ]
};

export const testimonials = [
  {
    name: "Ricardo Santos",
    role: "Gerente de SST",
    company: "Indústria Metalúrgica Sul",
    text: "O SGS mudou completamente nossa forma de gerir documentos. O que levava dias para organizar agora fica rastreável, padronizado e pronto para auditoria.",
    stars: 5
  },
  {
    name: "Ana Paula Silva",
    role: "Engenheira de Segurança",
    company: "Construtora Horizonte",
    text: "A IA Sophie uma mão na roda. Os rascunhos de APR e PT economizam horas de trabalho manual da nossa equipe técnica.",
    stars: 5
  },
  {
    name: "Marcos Oliveira",
    role: "Diretor de Operações",
    company: "Logística Express",
    text: "O controle de vencimentos de treinamentos e exames reduziu nosso risco operacional drasticamente. Não perdemos mais nenhum prazo.",
    stars: 5
  }
];

export const faqs = [
  {
    question: "O SGS é compatível com a LGPD?",
    answer: "Sim, o SGS foi desenhado com princípios de privacidade desde a concepção. Incluímos consentimento versionado, sanitização de dados sensíveis e isolamento multi-tenant."
  },
  {
    question: "Como funciona a validação pública de documentos?",
    answer: "Cada documento oficial gerado possui um QR Code ou código único. Qualquer pessoa autorizada pode validar a autenticidade do PDF através do nosso portal Registry, sem precisar logar no sistema."
  },
  {
    question: "A IA Sophie substitui o técnico de segurança?",
    answer: "Não. A Sophie é uma ferramenta assistiva. Ela apoia a criação de rascunhos, sugere controles e analisa riscos, mas a decisão final e responsabilidade técnica permanecem sempre com o profissional de SST."
  },
  {
    question: "Posso gerenciar múltiplas unidades ou empresas?",
    answer: "Sim, o sistema é multi-tenant e multi-site. Você pode estruturar empresas, unidades operacionais e definir permissões granulares (RBAC) para cada usuário."
  }
];

export const finalCTA = {
  title: "Pronto para elevar o nível da sua segurança?",
  ctaPrimary: { text: "Agendar demonstração", href: "/contato" },
  ctaSecondary: { text: "Ver módulos", href: "/modulos" }
};
