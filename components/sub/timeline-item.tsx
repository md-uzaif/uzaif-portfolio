"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Compass,
  GraduationCap,
  Layers3,
  MapPin,
  Rocket,
  TerminalSquare,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const iconMap = {
  graduation: GraduationCap,
  compass: Compass,
  "book-open": BookOpen,
  terminal: TerminalSquare,
  layers: Layers3,
  briefcase: Briefcase,
  rocket: Rocket,
} as const;

type TimelineItemProps = {
  title: string;
  year: string;
  description: string;
  highlights: readonly string[];
  related: readonly string[];
  icon: keyof typeof iconMap;
  index: number;
  location?: string;
};

export const TimelineItem = ({
  title,
  year,
  description,
  highlights,
  related,
  icon,
  index,
  location,
}: TimelineItemProps) => {
  const isLeft = index % 2 === 0;
  const Icon = iconMap[icon];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-10% 0px -10% 0px",
  });

  const card = (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -46 : 46, y: 28, scale: 0.98 }}
      animate={
        inView
          ? { opacity: 1, x: 0, y: 0, scale: 1 }
          : { opacity: 0, x: isLeft ? -46 : 46, y: 28, scale: 0.98 }
      }
      transition={{
        duration: 0.65,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative"
    >
      <div className="group relative overflow-hidden rounded-lg border border-[#2A0E61] bg-[#03001480] p-5 shadow-lg shadow-[#2A0E61]/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/70 hover:bg-[#080022cc] hover:shadow-cyan-500/20">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 opacity-70" />
        <div className="absolute -right-20 -top-20 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl transition duration-300 group-hover:bg-cyan-300/20" />

        <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan-300/80">
          {year}
        </p>
        <h3 className="mt-2 text-xl font-semibold leading-tight text-white md:text-[22px]">
          {title}
        </h3>

        {location ? (
          <p className="mt-3 flex items-center gap-2 text-sm text-gray-400">
            <MapPin className="h-4 w-4 text-cyan-300" />
            {location}
          </p>
        ) : null}

        <p className="mt-4 text-sm leading-7 text-gray-300 transition duration-300 group-hover:text-gray-100">
          {description}
        </p>

        {highlights.length ? (
          <div className="mt-5 grid gap-2.5">
            {highlights.slice(0, 2).map((highlight) => (
              <div
                key={highlight}
                className="flex gap-3 rounded-md border border-[#ffffff10] bg-[#ffffff06] px-3 py-2.5 text-sm leading-6 text-gray-300 transition duration-200 group-hover:border-cyan-300/20 group-hover:bg-cyan-300/5 group-hover:text-gray-100"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        ) : null}

        {related.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {related.slice(0, 2).map((item) => (
              <span
                key={item}
                className="rounded-md border border-[#7042f88b] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-gray-200 transition duration-200 group-hover:border-cyan-300/80 group-hover:bg-cyan-300/10 group-hover:text-white"
              >
                {item}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </motion.div>
  );

  const node = (
    <motion.div
      initial={{ scale: 0.8, opacity: 0.45 }}
      animate={
        inView
          ? { scale: 1, opacity: 1 }
          : { scale: 0.8, opacity: 0.45 }
      }
      transition={{
        duration: 0.5,
        delay: index * 0.04 + 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-[#111827] text-white shadow-[0_0_0_6px_rgba(3,0,20,0.95)]"
    >
      <motion.div
        animate={
          inView
            ? {
                boxShadow: [
                  "0 0 0 0 rgba(103,232,249,0.0)",
                  "0 0 16px 2px rgba(103,232,249,0.25)",
                  "0 0 10px 1px rgba(168,85,247,0.2)",
                ],
              }
            : { boxShadow: "0 0 0 0 rgba(0,0,0,0)" }
        }
        transition={{ duration: 0.8 }}
        className="flex h-5 w-5 items-center justify-center"
      >
        <Icon className="h-4 w-4" />
      </motion.div>
    </motion.div>
  );

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-[28px_1fr] gap-4 md:grid-cols-[1fr_80px_1fr] md:items-start md:gap-8"
    >
      <div className="hidden md:block">
        {isLeft ? (
          <div className="relative md:mr-10">
            {card}
            <div className="absolute right-[-60px] top-[18px]">{node}</div>
          </div>
        ) : (
          <div />
        )}
      </div>

      <div className="hidden md:block" />

      <div className="hidden md:block">
        {isLeft ? (
          <div />
        ) : (
          <div className="relative md:ml-10">
            {card}
            <div className="absolute left-[-60px] top-[18px]">{node}</div>
          </div>
        )}
      </div>

      <div className="flex justify-center self-start md:hidden">{node}</div>
      <div className="md:hidden">{card}</div>
    </div>
  );
};
