import type { Metadata } from "next";
import type { Locale } from "@/lib/content";
import { COPY } from "@/lib/copy";
import { PageHead } from "@/components/site/shared";
import { ServicesGrid } from "@/components/site/home";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const t = COPY[(await params).locale as Locale];
  return { title: t.services.indexTitle, description: t.services.indexSub };
}

export default async function Services({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const t = COPY[locale];
  return (
    <>
      <PageHead label={t.services.kicker} title={t.services.indexTitle} sub={t.services.indexSub} />
      <div className="container-x pb-20 md:pb-28">
        <ServicesGrid locale={locale} large />
      </div>
    </>
  );
}
