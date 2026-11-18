import Image from "next/image";
import TechnologyOrbit from "./TechnologyOrbit";

export default function PortraitStage() {
  return (
    <div className="portrait-stage relative h-full min-h-[min(86vw,540px)] w-full md:min-h-0">
      <div className="portrait-mask absolute inset-0 z-[1]">
        <Image
          src="/profile.png"
          alt="Thyaga Theekshana"
          fill
          priority
          sizes="(max-width: 767px) 90vw, (max-width: 1200px) 46vw, 600px"
          className="object-contain object-bottom"
        />
      </div>
      <TechnologyOrbit />
    </div>
  );
}
