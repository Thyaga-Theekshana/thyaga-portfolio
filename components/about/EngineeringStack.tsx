const engineeringTracks = [
  {
    number: "01",
    title: "Web Engineering",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "PHP",
      "MongoDB",
      "Tailwind CSS",
    ],
    mark: "</>",
  },
  {
    number: "02",
    title: "Desktop & Systems Software",
    skills: ["Java (OOP)", "C", "Arduino / IoT Hardware Integration"],
    mark: "{ }",
  },
];

export default function EngineeringStack() {
  return (
    <section
      id="stack"
      className="py-14 sm:py-16 lg:py-20"
      aria-labelledby="stack-title"
    >
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4 sm:mb-9">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e6b866]">
            02 / Toolkit
          </p>
          <h2
            id="stack-title"
            className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#f5f1e8] sm:text-4xl"
          >
            My Engineering Stack
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-[#a99d8d]">
          A practical mix of tools for building across platforms and systems.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {engineeringTracks.map((track) => (
          <article
            key={track.number}
            className="group rounded-[24px] border border-[#d6a858]/15 bg-gradient-to-br from-[#211a14] to-[#171411] p-5 transition-colors duration-300 hover:border-[#d6a858]/35 sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.18em] text-[#b58a4d]">
                  TRACK {track.number}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-[#f5f1e8] sm:text-2xl">
                  {track.title}
                </h3>
              </div>
              <span
                aria-hidden="true"
                className="grid size-11 shrink-0 place-items-center rounded-2xl border border-[#d6a858]/20 bg-[#e6b866]/[0.08] font-mono text-sm font-semibold text-[#e6b866] transition-transform duration-300 group-hover:-translate-y-1"
              >
                {track.mark}
              </span>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {track.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-[#d9cdbb]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
