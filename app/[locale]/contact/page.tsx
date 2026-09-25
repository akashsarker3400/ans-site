import type { Metadata } from "next";
import { CONTACT, type Locale } from "@/lib/content";
import { COPY } from "@/lib/copy";
import { PageHead } from "@/components/site/shared";
import { ContactCard } from "@/components/site/contact-card";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const t = COPY[(await params).locale as Locale];
  return { title: t.contact.title, description: t.contact.sub };
}

export default async function Contact({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const t = COPY[locale];
  return (
    <>
      <PageHead label={t.contact.kicker} title={t.contact.title} sub={t.contact.sub} />
      <div className="container-x pb-20 md:pb-28">
        <ContactCard locale={locale} email={CONTACT.email} />
      </div>
    </>
  );
}
