import React from 'react';
import { Metadata } from 'next';
import { MainLayout } from '@/components/MainLayout';
import { AppCard } from '@/components/AppCard';
import { apps } from '@/content/apps';

export const metadata: Metadata = {
  title: 'InYOB Apps — Privacy-First Web Applications',
  description:
    'Discover privacy-first, client-side web applications built by InYourOwnBrowser (InYOB). Zero cloud storage, no accounts required.',
};

export default function AppsPage() {
  const liveApps = apps.filter((a) => a.status === 'live');
  const comingSoonApps = apps.filter((a) => a.status === 'coming-soon');

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-graphite dark:text-stone mb-4">
          InYOB Applications
        </h1>
        <p className="text-base text-gray-600 dark:text-gray-300">
          Explore our suite of client-side web tools. Each app is built around a single principle: all your data remains strictly on your own device.
        </p>
      </div>

      {/* Live Apps */}
      <section className="mb-12">
        <h2 className="text-xl font-bold font-mono text-graphite dark:text-stone mb-6 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-verdigris inline-block"></span>
          Live Applications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {liveApps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </section>

      {/* Coming Soon Apps */}
      {comingSoonApps.length > 0 && (
        <section className="pt-8 border-t border-graphite/10 dark:border-white/10">
          <h2 className="text-xl font-bold font-mono text-graphite dark:text-stone mb-6 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-signal inline-block"></span>
            In Development / Coming Soon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comingSoonApps.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>
        </section>
      )}
    </MainLayout>
  );
}
