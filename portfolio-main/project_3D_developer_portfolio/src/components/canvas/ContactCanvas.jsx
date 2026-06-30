import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles, Line, Trail } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

// A low-poly paper airplane built from a few triangles.
const PaperPlane = React.forwardRef((props, ref) => {
  const geometry = useMemo(() => {
    // Vertices for a stylized paper plane pointing toward +Z.
    const v = {
      nose: [0, 0, 0.9],
      tail: [0, 0, -0.5],
      left: [-0.7, 0, -0.45],
      right: [0.7, 0, -0.45],
      keel: [0, -0.22, -0.45],
    };
    const positions = new Float32Array([
      // left wing (top)
      ...v.nose, ...v.tail, ...v.left,
      // right wing (top)
      ...v.nose, ...v.right, ...v.tail,
      // left underside
      ...v.nose, ...v.keel, ...v.tail,
      // right underside
      ...v.nose, ...v.tail, ...v.keel,
    ]);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.computeVertexNormals();
    return geo;
  }, []);

  return (
    <group ref={ref} {...props}>
      {/* Solid translucent body */}
      <mesh geometry={geometry}>
        <meshStandardMaterial
          color="#0e7490"
          emissive="#22d3ee"
          emissiveIntensity={0.35}
          metalness={0.4}
          roughness={0.25}
          side={THREE.DoubleSide}
          transparent
          opacity={0.92}
        />
      </mesh>
      {/* Glowing edges */}
      <lineSegments>
        <edgesGeometry args={[geometry]} />
        <lineBasicMaterial color="#5eead4" transparent opacity={0.9} />
      </lineSegments>
    </group>
  );
});
PaperPlane.displayName = "PaperPlane";

// Flight path: a smooth looping closed curve in 3D space.
const useFlightPath = () =>
  useMemo(() => {
    const pts = [
      new THREE.Vector3(-2.6, -0.8, 0.5),
      new THREE.Vector3(-1.2, 0.9, -1.2),
      new THREE.Vector3(1.0, 1.4, 0.6),
      new THREE.Vector3(2.6, 0.2, -0.8),
      new THREE.Vector3(1.4, -1.3, 0.9),
      new THREE.Vector3(-0.8, -1.5, -0.6),
    ];
    return new THREE.CatmullRomCurve3(pts, true, "catmullrom", 0.5);
  }, []);

const FlyingPlane = () => {
  const planeRef = useRef();
  const curve = useFlightPath();
  const { pointer } = useThree();
  const tmpTarget = useRef(new THREE.Vector3());

  // Dotted guide line of the path.
  const linePoints = useMemo(() => curve.getPoints(120), [curve]);

  useFrame((state) => {
    if (!planeRef.current) return;
    const t = (state.clock.elapsedTime * 0.06) % 1;
    const pos = curve.getPointAt(t);
    const ahead = curve.getPointAt((t + 0.01) % 1);

    // Gentle cursor parallax offset.
    pos.x += pointer.x * 0.4;
    pos.y += pointer.y * 0.3;
    planeRef.current.position.copy(pos);

    // Orient the plane along its direction of travel.
    tmpTarget.current
      .copy(ahead)
      .add(new THREE.Vector3(pointer.x * 0.4, pointer.y * 0.3, 0));
    planeRef.current.lookAt(tmpTarget.current);
    // Bank into turns for a lively feel.
    planeRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.6) * 0.4;
  });

  return (
    <>
      <Line
        points={linePoints}
        color="#22d3ee"
        lineWidth={1}
        transparent
        opacity={0.25}
        dashed
        dashSize={0.18}
        gapSize={0.14}
      />

      <Trail
        width={3}
        length={6}
        color={new THREE.Color("#5eead4")}
        attenuation={(w) => w * w}
      >
        <PaperPlane ref={planeRef} scale={0.6} />
      </Trail>
    </>
  );
};

const Scene = () => (
  <>
    <ambientLight intensity={0.7} />
    <pointLight position={[4, 3, 4]} intensity={2.2} color="#5eead4" />
    <directionalLight position={[-3, 2, 1]} intensity={1} color="#22d3ee" />

    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
      <FlyingPlane />
    </Float>

    <Sparkles
      count={70}
      scale={[9, 7, 6]}
      size={2}
      speed={0.25}
      opacity={0.5}
      color="#5eead4"
    />
  </>
);

const ContactCanvas = () => {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default ContactCanvas;
