export type Locale = "bn" | "en";

export const SITE = {
  bn: {
    domain: "https://ans.bd",
    name: "এএনএস ডিজিটাল",
    tagline: "নির্ভরযোগ্য মিউজিক ও মিডিয়া টেকনোলজি সল্যুশন",
  },
  en: {
    domain: "https://ans.digital",
    name: "ANS Digital",
    tagline: "Reliable Music & Media Technology Solutions",
  },
};

export const CONTACT = {
  email: "info@ans.digital",
  address: {
    bn: "হোল্ডিং #৯৯৯, কালাইশ্রীপাড়া, ব্রাহ্মণবাড়িয়া ৩৪০০, বাংলাদেশ",
    en: "Holding #999, Kalaishripara, Brahmanbaria 3400, Bangladesh",
  },
  tradeLicense: "056240-00",
  paymentMethods: ["Visa", "Mastercard", "bKash", "Nagad"],
};

export type PricingTier = {
  name: string;
  price: string;
  audioCut: string;
  videoCut: string;
  highlight?: boolean;
  features: string[];
};

export type Service = {
  slug: string;
  icon: string;
  poweredBy?: string;
  bn: { title: string; short: string; idealFor?: string };
  en: {
    title: string;
    short: string;
    long: string;
    features: string[];
    pricing?: PricingTier[];
    idealFor?: string;
  };
};

export const STATS = [
  {
    value: 150,
    suffix: "+",
    bn: { label: "স্ট্রিমিং প্ল্যাটফর্ম ও স্টোর" },
    en: { label: "Streaming platforms & stores" },
  },
  {
    value: 6,
    suffix: "",
    bn: { label: "মূল সেবা" },
    en: { label: "Core services" },
  },
  {
    value: 3,
    suffix: "",
    bn: { label: "ব্র্যান্ড, একই প্রতিষ্ঠানের অধীনে" },
    en: { label: "Brands under one roof" },
  },
  {
    value: 48,
    suffix: "h",
    prefix: "24–",
    bn: { label: "গড় ডেলিভারি সময়" },
    en: { label: "Average delivery time" },
  },
];

export const WHY_US = [
  {
    icon: "Layers",
    bn: {
      title: "নিজেদের প্রোডাক্ট",
      body: "ANS Music-সহ আমাদের প্রোডাক্টগুলো আমরাই তৈরি করেছি এবং আমরাই পরিচালনা করি।",
    },
    en: {
      title: "Our own products",
      body: "Our products — including ANS Music — are built and operated by us.",
    },
  },
  {
    icon: "ShieldCheck",
    bn: {
      title: "কমপ্লায়েন্স আগে",
      body: "DSP ও প্ল্যাটফর্ম পলিসি কমপ্লায়েন্স আমাদের প্রতিটি ওয়ার্কফ্লোতে শুরু থেকেই যুক্ত থাকে, পরে সংযুক্ত করা কোনো বাড়তি ধাপ নয়।",
    },
    en: {
      title: "Compliance-first workflows",
      body: "DSP and platform-policy compliance is built into every workflow from the start — not bolted on afterward as an extra step.",
    },
  },
  {
    icon: "Headphones",
    bn: {
      title: "সরাসরি টেকনিক্যাল সাপোর্ট",
      body: "প্রতিটি অ্যাকাউন্টের পেছনে একটি বাস্তব টেকনিক্যাল টিম থাকে — সাধারণ টিকেট-কিউ নয়, সেটআপের পরও আমরা পাশে থাকি।",
    },
    en: {
      title: "Direct technical support",
      body: "A real technical team stands behind every account — not a generic ticket queue. We stay reachable well after setup is done.",
    },
  },
];

