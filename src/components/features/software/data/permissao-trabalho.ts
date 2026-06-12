import { ShieldAlert, Timer, Route, Fingerprint } from "lucide-react";
import type { SoftwarePageData } from "./types";

export const permissaoTrabalhoData: SoftwarePageData = {
  badgeIcon: ShieldAlert,
  badgeText: "PT Digital",
  heroTitle: "Permissão de Trabalho Online e Segura",
  heroSubtitle: "Digitalize todo o ciclo de Permissão de Trabalho: solicitação, aprovação, execução e arquivamento com rastreabilidade completa.",
  benefitsTitle: "Por que digitalizar sua PT?",
  benefitsSubtitle: "A PT Digital elimina papéis, reduz riscos operacionais e garante conformidade regulatória.",
  benefits: [
    { icon: ShieldAlert, title: "Fluxo de Aprovação", desc: "PT passa por níveis de aprovação configuráveis com notificações e prazos automáticos." },
    { icon: Timer, title: "Controle de Validade", desc: "Definição de janela de vigência com alertas de expiração e bloqueio automático após o vencimento." },
    { icon: Route, title: "Rastreabilidade Total", desc: "Histórico completo de todas as liberações, alterações e cancelamentos com identificação do responsável." },
    { icon: Fingerprint, title: "Assinatura por Etapa", desc: "Assinatura digital obrigatória em cada etapa: emissor, supervisor e executor do trabalho." },
  ],
  painsTitle: "Problemas que a PT Digital resolve",
  painsVariant: "checklist",
  pains: [
    { title: "PT em papel que se perde ou é preenchida de forma incompleta e ilegível" },
    { title: "Trabalhos liberados sem validação dos riscos associados e APR vinculada" },
    { title: "Dificuldade de auditar permissões concedidas em um período específico" },
    { title: "PT vencida sendo usada como documento válido por falta de controle de vigência" },
  ],
  sidebarText: "Uma PT mal emitida ou vencida é a causa mais frequente de autuações em fiscalizações de SST.",
  useCasesTitle: "Aplicação por setor",
  useCasesSubtitle: "A PT Digital atende operações de alto risco em todos os segmentos.",
  useCasesColumns: 2,
  useCases: [
    { title: "Construção Civil", desc: "Liberação para serviços em altura, escavação, solda e içamento de cargas." },
    { title: "Indústria Petroquímica", desc: "PT para manutenção em áreas classificadas, liberação de equipamentos e entrada em espaços confinados." },
    { title: "Energia Elétrica", desc: "Permissão para manutenção em redes energizadas, subestações e torres de transmissão." },
    { title: "Siderurgia", desc: "Liberação para trabalho a quente, movimentação de cargas e manutenção em fornos." },
  ],
  faqTitle: "Perguntas Frequentes",
  faqSubtitle: "Tire suas dúvidas sobre a PT Digital do SGS.",
  faqs: [
    { q: "É possível vincular múltiplas APR a uma única PT?", a: "Sim. O SGS permite associar várias análises de risco a uma permissão de trabalho, garantindo visão completa dos perigos envolvidos." },
    { q: "Como funciona o bloqueio de PT vencida?", a: "Ao expirar a validade, a PT é automaticamente bloqueada no sistema, impedindo qualquer execução até que uma nova permissão seja emitida." },
    { q: "Quem pode aprovar uma PT no SGS?", a: "O fluxo é configurável por perfil: emissor, supervisor de segurança, coordenador de obra e gerente podem ter níveis distintos de aprovação." },
    { q: "A PT Digital substitui completamente o papel?", a: "Sim. Todo o fluxo é 100% digital — desde a solicitação até a assinatura e arquivamento, sem necessidade de impressão." },
  ],
  ctaTitle: "Elimine o papel na Permissão de Trabalho",
  ctaSubtitle: "Agende uma demonstração e veja como o SGS pode digitalizar sua gestão de PT.",
  trackLabel: "Agendar demonstração - PT Digital",
};
