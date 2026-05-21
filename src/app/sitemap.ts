import { MetadataRoute } from "next";
import { posts } from "@/data/blog";
import { getPostIsoDate } from "@/data/blog-dates";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

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
  ];

  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-05-20"),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(getPostIsoDate(post.slug)),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
