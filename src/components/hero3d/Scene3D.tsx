import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, SpotLight, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';
import FoamBlock from './FoamBlock';

export default function Scene3D() {
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Rotate the entire scene slightly on scroll/mouse
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        (state.pointer.x * Math.PI) / 10,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        (state.pointer.y * Math.PI) / 10,
        0.05
      );
    }
    
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0005;
      particlesRef.current.rotation.x += 0.0002;
    }
  });

  return (
    <>
      <Environment preset="city" />
      
      {/* Volumetric-style lighting */}
      <SpotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        color="#D4AF37"
        castShadow
      />
      <SpotLight
        position={[-5, 5, -5]}
        angle={0.5}
        penumbra={0.5}
        intensity={1}
        color="#081C3A"
      />
      
      {/* Floating Particles */}
      <Stars ref={particlesRef} radius={10} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />

      <group ref={groupRef}>
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <FoamBlock />
        </Float>
      </group>
    </>
  );
}
