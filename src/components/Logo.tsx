import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'short' | 'icon' | 'banner';
  showText?: boolean;
}

/**
 * Logo component for InYourOwnBrowser (InYOB).
 * Utilizes official brand SVG assets: iYOB.svg, iYOB_logo.svg, and iYOB_small.svg.
 */
export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  showText = true,
}) => {
  if (variant === 'banner') {
    return (
      <Link href="/" className={`inline-block hover:opacity-95 transition-opacity ${className}`}>
        <Image
          src="/iYOB.svg"
          alt="InYourOwnBrowser Logo Banner"
          width={980}
          height={200}
          className="w-full h-auto rounded-lg"
          priority
        />
      </Link>
    );
  }

  if (variant === 'short') {
    return (
      <Link
        href="/"
        className={`inline-flex items-center hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 rounded ${className}`}
      >
        <Image
          src="/iYOB_small.svg"
          alt="InYOB"
          width={120}
          height={40}
          className="h-8 w-auto dark:invert dark:hue-rotate-180"
          priority
        />
      </Link>
    );
  }

  if (variant === 'icon') {
    return (
      <Link
        href="/"
        className={`inline-flex items-center hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 rounded ${className}`}
      >
        <Image
          src="/iYOB_logo.svg"
          alt="InYOB Logo"
          width={36}
          height={36}
          className="w-9 h-9 object-contain"
          priority
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 font-bold tracking-tight text-graphite dark:text-stone hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 rounded ${className}`}
    >
      <Image
        src="/iYOB_logo.svg"
        alt="InYOB Logo"
        width={36}
        height={36}
        className="w-9 h-9 object-contain shrink-0"
        priority
      />
      {showText && (
        <span className="font-sans text-lg tracking-tight">
          InYourOwn<span className="text-signal-dim dark:text-signal">Browser</span>
        </span>
      )}
    </Link>
  );
};
