import Link from "next/link";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

function NavigationLinks({
  className,
  label,
}: {
  className: string;
  label: string;
}) {
  return (
    <nav className={className} aria-label={label}>
      {navigationItems.map(({ label: itemLabel, href }) => (
        <Link key={itemLabel} className="nav-link" href={href}>
          {itemLabel}
        </Link>
      ))}
    </nav>
  );
}

export default function SiteHeader() {
  return (
    <header className="relative z-20 mx-auto grid h-[88px] w-full max-w-[1440px] shrink-0 grid-cols-[1fr_auto] grid-rows-[1fr_auto] items-center px-4 pb-1 pt-2 sm:px-8 md:h-[82px] md:grid-cols-[1fr_auto_1fr] md:grid-rows-1 md:px-10 lg:px-16">
      <Link
        href="/"
        className="col-start-1 row-start-1 whitespace-nowrap text-[16px] font-bold tracking-[-0.055em] sm:text-[17px]"
        aria-label="Thyaga Theekshana home"
      >
        <span className="text-[#f5f1e8]">Thyaga</span>{" "}
        <span className="text-[#e6b866]">Theekshana</span>
      </Link>

      <NavigationLinks
        className="hidden items-center gap-5 md:col-start-2 md:row-start-1 md:flex lg:gap-7"
        label="Main navigation"
      />

      <NavigationLinks
        className="mobile-nav col-span-2 row-start-2 flex items-center justify-center gap-[clamp(0.65rem,3vw,1.35rem)] md:hidden"
        label="Mobile navigation"
      />

      <Link
        href="/contact"
        className="col-start-2 row-start-1 justify-self-end rounded-full bg-[#e6b866] px-4 py-2 text-[11px] font-semibold text-[#24190f] transition-colors hover:bg-[#f0cf8e] sm:px-5 sm:text-[12px] md:col-start-3 md:row-start-1"
      >
        Hire Me
      </Link>
    </header>
  );
}
