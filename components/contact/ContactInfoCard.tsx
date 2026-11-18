import type { ReactNode } from "react";

type ContactAction = {
  label: string;
  href: string;
  external?: boolean;
};

type ContactInfoCardProps = {
  label: string;
  value: string;
  detail: string;
  icon: ReactNode;
  actions: ContactAction[];
};

export default function ContactInfoCard({
  label,
  value,
  detail,
  icon,
  actions,
}: ContactInfoCardProps) {
  return (
    <article className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition-colors hover:border-[#e6b866]/25 hover:bg-white/[0.04] sm:p-5">
      <div className="flex items-start gap-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-[#e6b866]/20 bg-[#e6b866]/[0.07] text-[#e6b866]">
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a99d8d]">
            {label}
          </p>
          <p className="mt-1 break-words text-sm font-medium text-[#f5f1e8] sm:text-base">
            {value}
          </p>
          <p className="mt-1 text-xs leading-5 text-[#918779]">{detail}</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            {actions.map(({ label: actionLabel, href, external }) => (
              <a
                key={actionLabel}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e6b866] transition-colors hover:text-[#f0cf8e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e6b866]"
              >
                {actionLabel}
                {external && (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="size-3"
                  >
                    <path
                      d="M9 3h4v4m-.5-3.5-6 6M11 9v3.25a.75.75 0 0 1-.75.75h-6.5a.75.75 0 0 1-.75-.75v-6.5A.75.75 0 0 1 3.75 5H7"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.3"
                    />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
