"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Check } from "lucide-react";

import { CountUp } from "@/components/unlumen-ui/count-up";
import { MagneticButton } from "@/components/unlumen-ui/magnetic-button";
import { TextReveal } from "@/components/unlumen-ui/text-reveal";
import { Highlight, HighlightItem } from "@/components/unlumen-ui/primitives/effects/velocity-highlight";
import { PORTFOLIO } from "@/lib/partners";
import { SERVICES, STATS, TOOLS, WHY_US, type Locale } from "@/lib/content";
import { COPY, base } from "@/lib/copy";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight, EASE, Icon, Reveal, Section, SignalPanel, StatusBadge } from "./shared";

/* ---------------- Hero ---------------- */

const PIPE = [
  ["Release", "Audio · video · metadata"],
  ["QC & compliance", "DSP rules checked"],
  ["Delivery", "150+ platforms"],
  ["Reporting", "Royalties · splits"],
];

export function Hero({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const b = base(locale);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -24]);

  return (
    <section className="pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="label inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5">
              <span className="size-1.5 rounded-full bg-signal" />
              {t.hero.kicker}
            </span>
          </Reveal>
          <h1 className="text-display mt-7">
            {locale === "en" ? <TextReveal as="span" text={t.hero.title} staggerDelay={0.04} duration={0.5} className="leading-[inherit]" /> : t.hero.title}
          </h1>
          <Reveal delay={0.25}>
            <p className="mt-7 max-w-[52ch] text-[clamp(17px,1.4vw,20px)] leading-[1.55] text-muted-foreground">
              {t.hero.lead1}
              <span className="font-semibold text-foreground">{t.hero.leadBrand}</span>
              {t.hero.lead2}
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <MagneticButton href={`${b}/services`} radius={24} strength={0.3} className="btn-primary">
                {t.hero.primary}
                <ArrowRight className="size-4" />
              </MagneticButton>
              <Link href={`${b}/contact`} className="btn-ghost">
                {t.hero.secondary}
              </Link>
            </div>
          </Reveal>
        </div>

        <motion.div style={reduce ? undefined : { y }} className="lg:col-span-5">
          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-[28px] border border-line-strong p-2">
              <SignalPanel className="absolute inset-0" opacity={0.6} />
              <div className="relative rounded-[22px] border border-line bg-background p-5">
                <div className="flex items-center justify-between">
                  <span className="label">ANS Music · pipeline</span>
                  <span className="label text-live">● Live</span>
                </div>
                <ol className="mt-5 space-y-2">
                  {PIPE.map(([title, sub], i) => (
                    <motion.li
                      key={title}
                      initial={reduce ? false : { opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.45, ease: EASE, delay: 0.5 + i * 0.12 }}
                      className="flex items-center gap-4 rounded-2xl border border-line bg-surface px-4 py-3"
                    >
                      <span className="grid size-7 place-items-center rounded-full border border-line-strong font-heading text-[12px] font-bold text-signal">{i + 1}</span>
                      <span className="flex-1">
                        <span className="block text-[15px] font-semibold">{title}</span>
                        <span className="block text-[12px] text-faint">{sub}</span>
                      </span>
                      {i < PIPE.length - 1 ? <span className="h-px w-6 bg-line-strong" /> : <Check className="size-4 text-live" />}
                    </motion.li>
                  ))}
                </ol>
                <div className="mt-5 flex items-end justify-between border-t border-line pt-4">
                  <span className="label">Avg. delivery</span>
                  <span className="font-heading text-[28px] leading-none font-extrabold tracking-[-0.02em] tabular-nums">24–48h</span>
                </div>
              </div>
            </div>
          </Reveal>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */

export function Stats({ locale }: { locale: Locale }) {
  const reduce = useReducedMotion();
  return (
    <section aria-label="Key numbers" className="container-x py-12 md:py-16">
      <div className="grid grid-cols-2 border-line lg:grid-cols-4 lg:divide-x lg:divide-line">
        {STATS.map((s, i) => (
          <Reveal key={s.en.label} delay={i * 0.06} className={cn("py-6 lg:px-8 lg:py-2", i % 2 === 1 && "border-l border-line pl-6 lg:border-l-0 lg:pl-8", i >= 2 && "border-t border-line pt-8 lg:border-t-0 lg:pt-2", i === 0 && "lg:pl-0")}>
            <div className="font-heading text-[clamp(44px,5vw,64px)] leading-none font-extrabold tracking-[-0.03em] tabular-nums">
              {s.prefix}
              {reduce ? s.value : <CountUp to={s.value} duration={1.4} digitEffect="none" />}
              {s.suffix}
            </div>
            <p className="mt-3 text-[14px] leading-snug text-muted-foreground">{s[locale].label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Services grid ---------------- */

export function ServicesGrid({ locale, large = false }: { locale: Locale; large?: boolean }) {
  const t = COPY[locale];
  const b = base(locale);
  return (
    <Highlight mode="parent" hover containerClassName="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 [&>*]:h-full" className="rounded-[24px] border border-signal/60">
      {SERVICES.map((s, i) => (
        <HighlightItem key={s.slug} value={s.slug} asChild>
          <Link href={`${b}/services/${s.slug}`} className={cn("card card-hover group relative z-10 flex h-full flex-col", large ? "p-8" : "p-7")}>
            <div className="flex items-start justify-between">
              <span className="grid size-11 place-items-center rounded-2xl border border-line bg-surface-2 text-foreground">
                <Icon name={s.icon} className="size-5" />
              </span>
              <span className="text-[12px] font-semibold text-faint tabular-nums">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="text-h3 mt-7">{s[locale].title}</h3>
            <p className="mt-2 flex-1 text-[15px] text-muted-foreground">{s[locale].short}</p>
            {large && locale === "en" && (
              <ul className="mt-5 space-y-1.5 border-t border-line pt-4 text-[14px] text-muted-foreground">
                {s.en.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="mt-1 size-3.5 shrink-0 text-signal" />
                    {f}
                  </li>
                ))}
              </ul>
            )}
            <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold">
              {t.services.learnMore}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </HighlightItem>
      ))}
    </Highlight>
  );
}

export function ServicesSection({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const b = base(locale);
  return (
    <Section
      id="services"
      index="01"
      label={t.services.kicker}
      title={t.services.title}
      action={
        <Link href={`${b}/services`} className="group inline-flex items-center gap-1.5 text-[15px] font-semibold">
          {t.services.viewAll}
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      }
    >
      <ServicesGrid locale={locale} />
    </Section>
  );
}

/* ---------------- Tools teaser ---------------- */

export function ToolsTeaser({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const b = base(locale);
  return (
    <Section id="tools" index="02" label={t.tools.kicker}>
      <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-start">
        <Reveal className="lg:col-span-5">
          <h2 className="text-h2">{t.tools.teaserTitle}</h2>
          <p className="mt-4 max-w-[48ch] text-[17px] text-muted-foreground">{t.tools.teaserSub}</p>
          <Link href={`${b}/tools`} className="group mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold">
            {t.tools.seeAll}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
        <div className="lg:col-span-7">
          <ul className="card divide-y divide-line overflow-hidden">
            {TOOLS.map((tool, i) => {
              const live = tool.status === "live";
              const inner = (
                <>
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-line bg-surface-2">
                    <Icon name={tool.icon} className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-3">
                      <span className="text-[17px] font-semibold">{tool[locale].title}</span>
                      <StatusBadge live={live}>{live ? t.tools.live : t.tools.soon}</StatusBadge>
                    </span>
                    <span className="mt-1 block text-[14px] text-muted-foreground">{tool[locale].desc}</span>
                  </span>
                  {live && <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />}
                </>
              );
              return (
                <Reveal key={tool.slug} delay={i * 0.06}>
                  {live ? (
                    <a href={tool.href} className="group flex items-center gap-4 p-5 transition-colors hover:bg-surface-2">
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-5 opacity-70">{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Why us ---------------- */

export function WhyUs({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  return (
    <Section id="why" index="03" label={t.why.kicker} title={t.why.title}>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {WHY_US.map((w, i) => (
          <Reveal key={w.icon} delay={i * 0.08} className="card flex h-full flex-col p-7">
            <span className="font-heading text-[56px] leading-none font-extrabold tracking-[-0.03em] text-line-strong">0{i + 1}</span>
            <Icon name={w.icon} className="mt-6 size-6 text-signal" />
            <h3 className="text-h3 mt-4">{w[locale].title}</h3>
            <p className="mt-2 text-[15px] text-muted-foreground">{w[locale].body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Featured: ANS Music ---------------- */

export function Featured({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const b = base(locale);
  return (
    <section className="container-x py-8 md:py-12">
      <Reveal>
        <div className="grid gap-10 rounded-[32px] border border-line bg-surface p-7 md:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="label inline-flex items-center gap-2 rounded-full border border-signal/40 px-3 py-1.5 text-signal">
              <span className="size-1.5 rounded-full bg-signal" />
              {t.featured.kicker}
            </span>
            <h2 className="text-h2 mt-6">{t.featured.title}</h2>
            <p className="mt-5 text-[17px] text-muted-foreground">{t.featured.body}</p>
            <ul className="mt-6 space-y-2.5">
              {t.featured.points.map((p) => (
                <li key={p} className="flex gap-3 text-[15px]">
                  <Check className="mt-1 size-4 shrink-0 text-signal" />
                  {p}
                </li>
              ))}
            </ul>
            <Link href={`${b}/services/white-label-saas`} className="btn-primary mt-8">
              {t.featured.cta}
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {t.featured.tiles.map(([title, sub], i) => (
              <Reveal key={title} delay={i * 0.06} className="rounded-[20px] border border-line bg-background p-5">
                <p className="font-heading text-[22px] leading-tight font-bold tracking-[-0.02em]">{title}</p>
                <p className="mt-1 text-[13px] text-faint">{sub}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- Corporate structure ---------------- */

export function Structure({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  return (
    <Section id="structure" index="04" label={t.portfolio.kicker} title={t.portfolio.title} sub={t.portfolio.sub}>
      <div className="mt-12">
        <Reveal className="mx-auto max-w-sm">
          <div className="card flex items-center gap-4 p-5">
            <Image src="/images/ans_digital_logo_white.png" alt="ANS Digital" width={140} height={40} className="h-6 w-auto object-contain" />
            <span className="label ml-auto text-signal">{t.portfolio.parent}</span>
          </div>
        </Reveal>
        <div aria-hidden className="mx-auto h-10 w-px bg-line-strong" />
        <div aria-hidden className="mx-auto hidden h-px w-2/3 bg-line-strong md:block" />
        <div className="grid gap-4 md:mt-0 md:grid-cols-3">
          {PORTFOLIO.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className="relative md:pt-10">
              <span aria-hidden className="absolute top-0 left-1/2 hidden h-10 w-px bg-line-strong md:block" />
              <div className="card card-hover flex h-full flex-col p-6">
                <div className="flex h-8 items-center">
                  <Image src={p.logo} alt={p.name} width={120} height={32} className="h-6 w-auto object-contain" />
                </div>
                <p className="label mt-5">{t.portfolio.operatedBy}</p>
                <h3 className="text-h3 mt-2">{p.name}</h3>
                <p className="mt-2 flex-1 text-[15px] text-muted-foreground">{p[locale]}</p>
                {p.url !== "#" && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="group mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold">
                    {t.portfolio.visit}
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Final CTA ---------------- */

export function FinalCta({ locale, email }: { locale: Locale; email: string }) {
  const t = COPY[locale];
  const b = base(locale);
  return (
    <section className="container-x pt-8 pb-20 md:pb-28">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[32px] border border-line bg-surface px-6 py-16 text-center md:py-24">
          <SignalPanel className="absolute inset-0 -z-10" opacity={0.25} speed={0.12} />
          <h2 className="text-h1 mx-auto max-w-[18ch]">{t.cta.title}</h2>
          <p className="mx-auto mt-5 max-w-[48ch] text-[17px] text-muted-foreground">{t.cta.sub}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={`${b}/contact`} className="btn-primary">
              {t.cta.button}
              <ArrowRight className="size-4" />
            </Link>
            <a href={`mailto:${email}`} className="btn-ghost">
              {email}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
