export const categories = [
  "Todos", 
  "Governança", 
  "Tecnologia", 
  "NRs & Legislação", 
  "IA no SST",
  "AJN Engenharia",
  "Segurança do Trabalho",
  "Saúde Ocupacional",
  "eSocial SST",
  "Combate a Incêndio",
  "Laudos Técnicos",
  "Treinamentos",
  "Gestão Ambiental",
  "Engenharia Elétrica"
];

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
    featured: false,
    content: [
      {
        heading: "IA no SST precisa apoiar, não substituir",
        body: [
          "A inteligência artificial ganha valor real quando reduz trabalho repetitivo sem remover a responsabilidade técnica do profissional de SST.",
          "O SGS posiciona a Sophie como camada assistiva: o profissional revisa, ajusta e aprova o documento."
        ]
      }
    ]
  },
  {
    id: 5,
    slug: "ajn-consultoria-engenharia-qssma-sst-engenharia",
    title: "AJN Consultoria e Engenharia: soluções em QSSMA, SST e Engenharia",
    excerpt: "Conheça os serviços da AJN em Segurança do Trabalho, Saúde Ocupacional, Meio Ambiente, Qualidade, eSocial, laudos técnicos, treinamentos, projetos elétricos e regularização junto ao Corpo de Bombeiros.",
    category: "AJN Engenharia",
    author: "AJN Consultoria e Engenharia",
    date: "28 Abr, 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    tags: ["AJN", "Engenharia", "SST", "QSSMA", "Consultoria"],
    featured: true,
    seoTitle: "AJN Consultoria e Engenharia | Soluções em QSSMA e SST",
    seoDescription: "Conheça os serviços da AJN Consultoria e Engenharia em QSSMA, Segurança do Trabalho, Saúde Ocupacional, eSocial SST, laudos técnicos, treinamentos, projetos elétricos e combate a incêndio.",
    content: [
      {
        heading: "Especialista em conformidade e segurança",
        body: [
          "A AJN Consultoria e Engenharia é uma empresa especializada em soluções de Qualidade, Saúde, Segurança e Meio Ambiente, oferecendo suporte técnico para empresas que precisam manter suas operações seguras, regulares e em conformidade com as normas aplicáveis.",
          "Com atuação em segurança do trabalho, saúde ocupacional, gestão ambiental, qualidade, eSocial, treinamentos, laudos técnicos, perícias, projetos elétricos e combate a incêndio, a AJN entrega serviços voltados à prevenção de riscos, organização documental, regularização técnica e melhoria contínua dos ambientes de trabalho."
        ]
      },
      {
        heading: "Soluções completas para sua empresa",
        body: [
          "Entre suas principais soluções estão a assessoria em segurança do trabalho, a gestão de PCMSO e ASOs, a elaboração de PGR, o envio de eventos de SST ao eSocial, as perícias de insalubridade e periculosidade, a emissão de laudos técnicos, os treinamentos de Normas Regulamentadoras, os projetos de combate a incêndio, a regularização de imóveis junto ao Corpo de Bombeiros e os projetos elétricos residenciais, comerciais e prediais.",
          "A empresa também atua com PMOC, climatização, refrigeração, elevadores, escadas rolantes, esteiras rolantes e mobilização de pessoas, máquinas e equipamentos.",
          "O compromisso da AJN está na entrega de soluções personalizadas, no cumprimento de prazos, na comunicação transparente e na busca por segurança, eficiência e conformidade para seus clientes."
        ]
      }
    ]
  },
  {
    id: 6,
    slug: "pgr-programa-gerenciamento-riscos-ajn",
    title: "PGR: por que sua empresa precisa manter o Programa de Gerenciamento de Riscos atualizado",
    excerpt: "Entenda como o PGR ajuda a identificar perigos, avaliar riscos e definir medidas de controle para proteger trabalhadores e manter a empresa em conformidade.",
    category: "Segurança do Trabalho",
    author: "AJN Consultoria e Engenharia",
    date: "27 Abr, 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    tags: ["PGR", "SST", "Gestão de Riscos", "AJN"],
    content: [
      {
        heading: "A importância do gerenciamento de riscos",
        body: [
          "O Programa de Gerenciamento de Riscos, conhecido como PGR, é uma ferramenta essencial para empresas que desejam controlar riscos ocupacionais e manter um ambiente de trabalho mais seguro. Ele permite identificar perigos, avaliar riscos e definir medidas preventivas e corretivas.",
          "A AJN Consultoria e Engenharia atua na elaboração e atualização do PGR, considerando as atividades da empresa, os ambientes de trabalho, os riscos existentes e as exigências das Normas Regulamentadoras."
        ]
      }
    ]
  },
  {
    id: 7,
    slug: "pcmso-aso-saude-ocupacional-ajn",
    title: "PCMSO e ASO: como organizar a saúde ocupacional dos colaboradores",
    excerpt: "Veja como o PCMSO, os exames ocupacionais e os ASOs ajudam no acompanhamento médico dos trabalhadores e na gestão das obrigações de SST.",
    category: "Saúde Ocupacional",
    author: "AJN Consultoria e Engenharia",
    date: "26 Abr, 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop",
    tags: ["PCMSO", "ASO", "Saúde Ocupacional", "AJN"],
    content: [
      {
        heading: "Gestão médica preventiva",
        body: [
          "O PCMSO é o Programa de Controle Médico de Saúde Ocupacional. Ele organiza as ações de acompanhamento da saúde dos trabalhadores, considerando os riscos identificados no ambiente de trabalho.",
          "A AJN auxilia empresas na gestão do PCMSO, no controle de vencimentos dos ASOs, no acompanhamento dos exames ocupacionais e na organização documental necessária para manter a saúde ocupacional em dia."
        ]
      }
    ]
  },
  {
    id: 8,
    slug: "esocial-sst-eventos-s2220-s2240-ajn",
    title: "eSocial SST: como funcionam os eventos S-2220 e S-2240",
    excerpt: "Entenda quais informações de saúde e segurança do trabalho precisam ser enviadas ao eSocial e como evitar falhas na transmissão dos eventos.",
    category: "eSocial SST",
    author: "AJN Consultoria e Engenharia",
    date: "25 Abr, 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    tags: ["eSocial", "S-2220", "S-2240", "SST", "AJN"],
    content: [
      {
        heading: "Conformidade digital no eSocial",
        body: [
          "O eSocial SST reúne informações importantes sobre saúde e segurança do trabalho. Entre os eventos mais relevantes estão o S-2220, relacionado ao monitoramento da saúde do trabalhador, e o S-2240, relacionado às condições ambientais do trabalho.",
          "A AJN Consultoria e Engenharia auxilia empresas na organização, conferência e envio das informações de SST ao eSocial, ajudando a reduzir erros, atrasos e inconsistências."
        ]
      }
    ]
  },
  {
    id: 9,
    slug: "avcb-clcb-regularizacao-corpo-de-bombeiros-ajn",
    title: "AVCB e CLCB: como regularizar sua empresa junto ao Corpo de Bombeiros",
    excerpt: "Saiba quando sua edificação precisa de AVCB ou CLCB e como os projetos de prevenção e combate a incêndio ajudam na regularização.",
    category: "Combate a Incêndio",
    author: "AJN Consultoria e Engenharia",
    date: "24 Abr, 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1599708138403-49d799f80730?q=80&w=800&auto=format&fit=crop",
    tags: ["AVCB", "CLCB", "Bombeiros", "Segurança Incêndio", "AJN"],
    content: [
      {
        heading: "Regularização de Edificações",
        body: [
          "A regularização de imóveis junto ao Corpo de Bombeiros é uma etapa fundamental para garantir segurança, conformidade e tranquilidade para empresas, condomínios, comércios e indústrias.",
          "A AJN atua com projetos de combate a incêndio e pânico, renovação de AVCB e CLCB, análise de conformidade, documentação técnica e acompanhamento junto aos órgãos competentes."
        ]
      }
    ]
  },
  {
    id: 10,
    slug: "treinamentos-nr-capacitacoes-obrigatorias-ajn",
    title: "Treinamentos de NR: quais capacitações sua empresa deve oferecer",
    excerpt: "Conheça os principais treinamentos de Normas Regulamentadoras, como NR 10, NR 12, NR 18, NR 33 e NR 35.",
    category: "Treinamentos",
    author: "AJN Consultoria e Engenharia",
    date: "23 Abr, 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    tags: ["NR", "Treinamento", "Capacitação", "Segurança", "AJN"],
    content: [
      {
        heading: "Preparação e Conscientização",
        body: [
          "Os treinamentos de Normas Regulamentadoras são fundamentais para preparar trabalhadores para atividades com riscos específicos. Eles contribuem para a prevenção de acidentes, redução de falhas operacionais e atendimento às exigências legais.",
          "A AJN oferece treinamentos de NRs como NR 01, NR 06, NR 10, NR 11, NR 12, NR 13, NR 17, NR 18, NR 20, NR 23, NR 24, NR 25, NR 26, NR 31, NR 32, NR 33, NR 35, NR 36, NR 38 e integração de novos colaboradores."
        ]
      }
    ]
  },
  {
    id: 11,
    slug: "laudos-insalubridade-periculosidade-ajn",
    title: "Laudos de insalubridade e periculosidade: quando são necessários",
    excerpt: "Entenda como os laudos técnicos avaliam exposição a agentes nocivos e situações de risco acentuado no ambiente de trabalho.",
    category: "Laudos Técnicos",
    author: "AJN Consultoria e Engenharia",
    date: "22 Abr, 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    tags: ["Laudo", "Insalubridade", "Periculosidade", "Perícia", "AJN"],
    content: [
      {
        heading: "Avaliação de Agentes Nocivos",
        body: [
          "Os laudos de insalubridade e periculosidade avaliam as condições de trabalho e verificam se há exposição a agentes nocivos ou situações de risco acentuado, como ruído, produtos químicos, eletricidade, inflamáveis, explosivos, vibração e outros fatores.",
          "A AJN realiza avaliações técnicas e emite laudos para apoiar empresas na prevenção de riscos, na organização documental e no atendimento às exigências legais."
        ]
      }
    ]
  },
  {
    id: 12,
    slug: "gestao-ambiental-residuos-sustentabilidade-ajn",
    title: "Gestão ambiental: como sua empresa pode controlar resíduos e reduzir riscos",
    excerpt: "Entenda como a gestão ambiental ajuda empresas na segregação, armazenamento, destinação correta de resíduos e conformidade ambiental.",
    category: "Gestão Ambiental",
    author: "AJN Consultoria e Engenharia",
    date: "21 Abr, 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop",
    tags: ["Ambiental", "Resíduos", "Sustentabilidade", "Meio Ambiente", "AJN"],
    content: [
      {
        heading: "Responsabilidade e Impacto",
        body: [
          "A gestão ambiental é essencial para empresas que desejam reduzir impactos, controlar resíduos e atuar de forma responsável. Ela envolve organização de processos, conscientização, monitoramento e cumprimento das exigências ambientais aplicáveis.",
          "A AJN atua com segregação, armazenamento e destinação correta de resíduos, treinamentos, conscientização ambiental, monitoramento de qualidade do ar e da água, políticas de sustentabilidade e apoio em licenciamento ambiental."
        ]
      }
    ]
  },
  {
    id: 13,
    slug: "projetos-eletricos-seguranca-eficiencia-ajn",
    title: "Projetos elétricos: segurança, eficiência e conformidade técnica",
    excerpt: "Veja como projetos elétricos bem elaborados ajudam a garantir segurança, desempenho, economia e conformidade técnica.",
    category: "Engenharia Elétrica",
    author: "AJN Consultoria e Engenharia",
    date: "20 Abr, 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
    tags: ["Elétrica", "Projeto Elétrico", "Engenharia", "Eficiência", "AJN"],
    content: [
      {
        heading: "Segurança em Instalações",
        body: [
          "Projetos elétricos são fundamentais para garantir instalações seguras, eficientes e adequadas ao uso de cada edificação. Um projeto bem feito reduz riscos, melhora o desempenho do sistema e contribui para economia na execução e operação.",
          "A AJN elabora projetos elétricos residenciais, comerciais e prediais com foco em segurança, qualidade, prazo, eficiência operacional e viabilidade econômica."
        ]
      }
    ]
  },
  {
    id: 14,
    slug: "pmoc-climatizacao-refrigeracao-ajn",
    title: "PMOC: por que sua empresa precisa cuidar da climatização",
    excerpt: "Entenda a importância do PMOC para sistemas de climatização, manutenção preventiva e qualidade dos ambientes internos.",
    category: "Engenharia",
    author: "AJN Consultoria e Engenharia",
    date: "19 Abr, 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb79a3?q=80&w=800&auto=format&fit=crop",
    tags: ["PMOC", "Climatização", "Refrigeração", "Manutenção", "AJN"],
    content: [
      {
        heading: "Qualidade do Ar e Manutenção",
        body: [
          "O PMOC é o Plano de Manutenção, Operação e Controle aplicado a sistemas de climatização. Ele ajuda a organizar rotinas de manutenção, preservar a eficiência dos equipamentos e contribuir para ambientes mais seguros e saudáveis.",
          "A AJN atua na elaboração e implementação de PMOC, além de serviços relacionados à instalação e manutenção de sistemas de refrigeração e climatização."
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
    content: [
      {
        heading: "Validação pública não deve expor dado sensível",
        body: [
          "QR Codes e portais de validação são úteis para auditorias, contratantes e fiscalização, mas precisam revelar apenas o necessário para comprovar autenticidade."
        ]
      }
    ]
  }
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
