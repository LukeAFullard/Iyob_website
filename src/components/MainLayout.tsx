import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

/*
 * TODO: Replace favicon and social preview cards once logo assets are ready.
 * Favicon fallback / app icons placeholder and og-image.png (1200x630) TODOs noted here.
 */

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-stone dark:bg-ink text-graphite dark:text-stone font-sans selection:bg-signal selection:text-ink">
      <Header />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};
