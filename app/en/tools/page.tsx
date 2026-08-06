import { TOOLS } from "@/lib/content";
import ToolCard from "@/components/ToolCard";
import Reveal from "@/components/Reveal";

export default function EnTools() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <Reveal className="max-w-2xl mb-14">
          <span className="eyebrow mb-5">Tools</span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-5 mb-4">Free tools, built by us</h1>
          <p className="text-muted leading-relaxed">
            Small utilities we've built for the music and media industry — starting with our
            link shortener, with more on the way for catalog and metadata work.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOOLS.map((t, i) => (
            <Reveal key={t.slug} delay={Math.min(i * 0.06, 0.3)} className="h-full">
              <ToolCard tool={t} locale="en" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
