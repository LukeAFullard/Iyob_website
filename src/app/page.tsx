import React from 'react';
import Link from 'next/link';
import { MainLayout } from '@/components/MainLayout';
import { AppCard } from '@/components/AppCard';
import { BlogCard } from '@/components/BlogCard';
import { Logo } from '@/components/Logo';
import { apps } from '@/content/apps';
import { posts } from '@/content/posts';

export default function HomePage() {
  return (
    <MainLayout>
      {/* 1. Hero Section */}
      <section className="py-8 md:py-16 max-w-4xl mx-auto text-center">
        {/* Official Brand Graphic Banner */}
        <div className="mb-8 overflow-hidden rounded-panel shadow-md border border-graphite/10 dark:border-white/10">
          <Logo variant="banner" />
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-signal/15 text-signal-dim dark:text-signal text-xs font-mono font-medium mb-6 border border-signal/25">
          <span>Privacy-First</span>
          <span>•</span>
          <span>Client-Side</span>
          <span>•</span>
          <span>Zero Server Storage</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-graphite dark:text-stone mb-6 leading-tight">
          Your Data Belongs <br className="hidden sm:inline" />
          <span className="text-signal-dim dark:text-signal">In Your Own Browser.</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          InYourOwnBrowser (InYOB) is the umbrella organization behind a family of privacy-first, client-side web applications. No cloud servers, no user accounts, and no data tracking—everything runs strictly on your own device.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/apps/"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-signal text-ink hover:bg-signal/90 font-semibold px-6 py-3 rounded-panel text-base transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2"
          >
            Explore Our Apps
          </Link>
          <a
            href="#featured-apps"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-graphite/10 dark:bg-white/10 hover:bg-graphite/20 dark:hover:bg-white/20 text-graphite dark:text-stone font-semibold px-6 py-3 rounded-panel text-base transition-colors focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* 2. Featured Apps Section */}
      <section id="featured-apps" className="py-12 border-t border-graphite/10 dark:border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-graphite dark:text-stone">
              Featured Web Apps
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Client-side web applications designed for total data sovereignty.
            </p>
          </div>
          <Link
            href="/apps/"
            className="text-xs font-mono font-medium text-signal-dim dark:text-signal hover:underline inline-flex items-center gap-1"
          >
            View all apps ({apps.length}) →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </section>

      {/* 3. Latest Blog Posts */}
      <section className="py-12 border-t border-graphite/10 dark:border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-graphite dark:text-stone">
              Latest from the Blog
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Articles and updates aggregated across all InYOB applications.
            </p>
          </div>
          <Link
            href="/blog/"
            className="text-xs font-mono font-medium text-signal-dim dark:text-signal hover:underline inline-flex items-center gap-1"
          >
            View all posts →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.slice(0, 4).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
