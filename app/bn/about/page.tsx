import { CONTACT } from "@/lib/content";
import Reveal from "@/components/Reveal";
import Portfolio from "@/components/Portfolio";
import StatsStrip from "@/components/StatsStrip";

const MISSION_ITEMS = [
  "বিভিন্ন প্রতিষ্ঠানকে নির্ভরযোগ্য ডিজিটাল সেবা প্রদান",
  "আধুনিক, নিরাপদ ও স্কেলেবল প্রযুক্তি সমাধান তৈরি",
  "আন্তর্জাতিক মান বজায় রেখে স্থানীয় ব্যবসার সক্ষমতা বৃদ্ধি",
  "গ্রাহক সন্তুষ্টি ও দীর্ঘমেয়াদী অংশীদারিত্ব নিশ্চিতকরণ",
  "বাংলাদেশে প্রযুক্তি-চালিত উদ্ভাবনের প্রসার",
];

export default function BnAbout() {
  return (
    <>
      <section className="section-pad pb-0">
        <div className="container-x max-w-3xl">
          <Reveal>
            <span className="eyebrow mb-5">আমাদের সম্পর্কে</span>
            <h1 className="text-3xl sm:text-[2.5rem] font-bold leading-[1.15] mt-5 mb-6">
              এএনএস ডিজিটাল
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              এএনএস ডিজিটাল একটি প্রযুক্তি প্রতিষ্ঠান, যারা B2B/B2C মিউজিক, মিডিয়া ও SaaS
              টেকনোলজিতে বিশেষজ্ঞ। আমরা আমাদের পোর্টফোলিও-এর প্রোডাক্ট গুলো — যেমন{" "}
              <span className="text-white font-medium">ANS Music</span> — নিজেরাই তৈরি ও পরিচালনা
              করি, অন্য কারো প্ল্যাটফর্ম resell করি না।
            </p>
          </Reveal>
        </div>
      </section>

      <StatsStrip locale="bn" />

      <section className="section-pad">
        <div className="container-x grid md:grid-cols-2 gap-5">
          <Reveal className="panel p-8">
            <h2 className="text-xl font-semibold mb-3">ভিশন</h2>
            <p className="text-muted leading-relaxed">
              বাংলাদেশের ডিজিটাল ভবিষ্যৎ গঠনে সক্রিয় ভূমিকা রাখা এবং আন্তর্জাতিক মানের সেবা প্রদানকারী
              একটি নির্ভরযোগ্য B2B প্রযুক্তি অংশীদার হিসেবে প্রতিষ্ঠিত হওয়া।
            </p>
          </Reveal>
          <Reveal delay={0.08} className="panel p-8">
            <h2 className="text-xl font-semibold mb-3">মিশন</h2>
            <ul className="space-y-2.5 text-muted text-sm">
              {MISSION_ITEMS.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-[#7c6cf6] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Portfolio locale="bn" />

      <section className="section-pad border-t hairline">
        <div className="container-x max-w-3xl">
          <h2 className="text-2xl font-bold mb-8">প্রাতিষ্ঠানিক তথ্য</h2>
          <Reveal className="panel p-8 space-y-3 text-white/85">
            <p>
              <span className="font-semibold text-white">ট্রেড লাইসেন্স:</span> {CONTACT.tradeLicense}
            </p>
            <p>
              <span className="font-semibold text-white">ঠিকানা:</span> {CONTACT.address.bn}
            </p>
            <p>
              <span className="font-semibold text-white">ইমেইল:</span> {CONTACT.email}
            </p>
            <p className="text-sm text-muted pt-2">
              আমরা বাংলাদেশ সরকারের নিয়ম-নীতি ও ডিজিটাল কমপ্লায়েন্স মেনে স্বচ্ছতা, নির্ভরযোগ্যতা এবং
              পেশাদার টেকনিক্যাল সাপোর্টকে অগ্রাধিকার দিই।
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
