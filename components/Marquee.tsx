"use client";

import Image from "next/image";
import { PARTNERS } from "@/lib/partners";

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[...PARTNERS, ...PARTNERS].map((p, i) => (
          <Image
            key={`${p.name}-${i}`}
            src={p.src}
            alt={p.name}
            width={110}
            height={28}
            className="h-5 md:h-6 w-auto object-contain grayscale opacity-45 hover:opacity-90 transition-opacity shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
