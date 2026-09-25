import Image from "next/image";
import Link from "next/link";

import { CONTACT, NAV, SERVICES, type Locale } from "@/lib/content";
import { COPY, base } from "@/lib/copy";

export function Footer({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const b = base(locale);
  return (
    <footer className="mt-auto border-t border-line">
      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-12 lg:py-16">
        <div className="col-span-2 lg:col-span-4">
          <Image src="/images/ans_digital_logo_white.png" alt="ANS Digital" width={192} height={100} className="mb-5 h-8 w-auto object-contain" />
          <p className="max-w-xs text-[15px] text-muted-foreground">{t.footer.desc}</p>
          <p className="mt-3 max-w-xs text-[13px] text-faint">{t.footer.brandNote}</p>
        </div>
        <div className="lg:col-span-3">
          <p className="label mb-4">{t.footer.services}</p>
          <ul className="space-y-2.5 text-[14px] text-muted-foreground sm:text-[15px]">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`${b}/services/${s.slug}`} className="transition-colors hover:text-foreground">
                  {s[locale].title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <p className="label mb-4">{t.footer.company}</p>
          <ul className="space-y-2.5 text-[15px] text-muted-foreground">
            {NAV[locale].map((item) => (
              <li key={item.href}>
                <Link href={item.href === "/" ? b : `${b}${item.href}`} className="transition-colors hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 sm:col-span-1 lg:col-span-3">
          <p className="label mb-4">{t.footer.contact}</p>
          <ul className="space-y-2.5 text-[15px] text-muted-foreground">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="text-foreground transition-colors hover:text-signal">
                {CONTACT.email}
              </a>
            </li>
            <li>{CONTACT.address[locale]}</li>
            <li className="text-[13px] text-faint">
              {t.footer.license}: {CONTACT.tradeLicense}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <span className="label">{t.footer.payments}</span>
            <a href="https://sslcommerz.com" target="_blank" rel="noopener noreferrer" className="inline-flex w-fit rounded-xl bg-white px-3 py-2 transition-opacity hover:opacity-90">
              <Image src="/images/sslcommerz.png" alt="Pay with Visa, Mastercard, bKash, Nagad and more. Verified by SSLCommerz." width={2400} height={281} className="h-auto w-full max-w-[520px] sm:h-12 sm:w-auto" sizes="560px" />
            </a>
          </div>
          <span className="text-[13px] text-faint">
            © {new Date().getFullYear()} ANS Digital. {t.footer.rights}
          </span>
        </div>
      </div>
    </footer>
  );
}
