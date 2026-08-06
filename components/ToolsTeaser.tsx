import Link from "next/link";
import type { Locale } from "@/lib/content";
import { TOOLS } from "@/lib/content";
import ToolIcon from "./ToolIcon";
import Reveal from "./Reveal";
import { ArrowRight } from "lucide-react";

export default function ToolsTeaser({ locale }: { locale: Locale }) {
  const base = locale === "bn" ? "/bn" : "/en";
  const copy =
    locale === "bn"
      ? {
          kicker: "ফ্রি টুলস",
          title: "লিংক শর্টেন করুন, এক্ষুনি",
          sub: "আমাদের বানানো ফ্রি টুলস ব্যবহার করুন — নিচে শর্টনার দিয়ে শুরু, আরও টুলস শীঘ্রই আসছে।",
          cta: "সব টুলস দেখুন",
        }
      : {
          kicker: "Free tools",
          title: "Shorten a link, right now",
          sub: "Use the free tools we've built ourselves — starting with the link shortener below, with more on the way.",
          cta: "See all tools",
        };
  const shortener = TOOLS.find((t) => t.slug === "url-shortener")!;
  const sd = shortener[locale];

  return (
    <section className="section-pad border-t hairline">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <span className="eyebrow mb-5">{copy.kicker}</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-5">{copy.title}</h2>
            <p className="text-muted leading-relaxed mb-8 max-w-md">{copy.sub}</p>
            <Link
              href={`${base}/tools`}
              className="text-sm font-medium text-white inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
            >
              {copy.cta} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <a href={shortener.href} className="panel panel-hover p-8 flex flex-col group">
              <div className="flex items-center justify-between mb-6">
                <ToolIcon name={shortener.icon} className="w-7 h-7 text-muted" />
                <span className="text-[10px] font-semibold uppercase tracking-wider rounded-full px-2.5 py-1 text-[#7c6cf6] bg-[#7c6cf6]/[0.08] border border-[#7c6cf6]/25">
                  {locale === "bn" ? "লাইভ" : "Live"}
                </span>
              </div>
              <h3 className="font-semibold text-xl text-white mb-2">{sd.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-6">{sd.desc}</p>
              <span className="text-[13px] font-medium text-white inline-flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
                {locale === "bn" ? "ব্যবহার করুন" : "Use it now"}{" "}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
