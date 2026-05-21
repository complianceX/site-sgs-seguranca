import type { Metadata } from "next";

const SITE_URL = "https://sgsseguranca.com.br";
const SITE_NAME = "SGS Segurança";

export const siteConfig = {
  url: SITE_URL,
  name: SITE_NAME,
  locale: "pt_BR",
  defaultTitle: "SGS - Gestão de Segurança do Trabalho e Governança Documental",
  defaultDescription:
    "Plataforma SaaS para organizar APR, DDS, PT, evidências de campo, prazos e governança de SST com rastreabilidade.",
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
  image = "/opengraph-image",
}: PageMetadataOptions): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const fullTitle = title.includes("SGS") ? title : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: `${SITE_URL}${canonicalPath === "/" ? "" : canonicalPath}`,
      siteName: SITE_NAME,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
