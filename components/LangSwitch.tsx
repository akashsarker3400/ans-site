"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/content";

// Pages that exist with an identical path on both sites.
const SHARED_PATHS = new Set(["", "/", "/services", "/about", "/contact", "/faq", "/tools"]);

export default function LangSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname(); // e.g. /bn/services/vevo-channel
  const withoutLocalePrefix = pathname.replace(/^\/(bn|en)/, "") || "/";

  const targetDomain =
    locale === "bn" ? "https://ans.digital" : "https://ans.bd";
  const targetPath = SHARED_PATHS.has(withoutLocalePrefix)
    ? withoutLocalePrefix
    : "/services"; // deep English-only pages fall back to the services overview

  const label = locale === "bn" ? "English" : "বাংলা";

  return (
    <a
      href={`${targetDomain}${targetPath === "/" ? "" : targetPath}`}
      className="text-[13px] font-medium px-3 py-1.5 rounded-lg border hairline text-muted hover:text-white hover:border-white/30 transition-colors"
    >
      {label}
    </a>
  );
}
