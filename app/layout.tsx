import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsLayer } from "@/components/main/stars-layer";
import { siteConfig } from "@/lib/site-config";

import "@/styles/globals.css";

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="overflow-x-hidden bg-[#030014]">
        <StarsLayer />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
