import { CONTACT } from "@/lib/content";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { Mail, MapPin } from "lucide-react";

export default function EnContact() {
  return (
    <section className="section-pad">
      <div className="container-x grid lg:grid-cols-2 gap-14">
        <Reveal>
          <span className="eyebrow mb-5">Contact</span>
          <h1 className="text-3xl sm:text-[2.5rem] font-bold mt-5 mb-6">Get in touch</h1>
          <p className="text-muted leading-relaxed mb-9">
            Tell us about your project or question — our team typically responds within one
            business day.
          </p>
          <div className="space-y-5">
            <div className="flex gap-3 text-white/85">
              <Mail className="w-4 h-4 text-muted mt-0.5" />
              <span>{CONTACT.email}</span>
            </div>
            <div className="flex gap-3 text-white/85">
              <MapPin className="w-4 h-4 text-muted mt-0.5 shrink-0" />
              <span>{CONTACT.address.en}</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm locale="en" email={CONTACT.email} />
        </Reveal>
      </div>
    </section>
  );
}
