"use client";

import { MotionAccordion } from "@/components/unlumen-ui/motion-faqs-accordion";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return <MotionAccordion items={items.map((i) => ({ question: i.q, answer: i.a }))} gap={8} className="max-w-[760px]" />;
}
