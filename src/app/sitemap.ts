import { MetadataRoute } from 'next';
import { posts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sgsseguranca.com.br';
  const lastModified = new Date('2026-04-25');

  const routes = [
    '',
    '/modulos',
    '/governanca',
    '/integracoes',
    '/sophie',
    '/precos',
    '/seguranca',
    '/contato',
    '/blog',
    '/recursos',
    '/privacidade',
    '/termos',
  ];

  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
