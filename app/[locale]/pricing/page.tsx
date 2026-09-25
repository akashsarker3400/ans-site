import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, Minus } from "lucide-react";

import { ADDONS, COMPARE, INCLUDED, PLANS, PRICING, PRICING_FAQ } from "@/lib/pricing-bn";
import { cn } from "@/lib/utils";
import { ArrowUpRight, PageHead, Reveal, Section } from "@/components/site/shared";
import { Faq } from "@/components/site/faq";

// Bengali-only page: the BDT price list for ANS Music. English visitors are sent to ansmusic.io.
export const metadata: Metadata = {
  title: "প্রাইসিং (BDT)",
  description: PRICING.sub,
  alternates: { canonical: "https://ans.bd/bn/pricing" },
};

export default async function Pricing({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "bn") notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PRICING_FAQ.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHead label={PRICING.kicker} title={PRICING.title} sub={PRICING.sub} />

      {/* Plans */}
      <div className="container-x">
        <Reveal>
          <p className="label inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5">
            <span className="size-1.5 rounded-full bg-signal" />
            {PRICING.currencyNote}
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 lg:grid-cols-4 md:grid-cols-2">
          {PLANS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06} className="h-full">
              <div className={cn("card relative flex h-full flex-col overflow-hidden p-6", p.highlight && "border-signal/60 bg-surface-2")}>
                {p.highlight && <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-signal" />}
                <div className="flex items-start justify-between gap-2">
                  <span className="label">{p.kind}</span>
                  {p.badge && <span className="label text-signal">{p.badge}</span>}
                </div>
                <p className="mt-1 min-h-[2.6em] text-[13px] leading-snug text-faint">যাদের জন্য: {p.audience}</p>
                <h2 className="text-h3 mt-5">{p.name}</h2>
                <p className="mt-2 text-[14px] text-muted-foreground">{p.tagline}</p>
                <p className="mt-6 font-heading text-[40px] leading-none font-extrabold tracking-[-0.02em] tabular-nums">
                  {p.price}
                  {p.per && <span className="text-[16px] font-semibold text-muted-foreground">{p.per}</span>}
                </p>
                {p.billing && <p className="mt-2 text-[13px] font-medium text-signal">✦ {p.billing}</p>}
                {p.regular && <p className="mt-1 text-[12px] text-faint">{p.regular}</p>}
                <ul className="mt-6 flex-1 space-y-2 border-t border-line pt-5 text-[14px]">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <Check className="mt-1 size-3.5 shrink-0 text-signal" />
                      {f}
                    </li>
                  ))}
                  {p.excluded?.map((f) => (
                    <li key={f} className="flex gap-2.5 text-faint">
                      <Minus className="mt-1 size-3.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={PRICING.signup} target="_blank" rel="noopener noreferrer" className={cn("mt-7", p.highlight ? "btn-primary" : "btn-ghost")}>
                  {p.cta}
                  <ArrowUpRight className="size-4" />
                </a>
                <p className="mt-3 text-center text-[12px] text-faint">{p.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {ADDONS.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.06}>
              <div className="card flex items-center justify-between gap-6 p-6">
                <div>
                  <h3 className="text-[17px] font-semibold">{a.name}</h3>
                  <p className="mt-1 text-[14px] text-muted-foreground">{a.desc}</p>
                </div>
                <p className="shrink-0 text-right font-heading text-[26px] leading-none font-extrabold tracking-[-0.02em] tabular-nums">
                  {a.price}
                  <span className="block pt-1 text-[12px] font-medium text-faint">{a.per}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-5 text-[13px] text-faint">
            BDT-তে পে করুন ·{" "}
            <a href={PRICING.refund} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground">
              রিফান্ড পলিসি
            </a>
          </p>
        </Reveal>
      </div>

      {/* Included */}
      <Section label={INCLUDED.kicker} title={INCLUDED.title} sub={INCLUDED.sub}>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {INCLUDED.items.map(([t, d], i) => (
            <Reveal key={t} delay={Math.min(i * 0.05, 0.3)} className="card h-full p-6">
              <h3 className="text-[17px] font-semibold">{t}</h3>
              <p className="mt-2 text-[14px] text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Compare */}
      <Section label="তুলনা" title="কোন প্ল্যান আপনার জন্য?">
        <p className="mt-8 text-[13px] text-faint md:hidden">← → পাশে স্ক্রল করে সব প্ল্যান দেখুন</p>
        <Reveal className="mt-3 overflow-x-auto rounded-[24px] border border-line md:mt-10">
          <table className="w-full min-w-[720px] table-fixed text-left text-[14px]">
            <colgroup>
              <col className="w-[28%]" />
              <col className="w-[18%]" />
              <col className="w-[18%]" />
              <col className="w-[18%]" />
              <col className="w-[18%]" />
            </colgroup>
            <thead className="bg-surface-2 text-[13px]">
              <tr>
                <th className="sticky left-0 z-10 bg-surface-2 px-5 py-4 font-semibold">ফিচার</th>
                {["Starter", "Video", "Starter + Video", "Partner"].map((h) => (
                  <th key={h} className={cn("px-5 py-4 font-semibold", h === "Starter + Video" && "text-signal")}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {COMPARE.map((row) => (
                <tr key={row[0]} className="bg-surface">
                  <th scope="row" className="sticky left-0 z-10 bg-surface px-5 py-3.5 font-medium">
                    {row[0]}
                  </th>
                  {row.slice(1).map((cell, j) => (
                    <td key={j} className={cn("px-5 py-3.5", cell === "—" ? "text-faint" : "text-muted-foreground", cell === "✓" && "text-signal")}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section label="প্রশ্নোত্তর" title="প্রাইসিং নিয়ে প্রশ্ন" className="pb-20 md:pb-28">
        <div className="mt-10">
          <Faq items={PRICING_FAQ} />
        </div>
      </Section>
    </>
  );
}
