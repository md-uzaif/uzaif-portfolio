"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import { EXPERIENCE_TIMELINE } from "@/lib/constants";
import { TimelineItem } from "@/components/sub/timeline-item";

export const Experience = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "end 0.05"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    mass: 0.35,
  });
  const orbTop = useTransform(progress, (value) => `${value * 100}%`);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-16 md:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-28 h-56 w-56 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-16 right-10 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative w-full max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[36px] font-semibold text-white md:text-[42px]">
            My Experience
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-300">
            A compact view of the path from education into Java full stack,
            enterprise software, and founder-led product work.
          </p>
        </div>

        <div className="relative mt-10 md:mt-12">
          <div className="absolute inset-y-0 left-[13px] z-0 md:hidden">
            <div className="absolute inset-y-0 left-1/2 w-[4px] -translate-x-1/2 rounded-full bg-white/10" />
            <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 border-l border-dashed border-cyan-300/20" />
            <motion.div
              style={{ scaleY: progress }}
              className="absolute left-1/2 top-0 w-[4px] -translate-x-1/2 origin-top rounded-full bg-gradient-to-b from-cyan-300 via-purple-400 to-cyan-300 shadow-[0_0_22px_rgba(103,232,249,0.45)]"
            />
            <motion.div
              style={{ top: orbTop }}
              className="absolute left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/80 bg-[#0b0720] shadow-[0_0_20px_rgba(103,232,249,0.45)]"
            />
          </div>

          <div className="absolute inset-y-0 left-1/2 z-0 hidden -translate-x-1/2 md:block">
            <div className="absolute inset-y-0 left-1/2 w-[4px] -translate-x-1/2 rounded-full bg-white/10" />
            <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 border-l border-dashed border-cyan-300/20" />
            <motion.div
              style={{ scaleY: progress }}
              className="absolute left-1/2 top-0 w-[4px] -translate-x-1/2 origin-top rounded-full bg-gradient-to-b from-cyan-300 via-purple-400 to-cyan-300 shadow-[0_0_22px_rgba(103,232,249,0.45)]"
            />
            <motion.div
              style={{ top: orbTop }}
              className="absolute left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/80 bg-[#0b0720] shadow-[0_0_20px_rgba(103,232,249,0.45)]"
            />
          </div>

          <div className="relative z-10 grid gap-7 md:gap-10">
            {[...EXPERIENCE_TIMELINE].reverse().map((item, index) => (
              <TimelineItem
                key={`${item.title}-${item.year}`}
                index={index}
                title={item.title}
                year={item.year}
                location={"location" in item ? item.location : undefined}
                description={item.description}
                highlights={item.highlights}
                related={item.related}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
