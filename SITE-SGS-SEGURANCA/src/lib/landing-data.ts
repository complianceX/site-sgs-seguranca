import {
  Building2,
  Users,
  HardHat,
  ClipboardCheck,
  BookOpen,
  FileWarning,
  Stethoscope,
  GraduationCap,
  FileText,
  UserCheck,
  FolderOpen,
  PenTool,
  LayoutDashboard,
  BarChart3,
  KeyRound,
  Scale,
} from "lucide-react";

export const contactEmail = "contato@sgsseguranca.com.br";
export const privacyEmail = "privacidade@sgsseguranca.com.br";
export const whatsappNumber = "5531986937268";
export const whatsappMessage = "Olá, equipe SGS. Quero falar sobre uma demonstração do sistema.";
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
export const instagramUrl = "https://www.instagram.com/sgs_seguranca?igsh=MmpnbmszOWUyd3Vo&utm_source=qr";

export const allModules = [
  { icon: Building2, title: "Gestão de Empresas", desc: "Cadastro de múltiplas empresas com dados segregados por tenant. Cada contrato com sua própria base." },
  { icon: Users, title: "Gestão de Colaboradores", desc: "Funcionários, terceiros e prestadores com documentação centralizada. Vínculo por obra e função." },
  { icon: HardHat, title: "Gestão de Obras", desc: "Vincule colaboradores e documentos a obras, frentes de serviço e setores." },
  { icon: ClipboardCheck, title: "APR Digital", desc: "Riscos e medidas de controle rastreáveis por atividade. Aprovação e histórico completos." },
  { icon: BookOpen, title: "DDS Digital", desc: "Presença e evidências sem depender de listas em papel. Comprovante por participante." },
  { icon: FileWarning, title: "Permissão de Trabalho", desc: "PT com anexos no mesmo fluxo de controle. Liberação com validação e assinatura digital." },
  { icon: Stethoscope, title: "ASO Digital", desc: "Atestado de Saúde Ocupacional digital, com alerta de vencimento e histórico por colaborador." },
  { icon: GraduationCap, title: "Controle de Treinamentos", desc: "Registro de treinamentos NRs com data, carga horária e reciclagem automática." },
  { icon: FileText, title: "Ordem de Serviço", desc: "OS de segurança do trabalho integrada ao colaborador. Controle de versões." },
  { icon: UserCheck, title: "Mobilização", desc: "Checklist de documentos para liberação de terceiros em obra com validação documental." },
  { icon: FolderOpen, title: "Gestão de Documentos", desc: "Centralize programas, relatórios, laudos e certificações SST." },
  { icon: PenTool, title: "Assinaturas Digitais", desc: "Assinatura eletrônica com registro de data, IP e identificação. Validade jurídica." },
  { icon: LayoutDashboard, title: "Dashboard", desc: "Visão consolidada de pendências por obra, colaborador e tipo. Alertas automáticos." },
  { icon: BarChart3, title: "Relatórios", desc: "Exporte relatórios completos para auditoria. Indicadores de desempenho em SST." },
  { icon: KeyRound, title: "Controle de Acessos", desc: "Permissões por perfil e função. Princípio do menor privilégio." },
  { icon: Scale, title: "Conformidade NRs", desc: "Mapeamento automático de documentos por NR aplicável. Alertas de não conformidade." },
];

export const faqItems = [
  {
    q: "O que é o SGS?",
    a: "O SGS é uma plataforma digital para gestão de Saúde e Segurança do Trabalho. Centraliza APR, DDS, PT, ASO, treinamentos, documentos e indicadores em um só lugar, com rastreabilidade completa.",
  },
  {
    q: "Preciso instalar algum software?",
    a: "Não. O SGS é 100% web, acessado pelo navegador. Não requer instalação, servidor próprio ou manutenção de infraestrutura.",
  },
  {
    q: "O SGS é compatível com a LGPD?",
    a: "Sim. Adotamos segregação lógica por cliente, controle de acesso por perfil, trilhas de auditoria e canal dedicado de privacidade.",
  },
  {
    q: "Quanto tempo leva para implantar?",
    a: "A implantação básica pode ser feita em até 5 dias úteis. Planos profissionais incluem onboarding personalizado e treinamento.",
  },
  {
    q: "Quanto custa?",
    a: "Os planos variam conforme o número de colaboradores e módulos. Consulte nossa página de Preços ou solicite um orçamento.",
  },
];

export const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "Engenheiro de Segurança do Trabalho",
    company: "ConstruTech S.A.",
    content: "O SGS mudou nossa rotina. O que antes levava horas em papel agora é resolvido em minutos no tablet. A auditoria nunca foi tão tranquila.",
    avatar: "RM",
  },
  {
    name: "Ana Paula Silva",
    role: "Diretora de Operações",
    company: "SafeLogistics",
    content: "Rastreabilidade total. Conseguimos provar cada etapa da segurança em tempo real. Essencial para grandes contratos.",
    avatar: "AS",
  },
  {
    name: "Carlos Alberto",
    role: "Técnico de Segurança",
    company: "Indústria 4.0",
    content: "Interface intuitiva e suporte excelente. Os colaboradores no campo se adaptaram rápido e as evidências digitais são perfeitas.",
    avatar: "CA",
  },
];

export const trustLogos = [
  "ConstruTech", "SafeLogistics", "Indústria 4.0", "Mineradora Vale Verde", "Logística Express", "Metalúrgica Central"
];

