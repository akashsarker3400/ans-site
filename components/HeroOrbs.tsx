"use client";

import { motion } from "framer-motion";

export default function HeroOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        className="absolute -top-24 left-1/3 w-[520px] h-[520px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(124,108,246,0.16), transparent 70%)",
          filter: "blur(10px)",
        }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, 30, -10, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-10 right-1/4 w-[380px] h-[380px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(124,108,246,0.10), transparent 70%)",
          filter: "blur(10px)",
        }}
        animate={{
          x: [0, -30, 20, 0],
          y: [0, -20, 15, 0],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
}
