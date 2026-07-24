import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { TorusKnot, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PremiumAbstractObject() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Layers / Parts
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  const [hovered, setHover] = useState(false);
  const scale = useRef(1);

  // GSAP Animation State
  const scrollData = useRef({ progress: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "section",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          scrollData.current.progress = self.progress;
        }
      });
    });
    return () => ctx.revert();
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Hover logic
    const targetScale = hovered ? 1.2 : 1;
    scale.current = THREE.MathUtils.lerp(scale.current, targetScale, 0.05);
    
    if (groupRef.current) {
      groupRef.current.scale.set(scale.current, scale.current, scale.current);
    }

    if (coreRef.current && ring1Ref.current && ring2Ref.current) {
      // Continuous abstract rotation
      coreRef.current.rotation.y = time * 0.5;
      coreRef.current.rotation.x = time * 0.3;
      
      ring1Ref.current.rotation.z = time * 0.2;
      ring2Ref.current.rotation.x = -time * 0.15;

      // Scroll animation logic (splitting apart)
      const p = scrollData.current.progress;
      
      ring1Ref.current.position.y = THREE.MathUtils.lerp(0, 2, p);
      ring2Ref.current.position.y = THREE.MathUtils.lerp(0, -2, p);
      
      ring1Ref.current.scale.setScalar(THREE.MathUtils.lerp(1, 1.5, p));
      ring2Ref.current.scale.setScalar(THREE.MathUtils.lerp(1, 1.5, p));
    }
  });

  const goldMaterial = {
    color: "#D4AF37",
    roughness: 0.2,
    metalness: 1,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
  };

  const glassMaterial = {
    color: "#ffffff",
    roughness: 0.1,
    metalness: 0.8,
    transmission: 0.9,
    thickness: 1,
    ior: 1.5,
  };

  return (
    <group 
      ref={groupRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {/* Central Core */}
      <Icosahedron ref={coreRef} args={[1, 1]} position={[0, 0, 0]}>
        <meshPhysicalMaterial {...goldMaterial} wireframe={hovered} />
      </Icosahedron>

      {/* Abstract Ring 1 */}
      <TorusKnot ref={ring1Ref} args={[1.5, 0.1, 128, 16]} position={[0, 0, 0]}>
        <meshPhysicalMaterial {...glassMaterial} />
      </TorusKnot>

      {/* Abstract Ring 2 */}
      <TorusKnot ref={ring2Ref} args={[2, 0.05, 128, 16]} position={[0, 0, 0]}>
        <meshPhysicalMaterial {...goldMaterial} />
      </TorusKnot>
    </group>
  );
}
