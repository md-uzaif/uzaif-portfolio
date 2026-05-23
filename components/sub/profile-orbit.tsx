const ABOUT_VIDEO_SRC = "/videos/about-me.mp4";

export const ProfileOrbit = () => {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[430px] items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_42%,rgba(34,211,238,0.14),rgba(112,66,248,0.1)_44%,transparent_70%)]" />

      <div className="relative z-10 aspect-square w-[92%] overflow-hidden rounded-full border border-cyan-300/25 bg-[#030014] shadow-[0_0_70px_rgba(112,66,248,0.22),0_24px_80px_rgba(0,0,0,0.5)]">
        <video
          className="h-full w-full object-cover"
          src={ABOUT_VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="Uzaif professional profile video"
        />
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(145deg,rgba(255,255,255,0.08),transparent_35%,rgba(0,0,0,0.22)_78%)]" />
      </div>
    </div>
  );
};
