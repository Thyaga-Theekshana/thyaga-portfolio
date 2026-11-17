import type { Metadata } from "next";
import AboutIntroduction from "../../components/about/AboutIntroduction";
import EngineeringStack from "../../components/about/EngineeringStack";
import ExtracurricularGallery from "../../components/about/ExtracurricularGallery";
import Footer from "../../components/Footer";
import SiteHeader from "../../components/portfolio/SiteHeader";
import { getMemoryPhotos } from "../../lib/about/get-memory-photos";

export const metadata: Metadata = {
  title: "About | Thyaga Theekshana",
  description:
    "About Thyaga Theekshana, his engineering stack, and extracurricular leadership at the University of Moratuwa.",
};

export default function AboutPage() {
  const memoryPhotos = getMemoryPhotos();

  return (
    <main className="relative min-h-screen overflow-x-hidden overflow-y-auto bg-[#12100e] text-[#f5f1e8]">
      <div
        aria-hidden="true"
        className="ambient-glow pointer-events-none absolute inset-x-0 top-0 h-[900px] opacity-70"
      />
      <SiteHeader />
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-12 sm:px-8 lg:px-16">
        <AboutIntroduction />
        <EngineeringStack />
        <ExtracurricularGallery photos={memoryPhotos} />
      </div>
      <Footer />
    </main>
  );
}
