import { SERVICES } from "@/lib/content";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";

export default function EnServices() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <Reveal className="max-w-2xl mb-14">
          <span className="eyebrow mb-5">Services</span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-5 mb-4">What we handle for you</h1>
          <p className="text-muted leading-relaxed">
            From launching your own branded distribution platform to protecting your catalog
            across every major platform — here's the full picture of what ANS Digital handles for
            music and media businesses.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={Math.min(i * 0.06, 0.3)} className="h-full">
              <ServiceCard service={s} locale="en" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
