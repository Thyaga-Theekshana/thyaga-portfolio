"use client";

import ProjectArtwork from "./ProjectArtwork";
import type { ProjectData } from "./project-types";

type ProjectCardProps = {
  project: ProjectData;
  index: number;
  total: number;
  onClick: () => void;
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4">
      <path
        d="M4.25 10h11.5m0 0-4.75-4.75M15.75 10 11 14.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function ProjectCard({
  project,
  index,
  total,
  onClick,
}: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-[min(84vw,440px)] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/[0.09] bg-[#11100e] text-left shadow-[0_20px_70px_rgba(0,0,0,0.28)] transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#e6b866]/40 hover:shadow-[0_26px_75px_rgba(0,0,0,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6b866] sm:w-[min(62vw,440px)]"
    >
      <div className="pointer-events-none relative aspect-[16/10] overflow-hidden bg-[#171511]">
        <ProjectArtwork project={project} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
        <span
          className={`absolute left-4 top-4 rounded-full border px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.16em] backdrop-blur-md sm:left-5 sm:top-5 sm:text-[10px] ${
            project.status === "In Progress"
              ? "border-[#e6b866]/35 bg-[#e6b866]/15 text-yellow-300"
              : "border-white/15 bg-black/35 text-white/80"
          }`}
        >
          {project.status ?? "Featured project"}
        </span>
        <span className="absolute bottom-4 right-4 font-mono text-[10px] text-white/60 sm:bottom-5 sm:right-5">
          0{index + 1} / 0{total}
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h2 className="max-w-[330px] text-lg font-medium leading-snug tracking-[-0.025em] text-[#f5f1e8] sm:text-xl">
            {project.title}
          </h2>
          <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full border border-white/10 text-[#e6b866] transition-all duration-300 group-hover:border-[#e6b866]/50 group-hover:bg-[#e6b866] group-hover:text-[#17120b]">
            <ArrowIcon />
          </span>
        </div>
        <p className="mt-3 line-clamp-2 text-xs leading-5 text-[#a99f91] sm:text-sm sm:leading-6">
          {project.shortDescription}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-[#e6b866]/15 bg-[#e6b866]/[0.055] px-2.5 py-1 text-[9px] font-medium text-[#d2bd97] sm:text-[10px]"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
