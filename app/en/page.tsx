import Link from "next/link";
import { SERVICES, SITE } from "@/lib/content";
import ServiceCard from "@/components/ServiceCard";
import Partners from "@/components/Partners";
import Portfolio from "@/components/Portfolio";
import Reveal from "@/components/Reveal";
import StatsStrip from "@/components/StatsStrip";
import WhyUs from "@/components/WhyUs";
import HeroOrbs from "@/components/HeroOrbs";
import { ArrowRight, LayoutGrid, ShieldCheck, Headphones } from "lucide-react";

export default function EnHome() {
  return (
    <>
      <section className="hero-glow relative pt-20 pb-24 sm:pt-28 sm:pb-32">
        <HeroOrbs />
        <div className="container-x relative z-10">
          <Reveal>
            <span className="eyebrow mb-7">Bangladesh-based · Music &amp; media technology</span>
            <h1 className="text-[2.6rem] sm:text-6xl lg:text-[4.25rem] font-bold leading-[1.05] mb-7 max-w-4xl">
              {SITE.en.tagline}
            </h1>
            <p className="text-lg sm:text-xl text-muted leading-relaxed mb-10 max-w-2xl">
              ANS Digital builds the technology behind modern music distribution and rights
              management — including <span className="text-white font-medium">ANS Music</span>,
              our white-label distribution platform used by labels to run their own branded
              business on 150+ streaming platforms.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/en/services" className="btn-primary">
                Explore services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/en/contact" className="btn-secondary">
                Talk to us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Partners locale="en" />

      <StatsStrip locale="en" />

      <section className="section-pad">
        <div className="container-x">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <Reveal className="max-w-xl">
              <span className="eyebrow mb-4">What we do</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4">
                A full technology stack for music &amp; media
              </h2>
            </Reveal>
            <Link
              href="/en/services"
              className="text-sm font-medium text-white inline-flex items-center gap-1.5 hover:gap-2.5 transition-all whitespace-nowrap"
            >
              View all services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={Math.min(i * 0.06, 0.3)} className="h-full">
                <ServiceCard service={s} locale="en" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyUs locale="en" />

      <section className="section-pad border-t hairline">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="eyebrow mb-5">Featured platform</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 leading-tight">
              ANS Music — white-label distribution, built by us
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              ANS Music is our flagship distribution platform: a fully white-label product that
              lets labels launch their own branded distribution business — custom domain, artist
              portal, and delivery to 150+ platforms — without building any of the underlying
              infrastructure themselves.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "150+ streaming platforms, 24–48hr delivery",
                "Official VEVO video delivery on every plan",
                "Real-time royalty reporting and revenue splits",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-white/85">
                  <span className="w-1 h-1 rounded-full bg-[#7c6cf6] mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/en/services/white-label-saas"
              className="text-sm font-medium text-white inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
            >
              See plans &amp; pricing <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="panel p-8">
            <div className="grid grid-cols-2 gap-4">
              {[
                [LayoutGrid, "Unlimited artists", "on every plan"],
                [ShieldCheck, "VEVO delivery", "included, all tiers"],
                [Headphones, "150+ platforms", "worldwide reach"],
                [ArrowRight, "24–48hr", "average delivery"],
              ].map(([Icon, title, sub]) => {
                const IconComp = Icon as React.ElementType;
                return (
                  <div key={title as string} className="p-5 rounded-xl bg-white/[0.03] border hairline">
                    <IconComp className="w-4 h-4 text-muted mb-3" strokeWidth={1.5} />
                    <p className="font-semibold text-sm">{title as string}</p>
                    <p className="text-xs text-faint mt-0.5">{sub as string}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <Portfolio locale="en" />

      <section className="section-pad border-t hairline">
        <div className="container-x">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="eyebrow mb-4">What clients say</span>
            <p className="text-xs text-faint mt-4">
              [Placeholder — real client testimonials will replace this section before launch.]
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <Reveal key={i} delay={i * 0.08} className="panel p-6">
                <p className="text-muted text-sm leading-relaxed mb-5">
                  "[Placeholder testimonial quote about working with ANS Digital.]"
                </p>
                <div className="text-sm font-medium text-white">[Client Name]</div>
                <div className="text-xs text-faint">[Label / Company]</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t hairline">
        <div className="container-x">
          <Reveal className="panel p-10 sm:p-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Ready to talk about your project?
            </h2>
            <p className="text-muted mb-8 max-w-xl mx-auto">
              Tell us what you're building — our team will help you find the right approach.
            </p>
            <Link href="/en/contact" className="btn-primary">
              Get in touch <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
