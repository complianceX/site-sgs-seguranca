import { posts } from "@/data/blog";
import { getPostIsoDate } from "@/data/blog-dates";
import { siteConfig } from "@/lib/seo/seo";

export function GET() {
  const items = posts
    .map((post) => {
      const pubDate = getPostIsoDate(post.slug);
      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteConfig.url}/blog/${post.slug}</link>
      <guid>${siteConfig.url}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(pubDate).toUTCString()}</pubDate>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${siteConfig.name} Insights</title>
    <link>${siteConfig.url}/blog</link>
    <description>Artigos técnicos sobre SST, governança e tecnologia aplicada à segurança do trabalho.</description>
    <language>pt-br</language>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
