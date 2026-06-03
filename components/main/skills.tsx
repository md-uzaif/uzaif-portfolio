import { SkillText } from "@/components/sub/skill-text";

import { CORE_STACK, SKILL_CATEGORIES } from "@/lib/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative isolate flex h-full flex-col items-center justify-center gap-3 overflow-hidden py-14 md:py-16"
    >
      <div className="relative z-10 flex w-full flex-col items-center gap-3">
        <SkillText />

        <div className="grid w-full max-w-5xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_STACK.map(({ name, detail, icon: Icon }) => (
            <div
              key={name}
              className="group relative overflow-hidden rounded-lg border border-[#7042f88b] bg-[#030014cc] p-5 shadow-lg shadow-[#2A0E61]/20 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/70 hover:shadow-cyan-500/20"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 opacity-60 transition group-hover:opacity-100" />
              <Icon className="h-10 w-10 text-cyan-300 transition duration-300 group-hover:scale-110 group-hover:text-white" />
              <h3 className="mt-4 text-xl font-semibold text-white">{name}</h3>
              <p className="mt-2 text-sm text-gray-400">{detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-7 grid w-full max-w-6xl grid-cols-1 gap-5 px-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="group rounded-lg border border-[#2A0E61] bg-[#03001480] p-5 shadow-lg shadow-[#2A0E61]/20 transition duration-300 hover:-translate-y-1 hover:border-[#7042f88b] hover:bg-[#080022cc]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#7042f88b] bg-[#12052e] transition duration-300 group-hover:border-cyan-400 group-hover:bg-[#172554]">
                  <category.icon className="h-5 w-5 text-cyan-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-[#7042f88b] px-3 py-2 text-sm text-gray-200 transition duration-200 hover:border-cyan-300 hover:bg-cyan-300/10 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-30">
        <video
          className="h-full w-full object-cover"
          preload="metadata"
          playsInline
          loop
          muted
          autoPlay
        >
          <source src="/videos/skills-bg.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};
