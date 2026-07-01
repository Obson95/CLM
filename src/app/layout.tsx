import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Collège Laferrière de Milot | Lekòl Segondè nan Milot",
  description: "Site officiel du Collège Laferrière de Milot: admissions, programmes académiques, vie scolaire et contact.",
  openGraph: { title: "Collège Laferrière de Milot", description: "Former les leaders de demain, aujourd'hui.", type: "website", locale: "fr_HT" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@type": "School", name: "Collège Laferrière de Milot", address: { "@type": "PostalAddress", addressLocality: "Milot", addressRegion: "Nord", addressCountry: "HT" }, telephone: "+509 0000-0000" };
  return (
    <html lang="fr">
      <body className="font-body text-base leading-relaxed antialiased">
        <LanguageProvider><a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:p-3">Skip to content</a><Header />{children}<Footer /></LanguageProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
