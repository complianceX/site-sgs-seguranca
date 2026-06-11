import { faqs } from "@/data/home";
import { siteConfig } from "@/lib/seo/seo";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SGS Segurança",
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
    name: "SGS - Sistema de Gestão de Segurança",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
      description: "Planos sob consulta conforme operação e módulos.",
    },
    description: siteConfig.defaultDescription,
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
