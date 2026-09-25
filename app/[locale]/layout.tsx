import { notFound } from "next/navigation";
import type { Locale } from "@/lib/content";
import { COPY, LOCALES } from "@/lib/copy";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { MotionConfig } from "motion/react";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) notFound();
  const l = locale as Locale;
  const t = COPY[l];

  return (
    <MotionConfig reducedMotion="user">
    <div lang={l} className={`flex min-h-screen flex-col ${l === "bn" ? "font-bn" : "font-sans"}`}>
      <a href="#main" className="sr-only z-[200] rounded-full bg-signal px-4 py-2 font-semibold text-signal-fg focus:not-sr-only focus:fixed focus:top-4 focus:left-4">
        {t.a11y.skip}
      </a>
      <Header locale={l} />
      <main id="main" className="flex-1 pt-[72px]">
        {children}
      </main>
      <Footer locale={l} />
    </div>
    </MotionConfig>
  );
}
