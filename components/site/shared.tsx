"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Clapperboard,
  FileSearch,
  Headphones,
  Layers,
  LayoutGrid,
  Link2,
  PlaySquare,
  Rocket,
  Search,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import { PARTNERS } from "@/lib/partners";
import { cn } from "@/lib/utils";

export const EASE = [0.22, 1, 0.36, 1] as const;

const ICONS: Record<string, LucideIcon> = { LayoutGrid, Clapperboard, Rocket, ShieldCheck, PlaySquare, Camera, Link2, Search, FileSearch, Layers, Headphones };

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = ICONS[name] ?? Layers;
  return <C className={cn("size-6", className)} strokeWidth={1.75} aria-hidden />;
}

export { ArrowRight, ArrowUpRight };

/* ---------- Reveal: opacity + 16px rise, once ---------- */

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.48, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Section rail + heading ---------- */

export function Section({ id, index, label, title, sub, action, children, className }: { id?: string; index?: string; label: string; title?: ReactNode; sub?: string; action?: ReactNode; children?: ReactNode; className?: string }) {
  return (
    <section id={id} className={cn("py-14 md:py-20", className)}>
      <div className="container-x">
        <Reveal>
          <div className="rail">
            <span className="label">
              {index && <span className="text-signal">{index}</span>}
              {index && " — "}
              {label}
            </span>
          </div>
        </Reveal>
        {(title || sub) && (
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal delay={0.06} className="max-w-3xl">
              {title && <h2 className="text-h2">{title}</h2>}
              {sub && <p className="mt-4 max-w-[60ch] text-[17px] text-muted-foreground">{sub}</p>}
            </Reveal>
            {action && <Reveal delay={0.12}>{action}</Reveal>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageHead({ label, title, sub }: { label: string; title: string; sub?: string }) {
  return (
    <section className="pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="container-x">
        <Reveal>
          <div className="rail">
            <span className="label">{label}</span>
          </div>
        </Reveal>
        <Reveal delay={0.06} className="mt-8 max-w-3xl">
          <h1 className="text-h1">{title}</h1>
          {sub && <p className="mt-5 max-w-[62ch] text-[18px] text-muted-foreground">{sub}</p>}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Logo marquee ---------- */

export function PartnerMarquee({ label }: { label: string }) {
  const row = [...PARTNERS, ...PARTNERS];
  return (
    <section aria-label={label} className="border-y border-line bg-surface/60">
      <div className="container-x pt-6">
        <p className="label">{label}</p>
      </div>
      <div className="marquee relative overflow-hidden py-8 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="marquee-track flex w-max items-center gap-16">
          {row.map((p, i) => (
            <Image key={`${p.name}-${i}`} src={p.src} alt={i < PARTNERS.length ? p.name : ""} aria-hidden={i >= PARTNERS.length} width={120} height={30} className="h-7 w-auto object-contain opacity-70" />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Status badge ---------- */

export function StatusBadge({ live, children }: { live: boolean; children: ReactNode }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase", live ? "border-live/30 text-live" : "border-line text-faint")}>
      <span className={cn("size-1.5 rounded-full", live ? "bg-live" : "bg-faint")} />
      {children}
    </span>
  );
}
