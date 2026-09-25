import type { Locale } from "@/lib/content";
import { CONTACT } from "@/lib/content";
import { COPY } from "@/lib/copy";
import { PartnerMarquee } from "@/components/site/shared";
import { Featured, FinalCta, Hero, ServicesSection, Stats, Structure, ToolsTeaser, WhyUs } from "@/components/site/home";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const t = COPY[locale];
  return (
    <>
      <Hero locale={locale} />
      <PartnerMarquee label={t.partners} />
      <Stats locale={locale} />
      <ServicesSection locale={locale} />
      <ToolsTeaser locale={locale} />
      <WhyUs locale={locale} />
      <Featured locale={locale} />
      <Structure locale={locale} />
      <FinalCta locale={locale} email={CONTACT.email} />
    </>
  );
}
