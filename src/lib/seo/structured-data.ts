import { faqs } from "@/data/home";
import { siteConfig } from "@/lib/seo/seo";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SGS",
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo-sgs.svg`,
    email: "contato@sgsseguranca.com.br",
    description: siteConfig.defaultDescription,
    areaServed: "BR",
    knowsAbout: [
      "Segurança do Trabalho",
      "Gestão de SST",
      "APR",
      "DDS",
      "Permissão de Trabalho",
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "pt-BR",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function getSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SGS",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "197",
      priceCurrency: "BRL",
      priceValidUntil: new Date(Date.now() + 90 * 86400000).toISOString().split("T")[0],
      description: "Planos a partir de R$ 197/mês conforme operação e módulos.",
    },
    description: "Sistema completo para gestão de SST. Inclui módulos de APR (Análise Preliminar de Risco), DDS (Diálogo Diário de Segurança), Permissões de Trabalho, Gestão de EPIs e Treinamentos NRs.",
    url: siteConfig.url,
  };
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getArticleSchema(post: {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  author: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
    image: post.image,
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item.startsWith("http") ? item.item : `${siteConfig.url}${item.item}`,
    })),
  };
}
