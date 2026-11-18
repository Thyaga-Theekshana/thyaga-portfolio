"use client";

import type { FormEvent } from "react";

const contactEmail = "kemisttd@gmail.com";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const body = `Hi Thyaga,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`;
    const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    event.currentTarget.reset();
    window.location.href = mailtoUrl;
  }

  const fieldClassName =
    "w-full rounded-xl border border-white/10 bg-[#0a0a0a]/75 px-4 py-3 text-sm text-[#f5f1e8] outline-none transition-colors placeholder:text-[#756d62] hover:border-white/20 focus:border-[#e6b866]/60 focus:ring-2 focus:ring-[#e6b866]/15";

  return (
    <section
      aria-labelledby="contact-form-title"
      className="rounded-2xl border border-white/[0.09] bg-[#11100e]/85 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-7 lg:p-8"
    >
      <div className="mb-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e6b866]">
          Start a conversation
        </p>
        <h2
          id="contact-form-title"
          className="mt-2 text-xl font-medium tracking-[-0.025em] text-[#f5f1e8] sm:text-2xl"
        >
          Send me a message
        </h2>
        <p className="mt-2 text-xs leading-5 text-[#a99f91] sm:text-sm">
          Your email app will open with your message ready to send.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-xs font-medium text-[#d9cdbb]">
            <span>Name</span>
            <input
              className={fieldClassName}
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              required
            />
          </label>
          <label className="space-y-2 text-xs font-medium text-[#d9cdbb]">
            <span>Email</span>
            <input
              className={fieldClassName}
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
            />
          </label>
        </div>

        <label className="block space-y-2 text-xs font-medium text-[#d9cdbb]">
          <span>Subject</span>
          <input
            className={fieldClassName}
            type="text"
            name="subject"
            placeholder="What would you like to discuss?"
            required
          />
        </label>

        <label className="block space-y-2 text-xs font-medium text-[#d9cdbb]">
          <span>Message</span>
          <textarea
            className={`${fieldClassName} min-h-36 resize-y`}
            name="message"
            placeholder="Tell me a little about it..."
            rows={5}
            required
          />
        </label>

        <button
          type="submit"
          className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#e6b866] px-5 py-3 text-sm font-semibold text-[#24190f] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f0cf8e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6b866] sm:w-auto"
        >
          Send message
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            className="size-4 transition-transform group-hover:translate-x-0.5"
          >
            <path
              d="m3.5 10 13 0m0 0-5-5m5 5-5 5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </form>
    </section>
  );
}
