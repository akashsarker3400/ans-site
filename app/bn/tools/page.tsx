import { TOOLS } from "@/lib/content";
import ToolCard from "@/components/ToolCard";
import Reveal from "@/components/Reveal";

export default function BnTools() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <Reveal className="max-w-2xl mb-14">
          <span className="eyebrow mb-5">টুলস</span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-5 mb-4">আমাদের তৈরি ফ্রি টুলস</h1>
          <p className="text-muted leading-relaxed">
            মিউজিক ও মিডিয়া ইন্ডাস্ট্রির জন্য আমাদের বানানো ছোট ছোট টুলস — শুরু হচ্ছে আমাদের লিংক
            শর্টনার দিয়ে, ক্যাটালগ ও মেটাডেটা নিয়ে কাজ করার আরও টুলস আসছে।
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOOLS.map((t, i) => (
            <Reveal key={t.slug} delay={Math.min(i * 0.06, 0.3)} className="h-full">
              <ToolCard tool={t} locale="bn" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
