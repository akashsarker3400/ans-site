import type { Metadata } from "next";
import { Check } from "lucide-react";
import { CONTACT, type Locale } from "@/lib/content";
import { COPY } from "@/lib/copy";
import { PageHead, Reveal, Section } from "@/components/site/shared";
import { Stats, Structure } from "@/components/site/home";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const t = COPY[(await params).locale as Locale];
  return { title: t.about.kicker, description: t.about.visionBody };
}

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const t = COPY[locale];
  return (
    <>
      <PageHead label={t.about.kicker} title={t.about.title} />
      <div className="container-x -mt-6">
        <Reveal>
          <p className="max-w-[62ch] text-[18px] text-muted-foreground">
            {t.about.lead1}
            <span className="font-semibold text-foreground">ANS Music</span>
            {t.about.lead2}
          </p>
        </Reveal>
      </div>

      <Stats locale={locale} />

      <div className="container-x grid gap-4 md:grid-cols-2">
        <Reveal className="card p-8">
          <p className="label">{t.about.vision}</p>
          <p className="mt-4 text-[17px]">{t.about.visionBody}</p>
        </Reveal>
        <Reveal delay={0.08} className="card p-8">
          <p className="label">{t.about.mission}</p>
          <ul className="mt-4 space-y-2.5 text-[15px] text-muted-foreground">
            {t.about.missionItems.map((m) => (
              <li key={m} className="flex gap-3">
                <Check className="mt-1 size-4 shrink-0 text-signal" />
                {m}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Section label={t.about.how}>
        <ol className="mt-10 grid gap-4 md:grid-cols-4">
          {t.about.steps.map(([title, desc], i) => (
            <Reveal key={title} delay={i * 0.08} className="card flex h-full flex-col p-6">
              <span className="font-heading text-[44px] leading-none font-extrabold tracking-[-0.03em] text-line-strong">0{i + 1}</span>
              <h2 className="text-h3 mt-5">{title}</h2>
              <p className="mt-2 text-[15px] text-muted-foreground">{desc}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Structure locale={locale} />

      <div className="container-x pb-20 md:pb-28">
        <Reveal>
          <div className="rail">
            <span className="label">{t.about.details}</span>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <dl className="card mt-8 grid gap-0 divide-y divide-line md:grid-cols-2 md:divide-x md:divide-y-0">
            <div className="p-6">
              <dt className="label">{t.about.license}</dt>
              <dd className="mt-2 text-[17px] font-semibold tabular-nums">{CONTACT.tradeLicense}</dd>
            </div>
            <div className="p-6">
              <dt className="label">{t.about.email}</dt>
              <dd className="mt-2 text-[17px] font-semibold">
                <a href={`mailto:${CONTACT.email}`} className="hover:text-signal">
                  {CONTACT.email}
                </a>
              </dd>
            </div>
          </dl>
          <p className="mt-5 max-w-[70ch] text-[14px] text-faint">{t.about.compliance}</p>
        </Reveal>
      </div>
    </>
  );
}
