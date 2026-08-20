import React from 'react';
import { AppEntry } from '@/content/apps';

interface AppCardProps {
  app: AppEntry;
}

export const AppCard: React.FC<AppCardProps> = ({ app }) => {
  const isLive = app.status === 'live';

  return (
    <div className="panel-card p-6 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-panel bg-graphite/10 dark:bg-white/10 flex items-center justify-center font-mono font-bold text-lg text-graphite dark:text-stone">
              {app.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-graphite dark:text-stone">
                {app.name}
              </h3>
              <p className="text-xs font-mono text-gray-500 dark:text-gray-400">
                {app.tagline}
              </p>
            </div>
          </div>

          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium ${
              isLive
                ? 'bg-verdigris/15 text-verdigris dark:text-emerald-400 border border-verdigris/30'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
            }`}
          >
            {isLive ? 'Live' : 'Coming Soon'}
          </span>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
          {app.description}
        </p>
      </div>

      <div className="pt-4 border-t border-graphite/10 dark:border-white/10">
        {isLive && app.url ? (
          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full bg-signal text-ink hover:bg-signal/90 font-semibold px-4 py-2 rounded-panel text-sm transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2"
          >
            Launch App
            <svg
              className="w-4 h-4 ml-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        ) : (
          <button
            disabled
            className="w-full bg-graphite/5 dark:bg-white/5 text-gray-400 dark:text-gray-500 font-medium px-4 py-2 rounded-panel text-sm cursor-not-allowed border border-graphite/10 dark:border-white/10"
          >
            In Development
          </button>
        )}
      </div>
    </div>
  );
};
