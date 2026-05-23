"use client";

import {
  Points,
  PointMaterial,
  type PointsInstancesProps,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import type { Points as PointsType } from "three";

const STAR_COUNT = 1800;
const STAR_POSITIONS = createStarPositions(STAR_COUNT);

function createStarPositions(count: number) {
  const positions = new Float32Array(count * 3);
  let seed = 2463534242;

  const nextValue = () => {
    seed ^= seed << 13;
    seed ^= seed >>> 17;
    seed ^= seed << 5;

    return (seed >>> 0) / 4294967296;
  };

  for (let index = 0; index < positions.length; index += 3) {
    let x = 0;
    let y = 0;
    let z = 0;
    let distance = 2;

    while (distance > 1) {
      x = nextValue() * 2 - 1;
      y = nextValue() * 2 - 1;
      z = nextValue() * 2 - 1;
      distance = x * x + y * y + z * z;
    }

    positions[index] = x * 1.2;
    positions[index + 1] = y * 1.2;
    positions[index + 2] = z * 1.2;
  }

  return positions;
}

export const StarBackground = (props: PointsInstancesProps) => {
  const ref = useRef<PointsType | null>(null);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={STAR_POSITIONS}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 h-full w-full">
    <Canvas
      camera={{ position: [0, 0, 1] }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);