export const SERVICES: Service[] = [
  {
    slug: "white-label-saas",
    icon: "LayoutGrid",
    poweredBy: "ANS Music",
    bn: {
      title: "হোয়াইট-লেবেল মিউজিক ডিস্ট্রিবিউশন",
      short:
        "নিজস্ব ব্র্যান্ডে ১৫০+ স্ট্রিমিং প্ল্যাটফর্মে মিউজিক ডিস্ট্রিবিউশন ব্যবসা চালু করুন — ANS Music (এএনএস ডিজিটাল-এর একটি প্রোডাক্ট) দ্বারা পরিচালিত।",
    },
    en: {
      title: "White-Label Music Distribution",
      short:
        "Launch your own branded distribution business on 150+ platforms — powered by ANS Music, a product built by ANS Digital.",
      long: "ANS Music — the white-label music distribution platform built and operated by ANS Digital — lets labels and distributors launch a fully branded distribution business without building the infrastructure themselves. Your custom domain, logo, and colors are what artists see; ANS Music branding stays entirely behind the scenes. Artists get their own upload portal, and releases go out to 150+ streaming platforms and stores worldwide, including Spotify, Apple Music, TIDAL, Amazon Music, YouTube Music, and Deezer, with official VEVO video delivery included on every plan. The platform is currently in private beta, with early access applications open for labels and distributors.",
      features: [
        "Custom domain, logo, and full white-label branding",
        "150+ streaming platforms and stores worldwide",
        "24–48 hour average delivery time",
        "Official VEVO video delivery on all plans",
        "Real-time royalty reporting and revenue splits",
        "ISRC & UPC code assignment included",
        "REST API access (Label & Enterprise plans)",
        "Unlimited artist roster on every tier",
      ],
      idealFor: "Labels and distributors ready to run their own branded platform instead of reselling someone else's.",
      pricing: [
        {
          name: "Starter",
          price: "Free",
          audioCut: "70% to you",
          videoCut: "70% to you",
          features: ["Basic dashboard", "Unlimited artists"],
        },
        {
          name: "Label",
          price: "$49/mo",
          audioCut: "95% to you",
          videoCut: "85% to you",
          highlight: true,
          features: ["Advanced dashboard", "API access", "Contract management"],
        },
        {
          name: "Enterprise",
          price: "Custom",
          audioCut: "90–95% to you",
          videoCut: "90–95% to you",
          features: ["Full analytics suite", "Dedicated manager", "Custom integrations"],
        },
      ],
    },
  },
  {
    slug: "vevo-channel",
    icon: "Clapperboard",
    bn: {
      title: "VEVO লেবেল চ্যানেল তৈরি",
      short:
        "আন্তর্জাতিক মানের VEVO লেবেল চ্যানেল তৈরি ও সম্পূর্ণ প্রসেসিং সহায়তা, খরচ সাশ্রয়ী পদ্ধতিতে।",
    },
    en: {
      title: "VEVO Label Channel Creation",
      short:
        "Get your own official VEVO channel set up to international standards, without the usual hassle or cost.",
      long: "Get your own official VEVO channel set up to international standards, without the usual hassle. We manage the entire application and verification process end-to-end, at a fraction of typical cost, so your official music videos get the branded distribution and credibility VEVO channels are known for.",
      features: [
        "End-to-end application handling",
        "International compliance standards",
        "Fast turnaround",
        "Cost-effective pricing",
        "Post-approval support",
      ],
      idealFor: "Labels and artists who want an official VEVO presence without navigating the application process alone.",
    },
  },
  {
    slug: "distribution-support",
    icon: "Rocket",
    bn: {
      title: "মিউজিক ও ভিডিও ডিস্ট্রিবিউশন সাপোর্ট",
      short:
        "টেকনিক্যাল সহায়তা, কন্টেন্ট প্রিপারেশন, DSP কমপ্লায়েন্স এবং অটোমেশন — সবকিছু এক জায়গায়।",
    },
    en: {
      title: "Music & Video Distribution Support",
      short:
        "Technical support, content prep, DSP compliance, and delivery automation for clean, on-time releases.",
      long: "From audio mastering checks to DSP-specific compliance and delivery automation, our technical team handles the parts of digital distribution that slow most labels down. We prepare your content, verify it against each platform's requirements, and automate the delivery pipeline so releases go out clean, on time, every time.",
      features: [
        "DSP compliance review",
        "Content preparation & QC",
        "Delivery automation",
        "Metadata optimization",
        "Release scheduling support",
      ],
      idealFor: "Teams releasing regularly who need delivery to go out clean and on time without manual busywork.",
    },
  },
  {
    slug: "copyright-management",
    icon: "ShieldCheck",
    bn: {
      title: "অডিও কপিরাইট ও রাইটস ম্যানেজমেন্ট",
      short:
        "কপিরাইট প্রোটেকশন, অননুমোদিত ব্যবহার শনাক্তকরণ, ক্লেইম সাবমিশন ও টেকডাউন রিকোয়েস্ট।",
    },
    en: {
      title: "Audio Copyright & Rights Management",
      short:
        "Continuous monitoring, claim management, and takedown handling to keep your catalog and revenue protected.",
      long: "Protecting your catalog doesn't stop at distribution. Our rights management service continuously monitors for unauthorized use of your audio across platforms, submits and manages claims on your behalf, protects podcast usage, and handles takedown requests — so your revenue and your rights stay protected.",
      features: [
        "Unauthorized use detection",
        "Claim submission & management",
        "Podcast protection",
        "Takedown request handling",
        "Platform compliance monitoring",
      ],
      idealFor: "Catalog owners who need ongoing protection after distribution, not just a one-time upload.",
    },
  },
  {
    slug: "youtube-content-id",
    icon: "PlaySquare",
    bn: {
      title: "YouTube Content ID ও প্রোটেকশন",
      short:
        "Content ID সেটআপ, ফেক চ্যানেল রিমুভাল, কপিরাইট স্ট্রাইক হ্যান্ডলিং ও মনিটাইজেশন সমাধান।",
    },
    en: {
      title: "YouTube Content ID & Protection",
      short:
        "Content ID setup, fake-channel removal, strike resolution, and monetization fixes — fully managed.",
      long: "We set up and manage Content ID claiming for your catalog, monitor for fake or impersonating channels, resolve copyright strikes, fix monetization issues, and keep your channel aligned with YouTube's evolving policies — so your content earns what it should, without the administrative overhead.",
      features: [
        "Content ID setup & claim management",
        "Fake channel removal",
        "Copyright strike resolution",
        "Monetization issue fixes",
        "Policy compliance review",
      ],
      idealFor: "Channel owners dealing with impersonators, mistaken strikes, or unclaimed monetization on YouTube.",
    },
  },
  {
    slug: "meta-rights-manager",
    icon: "Camera",
    bn: {
      title: "Meta (Facebook) রাইটস ম্যানেজার",
      short:
        "Facebook ও Instagram-এ অরিজিনাল ভিডিও কন্টেন্টের কপিরাইট প্রোটেকশন ও রি-আপলোড মনিটরিং।",
    },
    en: {
      title: "Meta (Facebook) Rights Manager",
      short:
        "Rights Manager setup, re-upload detection, and bulk takedowns for your video content on Facebook & Instagram.",
      long: "Original video content on Facebook and Instagram deserves the same protection as anywhere else. We configure Meta's Rights Manager for your catalog, monitor for re-uploads, and file bulk takedown requests when unauthorized copies appear — keeping your video content and its revenue where it belongs.",
      features: [
        "Rights Manager setup",
        "Re-upload detection & protection",
        "Bulk takedown requests",
        "Cross-platform monitoring",
      ],
      idealFor: "Video creators and labels whose content gets re-uploaded on Facebook and Instagram without permission.",
    },
  },
];

