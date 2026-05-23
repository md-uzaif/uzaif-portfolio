import { SERVICES } from "@/lib/constants";

export const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center px-6 py-14 md:py-16"
    >
      <h2 className="text-center text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        What I Build
      </h2>
      <p className="mt-4 max-w-3xl text-center leading-7 text-gray-300">
        Backend-focused development services for businesses that need reliable
        systems, fast websites, and production-ready deployment.
      </p>

      <div className="mt-10 grid w-full max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="group relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-lg border border-[#2A0E61] bg-[#03001480] p-6 shadow-lg shadow-[#2A0E61]/20 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/70 hover:bg-[#080022cc] hover:shadow-cyan-500/20"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 opacity-0 transition duration-300 group-hover:opacity-100" />
            <div className="absolute -right-20 -top-20 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl transition duration-300 group-hover:bg-cyan-300/20" />
            <div className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-[#7042f88b] bg-[#12072c] text-cyan-300 shadow-md shadow-[#2A0E61]/20 transition duration-300 group-hover:border-cyan-300/80 group-hover:bg-cyan-300/10">
              <service.icon className="h-5 w-5" />
            </div>
            <h3 className="relative mt-5 text-xl font-semibold text-white">
              {service.title}
            </h3>
            <p className="relative mt-3 text-sm leading-6 text-gray-300 transition duration-300 group-hover:text-gray-100">
              {service.description}
            </p>
            <ul className="relative mt-5 flex flex-1 flex-col gap-3 text-sm leading-6 text-gray-300">
              {service.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-2 transition duration-200 group-hover:translate-x-1 group-hover:text-gray-100"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
