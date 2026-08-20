import React from 'react';
import Link from 'next/link';
import { Post } from '@/content/posts';

interface BlogCardProps {
  post: Post;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="panel-card p-6 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-medium bg-signal/20 text-signal-dim dark:text-signal border border-signal/30">
            {post.app}
          </span>
          <time className="text-xs font-mono text-gray-500 dark:text-gray-400 tabular-nums">
            {post.date}
          </time>
        </div>

        <h3 className="font-semibold text-lg text-graphite dark:text-stone mb-2 line-clamp-2 hover:text-signal-dim dark:hover:text-signal transition-colors">
          <Link
            href={`/blog/${post.slug}`}
            className="focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 rounded"
          >
            {post.title}
          </Link>
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
          {post.excerpt}
        </p>
      </div>

      <div className="pt-4 border-t border-graphite/10 dark:border-white/10 flex items-center justify-between text-xs">
        <Link
          href={`/blog/${post.slug}`}
          className="font-medium text-graphite dark:text-stone hover:text-signal-dim dark:hover:text-signal inline-flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 rounded"
        >
          Read article
          <span>→</span>
        </Link>

        <a
          href={post.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 font-mono"
        >
          Source ↗
        </a>
      </div>
    </div>
  );
};
