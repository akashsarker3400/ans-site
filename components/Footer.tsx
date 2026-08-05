import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/content";
import { CONTACT, NAV, SERVICES } from "@/lib/content";

export default function Footer({ locale }: { locale: Locale }) {
  const nav = NAV[locale];
  const base = locale === "bn" ? "/bn" : "/en";
  const year = "2026";

  const copy =
    locale === "bn"
      ? {
          desc: "বাংলাদেশ ভিত্তিক আধুনিক ডিজিটাল সল্যুশন, আইটি সার্ভিস ও মিডিয়া টেকনোলজি।",
          brandNote: "ANS Music, এএনএস ডিজিটাল-এর একটি মিউজিক ডিস্ট্রিবিউশন ব্র্যান্ড।",
          services: "সেবাসমূহ",
          company: "প্রতিষ্ঠান",
          contact: "যোগাযোগ",
          rights: "সর্বস্বত্ব সংরক্ষিত।",
          license: "ট্রেড লাইসেন্স",
        }
      : {
          desc: "Bangladesh-based digital solutions, IT services, and media technology.",
          brandNote: "ANS Music is a music-distribution brand built and operated by ANS Digital.",
          services: "Services",
          company: "Company",
          contact: "Contact",
          rights: "All rights reserved.",
          license: "Trade License",
        };

  return (
    <footer className="mt-auto border-t hairline">
      <div className="container-wide py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/ans_digital_logo_white.png"
            alt="ANS Digital"
            width={140}
            height={40}
            className="h-6 w-auto object-contain mb-5"
          />
          <p className="text-sm text-muted leading-relaxed max-w-xs mb-3">{copy.desc}</p>
          <p className="text-xs text-faint leading-relaxed max-w-xs">{copy.brandNote}</p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4 text-[13px]">{copy.services}</h4>
          <ul className="space-y-2.5 text-sm text-muted">
            {SERVICES.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link
                  href={locale === "en" ? `${base}/services/${s.slug}` : `${base}/services`}
                  className="hover:text-white transition-colors"
                >
                  {s[locale].title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4 text-[13px]">{copy.company}</h4>
          <ul className="space-y-2.5 text-sm text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href === "/" ? base : `${base}${item.href}`}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4 text-[13px]">{copy.contact}</h4>
          <ul className="space-y-2.5 text-sm text-muted">
            <li>{CONTACT.email}</li>
            <li>{CONTACT.address[locale]}</li>
            <li className="text-xs text-faint pt-1">
              {copy.license}: {CONTACT.tradeLicense}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t hairline">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-faint">
          <span>
            © {year} ANS Digital. {copy.rights}
          </span>
          <span>{CONTACT.paymentMethods.join(" · ")}</span>
        </div>
      </div>
    </footer>
  );
}
