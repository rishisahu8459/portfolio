import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  Icosahedron,
  Torus,
  MeshDistortMaterial,
  Sparkles,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";

// Smoothly steers a group toward the pointer for a parallax feel.
const ParallaxGroup = ({ children }) => {
  const group = useRef();
  const { pointer } = useThree();

  useFrame((state, delta) => {
    if (!group.current) return;
    const targetX = pointer.y * 0.25;
    const targetY = pointer.x * 0.45;
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      targetX,
      4,
      delta
    );
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      targetY,
      4,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
};

// Central distorted core: a glowing solid sphere wrapped by a wireframe shell.
const Core = () => {
  const wire = useRef();

  useFrame((_, delta) => {
    if (wire.current) {
      wire.current.rotation.y += delta * 0.15;
      wire.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <group>
      <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.2}>
        <Icosahedron args={[1.35, 12]}>
          <MeshDistortMaterial
            color="#0e7490"
            emissive="#22d3ee"
            emissiveIntensity={0.35}
            roughness={0.15}
            metalness={0.65}
            distort={0.35}
            speed={1.4}
          />
        </Icosahedron>
      </Float>

      <Icosahedron ref={wire} args={[1.85, 2]}>
        <meshBasicMaterial
          color="#2dd4bf"
          wireframe
          transparent
          opacity={0.22}
        />
      </Icosahedron>
    </group>
  );
};

// Orbiting accent shapes.
const OrbitShapes = () => {
  const shapes = useMemo(
    () => [
      { pos: [2.6, 1.2, -1], scale: 0.32, color: "#22d3ee" },
      { pos: [-2.8, -0.8, 0.5], scale: 0.24, color: "#5eead4" },
      { pos: [2.2, -1.6, 1], scale: 0.2, color: "#2dd4bf" },
      { pos: [-2.2, 1.7, -0.5], scale: 0.18, color: "#67e8f9" },
    ],
    []
  );

  return (
    <>
      {shapes.map((s, i) => (
        <Float
          key={i}
          speed={2 + i * 0.4}
          rotationIntensity={1.5}
          floatIntensity={2}
        >
          <Torus args={[s.scale, s.scale * 0.4, 16, 32]} position={s.pos}>
            <meshStandardMaterial
              color={s.color}
              emissive={s.color}
              emissiveIntensity={0.5}
              roughness={0.2}
              metalness={0.6}
            />
          </Torus>
        </Float>
      ))}
    </>
  );
};

const Scene = () => (
  <>
    <ambientLight intensity={0.6} />
    <directionalLight position={[5, 5, 5]} intensity={1.4} color="#5eead4" />
    <pointLight position={[-5, -2, 2]} intensity={2} color="#22d3ee" />

    <ParallaxGroup>
      <Core />
      <OrbitShapes />
    </ParallaxGroup>

    <Sparkles
      count={120}
      scale={[10, 8, 6]}
      size={2}
      speed={0.3}
      opacity={0.6}
      color="#5eead4"
    />
    <Environment preset="city" />
  </>
);

const HeroCanvas = () => {
  return (
    <Canvas
      className="!touch-none"
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default HeroCanvas;
