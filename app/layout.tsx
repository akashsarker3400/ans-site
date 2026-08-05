import type { Metadata } from "next";
import { headers } from "next/headers";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import "@fontsource/noto-sans-bengali/400.css";
import "@fontsource/noto-sans-bengali/500.css";
import "@fontsource/noto-sans-bengali/600.css";
import "@fontsource/noto-sans-bengali/700.css";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const hdrs = await headers();
  const isEnglish = (hdrs.get("host") || "").includes("ans.digital");
  return isEnglish
    ? {
        title: "ANS Digital — Reliable Music & Media Technology Solutions",
        description:
          "Bangladesh-based B2B technology partner for white-label music SaaS, VEVO channel creation, distribution support, and rights management.",
      }
    : {
        title: "এএনএস ডিজিটাল — নির্ভরযোগ্য মিউজিক ও মিডিয়া টেকনোলজি সল্যুশন",
        description:
          "বাংলাদেশ ভিত্তিক আধুনিক ডিজিটাল সল্যুশন, আইটি সার্ভিস ও মিডিয়া টেকনোলজি প্রতিষ্ঠান।",
      };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const hdrs = await headers();
  const host = hdrs.get("host") || "";
  const isEnglish = host.includes("ans.digital");
  const lang = isEnglish ? "en" : "bn";

  return (
    <html lang={lang} className="h-full antialiased">
      <body
        className={`min-h-full flex flex-col selection:bg-[#7c6cf6] selection:text-white ${isEnglish ? "font-inter" : "font-bengali"}`}
      >
        {children}
      </body>
    </html>
  );
}
