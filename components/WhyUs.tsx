import { WHY_US, type Locale } from "@/lib/content";
import Reveal from "./Reveal";
import { Layers, ShieldCheck, Headphones, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = { Layers, ShieldCheck, Headphones };

export default function WhyUs({ locale }: { locale: Locale }) {
  const copy =
    locale === "bn"
      ? { kicker: "কেন এএনএস ডিজিটাল", title: "প্রযুক্তি ধার করি না, নিজেরাই গড়ি" }
      : { kicker: "Why ANS Digital", title: "We don't rent technology, we build it" };

  return (
    <section className="section-pad border-t hairline">
      <div className="container-x">
        <Reveal className="max-w-xl mb-14">
          <span className="eyebrow mb-4">{copy.kicker}</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4">{copy.title}</h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-5">
          {WHY_US.map((item, i) => {
            const Icon = ICONS[item.icon] || Layers;
            return (
              <Reveal key={item.en.title} delay={i * 0.08} className="panel p-7">
                <div className="w-10 h-10 rounded-lg bg-[#7c6cf6]/10 border border-[#7c6cf6]/20 flex items-center justify-center mb-6">
                  <Icon className="w-[18px] h-[18px] text-[#7c6cf6]" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-white mb-2.5">{item[locale].title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item[locale].body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
