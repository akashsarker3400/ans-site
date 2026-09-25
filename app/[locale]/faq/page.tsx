import type { Metadata } from "next";
import { FAQ_BN, FAQ_EN, type Locale } from "@/lib/content";
import { COPY } from "@/lib/copy";
import { PageHead } from "@/components/site/shared";
import { Faq } from "@/components/site/faq";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const t = COPY[(await params).locale as Locale];
  return { title: t.faq.title };
}

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const t = COPY[locale];
  const items = locale === "bn" ? FAQ_BN : FAQ_EN;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHead label={t.faq.kicker} title={t.faq.title} />
      <div className="container-x pb-20 md:pb-28">
        <Faq items={items} />
      </div>
    </>
  );
}
