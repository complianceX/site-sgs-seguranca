import { ClipboardList, Camera, MapPin, Users, AlertTriangle, Target, ListChecks } from "lucide-react";
import type { SoftwarePageData } from "./types";

export const inspecoesData: SoftwarePageData = {
  breadcrumbs: [{ name: "Inspeções de Segurança", href: "/software-inspecoes" }],
  badgeIcon: ClipboardList,
  badgeText: "Inspeções Digitais",
  heroTitle: "Software de Inspeções de Segurança com Evidências e Ações",
  heroSubtitle: "Padronize inspeções, colete evidências com fotos e geolocalização, e transforme cada não conformidade em um plano de ação rastreável.",
  benefitsTitle: "Benefícios das Inspeções Digitais",
  benefitsSubtitle: "Inspeções mais rápidas, padronizadas e com impacto real na segurança.",
  benefits: [
    { icon: ClipboardList, title: "Checklists Padronizados", desc: "Crie templates de inspeção reutilizáveis por tipo de atividade, setor ou unidade, garantindo consistência em todas as inspeções." },
    { icon: Camera, title: "Evidências com Fotos e Vídeos", desc: "Registre não conformidades com fotos, vídeos e anotações diretamente do campo. Tudo vinculado ao item de inspeção." },
    { icon: MapPin, title: "Geolocalização Integrada", desc: "Cada inspeção fica georreferenciada, permitindo mapear riscos por localização e visualizar a distribuição geográfica das pendências." },
    { icon: Users, title: "Planos de Ação Imediatos", desc: "Não conformidades identificadas geram automaticamente planos de ação com responsáveis, prazos e notificações." },
  ],
  painsTitle: "Dores que resolvemos",
  painsVariant: "cards",
  pains: [
    { title: "Inspeções sem padronização perdem credibilidade", desc: "Cada TST ou técnico faz a inspeção de um jeito diferente, resultando em dados inconsistentes que não podem ser comparados nem auditados." },
    { title: "Relatórios de inspeção viram papel esquecido", desc: "Itens apontados nunca são tratados porque não há vinculação direta entre a inspeção e um plano de ação com responsável e prazo." },
    { title: "Falta de visibilidade das condições de campo", desc: "Gestores não têm um painel consolidado que mostre, por unidade, o número de inspeções realizadas e o status das não conformidades." },
  ],
  sidebarText: "Empresas que digitalizam inspeções reduzem em 60% o tempo entre a identificação e a correção de não conformidades.",
  sidebarIcon: ListChecks,
  painsIcon: AlertTriangle,
  useCasesTitle: "Setores que mais utilizam",
  useCasesSubtitle: "Segmentos com necessidade crítica de inspeções padronizadas e rastreáveis.",
  useCasesColumns: 3,
  useCases: [
    { title: "Construção Civil", desc: "Inspeções diárias de segurança em canteiros de obra com checklists por etapa construtiva e evidências fotográficas." },
    { title: "Indústria", desc: "Inspeções periódicas de máquinas, equipamentos e áreas produtivas com checklists baseados em NR-12." },
    { title: "Agronegócio", desc: "Inspeções sazonais em fazendas, silos e unidades de beneficiamento com checklists adaptados a riscos rurais." },
  ],
  faqs: [
    { q: "Posso criar checklists personalizados para cada tipo de inspeção?", a: "Sim. O SGS permite criar templates com perguntas, pesos e categorias distintas para inspeções de segurança, higiene, combate a incêndio, equipamentos, entre outros." },
    { q: "Como as fotos ficam vinculadas à inspeção?", a: "Cada foto ou vídeo capturado durante a inspeção é automaticamente associado ao item de checklist correspondente, com data, hora e geolocalização." },
    { q: "É possível inspecionar offline?", a: "Sim. O aplicativo móvel do SGS funciona offline: o técnico realiza a inspeção, coleta evidências e, ao reconectar, tudo sincroniza automaticamente." },
    { q: "As inspeções geram indicadores automaticamente?", a: "Sim. O SGS consolida os resultados em dashboards com taxas de conformidade por unidade, tipo de inspeção, período e evolução histórica." },
  ],
  faqTitle: "Dúvidas Frequentes",
  faqVariant: "accordion",
  ctaTitle: "Digitalize suas inspeções agora",
  ctaSubtitle: "Agende uma demonstração e veja como padronizar inspeções, coletar evidências e gerar ações corretivas em minutos.",
  trackLabel: "Agendar demonstração - Inspeções",
};
