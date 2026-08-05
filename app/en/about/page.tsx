import { CONTACT } from "@/lib/content";
import Reveal from "@/components/Reveal";
import Portfolio from "@/components/Portfolio";
import StatsStrip from "@/components/StatsStrip";

const MISSION_ITEMS = [
  "Delivering dependable digital services to institutions of every size",
  "Developing modern, secure, and scalable technology solutions",
  "Enhancing local business capabilities while holding international standards",
  "Ensuring customer satisfaction and long-term partnerships",
  "Fostering technology-driven innovation in Bangladesh",
];

const HOW_WE_WORK = [
  ["Understand", "We start by understanding your catalog, your platforms, and what's actually slowing you down."],
  ["Set up", "We configure the right combination of platform, distribution, and protection services for your case."],
  ["Deliver", "Releases, claims, and reports move through automated, compliant pipelines — not manual spreadsheets."],
  ["Support", "Our technical team stays available for the issues that inevitably come up — we don't disappear after setup."],
];

export default function EnAbout() {
  return (
    <>
      <section className="section-pad pb-0">
        <div className="container-x max-w-3xl">
          <Reveal>
            <span className="eyebrow mb-5">About us</span>
            <h1 className="text-3xl sm:text-[2.75rem] font-bold leading-[1.1] mt-5 mb-6">
              Pioneering media technology, built in Bangladesh
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              ANS Digital is a technology company specializing in B2B/B2C music, media, and SaaS
              technology. We build and operate the products under our portfolio — including{" "}
              <span className="text-white font-medium">ANS Music</span> — rather than reselling
              someone else's platform. We believe technology is not merely a service, it's a
              long-term business partnership.
            </p>
          </Reveal>
        </div>
      </section>

      <StatsStrip locale="en" />

      <section className="section-pad">
        <div className="container-x grid md:grid-cols-2 gap-5">
          <Reveal className="panel p-8">
            <h2 className="text-xl font-semibold mb-3">Our vision</h2>
            <p className="text-muted leading-relaxed">
              To actively shape Bangladesh's digital future and establish ANS Digital as a
              reliable B2B technology partner offering services built to international standards.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="panel p-8">
            <h2 className="text-xl font-semibold mb-3">Our mission</h2>
            <ul className="space-y-2.5 text-muted text-sm">
              {MISSION_ITEMS.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-[#7c6cf6] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-t hairline">
        <div className="container-x max-w-3xl">
          <span className="eyebrow mb-5">How we work</span>
          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            {HOW_WE_WORK.map(([title, desc], i) => (
              <Reveal key={title} delay={i * 0.08} className="panel p-6">
                <p className="text-xs font-semibold text-[#7c6cf6] mb-2">
                  0{i + 1}
                </p>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Portfolio locale="en" />

      <section className="section-pad border-t hairline">
        <div className="container-x max-w-3xl">
          <h2 className="text-2xl font-bold mb-8">Company details</h2>
          <Reveal className="panel p-8 space-y-3 text-white/85">
            <p>
              <span className="font-semibold text-white">Trade License:</span> {CONTACT.tradeLicense}
            </p>
            <p>
              <span className="font-semibold text-white">Registered address:</span> {CONTACT.address.en}
            </p>
            <p>
              <span className="font-semibold text-white">Email:</span> {CONTACT.email}
            </p>
            <p className="text-sm text-muted pt-2">
              We operate in line with Bangladeshi regulatory and digital compliance requirements,
              prioritizing transparency, reliability, and professional technical support.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
