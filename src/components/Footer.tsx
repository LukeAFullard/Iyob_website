import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-graphite border-t border-graphite/20 dark:border-white/20 mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <Logo variant="full" />
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm">
              InYourOwnBrowser (InYOB) is the umbrella organization behind privacy-first, client-side web applications. No cloud servers, no accounts, complete data sovereignty.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold tracking-wider text-graphite dark:text-stone uppercase">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-graphite dark:hover:text-stone transition-colors focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 rounded"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/apps/"
                  className="text-gray-600 dark:text-gray-400 hover:text-graphite dark:hover:text-stone transition-colors focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 rounded"
                >
                  Apps Directory
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/"
                  className="text-gray-600 dark:text-gray-400 hover:text-graphite dark:hover:text-stone transition-colors focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 rounded"
                >
                  Aggregated Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Social Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold tracking-wider text-graphite dark:text-stone uppercase">
              Connect & Socials
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://x.com/_InYOB_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-graphite dark:hover:text-stone transition-colors focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 rounded inline-flex items-center gap-2"
                >
                  <span>X (Twitter)</span>
                  <span className="text-xs font-mono text-gray-400">@_InYOB_</span>
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/p6XhpaDm4R"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-graphite dark:hover:text-stone transition-colors focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 rounded inline-flex items-center gap-2"
                >
                  <span>Discord</span>
                  <span className="text-xs font-mono text-gray-400">Community</span>
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@InYourOwnBrowser"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-graphite dark:hover:text-stone transition-colors focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 rounded inline-flex items-center gap-2"
                >
                  <span>Medium</span>
                  <span className="text-xs font-mono text-gray-400">@InYourOwnBrowser</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-graphite/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-mono">
          <p>© {new Date().getFullYear()} InYourOwnBrowser (InYOB). All rights reserved.</p>
          <p className="mt-2 sm:mt-0">100% Client-Side. 0% Server Tracking.</p>
        </div>
      </div>
    </footer>
  );
};
