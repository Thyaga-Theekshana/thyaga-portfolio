const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Thyaga-Theekshana",
    icon: (
      <path
        fill="currentColor"
        d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.75 2.47 4.25 1.77.1-.72.39-1.2.7-1.48-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.04-1.15 3.04-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3.01 0 4.3-2.61 5.24-5.1 5.51.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
      />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thyaga-thikshana-a0b967302/",
    icon: (
      <path
        fill="currentColor"
        d="M20.45 3H3.55C2.69 3 2 3.68 2 4.52v14.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V4.52c0-.84-.69-1.52-1.55-1.52ZM8.06 18H5.12V9.5h2.94V18ZM6.59 8.34a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4ZM18.88 18h-2.93v-4.14c0-.99-.02-2.26-1.38-2.26-1.38 0-1.59 1.08-1.59 2.19V18h-2.93V9.5h2.81v1.16h.04c.39-.74 1.35-1.52 2.78-1.52 2.97 0 3.52 1.95 3.52 4.49V18Z"
      />
    ),
  },
  {
    label: "Medium",
    href: "https://medium.com/@kemisttd",
    icon: <text x="3" y="18" fill="currentColor" fontSize="18" fontWeight="700">M</text>,
  },
];

export default function SocialLinks() {
  return (
    <section aria-labelledby="social-links-title">
      <h2
        id="social-links-title"
        className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a99d8d]"
      >
        Find me around the web
      </h2>
      <nav
        aria-label="Social and professional profiles"
        className="mt-4 flex flex-wrap gap-2.5"
      >
        {socialLinks.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-xs font-medium text-[#d9cdbb] transition-all hover:border-[#e6b866]/35 hover:bg-[#e6b866]/[0.07] hover:text-[#e6b866] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e6b866]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5"
            >
              {icon}
            </svg>
            {label}
          </a>
        ))}
      </nav>
    </section>
  );
}
