import Image from "next/image";

const technologies = [
  { name: "Node.js", icon: "nodejs", position: "left-[2%] top-[12%]", delay: "-1.2s" },
  { name: "Next.js", icon: "nextjs", position: "left-[48%] top-[4%]", delay: "-3.6s" },
  { name: "Java", icon: "java", position: "right-[2%] top-[29%]", delay: "-2.1s" },
  { name: "Python", icon: "python", position: "right-[15%] top-[53%]", delay: "-0.8s" },
  { name: "React", icon: "react", position: "left-[2%] bottom-[10%]", delay: "-2.9s" },
  { name: "HTML5", icon: "html5", position: "left-[43%] bottom-[5%]", delay: "-5.1s" },
  { name: "CSS3", icon: "css3", position: "right-[2%] bottom-[20%]", delay: "-1.7s" },
];

export default function FloatingTechStack() {
  return (
    <div
      role="group"
      aria-label="Technologies I work with"
      className="relative mx-auto h-[280px] w-full max-w-[500px] overflow-hidden sm:h-[320px] md:h-[360px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[12%] rounded-full bg-[radial-gradient(ellipse,rgba(230,184,102,0.1),transparent_68%)] blur-2xl"
      />
      {technologies.map(({ name, icon, position, delay }) => (
        <span
          key={name}
          role="img"
          aria-label={name}
          className={`about-tech-badge absolute inline-flex size-11 items-center justify-center rounded-full border border-[#e6b866]/25 bg-[#171411]/90 shadow-[0_12px_34px_rgba(0,0,0,0.32)] backdrop-blur-md transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#e6b866]/60 hover:bg-[#211a14] hover:shadow-[0_0_26px_rgba(230,184,102,0.2)] sm:size-12 ${position}`}
          style={{ animationDelay: delay }}
        >
          <Image
            src={`/tech-stack-icons/${icon}.svg`}
            alt={name}
            width={28}
            height={28}
            unoptimized
            className="size-6 object-contain sm:size-7"
          />
        </span>
      ))}
      <style>{`
        @keyframes about-tech-drift {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(4px, -10px, 0); }
        }

        .about-tech-badge {
          animation: about-tech-drift 6.5s ease-in-out infinite;
        }

        .about-tech-badge:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-tech-badge {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
