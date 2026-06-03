"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <div className="relative isolate flex h-[420px] w-full flex-row items-center justify-center overflow-hidden md:h-[500px]">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Backend{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &
          </span>{" "}
          reliability.
        </motion.div>
      </div>

      <div className="absolute z-[20] flex h-auto w-auto translate-y-[-32px] flex-col items-center justify-center">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/lock-top.png"
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/lock-main.png"
            alt="Lock main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042F88B] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Spring Security + JWT</h1>
        </div>
      </div>

      <div className="absolute bottom-6 z-[20] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure APIs, validation, notifications, testing, and maintainable
          service structure.
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
