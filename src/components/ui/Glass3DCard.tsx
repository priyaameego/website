import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { ReactNode } from 'react';

interface Glass3DCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  tiltIntensity?: number;
}

export default function Glass3DCard({ 
  children, 
  className = "", 
  glowColor = "rgba(212, 175, 55, 0.15)", // Default gold glow
  tiltIntensity = 10 
}: Glass3DCardProps) {
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  
  const rotateX = useTransform(springY, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative group perspective-[1200px] ${className}`}
    >
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl -z-10"
        style={{ backgroundColor: glowColor }}
      />
      <div className="relative z-10 w-full h-full bg-white/5 dark:bg-[#0A101D]/50 border border-white/10 dark:border-white/5 backdrop-blur-xl rounded-2xl overflow-hidden hover:border-[#D4AF37]/50 transition-colors duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
        {/* Dynamic Light Reflection (Glare) */}
        <motion.div 
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl mix-blend-overlay"
          style={{
            background: useTransform(
              [springX, springY],
              ([x, y]) => `radial-gradient(600px circle at ${(x as number + 0.5) * 100}% ${(y as number + 0.5) * 100}%, rgba(255,255,255,0.4), transparent 40%)`
            )
          }}
        />
        <div style={{ transform: "translateZ(30px)" }} className="relative h-full w-full">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
