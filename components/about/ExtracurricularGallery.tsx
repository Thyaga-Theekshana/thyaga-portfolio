"use client";

import Image from "next/image";
import { useState } from "react";
import type { MemoryPhoto } from "../../lib/about/get-memory-photos";

export default function ExtracurricularGallery({
  photos,
}: {
  photos: MemoryPhoto[];
}) {
  const [expandedPhoto, setExpandedPhoto] = useState<string | null>(null);

  return (
    <section
      id="extracurricular"
      className="border-t border-[#e6b866]/15 py-14 sm:py-16 lg:py-20"
      aria-labelledby="extracurricular-title"
    >
      <div className="mb-7 max-w-3xl sm:mb-9">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e6b866]">
          03 / Moments to remember
        </p>
        <h2
          id="extracurricular-title"
          className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#f5f1e8] sm:text-4xl"
        >
          Extracurricular Activities &amp; Leadership
        </h2>
        <p className="mt-3 text-sm leading-6 text-[#a99d8d] sm:text-base">
          A visual journey of building leadership, strengthening teamwork, and
          collaborating across diverse student communities to drive impactful
          tech initiatives.
        </p>
      </div>

      {photos.length > 0 ? (
        <div
          aria-label="Scroll through extracurricular photos"
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e6b866]"
          tabIndex={0}
        >
          {photos.map((photo) => {
            const isExpanded = expandedPhoto === photo.slug;

            return (
              <button
                key={photo.slug}
                type="button"
                className="group relative isolate aspect-[4/3] min-h-[260px] w-[82vw] min-w-[260px] shrink-0 snap-start overflow-hidden rounded-[26px] border border-[#d6a858]/20 bg-[#1a1612] text-left outline-none transition duration-300 hover:-translate-y-1 hover:border-[#e6b866]/50 focus-visible:ring-2 focus-visible:ring-[#e6b866] focus-visible:ring-offset-2 focus-visible:ring-offset-[#12100e] motion-reduce:transition-none lg:w-[calc((100%-3rem)/4)]"
                onClick={() =>
                  setExpandedPhoto(isExpanded ? null : photo.slug)
                }
                aria-label={`${photo.title}, ${photo.role}. Activate to ${isExpanded ? "hide" : "show"} event details.`}
                aria-expanded={isExpanded}
              >
                <Image
                  src={photo.src}
                  alt={`${photo.title} event`}
                  fill
                  sizes="(max-width: 1023px) 82vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#100d0b]/95 via-[#100d0b]/20 to-transparent"
                />
                <span className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                  <span className="flex items-end justify-between gap-3">
                    <span>
                      <span className="block text-lg font-semibold tracking-[-0.025em] text-[#fffaf0] sm:text-xl">
                        {photo.title}
                      </span>
                      <span className="mt-1 block text-xs font-medium text-[#e6b866] sm:text-sm">
                        {photo.role}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="mb-0.5 grid size-8 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 text-[#fffaf0] backdrop-blur-md transition-transform duration-300 group-hover:rotate-45"
                    >
                      ↗
                    </span>
                  </span>

                  <span
                    className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ${
                      isExpanded
                        ? "mt-3 grid-rows-[1fr] opacity-100"
                        : "mt-0 grid-rows-[0fr] opacity-0 group-hover:mt-3 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:mt-3 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100"
                    }`}
                  >
                    <span className="min-h-0 overflow-hidden">
                      <span className="block border-t border-white/15 pt-3 text-[10px] leading-[1.55] text-[#e5dac8] sm:text-xs">
                        <span className="font-semibold text-[#f5f1e8]">
                          Organized by:
                        </span>{" "}
                        {photo.organizer}
                      </span>
                      <span className="mt-2 block text-[10px] leading-[1.55] text-[#d3c5ae] sm:text-xs">
                        {photo.overview}
                      </span>
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      ) : (
        <p className="rounded-2xl border border-dashed border-[#d6a858]/25 bg-[#1a1612]/50 px-5 py-8 text-sm text-[#c8bdad]">
          Add event photos to <code className="text-[#e6b866]">public/extra</code>{" "}
          to populate this gallery.
        </p>
      )}
    </section>
  );
}
