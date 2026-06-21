import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-heading", display: "swap" });

export const metadata: Metadata = {
  title: "Collège Laferrière de Milot | Lekòl Segondè nan Milot",
  description: "Sit ofisyèl Collège Laferrière de Milot: enskripsyon, pwogram akademik, lavi lekòl, ak kontak.",
  openGraph: { title: "Collège Laferrière de Milot", description: "Fòme lidè demen yo, jodi a.", type: "website", locale: "ht_HT" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@type": "School", name: "Collège Laferrière de Milot", address: { "@type": "PostalAddress", addressLocality: "Milot", addressRegion: "Nord", addressCountry: "HT" }, telephone: "+509 0000-0000" };
  return (
    <html lang="ht" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-body text-base leading-relaxed antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
