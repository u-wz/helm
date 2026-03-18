import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ToastProvider } from "@/components/ui/NeoToast";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const SITE_URL = "https://hellm.vercel.app";
const SITE_DESCRIPTION =
  "A free, open-source guide for Egyptian CS students — roadmaps, curated courses with financial aid help, Egyptian company list, developer tools, CV tips, and project ideas. بالعربي والإنجليزي.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} — حلم | Free CS Guide for Egyptian Students`,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "Egyptian CS students",
    "computer science Egypt",
    "طلاب علوم الحاسب",
    "مصر برمجة",
    "free coding courses Egypt",
    "CS roadmap Egypt",
    "Egyptian tech companies",
    "learn programming Egypt",
    "Cairo University CS",
    "Ain Shams CS",
    "financial aid Coursera Egypt",
    "Egyptian developer guide",
    "helm حلم",
  ],

  authors: [{ name: ".uwz", url: "https://github.com/u-wz" }],
  creator: ".uwz",
  publisher: "Helm",

  // Canonical URL
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
      "ar-EG": SITE_URL,
    },
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — حلم | Free CS Guide for Egyptian Students`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Helm — Free CS Guide for Egyptian Students",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — حلم | Free CS Guide for Egyptian Students`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@uwz",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  verification: {
    // Add your Google Search Console verification key here when ready:
    // google: "your-verification-code",
  },
};

// JSON-LD structured data for Google
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Helm — حلم",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  inLanguage: ["en", "ar"],
  author: {
    "@type": "Person",
    name: ".uwz",
    url: "https://github.com/u-wz",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Egyptian Computer Science Students",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Theme flash prevention */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            try {
              var t = localStorage.getItem('theme') || 'light';
              document.documentElement.classList.toggle('dark', t === 'dark');
            } catch(e) {}
          `,
          }}
        />
      </head>
      <body
        className="antialiased min-h-screen flex flex-col"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <ThemeProvider>
          <ToastProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </ToastProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
