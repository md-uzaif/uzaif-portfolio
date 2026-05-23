"use client";

import dynamic from "next/dynamic";

const StarsCanvas = dynamic(
  () =>
    import("@/components/main/star-background").then(
      ({ StarsCanvas: Canvas }) => Canvas,
    ),
  { ssr: false },
);

export const StarsLayer = () => <StarsCanvas />;