// Bengali versions of the service detail content (features, ideal-for) and pricing.
export const SERVICE_BN: Record<string, { features: string[]; idealFor: string }> = {
  "white-label-saas": {
    features: [
      "কাস্টম ডোমেইন, লোগো ও সম্পূর্ণ হোয়াইট-লেবেল ব্র্যান্ডিং",
      "বিশ্বব্যাপী ১৫০+ স্ট্রিমিং প্ল্যাটফর্ম ও স্টোর",
      "গড়ে ২৪–৪৮ ঘণ্টায় ডেলিভারি",
      "সব প্ল্যানে অফিসিয়াল VEVO ভিডিও ডেলিভারি",
      "রিয়েল-টাইম রয়্যালটি রিপোর্ট ও রেভিনিউ স্প্লিট",
      "ISRC ও UPC কোড অন্তর্ভুক্ত",
      "REST API অ্যাক্সেস (Label ও Enterprise প্ল্যান)",
      "প্রতিটি টিয়ারে আনলিমিটেড আর্টিস্ট",
    ],
    idealFor: "যেসব লেবেল ও ডিস্ট্রিবিউটর অন্যের প্ল্যাটফর্ম resell না করে নিজের ব্র্যান্ডে প্ল্যাটফর্ম চালাতে চান।",
  },
  "vevo-channel": {
    features: ["শুরু থেকে শেষ পর্যন্ত আবেদন প্রক্রিয়া পরিচালনা", "আন্তর্জাতিক কমপ্লায়েন্স মান", "দ্রুত টার্নঅ্যারাউন্ড", "সাশ্রয়ী মূল্য", "অনুমোদনের পরেও সাপোর্ট"],
    idealFor: "যেসব লেবেল ও শিল্পী একা আবেদন প্রক্রিয়ায় না গিয়ে অফিসিয়াল VEVO উপস্থিতি চান।",
  },
  "distribution-support": {
    features: ["DSP কমপ্লায়েন্স রিভিউ", "কন্টেন্ট প্রিপারেশন ও QC", "ডেলিভারি অটোমেশন", "মেটাডেটা অপটিমাইজেশন", "রিলিজ শিডিউলিং সাপোর্ট"],
    idealFor: "যেসব টিম নিয়মিত রিলিজ করে এবং ম্যানুয়াল ঝামেলা ছাড়া পরিষ্কার, সময়মতো ডেলিভারি চায়।",
  },
  "copyright-management": {
    features: ["অননুমোদিত ব্যবহার শনাক্তকরণ", "ক্লেইম সাবমিশন ও ম্যানেজমেন্ট", "পডকাস্ট প্রোটেকশন", "টেকডাউন রিকোয়েস্ট হ্যান্ডলিং", "প্ল্যাটফর্ম কমপ্লায়েন্স মনিটরিং"],
    idealFor: "যেসব ক্যাটালগ মালিক এককালীন আপলোডের পরেও চলমান সুরক্ষা চান।",
  },
  "youtube-content-id": {
    features: ["Content ID সেটআপ ও ক্লেইম ম্যানেজমেন্ট", "ফেক চ্যানেল রিমুভাল", "কপিরাইট স্ট্রাইক সমাধান", "মনিটাইজেশন সমস্যার সমাধান", "পলিসি কমপ্লায়েন্স রিভিউ"],
    idealFor: "যেসব চ্যানেল মালিক ইমপারসোনেটর, ভুল স্ট্রাইক বা আনক্লেইমড মনিটাইজেশন নিয়ে ভুগছেন।",
  },
  "meta-rights-manager": {
    features: ["Rights Manager সেটআপ", "রি-আপলোড শনাক্তকরণ ও সুরক্ষা", "বাল্ক টেকডাউন রিকোয়েস্ট", "ক্রস-প্ল্যাটফর্ম মনিটরিং"],
    idealFor: "যেসব ভিডিও নির্মাতা ও লেবেলের কন্টেন্ট Facebook ও Instagram-এ অনুমতি ছাড়া রি-আপলোড হয়।",
  },
};

