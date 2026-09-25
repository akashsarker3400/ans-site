"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { NAV, type Locale } from "@/lib/content";
import { COPY, base } from "@/lib/copy";
import { cn } from "@/lib/utils";

// Pages that exist at the same path on both domains.
const SHARED = new Set(["", "/services", "/tools", "/about", "/faq", "/contact"]);

function otherLanguageHref(locale: Locale, pathname: string) {
  const path = pathname.replace(/^\/(bn|en)/, "");
  if (path === "/pricing") return "https://ansmusic.io/pricing/";
  const target = locale === "bn" ? "https://ans.digital" : "https://ans.bd";
  const keep = SHARED.has(path) || path.startsWith("/services/");
  return `${target}${keep ? path : ""}`;
}

export function Header({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const b = base(locale);
  const pathname = usePathname();
  const [floating, setFloating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const y = window.scrollY;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setFloating(y > 80);
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => {
    const full = href === "/" ? b : `${b}${href}`;
    return href === "/" ? pathname === b : pathname.startsWith(full);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pointer-events-none md:px-4">
        <div
          className={cn(
            "pointer-events-auto flex w-full items-center justify-between gap-4 border border-transparent bg-background transition-[max-width,height,margin,border-radius,border-color,background-color] duration-400 ease-[cubic-bezier(.22,1,.36,1)]",
            floating || open
              ? "mt-3 h-14 max-w-[960px] rounded-full border-line bg-surface px-3 md:px-4"
              : "h-[72px] max-w-[1280px] rounded-none border-b-line px-1 sm:px-3",
          )}
        >
          <Link href={b} className="flex shrink-0 items-center gap-2 pl-2" aria-label={t.brand}>
            <Image src="/images/ans_digital_logo_white.png" alt="ANS Digital" width={192} height={100} priority className={cn("w-auto object-contain transition-[height] duration-300", floating || open ? "h-8" : "h-9")} />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {NAV[locale].map((item) => (
              <Link
                key={item.href}
                href={item.href === "/" ? b : `${b}${item.href}`}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn("relative rounded-full px-3.5 py-2 text-[14px] font-medium text-muted-foreground transition-colors hover:text-foreground", isActive(item.href) && "text-foreground")}
              >
                {item.label}
                {isActive(item.href) && <span className="absolute -bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-signal" />}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={otherLanguageHref(locale, pathname)} className="btn-ghost btn-sm h-9 rounded-full px-3.5 text-[13px]" lang={locale === "bn" ? "en" : "bn"}>
              {t.nav.lang}
            </a>
            <Link href={`${b}/contact`} className="btn-primary btn-sm hidden h-9 sm:inline-flex">
              {t.nav.cta}
            </Link>
            <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label={t.nav.menu} className="grid size-9 place-items-center rounded-full border border-line-strong lg:hidden">
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
        <span aria-hidden className={cn("pointer-events-none absolute top-0 left-0 h-0.5 bg-signal transition-opacity", floating ? "opacity-100" : "opacity-0")} style={{ width: `${progress * 100}%` }} />
      </header>

      <div id="mobile-menu" aria-hidden={!open} className={cn("fixed inset-0 z-40 flex flex-col bg-background px-5 pt-24 pb-8 transition-opacity duration-300 lg:hidden", open ? "opacity-100" : "pointer-events-none opacity-0")}>
        <nav aria-label="Mobile" className="flex flex-col">
          {NAV[locale].map((item, i) => (
            <Link key={item.href} href={item.href === "/" ? b : `${b}${item.href}`} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="flex items-baseline gap-4 border-b border-line py-4 font-heading text-[32px] font-bold tracking-[-0.02em]">
              <span className="w-8 text-[12px] font-semibold text-signal">{String(i + 1).padStart(2, "0")}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href={`${b}/contact`} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="btn-primary mt-8 w-full">
          {t.nav.cta}
        </Link>
      </div>
    </>
  );
}
