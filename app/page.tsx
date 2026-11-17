import HeroIntro from "../components/portfolio/HeroIntro";
import PortraitStage from "../components/portfolio/PortraitStage";
import SiteHeader from "../components/portfolio/SiteHeader";

export default function Home() {
  return (
    <main className="portfolio-page relative flex h-screen w-full flex-col justify-between overflow-hidden bg-[#12100e] text-[#f5f1e8]">
      <div
        aria-hidden="true"
        className="ambient-glow pointer-events-none absolute inset-0"
      />
      <SiteHeader />
      <section className="relative mx-auto grid min-h-0 w-full max-w-[1440px] flex-1 grid-cols-1 grid-rows-[auto_minmax(150px,1fr)] items-stretch px-5 pb-2 md:grid-cols-[1.08fr_0.92fr] md:grid-rows-1 md:items-stretch md:gap-6 md:px-10 lg:gap-10 lg:px-16">
        <HeroIntro />
        <PortraitStage />
      </section>
    </main>
  );
}
