import Link from "next/link";
import type { Locale, Service } from "@/lib/content";
import ServiceIcon from "./ServiceIcon";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({
  service,
  locale,
}: {
  service: Service;
  locale: Locale;
}) {
  const base = locale === "bn" ? "/bn" : "/en";
  const href = locale === "en" ? `${base}/services/${service.slug}` : `${base}/services`;
  const data = service[locale];
  const cta = locale === "bn" ? "বিস্তারিত জানুন" : "Learn more";

  return (
    <Link href={href} className="panel panel-hover p-7 flex flex-col h-full group">
      <ServiceIcon name={service.icon} className="w-6 h-6 text-muted mb-6" />
      <h3 className="font-semibold text-[17px] text-white mb-2">{data.title}</h3>
      <p className="text-[14px] text-muted leading-relaxed flex-1">{data.short}</p>
      <span className="mt-6 text-[13px] font-medium text-white inline-flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
        {cta} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </span>
    </Link>
  );
}
