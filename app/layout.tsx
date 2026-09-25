import type { Metadata } from "next";
import { headers } from "next/headers";
import { Bricolage_Grotesque, Inter, Noto_Sans_Bengali } from "next/font/google";
import { CONTACT, SITE } from "@/lib/content";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"], display: "swap" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const bengali = Noto_Sans_Bengali({ variable: "--font-bengali", subsets: ["bengali"], weight: ["400", "500", "600", "700"], display: "swap" });

async function localeFromHost() {
  const host = (await headers()).get("host") || "";
  return host.includes("ans.digital") ? ("en" as const) : ("bn" as const);
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await localeFromHost();
  const site = SITE[locale];
  const description =
    locale === "en"
      ? "ANS Digital builds the technology behind modern music distribution and rights management: white-label distribution (ANS Music), VEVO channel creation, distribution support, copyright and rights management, YouTube Content ID and Meta Rights Manager."
      : "এএনএস ডিজিটাল মিউজিক ডিস্ট্রিবিউশন ও রাইটস ম্যানেজমেন্টের প্রযুক্তি তৈরি করে: হোয়াইট-লেবেল ডিস্ট্রিবিউশন (ANS Music), VEVO চ্যানেল, ডিস্ট্রিবিউশন সাপোর্ট, কপিরাইট ও রাইটস ম্যানেজমেন্ট, YouTube Content ID ও Meta Rights Manager।";
  const title = `${site.name} — ${site.tagline}`;
  return {
    metadataBase: new URL(site.domain),
    title: { default: title, template: `%s · ${site.name}` },
    description,
    alternates: {
      canonical: "/",
      languages: { en: "https://ans.digital", bn: "https://ans.bd", "x-default": "https://ans.digital" },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    openGraph: { type: "website", url: site.domain, siteName: site.name, title, description, locale: locale === "en" ? "en_US" : "bn_BD", images: [{ url: "/og.jpg", width: 1200, height: 630, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
    icons: { icon: "/favicon.ico" },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await localeFromHost();
  const site = SITE[locale];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.domain}/#org`,
    name: "ANS Digital",
    alternateName: "এএনএস ডিজিটাল",
    url: site.domain,
    logo: `${site.domain}/images/ans_digital_logo_white.png`,
    email: CONTACT.email,
    description: "Music and media technology company: white-label music distribution (ANS Music), rights management and distribution services.",
    brand: [
      { "@type": "Brand", name: "ANS Music", url: "https://ansmusiclimited.com/" },
      { "@type": "Brand", name: "Tune Via", url: "https://tunevia.com/" },
    ],
    sameAs: ["https://ans.digital", "https://ans.bd", "https://ansmusiclimited.com/", "https://tunevia.com/"],
  };

  return (
    <html lang={locale} className={`dark ${bricolage.variable} ${inter.variable} ${bengali.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
