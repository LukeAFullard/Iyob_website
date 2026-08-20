import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://inyob.org"),
  title: "InYourOwnBrowser (InYOB) — Privacy-First Client-Side Web Apps",
  description:
    "InYourOwnBrowser (InYOB) builds privacy-first, client-side web apps where all data stays on your device.",
  openGraph: {
    title: "InYourOwnBrowser (InYOB) — Privacy-First Client-Side Web Apps",
    description:
      "InYourOwnBrowser (InYOB) builds privacy-first, client-side web apps where all data stays on your device.",
    url: "https://inyob.org",
    siteName: "InYourOwnBrowser",
    locale: "en_US",
    type: "website",
    // TODO: Replace with real og-image asset when available
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "InYourOwnBrowser (InYOB)" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "InYourOwnBrowser (InYOB)",
    description: "Privacy-First Client-Side Web Applications",
    creator: "@_InYOB_",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone dark:bg-ink text-graphite dark:text-stone font-sans">
        {children}
      </body>
    </html>
  );
}