export const PRICING_BN: Record<string, { price: string; audioCut: string; videoCut: string; features: string[] }> = {
  Starter: { price: "ফ্রি", audioCut: "৭০% আপনার", videoCut: "৭০% আপনার", features: ["বেসিক ড্যাশবোর্ড", "আনলিমিটেড আর্টিস্ট"] },
  Label: { price: "$৪৯/মাস", audioCut: "৯৫% আপনার", videoCut: "৮৫% আপনার", features: ["অ্যাডভান্সড ড্যাশবোর্ড", "API অ্যাক্সেস", "কন্ট্র্যাক্ট ম্যানেজমেন্ট"] },
  Enterprise: { price: "কাস্টম", audioCut: "৯০–৯৫% আপনার", videoCut: "৯০–৯৫% আপনার", features: ["সম্পূর্ণ অ্যানালিটিক্স স্যুট", "ডেডিকেটেড ম্যানেজার", "কাস্টম ইন্টিগ্রেশন"] },
};

export const FAQ_EN = [
  {
    q: "What is white-label music distribution?",
    a: "It means you run your own branded music distribution business — your logo, your dashboard, your pricing — while ANS Digital powers the technology, delivery, and reporting behind the scenes.",
  },
  {
    q: "How long does VEVO channel approval typically take?",
    a: "Timelines depend on VEVO's review process, but we handle the full application end-to-end and keep you updated at every stage so there are no surprises.",
  },
  {
    q: "Do you work with international labels and artists?",
    a: "We work with labels, distributors and artists globally. Our services are built to international standards and every platform we deliver to is worldwide.",
  },
  {
    q: "Which DSPs (streaming platforms) do you support?",
    a: "Our distribution and compliance support covers all major DSPs. Reach out with your specific platform list and we'll confirm compatibility.",
  },
  {
    q: "How does royalty reporting work on the white-label platform?",
    a: "Royalty calculations and reports are automated inside your branded dashboard, giving you and your artists clear, up-to-date earnings data without manual spreadsheet work.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Visa, Mastercard, bKash, and Nagad, processed securely through SSLCommerz.",
  },
  {
    q: "How does copyright and rights management work across platforms?",
    a: "We continuously monitor your catalog for unauthorized use, submit and manage claims on your behalf, and handle takedown requests — covering audio platforms, YouTube Content ID, and Meta's Rights Manager under one service.",
  },
  {
    q: "What happens if my YouTube channel gets a false copyright strike?",
    a: "Our team reviews the claim, helps you dispute strikes that are incorrect, and works to resolve monetization issues so your channel stays in good standing.",
  },
  {
    q: "How do I get started?",
    a: "Reach out through our contact form or email us directly. We'll ask a few questions about your catalog and goals, then recommend the right combination of services for your case.",
  },
];

