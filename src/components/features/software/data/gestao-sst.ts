import { LayoutDashboard, Users, FileText, Bell, Activity, Layers, TrendingUp } from "lucide-react";
import type { SoftwarePageData } from "./types";

export const gestaoSstData: SoftwarePageData = {
  breadcrumbs: [{ name: "Gestão de SST", href: "/software-gestao-sst" }],
  badgeIcon: Activity,
  badgeText: "Gestão Completa",
  heroTitle: "Software de Gestão de SST: Documentos, Prazos e Governança",
  heroSubtitle: "Centralize toda a operação de Segurança do Trabalho em uma plataforma: documentos, pessoas, prazos, evidências e indicadores.",
  benefitsTitle: "O que o SGS oferece",
  benefitsSubtitle: "Tudo que sua operação de SST precisa em uma única plataforma integrada.",
  benefits: [
    { icon: LayoutDashboard, title: "Central de Documentos", desc: "APR, DDS, PT, CAT, RDO e checklists em um só lugar. Cada documento com fluxo de aprovação, assinaturas e evidências vinculadas." },
    { icon: Users, title: "Gestão de Pessoas", desc: "Cadastro completo de trabalhadores com treinamentos, exames, EPIs, histórico de documentos e status operacional centralizado." },
    { icon: Bell, title: "Controle de Prazos e Pendências", desc: "Notificações automáticas de vencimentos de treinamentos, exames, EPIs e ações corretivas. Nunca mais perca um prazo crítico." },
    { icon: TrendingUp, title: "Dashboards e KPIs", desc: "Indicadores em tempo real de conformidade, produção de documentos, ações em atraso e evolução histórica por unidade." },
  ],
  painsTitle: "Dores que eliminamos",
  painsVariant: "cards",
  pains: [
    { title: "Documentos de SST espalhados em pastas e drives", desc: "APRs em uma pasta, DDS em outra, evidências no WhatsApp. Na hora de uma fiscalização, ninguém encontra o que precisa." },
    { title: "Prazos vencendo sem que ninguém saiba", desc: "Treinamentos vencidos, exames atrasados, EPIs sem substituição. O caos operacional gera multas, passivos trabalhistas e riscos reais." },
    { title: "Gestão sem métricas e sem governança", desc: "Diretores não têm visibilidade objetiva da operação de SST. Decisões são tomadas no achismo, sem indicadores confiáveis." },
  ],
  sidebarText: "O SGS centraliza em um único sistema tudo que sua equipe de SST precisa para operar com excelência e conformidade.",
  sidebarIcon: Layers,
  painsIcon: Activity,
  useCasesTitle: "Para quem é o SGS",
  useCasesSubtitle: "Empresas que precisam de uma gestão de SST profissional e integrada.",
  useCasesColumns: 3,
  useCases: [
    { title: "Construtoras e Incorporadoras", desc: "Gestão completa de SST em múltiplos canteiros com centenas de trabalhadores, documentos e prazos simultâneos." },
    { title: "Indústria Pesada", desc: "Operações contínuas com alta criticidade, múltiplos turnos e necessidade de rastreabilidade rigorosa de cada documento." },
    { title: "Empresas de Engenharia", desc: "Gestão de SST terceirizada para clientes, com contratos, relatórios consolidados e compliance por obra." },
  ],
  faqs: [
    { q: "O SGS pode ser usado por empresas de todos os portes?", a: "Sim. O SGS é multi-tenant e escalável: uma pequena construtora usa os mesmos módulos que uma grande indústria, com custo proporcional ao volume de uso." },
    { q: "É possível integrar com outros sistemas?", a: "Sim. O SGS possui API REST para integração com RH, ERP, sistemas de ponto e portarias. Também oferece exportação para eSocial SST." },
    { q: "Como funciona a implantação do sistema?", a: "Fazemos um mapeamento da operação, configuramos os módulos prioritários, ajustamos permissões e treinamos a equipe. A implantação completa leva em média 15 dias." },
    { q: "O sistema é acessível via celular?", a: "Sim. O SGS possui aplicativo mobile completo para iOS e Android, permitindo que TSTs e técnicos registrem documentos, fotos e assinaturas diretamente do campo." },
  ],
  faqTitle: "Dúvidas Frequentes",
  faqVariant: "accordion",
  ctaTitle: "Centralize sua gestão de SST",
  ctaSubtitle: "Agende uma demonstração e descubra como o SGS pode organizar, padronizar e dar visibilidade à sua operação de segurança.",
  trackLabel: "Agendar demonstração - Gestão SST",
};
