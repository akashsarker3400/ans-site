"use client";

import { useState } from "react";
import { FAQ_EN } from "@/lib/content";
import Reveal from "@/components/Reveal";
import { Plus } from "lucide-react";

export default function EnFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad">
      <div className="container-x max-w-3xl">
        <Reveal>
          <span className="eyebrow mb-5">FAQ</span>
          <h1 className="text-3xl sm:text-[2.5rem] font-bold mt-5 mb-14">
            Frequently asked questions
          </h1>
        </Reveal>
        <div className="space-y-2">
          {FAQ_EN.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={Math.min(i * 0.05, 0.3)} className="panel overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                >
                  <span className="font-medium text-white">{item.q}</span>
                  <Plus
                    className={`w-4 h-4 text-muted shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-muted leading-relaxed">{item.a}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