export const FAQ_BN = [
  {
    q: "হোয়াইট-লেবেল মিউজিক ডিস্ট্রিবিউশন কী?",
    a: "এর মানে হলো আপনি নিজের ব্র্যান্ডে একটি মিউজিক ডিস্ট্রিবিউশন ব্যবসা চালাবেন — আপনার লোগো, আপনার ড্যাশবোর্ড, আপনার প্রাইসিং — আর প্রযুক্তি, ডেলিভারি এবং রিপোর্টিং পরিচালনা করবে এএনএস ডিজিটাল, পেছন থেকে।",
  },
  {
    q: "VEVO চ্যানেল অনুমোদন পেতে সাধারণত কত সময় লাগে?",
    a: "সময়সীমা নির্ভর করে VEVO-এর রিভিউ প্রক্রিয়ার উপর, তবে আমরা পুরো আবেদন প্রক্রিয়াটি শুরু থেকে শেষ পর্যন্ত পরিচালনা করি এবং প্রতিটি ধাপে আপনাকে আপডেট রাখি।",
  },
  {
    q: "আপনারা কি আন্তর্জাতিক লেবেল ও শিল্পীদের সাথে কাজ করেন?",
    a: "আমরা বিশ্বব্যাপী লেবেল, ডিস্ট্রিবিউটর ও শিল্পীদের সাথে কাজ করি। আমাদের সেবাগুলো আন্তর্জাতিক মান অনুযায়ী তৈরি।",
  },
  {
    q: "আপনারা কোন কোন DSP (স্ট্রিমিং প্ল্যাটফর্ম) সাপোর্ট করেন?",
    a: "আমাদের ডিস্ট্রিবিউশন ও কমপ্লায়েন্স সাপোর্ট সব প্রধান DSP কভার করে। আপনার নির্দিষ্ট প্ল্যাটফর্ম তালিকা নিয়ে যোগাযোগ করুন, আমরা কম্প্যাটিবিলিটি নিশ্চিত করব।",
  },
  {
    q: "হোয়াইট-লেবেল প্ল্যাটফর্মে রয়্যালটি রিপোর্টিং কীভাবে কাজ করে?",
    a: "রয়্যালটি হিসাব ও রিপোর্ট আপনার ব্র্যান্ডেড ড্যাশবোর্ডের ভেতরেই অটোমেটেড, যা আপনাকে ও আপনার শিল্পীদের ম্যানুয়াল স্প্রেডশিট ছাড়াই সুস্পষ্ট, আপ-টু-ডেট আয়ের তথ্য দেয়।",
  },
  {
    q: "আপনারা কোন পেমেন্ট পদ্ধতি গ্রহণ করেন?",
    a: "আমরা Visa, Mastercard, bKash এবং Nagad গ্রহণ করি, যা SSLCommerz-এর মাধ্যমে নিরাপদে প্রসেস করা হয়।",
  },
  {
    q: "বিভিন্ন প্ল্যাটফর্মে কপিরাইট ও রাইটস ম্যানেজমেন্ট কীভাবে কাজ করে?",
    a: "আমরা আপনার ক্যাটালগ ক্রমাগত মনিটর করি অননুমোদিত ব্যবহারের জন্য, আপনার পক্ষে ক্লেইম সাবমিট ও পরিচালনা করি, এবং টেকডাউন রিকোয়েস্ট হ্যান্ডেল করি — অডিও প্ল্যাটফর্ম, YouTube Content ID এবং Meta-এর Rights Manager, সব একটি সেবার আওতায়।",
  },
  {
    q: "শুরু করতে হলে কী করতে হবে?",
    a: "আমাদের কন্টাক্ট ফর্মের মাধ্যমে বা সরাসরি ইমেইল করে যোগাযোগ করুন। আমরা আপনার ক্যাটালগ ও লক্ষ্য সম্পর্কে কিছু প্রশ্ন করব, তারপর আপনার জন্য সঠিক সেবার সমন্বয় সুপারিশ করব।",
  },
];

