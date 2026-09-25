import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES, type Locale } from "@/lib/content";
import { LOCALES } from "@/lib/copy";
import { ServiceDetail } from "@/components/site/service-detail";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => SERVICES.map((s) => ({ locale, slug: s.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return {};
  const d = s[locale as Locale];
  return { title: d.title, description: d.short };
}

export default async function ServicePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();
  return <ServiceDetail service={service} locale={locale as Locale} />;
}
