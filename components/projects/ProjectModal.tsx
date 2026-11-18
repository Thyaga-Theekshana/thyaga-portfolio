"use client";

import { useEffect, useRef } from "react";
import ProjectArtwork from "./ProjectArtwork";
import type { ProjectData } from "./project-types";

type ProjectModalProps = {
  project: ProjectData | null;
  onClose: () => void;
};

function ExternalLinkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4">
      <path
        d="M11 4h5v5m-.5-4.5-7 7M14 11v4.25a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-8.5A.75.75 0 0 1 4.75 6H9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!project || !dialog) return;

    dialog.showModal();
    return () => {
      if (dialog.open) dialog.close();
    };
  }, [project]);

  if (!project) return null;

  return (
    <>
      <style>{`
        @keyframes projects-modal-enter {
          from { opacity: 0; transform: translateY(10px) scale(0.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes projects-backdrop-enter {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .project-details-dialog[open] {
          animation: projects-modal-enter 220ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .project-details-dialog::backdrop {
          animation: projects-backdrop-enter 220ms ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .project-details-dialog[open],
          .project-details-dialog::backdrop {
            animation: none;
          }
        }
      `}</style>

      <dialog
        ref={dialogRef}
        aria-labelledby="project-dialog-title"
        onCancel={(event) => {
          event.preventDefault();
          onClose();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
        className="project-details-dialog fixed inset-0 z-50 m-auto max-h-[90dvh] w-[min(92vw,780px)] max-w-none overflow-y-auto overscroll-contain rounded-2xl border border-[#e6b866]/20 bg-[#11100e] p-0 text-[#f5f1e8] shadow-[0_30px_120px_rgba(0,0,0,0.8)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden backdrop:bg-black/80 backdrop:backdrop-blur-md"
      >
        <div className="relative" onClick={(event) => event.stopPropagation()}>
          <div className="pointer-events-none relative aspect-[16/8] min-h-[180px] overflow-hidden bg-[#171511] sm:min-h-[260px]">
            <ProjectArtwork project={project} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11100e] via-black/10 to-black/15" />
            <button
              type="button"
              autoFocus
              aria-label="Close project details"
              onClick={onClose}
              className="pointer-events-auto absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition-colors hover:border-[#e6b866]/60 hover:text-[#e6b866] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e6b866]"
            >
              <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4">
                <path
                  d="m5 5 10 10M15 5 5 15"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </div>

          <div className="relative -mt-7 px-5 pb-7 sm:-mt-9 sm:px-9 sm:pb-9">
            {project.status && (
              <span className="mb-3 inline-flex rounded-full border border-[#e6b866]/25 bg-[#201a11] px-3 py-1 text-[10px] font-medium text-[#e6b866]">
                {project.status}
              </span>
            )}
            <h2
              id="project-dialog-title"
              className="max-w-2xl text-2xl font-medium leading-tight tracking-[-0.035em] sm:text-3xl"
            >
              {project.title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#b6ac9e] sm:text-base sm:leading-7">
              {project.fullDescription}
            </p>

            <div className="mt-7">
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e6b866]">
                Built with
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[#e6b866]/25 bg-[#e6b866]/[0.08] px-3 py-1.5 text-xs font-medium text-[#e9d4ac]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-white/[0.08] pt-6">
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8e8579]">
                Explore the project
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.links.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#e6b866]/35 bg-[#e6b866] px-4 py-2 text-xs font-semibold text-[#20180d] transition-colors hover:border-[#f0cf8e] hover:bg-[#f0cf8e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e6b866]"
                  >
                    {label}
                    <ExternalLinkIcon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
