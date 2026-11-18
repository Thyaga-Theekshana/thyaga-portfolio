"use client";

import { useRef, useState } from "react";
import Footer from "../../components/Footer";
import ProjectCard from "../../components/projects/ProjectCard";
import ProjectModal from "../../components/projects/ProjectModal";
import type { ProjectData } from "../../components/projects/project-types";
import SiteHeader from "../../components/portfolio/SiteHeader";

const projects: ProjectData[] = [
  {
    title: "Event Hub",
    shortDescription:
      "A comprehensive B2B event management platform designed to streamline operations for event companies by seamlessly connecting multi-tiered stakeholders into a single unified ecosystem.",
    fullDescription:
      "Designed for clients, vendors, public attendees, and on-ground staff. Features role-based workflows, customized package building, digital QR passes for public events, WhatsApp RSVP for private guests, and gate-scanning verification tools.",
    status: "In Progress",
    stack: ["Next.js", "Tailwind CSS", "PostgreSQL", "React"],
    image: "/projects/eventhub.png",
    links: [
      { label: "View on GitHub", href: "https://github.com/Apex-Zen/EventHub" },
    ],
  },
  {
    title: "Weather and Air Quality Monitoring & Prediction System",
    shortDescription:
      "A dual-repository IoT and AI-powered weather/air-quality forecasting system centered around the University of Moratuwa, featuring real-time environmental data acquisition and LSTM model predictions.",
    fullDescription:
      "Trains time-series models, serves forecasts over HTTP, and integrates with Open-Meteo and Firebase. Uses an LSTM weather model when available with Open-Meteo fallback.",
    status: "Featured project",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "IoT",
      "Python",
      "LSTM Model",
      "PyTorch",
      "XGBoost",
      "Flask",
    ],
    links: [
      {
        label: "Frontend repository",
        href: "https://github.com/Thyaga-Theekshana/sensor_squad-web",
      },
      {
        label: "Backend repository",
        href: "https://github.com/Thyaga-Theekshana/weather_prediction_model_backend",
      },
      {
        label: "Live hosted project",
        href: "https://air-quality-weather-prediction.netlify.app/",
      },
    ],
  },
  {
    title: "Blog Web Application",
    shortDescription:
      "A full-stack, dynamic PHP blog application built with MySQL, HTML5, CSS3, JavaScript, and Markdown support.",
    fullDescription:
      "Developed as part of academic coursework. Features secure user authentication with password_hash, full CRUD post management with the EasyMDE Markdown editor, strict ownership access control, and foreign key database relationships with cascade deletion.",
    status: "Featured project",
    stack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "EasyMDE"],
    image: "/projects/blog-web.png",
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Thyaga-Theekshana/blog-web",
      },
    ],
  },
];

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={`size-4 ${direction === "left" ? "rotate-180" : ""}`}
    >
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

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollProjects(direction: "left" | "right") {
    const track = scrollRef.current;
    if (!track) return;

    track.scrollBy({
      left: (direction === "left" ? -1 : 1) * track.clientWidth * 0.82,
      behavior: "smooth",
    });
  }

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#0a0a0a] text-[#f5f1e8]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[760px] bg-[radial-gradient(ellipse_55%_55%_at_70%_15%,rgba(174,123,59,0.13),transparent_72%),linear-gradient(180deg,rgba(230,184,102,0.025),transparent_55%)]"
      />
      <SiteHeader />

      <section className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-start pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-[76px]">
        <div className="mb-9 flex items-end justify-between gap-5 px-5 sm:mb-11 sm:px-8 lg:px-16">
          <div className="max-w-2xl">
            <h1 className="whitespace-nowrap font-serif text-2xl leading-tight tracking-[-0.045em] text-[#f5f1e8] sm:text-4xl">
              My Projects <span className="italic text-[#e6b866]">&amp; Works</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-6 text-[#b3a99b] sm:text-base sm:leading-7">
              A complete collection of applications and systems I&apos;ve built
              along my journey of hands-on learning and software engineering.
            </p>
          </div>
          <div className="hidden shrink-0 items-center gap-3 pb-1 text-xs text-[#8f867a] sm:flex">
            <span className="font-mono text-[#e6b866]">01</span>
            <span className="h-px w-10 bg-white/15" />
            <span className="font-mono">0{projects.length}</span>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 pt-1 [scrollbar-color:rgba(230,184,102,0.35)_transparent] [scrollbar-width:thin] sm:gap-5 sm:px-8 lg:px-16"
            aria-label="Featured projects. Scroll horizontally to explore."
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                total={projects.length}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          <div className="mt-1 flex items-center justify-between px-5 sm:px-8 lg:px-16">
            <p className="text-[10px] tracking-wide text-[#766f65] sm:text-xs">
              Scroll to explore <span className="px-1 text-[#e6b866]/60">·</span>{" "}
              Select a project for details
            </p>
            <div className="flex gap-2">
              {(["left", "right"] as const).map((direction) => (
                <button
                  key={direction}
                  type="button"
                  aria-label={
                    direction === "left" ? "Scroll projects left" : "Scroll projects right"
                  }
                  onClick={() => scrollProjects(direction)}
                  className="grid size-10 place-items-center rounded-full border border-white/10 text-[#d8cbb5] transition-colors hover:border-[#e6b866]/50 hover:bg-[#e6b866] hover:text-[#17120b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e6b866]"
                >
                  <ArrowIcon direction={direction} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
