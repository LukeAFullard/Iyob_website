import React from 'react';
import { Metadata } from 'next';
import { MainLayout } from '@/components/MainLayout';
import { BlogCard } from '@/components/BlogCard';
import { posts } from '@/content/posts';

export const metadata: Metadata = {
  title: 'InYOB Blog — Aggregated Privacy & Client-Side Insights',
  description:
    'Read articles, tutorials, and guides from across all InYourOwnBrowser (InYOB) applications and privacy engineering efforts.',
};

export default function BlogIndexPage() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-graphite dark:text-stone mb-4">
          InYOB Aggregated Blog
        </h1>
        <p className="text-base text-gray-600 dark:text-gray-300">
          A unified feed of updates, privacy engineering deep dives, and user guides from across the entire family of InYourOwnBrowser tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </MainLayout>
  );
}
