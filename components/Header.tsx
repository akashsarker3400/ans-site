"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/content";
import { NAV } from "@/lib/content";
import LangSwitch from "./LangSwitch";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header({ locale }: { locale: Locale }) {
  const nav = NAV[locale];
  const base = locale === "bn" ? "/bn" : "/en";
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#09090b]/80 backdrop-blur-md border-b hairline">
      <div className="container-wide flex items-center justify-between h-[72px]">
        <Link href={base} className="flex items-center shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/images/ans_digital_logo_white.png"
            alt="ANS Digital"
            width={140}
            height={40}
            className="h-7 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-9 text-[14px] font-medium text-muted">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href === "/" ? base : `${base}${item.href}`}
              className="nav-link hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LangSwitch locale={locale} />
          </div>
          <Link href={`${base}/contact`} className="hidden sm:inline-flex btn-primary">
            {locale === "bn" ? "যোগাযোগ করুন" : "Contact sales"}
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border hairline text-muted"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t hairline"
          >
            <div className="flex flex-col px-6 py-5 gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href === "/" ? base : `${base}${item.href}`}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-[15px] font-medium text-muted hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-4 mt-2 border-t hairline">
                <LangSwitch locale={locale} />
                <Link
                  href={`${base}/contact`}
                  onClick={() => setOpen(false)}
                  className="btn-primary flex-1 justify-center"
                >
                  {locale === "bn" ? "যোগাযোগ করুন" : "Contact sales"}
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
