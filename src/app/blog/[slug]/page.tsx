import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MainLayout } from '@/components/MainLayout';
import { posts } from '@/content/posts';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Post Not Found — InYOB' };
  }

  return {
    title: `${post.title} — InYOB Blog (${post.app})`,
    description: post.excerpt,
    alternates: {
      canonical: post.sourceUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['InYourOwnBrowser'],
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      creator: '@_InYOB_',
    },
  };
}

function parseFormattedText(text: string) {
  // Simple helper to parse **bold** inside text strings
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold text-graphite dark:text-stone">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function renderFormattedBody(body: string) {
  const lines = body.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: { type: 'ul' | 'ol'; items: string[] } | null = null;
  let paragraphBuffer: string[] = [];

  const flushParagraph = () => {
    if (paragraphBuffer.length > 0) {
      const text = paragraphBuffer.join(' ').trim();
      if (text) {
        elements.push(
          <p key={`p-${elements.length}`} className="text-gray-700 dark:text-gray-300 leading-relaxed my-3">
            {parseFormattedText(text)}
          </p>
        );
      }
      paragraphBuffer = [];
    }
  };

  const flushList = () => {
    if (currentList) {
      const ListTag = currentList.type === 'ol' ? 'ol' : 'ul';
      elements.push(
        <ListTag key={`list-${elements.length}`} className={`space-y-2 my-4 pl-6 ${currentList.type === 'ol' ? 'list-decimal' : 'list-disc'}`}>
          {currentList.items.map((item, idx) => (
            <li key={idx} className="text-gray-700 dark:text-gray-300">
              {parseFormattedText(item)}
            </li>
          ))}
        </ListTag>
      );
      currentList = null;
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      return;
    }

    if (trimmed.startsWith('### ')) {
      flushParagraph();
      flushList();
      elements.push(
        <h3 key={`h3-${elements.length}`} className="text-xl font-bold tracking-tight text-graphite dark:text-stone mt-8 mb-3">
          {parseFormattedText(trimmed.replace(/^###\s+/, ''))}
        </h3>
      );
      return;
    }

    if (trimmed.startsWith('#### ')) {
      flushParagraph();
      flushList();
      elements.push(
        <h4 key={`h4-${elements.length}`} className="text-lg font-semibold tracking-tight text-graphite dark:text-stone mt-6 mb-2">
          {parseFormattedText(trimmed.replace(/^####\s+/, ''))}
        </h4>
      );
      return;
    }

    const olMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
    if (olMatch) {
      flushParagraph();
      if (!currentList || currentList.type !== 'ol') {
        flushList();
        currentList = { type: 'ol', items: [] };
      }
      currentList.items.push(olMatch[2]);
      return;
    }

    if (trimmed.startsWith('- ')) {
      flushParagraph();
      if (!currentList || currentList.type !== 'ul') {
        flushList();
        currentList = { type: 'ul', items: [] };
      }
      currentList.items.push(trimmed.slice(2));
      return;
    }

    paragraphBuffer.push(trimmed);
  });

  flushParagraph();
  flushList();

  return <div className="space-y-2 text-graphite dark:text-stone">{elements}</div>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'InYourOwnBrowser',
      url: 'https://inyob.org',
    },
    publisher: {
      '@type': 'Organization',
      name: 'InYourOwnBrowser',
      url: 'https://inyob.org',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.sourceUrl,
    },
  };

  return (
    <MainLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto py-4">
        {/* Navigation / Back link */}
        <div className="mb-6 flex items-center justify-between text-xs font-mono">
          <Link
            href="/blog/"
            className="text-gray-500 dark:text-gray-400 hover:text-graphite dark:hover:text-stone inline-flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 rounded"
          >
            ← Back to all posts
          </Link>
          <span className="text-gray-400">Published in {post.app}</span>
        </div>

        {/* Post Header */}
        <header className="mb-8 border-b border-graphite/10 dark:border-white/10 pb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-signal/20 text-signal-dim dark:text-signal border border-signal/30">
              {post.app}
            </span>
            <time className="text-xs font-mono text-gray-500 dark:text-gray-400 tabular-nums">
              {post.date}
            </time>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-graphite dark:text-stone mb-4">
            {post.title}
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 font-medium leading-relaxed mb-6">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-2 text-xs font-mono text-gray-500 dark:text-gray-400">
            <span>Canonical source:</span>
            <a
              href={post.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-signal-dim dark:text-signal hover:underline inline-flex items-center gap-1"
            >
              {post.sourceUrl} ↗
            </a>
          </div>
        </header>

        {/* Post Content Body */}
        <div>
          {post.body ? (
            renderFormattedBody(post.body)
          ) : (
            <p className="text-gray-600 dark:text-gray-400 italic">
              This post originated on {post.app}. Read the full article on its original canonical page at{' '}
              <a
                href={post.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-signal-dim dark:text-signal underline"
              >
                {post.sourceUrl}
              </a>
              .
            </p>
          )}
        </div>
      </article>
    </MainLayout>
  );
}
