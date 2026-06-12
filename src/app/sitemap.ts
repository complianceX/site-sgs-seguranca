import { MetadataRoute } from "next";
import { promises as fs } from "fs";
import path from "path";
import { posts } from "@/data/blog";
import { getPostIsoDate } from "@/data/blog-dates";
import { siteConfig } from "@/lib/seo/seo";

async function getFileLastModified(filePath: string): Promise<Date> {
  try {
    const stat = await fs.stat(filePath);
    return stat.mtime;
  } catch {
    return new Date();
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;
  const appDir = path.join(process.cwd(), "src", "app");

  const routes = [
    "",
    "/modulos",
    "/governanca",
    "/integracoes",
    "/sophie",
    "/precos",
    "/seguranca",
    "/sobre",
    "/contato",
    "/blog",
    "/recursos",
    "/privacidade",
    "/termos",
    "/software-apr-digital",
    "/software-dds-digital",
    "/software-permissao-trabalho",
    "/software-evidencias-campo",
    "/software-auditoria-sst",
    "/software-inspecoes",
    "/software-checklists-digitais",
    "/software-gestao-sst",
    "/parceiros",
    "/clientes",
    "/casos-de-sucesso",
  ];

  const staticRoutes = await Promise.all(
    routes.map(async (route) => {
      const pagePath = route
        ? path.join(appDir, route, "page.tsx")
        : path.join(appDir, "page.tsx");
      const lastModified = await getFileLastModified(pagePath);

      return {
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
      };
    })
  );

  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(getPostIsoDate(post.slug)),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
