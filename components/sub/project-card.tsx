import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  stack: readonly string[];
  contributions: readonly string[];
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  stack,
  contributions,
  link,
}: ProjectCardProps) => {
  const isExternalLink = /^https?:\/\//.test(link);

  return (
    <Link
      href={link}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noreferrer noopener" : undefined}
      aria-label={`Open ${title}`}
      className="group relative overflow-hidden rounded-lg border border-[#2A0E61] bg-[#03001480] shadow-lg shadow-[#2A0E61]/20 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/70 hover:shadow-cyan-500/20"
    >
      <div className="absolute inset-x-0 top-0 z-10 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative aspect-[16/9] w-full bg-[#050816]">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-contain transition duration-500 group-hover:scale-[1.03] group-hover:brightness-110"
        />
      </div>

      <div className="relative p-4">
        <div className="absolute -right-20 -top-20 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl transition duration-300 group-hover:bg-cyan-300/20" />
        <h1 className="relative text-2xl font-semibold text-white transition duration-300 group-hover:text-cyan-100">
          {title}
        </h1>
        <p className="relative mt-2 text-gray-300 transition duration-300 group-hover:text-gray-100">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-md border border-[#7042f88b] px-2 py-1 text-xs text-gray-200 transition duration-200 group-hover:border-cyan-300/80 group-hover:bg-cyan-300/10"
            >
              {item}
            </span>
          ))}
        </div>
        <ul className="mt-4 space-y-2 text-sm text-gray-300">
          {contributions.map((item) => (
            <li
              key={item}
              className="transition duration-200 group-hover:translate-x-1 group-hover:text-gray-100"
            >
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};
