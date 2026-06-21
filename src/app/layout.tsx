import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });

export const metadata: Metadata = {
  title: "Collège Laferrière de Milot | Lekòl Segondè nan Milot",
  description: "Sit ofisyèl Collège Laferrière de Milot: enskripsyon, pwogram akademik, lavi lekòl, ak kontak.",
  openGraph: { title: "Collège Laferrière de Milot", description: "Fòme lidè demen yo, jodi a.", type: "website", locale: "ht_HT" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@type": "School", name: "Collège Laferrière de Milot", address: { "@type": "PostalAddress", addressLocality: "Milot", addressRegion: "Nord", addressCountry: "HT" }, telephone: "+509 0000-0000" };
  return (
    <html lang="ht" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-body text-base leading-relaxed antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
