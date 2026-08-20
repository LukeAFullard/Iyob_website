import { MetadataRoute } from 'next';
import { posts } from '@/content/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://inyob.org';

  const routes = [
    '',
    '/apps',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...postRoutes];
}
