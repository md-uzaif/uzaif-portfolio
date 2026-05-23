import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/lib/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center px-6 py-14 md:py-16"
    >
      <h1 className="mb-10 text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 md:mb-12">
        My Projects
      </h1>
      <div className="grid h-full w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-4">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            stack={project.stack}
            contributions={project.contributions}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
