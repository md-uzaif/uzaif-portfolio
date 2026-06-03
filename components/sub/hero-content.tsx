"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial={false}
      animate="visible"
      className="z-[20] flex w-full flex-col items-center justify-center gap-8 px-6 pt-24 md:flex-row md:gap-10 md:px-20 md:pt-24"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-2 border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-2.5 h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Java Full Stack Developer • Founder Mindset
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="mt-5 flex h-auto w-auto max-w-[700px] flex-col gap-5 text-4xl text-bold text-white md:text-6xl"
        >
          <span>
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Uzaif
            </span>{" "}
            — backend-focused Java developer building real systems.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="mb-5 mt-4 max-w-[650px] text-lg leading-7 text-gray-300"
        >
          I work with Spring Boot, REST APIs, JWT security, MySQL, Hibernate,
          and practical frontend/CMS tools. I also run Uzaif Tech Solutions,
          where I build affordable websites and digital solutions for small
          businesses, startups, and local clients.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          href="#projects"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          View Projects
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="Developer tools and technology icons"
          height={650}
          width={650}
          preload
          sizes="(min-width: 768px) 50vw, 100vw"
          draggable={false}
          className="h-auto w-full max-w-[650px] select-none"
        />
      </motion.div>
    </motion.div>
  );
};
