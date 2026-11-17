const technologies = [
  { name: "React", position: "left-[8%] top-[18%]" },
  { name: "Node.js", position: "left-[27%] top-[6%]" },
  { name: "Python", position: "right-[26%] top-[8%]" },
  { name: "Java", position: "right-[7%] top-[39%]" },
  { name: "Next.js", position: "right-[18%] bottom-[10%]" },
  { name: "MongoDB", position: "left-[11%] bottom-[8%]" },
];

function TechGlyph({ name }: { name: string }) {
  if (name === "React") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="9" ry="3.6" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" className="tech-glyph-fill" />
      </svg>
    );
  }

  if (name === "Node.js") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <path d="m12 2.8 8 4.6v9.2l-8 4.6-8-4.6V7.4l8-4.6Z" />
        <path d="M8.8 15.5V8.7l6.4 6.6V8.7" />
      </svg>
    );
  }

  if (name === "Python") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <path d="M12 3H8.5a3 3 0 0 0-3 3v4.5h7.1V8.8h3.1a3.3 3.3 0 0 0 3.3-3.3A2.5 2.5 0 0 0 16.5 3H12Z" />
        <path d="M12 21h3.5a3 3 0 0 0 3-3v-4.5h-7.1v1.7H8.3A3.3 3.3 0 0 0 5 18.5 2.5 2.5 0 0 0 7.5 21H12Z" />
        <circle cx="9.3" cy="5.6" r=".7" className="tech-glyph-fill" />
        <circle cx="14.7" cy="18.4" r=".7" className="tech-glyph-fill" />
      </svg>
    );
  }

  if (name === "Java") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <path d="M7 14h10l-1 5H8l-1-5Z" />
        <path d="M17 15h1.5a2 2 0 0 0 0-4H17M9 10c0-1.3 1.5-1.3 1.5-2.6M13 10c0-1.3 1.5-1.3 1.5-2.6M6 21h13" />
      </svg>
    );
  }

  if (name === "Next.js") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <path d="M5.5 18V6l13 12V6" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M12 3.5c-2.7 3.4-4.1 6.1-3.5 9 .4 2 1.5 3.6 3 4.8V21h1v-3.7c2.5-1.8 3.7-4.1 3.2-6.8-.4-2.4-1.6-4.7-3.7-7Z" />
      <path d="M12.5 8v11" />
    </svg>
  );
}

export default function TechnologyOrbit() {
  return (
    <div
      className="relative z-10 h-full w-full"
      role="group"
      aria-label="Technology icons"
    >
      {technologies.map(({ name, position }) => (
        <span
          key={name}
          className={`tech-float ${position}`}
          title={name}
          role="img"
          aria-label={name}
        >
          <TechGlyph name={name} />
        </span>
      ))}
    </div>
  );
}
