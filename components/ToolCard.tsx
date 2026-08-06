import type { Locale, Tool } from "@/lib/content";
import ToolIcon from "./ToolIcon";
import { ArrowUpRight, Clock } from "lucide-react";

export default function ToolCard({ tool, locale }: { tool: Tool; locale: Locale }) {
  const data = tool[locale];
  const isLive = tool.status === "live";
  const badge = locale === "bn" ? (isLive ? "লাইভ" : "শীঘ্রই আসছে") : isLive ? "Live" : "Coming soon";

  const inner = (
    <>
      <div className="flex items-start justify-between mb-6">
        <ToolIcon name={tool.icon} className="w-6 h-6 text-muted" />
        <span
          className={`text-[10px] font-semibold uppercase tracking-wider rounded-full px-2.5 py-1 flex items-center gap-1 ${
            isLive
              ? "text-[#7c6cf6] bg-[#7c6cf6]/[0.08] border border-[#7c6cf6]/25"
              : "text-faint bg-white/[0.03] border border-white/[0.08]"
          }`}
        >
          {!isLive && <Clock className="w-3 h-3" />}
          {badge}
        </span>
      </div>
      <h3 className="font-semibold text-[17px] text-white mb-2">{data.title}</h3>
      <p className="text-[14px] text-muted leading-relaxed flex-1">{data.desc}</p>
      {isLive && (
        <span className="mt-6 text-[13px] font-medium text-white inline-flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
          {locale === "bn" ? "ব্যবহার করুন" : "Use tool"}{" "}
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      )}
    </>
  );

  const className = `panel p-7 flex flex-col h-full group ${isLive ? "panel-hover" : "opacity-70 cursor-default"}`;

  if (isLive && tool.external) {
    return (
      <a href={tool.href} className={className}>
        {inner}
      </a>
    );
  }

  return <div className={className}>{inner}</div>;
}
