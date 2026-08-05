"use client";

import { useState } from "react";
import type { Locale } from "@/lib/content";

const COPY = {
  bn: {
    name: "আপনার নাম",
    email: "ইমেইল ঠিকানা",
    message: "আপনার বার্তা",
    submit: "বার্তা পাঠান",
    sent: "ধন্যবাদ! আপনার বার্তা পাঠানো হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।",
    note: "অথবা সরাসরি ইমেইল করুন",
  },
  en: {
    name: "Full name",
    email: "Email address",
    message: "Your message",
    submit: "Send message",
    sent: "Thanks! Your message has been sent — we'll get back to you shortly.",
    note: "or reach us directly at",
  },
};

export default function ContactForm({ locale, email }: { locale: Locale; email: string }) {
  const t = COPY[locale];
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="panel p-8 text-[15px] text-white/90 border-[#7c6cf6]/30">{t.sent}</div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="panel p-8 space-y-5"
    >
      <div className="space-y-1.5">
        <label className="text-[13px] font-medium text-muted">{t.name}</label>
        <input
          required
          type="text"
          className="w-full bg-white/[0.03] border hairline rounded-lg px-4 py-3 text-sm outline-none focus:border-[#7c6cf6]/50 transition-colors"
        />
      </div>
      <div className="space-y-1.5">
        <label className="text-[13px] font-medium text-muted">{t.email}</label>
        <input
          required
          type="email"
          className="w-full bg-white/[0.03] border hairline rounded-lg px-4 py-3 text-sm outline-none focus:border-[#7c6cf6]/50 transition-colors"
        />
      </div>
      <div className="space-y-1.5">
        <label className="text-[13px] font-medium text-muted">{t.message}</label>
        <textarea
          required
          rows={4}
          className="w-full bg-white/[0.03] border hairline rounded-lg px-4 py-3 text-sm outline-none focus:border-[#7c6cf6]/50 transition-colors resize-none"
        />
      </div>
      <button type="submit" className="btn-primary w-full justify-center">
        {t.submit}
      </button>
      <p className="text-xs text-faint text-center">
        {t.note} <a href={`mailto:${email}`} className="text-white/80 hover:text-white">{email}</a>
      </p>
    </form>
  );
}
