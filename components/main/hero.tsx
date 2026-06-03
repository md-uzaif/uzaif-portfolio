import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen w-full flex-col overflow-hidden pb-14 md:pb-20"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-x-0 top-0 -z-10 h-[36vh] min-h-[220px] w-full rotate-180 object-cover object-top opacity-90 md:h-[64vh] md:min-h-[330px] md:object-top"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </section>
  );
};
