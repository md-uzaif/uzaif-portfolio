import { ABOUT_POINTS } from "@/lib/constants";
import { ProfileOrbit } from "@/components/sub/profile-orbit";

export const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center px-6 py-14 md:py-16"
    >
      <div className="w-full max-w-6xl">
        <h2 className="text-center text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          About Me
        </h2>
        <div className="mt-8 grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <ProfileOrbit />

          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {ABOUT_POINTS.map((point) => (
              <div
                key={point}
                className="group relative overflow-hidden rounded-lg border border-[#2A0E61] bg-[#03001480] p-5 text-gray-300 shadow-lg shadow-[#2A0E61]/20 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/70 hover:bg-[#080022cc] hover:shadow-cyan-500/20"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="absolute -right-16 -top-16 h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl transition duration-300 group-hover:bg-cyan-300/20" />
                <p className="relative leading-7 transition duration-300 group-hover:text-white">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
