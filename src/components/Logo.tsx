import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'short';
  // TODO: Add logoAssetUrl prop once official SVG/PNG logo files are provided
}

/**
 * Logo component for InYourOwnBrowser (InYOB).
 * TODO: Drop in the real logo image file when supplied.
 * Currently renders clean text wordmark as specified.
 */
export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'full' }) => {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 font-bold tracking-tight text-graphite dark:text-stone hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 rounded ${className}`}
    >
      <span className="flex items-center justify-center w-8 h-8 bg-signal text-ink font-mono font-bold text-sm rounded-panel shadow-sm">
        YB
      </span>
      <span className="font-sans text-lg tracking-tight">
        {variant === 'full' ? (
          <>
            InYourOwn<span className="text-signal-dim dark:text-signal">Browser</span>
          </>
        ) : (
          'InYOB'
        )}
      </span>
    </Link>
  );
};
