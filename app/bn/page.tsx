import Link from "next/link";
import { SERVICES, SITE } from "@/lib/content";
import ServiceCard from "@/components/ServiceCard";
import Partners from "@/components/Partners";
import Portfolio from "@/components/Portfolio";
import Reveal from "@/components/Reveal";
import StatsStrip from "@/components/StatsStrip";
import WhyUs from "@/components/WhyUs";
import HeroOrbs from "@/components/HeroOrbs";
import { ArrowRight } from "lucide-react";

export default function BnHome() {
  return (
    <>
      <section className="hero-glow relative pt-20 pb-24 sm:pt-28 sm:pb-32">
        <HeroOrbs />
        <div className="container-x relative z-10">
          <Reveal>
            <span className="eyebrow mb-7">বাংলাদেশ ভিত্তিক মিউজিক ও মিডিয়া টেকনোলজি</span>
            <h1 className="text-[2.4rem] sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-7 max-w-3xl">
              {SITE.bn.tagline}
            </h1>
            <p className="text-lg text-muted leading-relaxed mb-10 max-w-2xl">
              আমরা মিউজিক ডিস্ট্রিবিউশন ও রাইটস ম্যানেজমেন্টের প্রযুক্তি তৈরি করি — যার মধ্যে আছে{" "}
              <span className="text-white font-medium">ANS Music</span>, আমাদের হোয়াইট-লেবেল
              ডিস্ট্রিবিউশন প্ল্যাটফর্ম, যা দিয়ে লেবেলরা ১৫০+ স্ট্রিমিং প্ল্যাটফর্মে নিজস্ব ব্র্যান্ডে
              ব্যবসা চালায়।
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/bn/services" className="btn-primary">
                সেবাসমূহ দেখুন <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/bn/contact" className="btn-secondary">
                যোগাযোগ করুন
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Partners locale="bn" />

      <StatsStrip locale="bn" />

      <section className="section-pad">
        <div className="container-x">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <Reveal className="max-w-xl">
              <span className="eyebrow mb-4">আমাদের সেবাসমূহ</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4">
                মিউজিক ও মিডিয়া প্রযুক্তির সম্পূর্ণ সমাধান
              </h2>
            </Reveal>
            <Link
              href="/bn/services"
              className="text-sm font-medium text-white inline-flex items-center gap-1.5 whitespace-nowrap"
            >
              সব সেবা দেখুন <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={Math.min(i * 0.06, 0.3)} className="h-full">
                <ServiceCard service={s} locale="bn" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyUs locale="bn" />

      <Portfolio locale="bn" />

      <section className="section-pad border-t hairline">
        <div className="container-x">
          <Reveal className="panel p-10 sm:p-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              আপনার প্রজেক্ট নিয়ে কথা বলতে চান?
            </h2>
            <p className="text-muted mb-8 max-w-xl mx-auto">
              আমাদের টিম আপনার প্রয়োজন বুঝে সঠিক সমাধান দিতে প্রস্তুত।
            </p>
            <Link href="/bn/contact" className="btn-primary">
              যোগাযোগ করুন <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
