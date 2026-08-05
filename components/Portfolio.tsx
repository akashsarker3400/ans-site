import Image from "next/image";
import { PORTFOLIO } from "@/lib/partners";
import type { Locale } from "@/lib/content";
import Reveal from "./Reveal";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio({ locale }: { locale: Locale }) {
  const copy =
    locale === "bn"
      ? {
          kicker: "কর্পোরেট স্ট্রাকচার",
          title: "একটি প্রতিষ্ঠান, একাধিক ব্র্যান্ড",
          sub: "এএনএস ডিজিটাল হলো প্যারেন্ট কোম্পানি — নিচের ব্র্যান্ড ও সত্তাগুলো আমরাই তৈরি ও পরিচালনা করি।",
          operatedBy: "পরিচালনায়: এএনএস ডিজিটাল",
          visit: "ওয়েবসাইট দেখুন",
        }
      : {
          kicker: "Corporate structure",
          title: "One company, multiple brands",
          sub: "ANS Digital is the parent company. The brands and entities below are built and operated by us.",
          operatedBy: "Operated by ANS Digital",
          visit: "Visit website",
        };

  return (
    <section className="section-pad border-t hairline">
      <div className="container-wide">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow mb-4">{copy.kicker}</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">{copy.title}</h2>
          <p className="text-muted leading-relaxed">{copy.sub}</p>
        </div>

        {/* Parent node */}
        <Reveal className="panel p-6 flex items-center gap-4 mb-4 max-w-sm">
          <Image
            src="/images/ans_digital_logo_white.png"
            alt="ANS Digital"
            width={110}
            height={30}
            className="h-6 w-auto object-contain"
          />
          <span className="text-xs font-medium text-faint border-l hairline pl-4">
            {locale === "bn" ? "প্যারেন্ট কোম্পানি" : "Parent company"}
          </span>
        </Reveal>

        <div className="flex mb-4">
          <div className="w-px h-8 bg-[var(--border-strong)] ml-8" />
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {PORTFOLIO.map((company, i) => (
            <Reveal key={company.name} delay={i * 0.08}>
              <a
                href={company.url}
                target={company.url === "#" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="panel panel-hover p-7 flex flex-col h-full group"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={100}
                  height={28}
                  className="h-6 w-auto object-contain mb-6"
                />
                <h3 className="text-lg font-semibold mb-1">{company.name}</h3>
                <p className="text-[11px] font-medium text-[#7c6cf6] mb-4">{copy.operatedBy}</p>
                <p className="text-muted text-sm leading-relaxed flex-1">{company[locale]}</p>
                {company.url !== "#" && (
                  <span className="mt-5 text-[13px] font-medium text-white inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {copy.visit} <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                )}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
