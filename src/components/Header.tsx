import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-stone/90 dark:bg-ink/90 border-b border-graphite/10 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Header Wordmark / Logo */}
        <Logo variant="full" />

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/apps/"
            className="text-graphite/80 hover:text-graphite dark:text-stone/80 dark:hover:text-stone transition-colors focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 rounded px-1"
          >
            Apps
          </Link>
          <Link
            href="/blog/"
            className="text-graphite/80 hover:text-graphite dark:text-stone/80 dark:hover:text-stone transition-colors focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 rounded px-1"
          >
            Blog
          </Link>

          {/* Primary CTA */}
          <Link
            href="/apps/"
            className="inline-flex items-center justify-center bg-signal text-ink hover:bg-signal/90 font-semibold px-4 py-2 rounded-panel text-sm transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2"
          >
            Explore Our Apps
          </Link>
        </nav>
      </div>
    </header>
  );
};
