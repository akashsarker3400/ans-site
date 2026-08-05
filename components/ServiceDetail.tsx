import Link from "next/link";
import { SERVICES } from "@/lib/content";
import ServiceIcon from "./ServiceIcon";
import Reveal from "./Reveal";
import { ArrowLeft, Check } from "lucide-react";

export default function ServiceDetail({ slug }: { slug: string }) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return null;
  const data = service.en;

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="section-pad pb-0">
        <div className="container-x max-w-3xl">
          <Link
            href="/en/services"
            className="text-sm text-muted hover:text-white inline-flex items-center gap-1.5 mb-10 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> All services
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <ServiceIcon name={service.icon} className="w-8 h-8 text-muted" />
            {service.poweredBy && (
              <span className="text-[11px] font-medium text-[#7c6cf6] border border-[#7c6cf6]/25 bg-[#7c6cf6]/[0.08] rounded-full px-3 py-1">
                Built by {service.poweredBy}, a brand of ANS Digital
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-[2.75rem] font-bold leading-[1.1] mb-6">{data.title}</h1>
          <p className="text-lg text-muted leading-relaxed">{data.long}</p>
          {data.idealFor && (
            <p className="text-sm text-white/80 mt-6 pl-4 border-l-2 border-[#7c6cf6]/40">
              <span className="text-faint">Best for: </span>
              {data.idealFor}
            </p>
          )}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-sm font-semibold text-faint uppercase tracking-wider mb-6">
              What's included
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {data.features.map((f, i) => (
                <Reveal key={f} delay={Math.min(i * 0.05, 0.25)} className="h-full">
                  <div className="panel p-4 flex gap-2.5 text-[14px] text-white/90 h-full">
                    <Check className="w-4 h-4 text-[#7c6cf6] shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <Reveal className="panel p-7 sticky top-24">
              <h3 className="font-semibold mb-2">Interested in this service?</h3>
              <p className="text-sm text-muted mb-6">
                Tell us about your catalog and goals — we'll walk you through how it works.
              </p>
              <Link href="/en/contact" className="btn-primary text-sm">
                Get in touch
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {data.pricing && (
        <section className="section-pad border-t hairline">
          <div className="container-x">
            <h2 className="text-sm font-semibold text-faint uppercase tracking-wider mb-8">
              Pricing
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {data.pricing.map((tier, i) => (
                <Reveal key={tier.name} delay={i * 0.1} className="h-full">
                  <div
                    className={`panel p-7 flex flex-col h-full transition-transform duration-300 hover:-translate-y-1 ${tier.highlight ? "border-[#7c6cf6]/40" : ""}`}
                  >
                    {tier.highlight && (
                      <span className="text-[10px] font-semibold text-[#7c6cf6] uppercase tracking-wider mb-3">
                        Most popular
                      </span>
                    )}
                    <h3 className="font-semibold text-lg mb-1">{tier.name}</h3>
                    <p className="text-2xl font-bold mb-5">{tier.price}</p>
                    <div className="text-xs text-muted space-y-1 mb-5 pb-5 border-b hairline">
                      <p>Audio royalty: {tier.audioCut}</p>
                      <p>Video royalty: {tier.videoCut}</p>
                    </div>
                    <ul className="space-y-2 text-sm text-white/85">
                      {tier.features.map((f) => (
                        <li key={f} className="flex gap-2">
                          <Check className="w-3.5 h-3.5 text-[#7c6cf6] shrink-0 mt-1" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="text-xs text-faint mt-6">
              Pricing and revenue splits shown are for the ANS Music platform (currently in
              private beta) and may change during the beta period.
            </p>
          </div>
        </section>
      )}

      <section className="section-pad border-t hairline">
        <div className="container-x">
          <h2 className="text-sm font-semibold text-faint uppercase tracking-wider mb-8">
            Other services
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {otherServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <Link href={`/en/services/${s.slug}`} className="panel panel-hover p-6 block h-full">
                  <ServiceIcon name={s.icon} className="w-5 h-5 text-muted mb-4" />
                  <h3 className="font-semibold text-white mb-2">{s.en.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{s.en.short}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
