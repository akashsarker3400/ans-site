"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";

import type { Locale } from "@/lib/content";
import { COPY } from "@/lib/copy";
import { ArrowUpRight, Reveal } from "./shared";

export function ContactCard({ locale, email }: { locale: Locale; email: string }) {
  const t = COPY[locale];
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* clipboard blocked: the mailto link still works */
    }
  };

  return (
    <div className="mx-auto max-w-[720px]">
      <Reveal className="card p-7 md:p-10">
        <p className="label">{t.contact.writeTo}</p>
        <a href={`mailto:${email}`} className="mt-3 block break-all font-heading text-[clamp(24px,4vw,44px)] leading-tight font-extrabold tracking-[-0.02em] text-signal transition-opacity hover:opacity-85">
          {email}
        </a>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={`mailto:${email}`} className="btn-primary">
            <Mail className="size-4" />
            {t.contact.emailUs}
            <ArrowUpRight className="size-4" />
          </a>
          <button type="button" onClick={copy} className="btn-ghost">
            {copied ? <Check className="size-4 text-live" /> : <Copy className="size-4" />}
            {copied ? (locale === "bn" ? "কপি হয়েছে" : "Copied") : locale === "bn" ? "ইমেইল কপি করুন" : "Copy email"}
          </button>
        </div>
      </Reveal>
      <Reveal delay={0.08} className="card mt-4 p-7 md:p-10">
        <h2 className="text-h3">{t.contact.includeTitle}</h2>
        <ol className="mt-5 space-y-3">
          {t.contact.include.map((item, i) => (
            <li key={item} className="flex gap-4 text-[15px]">
              <span className="grid size-7 shrink-0 place-items-center rounded-full border border-line-strong font-heading text-[12px] font-bold text-signal">{i + 1}</span>
              <span className="pt-0.5">{item}</span>
            </li>
          ))}
        </ol>
        <p className="mt-6 border-t border-line pt-5 text-[14px] text-faint">{t.contact.response}</p>
      </Reveal>
    </div>
  );
}
