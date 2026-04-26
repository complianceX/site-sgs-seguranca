export const categories = ["Todos", "Governança", "Tecnologia", "NRs & Legislação", "IA no SST"];

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags?: string[];
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  content: {
    heading: string;
    body: string[];
  }[];
}

export const posts: BlogPost[] = [
  {
    id: 1,
    slug: "futuro-do-sst-ia-aprs",
    title: "O Futuro do SST: Como a IA está transformando a criação de APRs",
    excerpt: "Descubra como algoritmos de inteligência artificial estão ajudando TSTs a reduzir o tempo de rascunho em até 80% mantendo a precisão técnica.",
    category: "IA no SST",
    author: "Ricardo Santos",
    date: "23 Abr, 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    tags: ["IA", "SST", "Inovação", "APR"],
    featured: true,
    seoTitle: "O Futuro do SST e a Inteligência Artificial | SGS",
    seoDescription: "Como a IA está revolucionando a criação de Análises Preliminares de Risco no setor de Segurança do Trabalho.",
    content: [
      {
        heading: "IA no SST precisa apoiar, não substituir",
        body: [
          "A inteligência artificial ganha valor real quando reduz trabalho repetitivo sem remover a responsabilidade técnica do profissional de SST. Em APRs, isso significa acelerar rascunhos, sugerir perigos recorrentes e organizar controles de forma rastreável.",
          "O SGS posiciona a Sophie como camada assistiva: o profissional revisa, ajusta e aprova o documento antes de qualquer uso operacional."
        ]
      },
      {
        heading: "Onde a automação reduz retrabalho",
        body: [
          "A maior perda de tempo costuma estar na padronização de textos, busca de histórico, organização de evidências e controle de versões. Esses pontos são adequados para apoio automatizado porque dependem de consistência e contexto.",
          "O ganho não vem de prometer decisão automática, mas de entregar uma base inicial mais completa para revisão humana."
        ]
      },
      {
        heading: "Governança continua sendo o centro",
        body: [
          "Toda recomendação gerada por IA deve estar conectada a autoria, versão, data, empresa e fluxo de aprovação. Sem trilha, a automação vira risco documental.",
          "Por isso, a IA no SGS aparece como parte da governança de documentos e evidências, não como recurso isolado."
        ]
      }
    ]
  },
  {
    id: 2,
    slug: "guia-validacao-publica-documentos-lgpd",
    title: "Guia Definitivo: Validação Pública de Documentos e a LGPD",
    excerpt: "Entenda os limites legais e as melhores práticas para disponibilizar documentos oficiais de segurança para fiscais e contratantes.",
    category: "Governança",
    author: "Ana Paula Silva",
    date: "20 Abr, 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
    tags: ["LGPD", "Governança", "Documentação", "SST"],
    seoTitle: "Validação de Documentos SST e LGPD | SGS",
    seoDescription: "Saiba como conciliar a transparência documental com as exigências da LGPD na segurança do trabalho.",
    content: [
      {
        heading: "Validação pública não deve expor dado sensível",
        body: [
          "QR Codes e portais de validação são úteis para auditorias, contratantes e fiscalização, mas precisam revelar apenas o necessário para comprovar autenticidade.",
          "O desenho correto separa autenticação do documento, metadados mínimos e controle de acesso a detalhes sensíveis."
        ]
      },
      {
        heading: "O que validar em um documento",
        body: [
          "Uma validação pública deve responder se o documento existe, se está íntegro, qual é seu status e se a versão apresentada corresponde ao registro oficial.",
          "Dados pessoais, anexos sensíveis e informações de trabalhadores devem seguir regras específicas de acesso, retenção e necessidade."
        ]
      },
      {
        heading: "Como o SGS trata o tema",
        body: [
          "A proposta do SGS é conectar governança documental, trilha de auditoria e minimização de dados para apoiar operações que precisam de evidência sem abrir mão de privacidade.",
          "Essa abordagem reduz risco em auditorias e torna a validação mais defensável do ponto de vista técnico e jurídico."
        ]
      }
    ]
  },
  {
    id: 3,
    slug: "mudancas-nr-01-proximo-semestre",
    title: "Principais mudanças na NR-01: O que esperar para o próximo semestre",
    excerpt: "Análise técnica sobre as atualizações normativas e como o GRO/PGR deve ser estruturado nas novas plataformas digitais.",
    category: "NRs & Legislação",
    author: "Marcos Oliveira",
    date: "15 Abr, 2026",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
    tags: ["NR-01", "Legislação", "GRO", "PGR"],
    seoTitle: "Atualizações NR-01: Guia Completo | SGS",
    seoDescription: "Entenda o que muda na NR-01 e como preparar seu PGR para o próximo semestre.",
    content: [
      {
        heading: "GRO e PGR exigem rotina, não documento estático",
        body: [
          "A maturidade em NR-01 depende de manter inventário, plano de ação, evidências e revisões conectadas ao dia a dia da operação.",
          "Quando esses elementos ficam em arquivos dispersos, a empresa perde visibilidade e aumenta o risco de inconsistência em auditorias."
        ]
      },
      {
        heading: "Digitalizar muda o ritmo da gestão",
        body: [
          "Com fluxos digitais, pendências, aprovações e registros de campo deixam de depender de planilhas manuais. O responsável técnico passa a enxergar o estado real dos controles.",
          "A tecnologia não elimina revisão técnica, mas ajuda a preservar histórico e priorizar o que exige ação."
        ]
      },
      {
        heading: "Preparação prática",
        body: [
          "O caminho mais seguro é mapear riscos críticos, padronizar evidências, definir responsáveis e acompanhar vencimentos em uma estrutura única.",
          "Esse é o tipo de governança que o SGS apresenta ao mercado: menos improviso documental e mais controle operacional."
        ]
      }
    ]
  },
  {
    id: 4,
    slug: "digitalizacao-do-campo-risco-papel",
    title: "Digitalização do Campo: Por que o papel é o maior risco da sua obra",
    excerpt: "Como a perda de registros físicos e a demora na coleta de assinaturas impactam diretamente no risco jurídico da sua empresa.",
    category: "Tecnologia",
    author: "Ricardo Santos",
    date: "10 Abr, 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800&auto=format&fit=crop",
    tags: ["Tecnologia", "Canteiro de Obras", "Digitalização", "Risco Jurídico"],
    seoTitle: "Os Riscos do Papel na Segurança do Trabalho | SGS",
    seoDescription: "Por que abandonar o papel e adotar processos digitais no campo é essencial para reduzir riscos jurídicos.",
    content: [
      {
        heading: "O papel falha onde a operação mais precisa de evidência",
        body: [
          "Em campo, documentos físicos são perdidos, rasurados, fotografados fora de contexto ou assinados sem rastreabilidade suficiente.",
          "Quando ocorre uma auditoria ou incidente, a dificuldade não é apenas ter o documento, mas provar sua versão, data, autoria e integridade."
        ]
      },
      {
        heading: "Evidência digital precisa ser governada",
        body: [
          "Fotos, vídeos, checklists e assinaturas só geram confiança quando estão conectados ao documento correto e a um fluxo claro de aprovação.",
          "Digitalizar sem governança apenas troca o papel por arquivos soltos. O valor está na cadeia completa de registro."
        ]
      },
      {
        heading: "O papel do SGS",
        body: [
          "O SGS organiza documentos, prazos e evidências em uma jornada voltada para rastreabilidade. Isso ajuda gestores, TSTs e equipes de campo a reduzir retrabalho e responder melhor a fiscalizações.",
          "A meta é tornar a documentação operacional mais confiável sem transformar o trabalho técnico em burocracia invisível."
        ]
      }
    ]
  }
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
