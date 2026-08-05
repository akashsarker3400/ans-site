import { STATS, type Locale } from "@/lib/content";
import Counter from "./Counter";
import Reveal from "./Reveal";

export default function StatsStrip({ locale }: { locale: Locale }) {
  return (
    <section className="py-12 sm:py-16 border-y hairline">
      <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS.map((s, i) => (
          <Reveal key={s.en.label} delay={i * 0.06} className="panel p-6 sm:p-7 text-center md:text-left">
            <p className="text-3xl sm:text-4xl font-bold mb-1.5">
              <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
            </p>
            <p className="text-[13px] text-muted leading-snug">{s[locale].label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
