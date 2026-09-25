import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

import { SERVICES, type Locale, type Service } from "@/lib/content";
import { COPY, base } from "@/lib/copy";
import { cn } from "@/lib/utils";
import { ArrowRight, Icon, Reveal } from "./shared";

export function ServiceDetail({ service, locale }: { service: Service; locale: Locale }) {
  const t = COPY[locale];
  const b = base(locale);
  const en = service.en;
  const data = service[locale];
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="pt-12 pb-10 md:pt-20 md:pb-14">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <Link href={`${b}/services`} className="inline-flex items-center gap-1.5 text-[14px] text-muted-foreground transition-colors hover:text-foreground">
                <ArrowLeft className="size-3.5" /> {t.services.all}
              </Link>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="grid size-12 place-items-center rounded-2xl border border-line bg-surface">
                  <Icon name={service.icon} className="size-6" />
                </span>
                {service.poweredBy && <span className="label rounded-full border border-signal/40 px-3 py-1.5 text-signal">{t.services.builtBy(service.poweredBy)}</span>}
              </div>
              <h1 className="text-h1 mt-6">{data.title}</h1>
              <p className="mt-6 max-w-[62ch] text-[18px] text-muted-foreground">{locale === "en" ? en.long : data.short}</p>
              {en.idealFor && (
                <p className="mt-6 max-w-[62ch] border-l-2 border-signal pl-4 text-[15px]">
                  <span className="label mr-2">{t.services.bestFor}</span>
                  {en.idealFor}
                </p>
              )}
            </Reveal>
          </div>
          <Reveal delay={0.12} className="lg:col-span-4">
            <div className="card sticky top-24 p-7">
              <h3 className="text-h3">{t.services.interested}</h3>
              <p className="mt-2 text-[15px] text-muted-foreground">{t.services.interestedSub}</p>
              <Link href={`${b}/contact`} className="btn-primary mt-6 w-full">
                {t.services.getInTouch}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-10 md:py-14">
        <Reveal>
          <div className="rail">
            <span className="label">{t.services.included}</span>
          </div>
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {en.features.map((f, i) => (
            <Reveal key={f} delay={Math.min(i * 0.05, 0.3)}>
              <li className="card flex h-full items-start gap-3 p-5 text-[15px]">
                <Check className="mt-1 size-4 shrink-0 text-signal" />
                {f}
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {en.pricing && (
        <section className="container-x py-10 md:py-14">
          <Reveal>
            <div className="rail">
              <span className="label">{t.services.pricing}</span>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {en.pricing.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.08} className={cn(tier.highlight && "order-first md:order-none")}>
                <div className={cn("card relative flex h-full flex-col overflow-hidden p-7", tier.highlight && "border-signal/60 bg-surface-2")}>
                  {tier.highlight && <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-signal" />}
                  <div className="flex items-center justify-between">
                    <h3 className="text-h3">{tier.name}</h3>
                    {tier.highlight && <span className="label text-signal">{t.services.popular}</span>}
                  </div>
                  <p className="mt-4 font-heading text-[44px] leading-none font-extrabold tracking-[-0.03em] tabular-nums">{tier.price}</p>
                  <dl className="mt-6 grid grid-cols-2 gap-3 border-y border-line py-4 text-[14px]">
                    <div>
                      <dt className="text-faint">{t.services.audio}</dt>
                      <dd className="mt-0.5 font-semibold">{tier.audioCut}</dd>
                    </div>
                    <div>
                      <dt className="text-faint">{t.services.video}</dt>
                      <dd className="mt-0.5 font-semibold">{tier.videoCut}</dd>
                    </div>
                  </dl>
                  <ul className="mt-5 space-y-2 text-[15px]">
                    {tier.features.map((f) => (
                      <li key={f} className="flex gap-2.5">
                        <Check className="mt-1 size-4 shrink-0 text-signal" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`${b}/contact`} className={cn("mt-8", tier.highlight ? "btn-primary" : "btn-ghost")}>
                    {t.services.getInTouch}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-[13px] text-faint">{t.services.pricingNote}</p>
        </section>
      )}

      <section className="container-x py-10 pb-20 md:py-14 md:pb-28">
        <Reveal>
          <div className="rail">
            <span className="label">{t.services.other}</span>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {others.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.06}>
              <Link href={`${b}/services/${s.slug}`} className="card card-hover group flex h-full flex-col p-6">
                <Icon name={s.icon} className="size-5 text-muted-foreground" />
                <h3 className="text-h3 mt-5">{s[locale].title}</h3>
                <p className="mt-2 flex-1 text-[15px] text-muted-foreground">{s[locale].short}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold">
                  {t.services.learnMore}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
