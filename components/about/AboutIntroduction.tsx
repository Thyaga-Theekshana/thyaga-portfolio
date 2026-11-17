export default function AboutIntroduction() {
  return (
    <section
      id="about"
      className="relative border-b border-[#e6b866]/15 py-14 sm:py-16 lg:py-20"
      aria-labelledby="about-title"
    >
      <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e6b866]">
        <span className="size-1.5 rounded-full bg-[#e6b866]" aria-hidden="true" />
        About me
      </p>

      <h1
        id="about-title"
        className="mt-5 max-w-4xl text-[clamp(2.5rem,7vw,5.75rem)] font-bold leading-[0.98] tracking-[-0.065em] text-[#f5f1e8]"
      >
        Hi, I&apos;m Thyaga Theekshana
      </h1>

      <p className="mt-6 max-w-3xl text-[15px] leading-7 text-[#c8bdad] sm:text-[17px] sm:leading-8">
        —a passionate 2nd-year undergraduate pursuing a B.Sc. (Hons) in
        Information Technology and Management at the University of Moratuwa,
        driven by a deep enthusiasm for software engineering, creative
        problem-solving, and building impactful, scalable digital solutions that
        connect users with real value.
      </p>
    </section>
  );
}
