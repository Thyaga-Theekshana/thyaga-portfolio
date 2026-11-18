"use client";

import Link from "next/link";

function downloadCv() {
  if (!window.confirm("Do you want to download Thyaga's CV?")) return;

  const downloadLink = document.createElement("a");
  downloadLink.href = "/CV.pdf";
  downloadLink.download = "Thyaga_Theekshana_CV.pdf";
  downloadLink.rel = "noopener";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();
}

export default function HeroIntro() {
  return (
    <div className="relative z-10 flex flex-col items-start gap-3 py-3 sm:gap-4 md:justify-center md:py-0 lg:gap-5">
      <h1 className="text-[clamp(1.35rem,4.6vw,4.5rem)] font-bold leading-[0.98] tracking-[-0.065em] text-[#f5f1e8]">
        <span className="block whitespace-nowrap">Thyaga Theekshana</span>
        <span className="mt-1 block whitespace-nowrap text-[0.84em] text-[#e6b866]">
          Aspiring Software Engineer
        </span>
      </h1>

      <p className="max-w-[620px] text-[11px] leading-[1.65] text-[#c8bdad] sm:text-[13px] md:text-[14px]">
        2nd Year Undergraduate | B.Sc. (Hons) in Information Technology and
        Management | University of Moratuwa
      </p>

      <div className="flex w-full max-w-[390px] items-center gap-2.5 sm:gap-3">
        <Link
          href="/projects"
          className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-full bg-[#e6b866] px-3 text-center text-[10px] font-semibold text-[#24190f] transition-colors hover:bg-[#f0cf8e] sm:min-h-11 sm:px-4 sm:text-[12px]"
        >
          <span>View My Work</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            className="size-4 shrink-0"
          >
            <path
              d="M4.5 10h10.75M10.5 5.25 15.25 10l-4.75 4.75"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <button
          type="button"
          onClick={downloadCv}
          className="inline-flex min-h-10 flex-1 cursor-pointer items-center justify-center rounded-full border border-[#d6a858]/60 bg-[#1a1612]/50 px-3 text-center text-[10px] font-semibold text-[#f5f1e8] transition-colors hover:border-[#e6b866] hover:bg-[#2a2119] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e6b866] sm:min-h-11 sm:px-4 sm:text-[12px]"
        >
          Download CV
        </button>
      </div>
    </div>
  );
}