export const NAV = {
  bn: [
    { href: "/", label: "হোম" },
    { href: "/services", label: "সেবাসমূহ" },
    { href: "/pricing", label: "প্রাইসিং" },
    { href: "/tools", label: "টুলস" },
    { href: "/about", label: "আমাদের সম্পর্কে" },
    { href: "/faq", label: "প্রশ্নোত্তর" },
    { href: "/contact", label: "যোগাযোগ" },
  ],
  en: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/tools", label: "Tools" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
};

export type Tool = {
  slug: string;
  icon: string;
  href: string;
  external?: boolean;
  status: "live" | "soon";
  bn: { title: string; desc: string };
  en: { title: string; desc: string };
};

export const TOOLS: Tool[] = [
  {
    slug: "url-shortener",
    icon: "Link2",
    href: "https://ans.bd/short",
    external: true,
    status: "live",
    bn: {
      title: "URL Shortener",
      desc: "যেকোনো লম্বা লিংককে ছোট, শেয়ারযোগ্য লিংকে রূপান্তর করুন — বিনামূল্যে, সবার জন্য।",
    },
    en: {
      title: "URL Shortener",
      desc: "Turn any long link into a short, shareable one — free, for everyone.",
    },
  },
  {
    slug: "upc-isrc-lookup",
    icon: "Search",
    href: "#",
    status: "soon",
    bn: {
      title: "UPC/ISRC → Spotify Data",
      desc: "UPC বা ISRC কোড দিয়ে Spotify-তে রিলিজের স্ট্রিমিং ডেটা খুঁজে বের করুন।",
    },
    en: {
      title: "UPC/ISRC → Spotify Data",
      desc: "Look up a release's Spotify streaming data using its UPC or ISRC code.",
    },
  },
  {
    slug: "spotify-metadata",
    icon: "FileSearch",
    href: "#",
    status: "soon",
    bn: {
      title: "Spotify Link → Metadata",
      desc: "যেকোনো Spotify লিংক থেকে ট্র্যাক/অ্যালবামের মেটাডেটা এক ক্লিকে বের করুন।",
    },
    en: {
      title: "Spotify Link → Metadata",
      desc: "Extract track or album metadata from any Spotify link in one click.",
    },
  },
];
