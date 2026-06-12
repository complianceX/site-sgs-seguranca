import { ClipboardCheck, FileSpreadsheet, Smartphone, BarChart, RefreshCcw, Building2, Factory, HardHat, FileText, Shield } from "lucide-react";
import type { SoftwarePageData } from "./types";

export const checklistsDigitaisData: SoftwarePageData = {
  breadcrumbs: [{ name: "Checklists Digitais", href: "/software-checklists-digitais" }],
  badgeIcon: ClipboardCheck,
  badgeText: "Checklists Digitais",
  heroTitle: "Checklists Digitais de SST com Relatórios Automáticos",
  heroSubtitle: "Elimine formulários em papel. Crie checklists inteligentes, colete evidências em campo e transforme respostas em indicadores de conformidade.",
  benefitsTitle: "Benefícios dos Checklists Digitais",
  benefitsSubtitle: "Mais agilidade, padronização e inteligência na coleta de dados de campo.",
  benefits: [
    { icon: FileSpreadsheet, title: "Templates Ilimitados", desc: "Crie quantos templates de checklist precisar, com perguntas de múltipla escolha, numéricas, fotos, assinaturas e campos abertos." },
    { icon: Smartphone, title: "Aplicativo Offline", desc: "Preencha checklists diretamente do celular ou tablet, mesmo sem internet. Os dados sincronizam automaticamente quando houver conexão." },
    { icon: BarChart, title: "Relatórios Automáticos", desc: "Cada checklist preenchido gera um relatório consolidado com indicadores de conformidade por item, categoria e unidade." },
    { icon: RefreshCcw, title: "Revisão e Atualização", desc: "Atualize templates centralizadamente e todas as versões futuras usarão o novo padrão. Histórico de versões preservado." },
  ],
  painsTitle: "Problemas que resolvemos",
  painsVariant: "cards",
  pains: [
    { title: "Formulários de papel se perdem e não geram dados", desc: "Checklists impressos somem, molham, rasgam ou simplesmente não são preenchidos. Quando chegam ao escritório, os dados já estão defasados." },
    { title: "Sem padronização entre unidades e turnos", desc: "Cada supervisor cria seu próprio checklist, com critérios diferentes, impossibilitando comparar o nível de conformidade entre setores." },
    { title: "Dados de checklist não viram indicadores", desc: "As respostas dos checklists ficam em pilhas de papel ou PDFs soltos, sem qualquer tratamento estatístico ou análise de tendências." },
  ],
  sidebarText: "Empresas que substituem papel por checklists digitais economizam até 80% do tempo de consolidação de dados.",
  sidebarIcon: Shield,
  painsIcon: FileText,
  useCasesTitle: "Quem já usa checklists digitais",
  useCasesSubtitle: "Setores com operações descentralizadas e necessidade de padronização de campo.",
  useCasesColumns: 3,
  useCases: [
    { title: "Condomínios e Facilites", desc: "Checklists diários de limpeza, manutenção, segurança patrimonial e vistoria de áreas comuns." },
    { title: "Indústria Alimentícia", desc: "Checklists de higiene, BPF, temperatura de equipamentos e conformidade com auditorias internas de qualidade." },
    { title: "Logística e Transporte", desc: "Checklists de vistoria veicular, conferência de carga, inspeção de EPIs e condições de armazenamento." },
  ],
  faqs: [
    { q: "Quantos checklists posso criar?", a: "Não há limite. Você pode criar quantos templates quiser, organizados por categorias, setores, unidades ou tipos de atividade." },
    { q: "Dá para colocar fotos e assinaturas no checklist?", a: "Sim, cada item pode solicitar foto, assinatura digital, valor numérico, texto livre, múltipla escolha ou data. Tudo fica registrado no relatório." },
    { q: "Os checklists têm controle de versão?", a: "Sim. Ao editar um template, o SGS mantém o histórico de versões. Checklists antigos ficam preservados com a versão do template usada no momento do preenchimento." },
    { q: "É possível exportar os resultados?", a: "Sim. Os relatórios podem ser exportados em PDF e Excel, com gráficos de conformidade, detalhamento por item e lista de evidências coletadas." },
  ],
  faqTitle: "Perguntas Frequentes",
  faqVariant: "accordion",
  ctaTitle: "Troque o papel por checklists digitais",
  ctaSubtitle: "Agende uma demonstração e veja como criar, aplicar e analisar checklists digitais em toda sua operação.",
  trackLabel: "Agendar demonstração - Checklists",
};
