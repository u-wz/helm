import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ToastProvider } from "@/components/ui/NeoToast";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: SITE_NAME,
  description:
    "A free, open-source guide for Egyptian CS students covering roadmaps, courses, career advice, tools, and project ideas.",
  openGraph: {
    title: SITE_NAME,
    description: SITE_TAGLINE,
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_TAGLINE,
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
      </body>
    </html>
  );
}
