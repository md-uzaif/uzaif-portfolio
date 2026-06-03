'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/lib/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 z-50 h-[65px] w-full bg-[#03001427] px-4 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md sm:px-10">
      <div className="m-auto flex h-full w-full items-center justify-between px-2.5">
        <Link href="#about-me" className="flex items-center gap-2.5">
          <Image
            src="/icon1.png"
            alt="Uzaif portfolio logo"
            width={56}
            height={56}
            draggable={false}
            className="h-12 w-12 cursor-pointer object-contain md:h-14 md:w-14"
          />
          <div className="hidden font-bold text-gray-300 md:flex">
            Uzaif
          </div>
        </Link>

        <div className="hidden h-full w-[500px] flex-row items-center justify-between md:mr-5 md:flex">
          <div className="flex h-auto w-full items-center justify-between rounded-full border border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-5 py-2.5 text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer transition hover:text-[rgb(112,66,248)]"
              >
                {link.title}
              </Link>
            ))}

            <Link
              href={LINKS.contact}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer transition hover:text-[rgb(112,66,248)]"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="hidden md:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              aria-label={name}
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="md:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden"
        >
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link
              href={LINKS.contact}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>

          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                aria-label={name}
              >
                <Icon className="h-8 w-8 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
