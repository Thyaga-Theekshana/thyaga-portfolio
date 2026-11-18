import Image from "next/image";
import type { ProjectData } from "./project-types";

export default function ProjectArtwork({
  project,
}: {
  project: Pick<ProjectData, "image">;
}) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt=""
        fill
        sizes="(max-width: 640px) 84vw, (max-width: 1024px) 60vw, 780px"
        className="pointer-events-none object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(ellipse_at_68%_30%,rgba(230,184,102,0.2),transparent_42%),linear-gradient(135deg,#171b18,#10100e_70%)]"
    >
      <div className="absolute -right-10 -top-20 size-64 rounded-full border border-[#e6b866]/10" />
      <div className="absolute -right-1 -top-11 size-44 rounded-full border border-[#e6b866]/10" />
      <div className="absolute inset-x-7 bottom-7 top-7 rounded-xl border border-white/10 bg-[#0b0d0d]/70 p-4 shadow-2xl backdrop-blur-sm sm:inset-x-10 sm:bottom-9 sm:top-9 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#e6b866]/80 sm:text-[10px]">
              Environment monitor
            </p>
            <p className="mt-2 text-sm font-medium text-[#f5f1e8] sm:text-base">
              Live conditions
            </p>
          </div>
          <span className="mt-1 flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[9px] text-emerald-200 sm:text-[10px]">
            <span className="size-1.5 rounded-full bg-emerald-300" />
            Monitoring
          </span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-7 sm:gap-3">
          {[
            ["AQI", "42", "Good"],
            ["PM2.5", "8.4", "μg/m³"],
            ["TEMP", "26°", "Clear"],
          ].map(([label, value, note]) => (
            <div
              key={label}
              className="rounded-lg border border-white/[0.07] bg-white/[0.035] p-2 sm:p-3"
            >
              <p className="text-[8px] tracking-[0.15em] text-white/40 sm:text-[9px]">
                {label}
              </p>
              <p className="mt-1 text-base font-medium text-white/90 sm:text-xl">
                {value}
              </p>
              <p className="mt-0.5 text-[8px] text-[#e6b866]/70 sm:text-[9px]">
                {note}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 pb-2 pt-3 sm:mt-5 sm:px-4 sm:pb-3">
          <div className="flex items-center justify-between text-[8px] text-white/40 sm:text-[9px]">
            <span>48-hour forecast</span>
            <span>Air quality index</span>
          </div>
          <svg
            viewBox="0 0 480 78"
            fill="none"
            className="mt-2 h-12 w-full sm:h-[62px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0 54C28 54 28 36 56 36S84 48 112 44 140 21 168 26s28 22 56 15 28-17 56-13 28 20 56 12 28-22 56-15 28 18 56 10 28-16 56-19"
              stroke="#e6b866"
              strokeWidth="2"
            />
            <path
              d="M0 54C28 54 28 36 56 36S84 48 112 44 140 21 168 26s28 22 56 15 28-17 56-13 28 20 56 12 28-22 56-15 28 18 56 10 28-16 56-19V78H0V54Z"
              fill="url(#forecastFill)"
              opacity=".35"
            />
            <defs>
              <linearGradient id="forecastFill" x1="240" y1="12" x2="240" y2="78">
                <stop stopColor="#e6b866" />
                <stop offset="1" stopColor="#e6b866" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="mt-1 flex justify-between text-[7px] text-white/30 sm:text-[8px]">
            <span>NOW</span>
            <span>+12 HRS</span>
            <span>+24 HRS</span>
            <span>+36 HRS</span>
            <span>+48 HRS</span>
          </div>
        </div>
      </div>
      <span className="absolute bottom-3 right-5 text-[8px] tracking-[0.2em] text-white/25 sm:bottom-4 sm:right-7 sm:text-[9px]">
        SENSOR SQUAD
      </span>
    </div>
  );
}
