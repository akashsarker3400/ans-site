import { SERVICES } from "@/lib/content";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";

export default function BnServices() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <Reveal className="max-w-2xl mb-14">
          <span className="eyebrow mb-5">সেবাসমূহ</span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-5 mb-4">আমাদের সেবাসমূহ</h1>
          <p className="text-muted leading-relaxed">
            মিউজিক ডিস্ট্রিবিউশন থেকে শুরু করে কপিরাইট প্রোটেকশন পর্যন্ত — আমরা আপনার প্রতিষ্ঠানের জন্য
            প্রয়োজনীয় সম্পূর্ণ প্রযুক্তি সমাধান প্রদান করি।
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={Math.min(i * 0.06, 0.3)} className="h-full">
              <ServiceCard service={s} locale="bn" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
