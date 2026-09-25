import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { SERVICES } from "@/lib/content";

// One sitemap per domain: ans.digital lists /en pages, ans.bd lists /bn pages.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = (await headers()).get("host") || "";
  const en = host.includes("ans.digital");
  const origin = en ? "https://ans.digital" : "https://ans.bd";
  const b = en ? "/en" : "/bn";
  const now = new Date();
  const pages = ["", "/services", "/tools", "/about", "/faq", "/contact", ...SERVICES.map((s) => `/services/${s.slug}`)];
  return pages.map((p) => ({
    url: `${origin}${b}${p}`,
    lastModified: now,
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : p.startsWith("/services/") ? 0.8 : 0.7,
  }));
}
