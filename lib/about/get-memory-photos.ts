import { readdirSync } from "node:fs";
import { basename, extname, join } from "node:path";

export type MemoryPhoto = {
  slug: string;
  src: string;
  title: string;
  role: string;
  organizer: string;
  overview: string;
  order: number;
};

type EventDetails = Omit<MemoryPhoto, "slug" | "src">;

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

const eventDetails: Record<string, EventDetails> = {
  devthon: {
    title: "Dev{thon} 3.0",
    role: "Finance Committee Member",
    organizer:
      "Leo Club of University of Moratuwa in partnership with Rotaract Club of UoM & Leo Club of SLTC.",
    overview:
      "Proud to have contributed to the successful completion of this Grand Finale, witnessing innovative ideas transform into real solutions through teamwork and technical excellence.",
    order: 1,
  },
  hackelite: {
    title: "HackElite 3.0",
    role: "Finance Committee Member",
    organizer:
      "IEEE WIE Student Branch Affinity Group of the University of Moratuwa.",
    overview:
      "An inter-university innovation competition bringing together undergraduates across Sri Lanka to develop technology-driven solutions to real-world problems.",
    order: 2,
  },
  octwave: {
    title: "OctWave 3.0",
    role: "Logistics Committee Member",
    organizer:
      "IEEE IAS Student Branch Chapter of the University of Moratuwa.",
    overview:
      "Sri Lanka’s premier undergraduate AI & Machine Learning competition, offering a valuable experience filled with seamless logistics coordination, teamwork, and learning.",
    order: 3,
  },
  forsight: {
    title: "MoraForesight 4.0",
    role: "Finance Committee Member",
    organizer: "IEEE Student Branch of the University of Moratuwa.",
    overview:
      "A fully-funded 3-day school innovation bootcamp covering Programming & AI, Robotics & Entertainment, and Leadership & Entrepreneurship, helping young students explore technology and innovation.",
    order: 4,
  },
};

function titleFromSlug(slug: string): string {
  return slug
    .split(/[-_]/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getMemoryPhotos(): MemoryPhoto[] {
  const directory = join(process.cwd(), "public", "extra");

  return readdirSync(directory, { withFileTypes: true })
    .filter((entry) => {
      return entry.isFile() && imageExtensions.has(extname(entry.name).toLowerCase());
    })
    .map((entry) => {
      const extension = extname(entry.name).toLowerCase();
      const slug = basename(entry.name, extension).toLowerCase();
      const details = eventDetails[slug] ?? {
        title: titleFromSlug(slug),
        role: "Campus memory",
        organizer: "University of Moratuwa",
        overview:
          "A moment from campus events, volunteering, and technology projects.",
        order: Number.MAX_SAFE_INTEGER,
      };

      return {
        slug,
        src: `/extra/${encodeURIComponent(entry.name)}`,
        ...details,
      };
    })
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}
