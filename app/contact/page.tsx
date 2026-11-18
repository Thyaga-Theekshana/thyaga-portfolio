import type { Metadata } from "next";
import ContactForm from "../../components/contact/ContactForm";
import ContactInfoCard from "../../components/contact/ContactInfoCard";
import SocialLinks from "../../components/contact/SocialLinks";
import Footer from "../../components/Footer";
import SiteHeader from "../../components/portfolio/SiteHeader";

export const metadata: Metadata = {
  title: "Contact | Thyaga Theekshana",
  description:
    "Get in touch with Thyaga Theekshana about projects, collaboration, or a conversation.",
};

function EmailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
      <path
        d="m7.2 3.8 2.4-.8a1.5 1.5 0 0 1 1.8.8l1.2 2.8a1.5 1.5 0 0 1-.4 1.7L10.7 9.7a14.2 14.2 0 0 0 3.6 3.6l1.4-1.5a1.5 1.5 0 0 1 1.7-.4l2.8 1.2a1.5 1.5 0 0 1 .8 1.8l-.8 2.4a2 2 0 0 1-2.1 1.3C10.7 17.1 6.9 13.3 5.9 5.9a2 2 0 0 1 1.3-2.1Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#0a0a0a] text-[#f5f1e8]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[780px] bg-[radial-gradient(ellipse_55%_55%_at_72%_15%,rgba(174,123,59,0.14),transparent_72%),linear-gradient(180deg,rgba(230,184,102,0.025),transparent_55%)]"
      />
      <SiteHeader />

      <section className="relative z-10 mx-auto w-full max-w-[1440px] flex-1 px-5 pb-12 pt-6 sm:px-8 sm:pb-16 sm:pt-8 lg:px-16 lg:pb-[76px] lg:pt-10">
        <div className="mb-9 max-w-3xl sm:mb-12">
          <p className="mb-3 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#e6b866] sm:text-xs">
            <span className="h-px w-8 bg-[#e6b866]/70" />
            Let&apos;s connect
          </p>
          <h1 className="whitespace-nowrap font-serif text-[clamp(1.7rem,6vw,3rem)] leading-tight tracking-[-0.045em] text-[#f5f1e8]">
            Get In <span className="italic text-[#e6b866]">Touch</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#b3a99b] sm:text-base sm:leading-7">
            Always open for new opportunities, collaborations, or a quick tech
            chat. Drop a message.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
          <div className="space-y-7 sm:space-y-8">
            <section aria-labelledby="contact-channels-title">
              <h2
                id="contact-channels-title"
                className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#a99d8d]"
              >
                Direct contact
              </h2>
              <div className="space-y-3">
                <ContactInfoCard
                  label="Email"
                  value="kemisttd@gmail.com"
                  detail="For project inquiries and general questions."
                  icon={<EmailIcon />}
                  actions={[
                    {
                      label: "Send an email",
                      href: "mailto:kemisttd@gmail.com",
                    },
                  ]}
                />
                <ContactInfoCard
                  label="Phone & WhatsApp"
                  value="076 757 6865"
                  detail="Reach me by phone or send a WhatsApp message."
                  icon={<PhoneIcon />}
                  actions={[
                    {
                      label: "Call",
                      href: "tel:+94767576865",
                    },
                    {
                      label: "WhatsApp",
                      href: "https://wa.me/94767576865",
                      external: true,
                    },
                  ]}
                />
              </div>
            </section>

            <SocialLinks />
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
