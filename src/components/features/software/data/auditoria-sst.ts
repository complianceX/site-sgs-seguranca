import { Search, FileSearch, ClipboardCheck, BarChart3, ShieldAlert, Target } from "lucide-react";
import type { SoftwarePageData } from "./types";

export const auditoriaSstData: SoftwarePageData = {
  breadcrumbs: [{ name: "Auditoria SST", href: "/software-auditoria-sst" }],
  badgeIcon: ShieldAlert,
  badgeText: "Auditoria & Conformidade",
  heroTitle: "Software para Auditoria de SST com Rastreabilidade Total",
  heroSubtitle: "Prepare sua operação para auditorias ISO 45001 e fiscalizações com um histórico rastreável de cada documento, evidência e ação corretiva.",
  benefitsTitle: "Benefícios para Auditoria",
  benefitsSubtitle: "Transforme auditorias em processos contínuos com dados objetivos e rastreáveis.",
  benefits: [
    { icon: Search, title: "Rastreabilidade Completa", desc: "Cada ação, documento e evidência fica vinculada a uma linha do tempo auditável, pronta para ISO 45001 e fiscalizações." },
    { icon: FileSearch, title: "Relatórios de Conformidade", desc: "Gere relatórios automáticos com indicadores objetivos de conformidade por unidade, período ou tipo de documento." },
    { icon: ClipboardCheck, title: "Planos de Ação Integrados", desc: "Não conformidades viram automaticamente planos de ação com prazos, responsáveis e escalonamento." },
    { icon: BarChart3, title: "Dashboard Executivo", desc: "Visão consolidada do status de auditorias, pendências e evolução histórica da conformidade operacional." },
  ],
  painsTitle: "Problemas que eliminamos",
  painsVariant: "cards",
  pains: [
    { title: "Auditorias reativas e sem lastro documental", desc: "Fiscalizações e auditorias internas pegam a equipe desprevenida, sem histórico centralizado de documentos, evidências e ações corretivas." },
    { title: "Não conformidades que se perdem no papel", desc: "Itens apontados em relatórios de auditoria nunca são tratados, reincidem e viram passivo trabalhista ou multas." },
    { title: "Falta de visibilidade executiva sobre riscos", desc: "Diretores e gestores não têm um painel confiável que mostre, em tempo real, o nível de conformidade de cada obra ou unidade." },
  ],
  sidebarText: "Empresas que auditam com o SGS reduzem em até 70% o tempo de preparação para auditorias externas.",
  sidebarIcon: Target,
  painsIcon: ShieldAlert,
  useCasesTitle: "Aplicação por Setor",
  useCasesSubtitle: "Indústrias que mais se beneficiam da auditoria digital contínua.",
  useCasesColumns: 3,
  useCases: [
    { icon: undefined, title: "Construção Civil", desc: "Auditorias contínuas em canteiros de obra com múltiplas frentes de trabalho e alta rotatividade de equipes." },
    { icon: undefined, title: "Indústria & Manufatura", desc: "Conformidade NR-12 e ISO 45001 em linhas de produção, máquinas e processos com riscos críticos." },
    { icon: undefined, title: "Óleo & Gás / Mineração", desc: "Auditorias regulatórias rigorosas com necessidade de rastreabilidade forense de cada documento de segurança." },
  ],
  faqs: [
    { q: "O SGS substitui um sistema de gestão ISO 45001?", a: "O SGS fornece a camada operacional e documental que alimenta os requisitos da ISO 45001. Ele não substitui o SGQ, mas gera automaticamente as evidências objetivas que auditores externos exigem." },
    { q: "Como funciona a linha do tempo de auditoria?", a: "Todo documento, assinatura, foto e alteração fica registrado com data, hora e usuário. É possível navegar cronologicamente e filtrar por período, tipo de documento ou unidade." },
    { q: "O sistema gera relatórios para fiscalização do MTE?", a: "Sim. Os relatórios de conformidade podem ser exportados com a curadoria de evidências necessária para apresentar em fiscalizações, auditorias internas ou due diligence." },
  ],
  faqTitle: "Perguntas Frequentes",
  faqVariant: "accordion",
  ctaTitle: "Prepare-se para a próxima auditoria",
  ctaSubtitle: "Agende uma demonstração e veja como sua operação pode estar sempre pronta para auditorias e fiscalizações.",
  trackLabel: "Agendar demonstração - Auditoria SST",
};
