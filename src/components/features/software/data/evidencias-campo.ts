import { Camera, MapPin, GalleryHorizontalEnd, ShieldCheck } from "lucide-react";
import type { SoftwarePageData } from "./types";

export const evidenciasCampoData: SoftwarePageData = {
  badgeIcon: Camera,
  badgeText: "Evidências de Campo",
  heroTitle: "Evidências de Campo com Valor Jurídico",
  heroSubtitle: "Transforme fotos e vídeos da sua operação em provas digitais rastreáveis, protegidas e vinculadas a cada documento de SST.",
  benefitsTitle: "Por que organizar evidências de campo?",
  benefitsSubtitle: "Evidências organizadas são a diferença entre uma defesa sólida e um passivo trabalhista.",
  benefits: [
    { icon: Camera, title: "Captura Mobile", desc: "Fotos e vídeos feitos diretamente pelo celular com geolocalização e timestamp automáticos." },
    { icon: MapPin, title: "Georreferenciamento", desc: "Cada evidência é marcada com coordenadas GPS, garantindo a origem exata do registro." },
    { icon: GalleryHorizontalEnd, title: "Álbum por Documento", desc: "Evidências organizadas em álbuns vinculados a APR, DDS, PT, inspeções e não conformidades." },
    { icon: ShieldCheck, title: "Prova Digital", desc: "Registro imutável com hash de integridade para validade jurídica em auditorias e fiscalizações." },
  ],
  painsTitle: "Problemas que a Gestão de Evidências resolve",
  painsVariant: "checklist",
  pains: [
    { title: "Fotos soltas no celular do TST que nunca chegam ao relatório oficial" },
    { title: "Dificuldade de provar condições inseguras ou conformidade após o fato" },
    { title: "Evidências perdidas quando o colaborador troca de aparelho ou sai da empresa" },
    { title: "Fiscalizações sem documentação fotográfica para comprovar ações corretivas" },
  ],
  sidebarText: "Sem evidências organizadas, uma foto solta não tem valor jurídico. Com o SGS, cada registro vira prova.",
  useCasesTitle: "Aplicação por tipo de atividade",
  useCasesSubtitle: "Evidências organizadas fortalecem cada processo de SST.",
  useCasesColumns: 2,
  useCases: [
    { title: "Inspeções de Segurança", desc: "Registro fotográfico de cada não conformidade encontrada, vinculado ao relatório de inspeção." },
    { title: "Auditorias Internas", desc: "Evidências coletadas durante auditorias com geolocalização para rastreabilidade." },
    { title: "Investigação de Acidentes", desc: "Fotos do local, equipamentos e condições no momento exato da ocorrência." },
    { title: "Acompanhamento de Obras", desc: "Registro diário da evolução da obra com fotos georreferenciadas e comparativo temporal." },
  ],
  faqTitle: "Perguntas Frequentes",
  faqSubtitle: "Tire suas dúvidas sobre a Gestão de Evidências do SGS.",
  faqs: [
    { q: "As fotos ficam armazenadas em nuvem ou localmente?", a: "As evidências são armazenadas em nuvem com criptografia, acessíveis de qualquer dispositivo autorizado e com backup automático." },
    { q: "É possível capturar fotos offline?", a: "Sim. O app do SGS permite capturar fotos e vídeos offline, que são sincronizados automaticamente quando houver conexão." },
    { q: "As evidências são compartilhadas com auditores?", a: "Sim. É possível gerar links temporários ou compartilhar álbuns completos com auditores e fiscalizadores." },
    { q: "Qual a resolução das fotos armazenadas?", a: "As imagens são mantidas na resolução original da captura, sem compressão que comprometa a qualidade da evidência." },
  ],
  ctaTitle: "Organize suas evidências de campo",
  ctaSubtitle: "Agende uma demonstração e veja como o SGS transforma fotos soltas em provas digitais.",
  trackLabel: "Agendar demonstração - Evidências de Campo",
};
