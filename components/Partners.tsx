import type { Locale } from "@/lib/content";
import Marquee from "./Marquee";

export default function Partners({ locale }: { locale: Locale }) {
  const heading =
    locale === "bn" ? "যেসব প্ল্যাটফর্মে আমরা কাজ করি" : "Platforms we deliver to";

  return (
    <section className="border-y hairline py-12">
      <div className="container-wide">
        <p className="text-center text-xs text-faint font-medium mb-9">{heading}</p>
      </div>
      <Marquee />
    </section>
  );
}
