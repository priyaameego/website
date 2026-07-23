import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import fImg from '../../assets/f.jpeg';
import bedImg from '../../assets/bed.jpeg';

export default function EngineeringComfort() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scale and Position of the initial foam block
  const foamScale = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1.5, 3]);
  const foamOpacity = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 1, 0]);
  const foamRotateX = useTransform(scrollYProgress, [0, 0.2], [45, 0]);

  // Layers appearing
  const layer1Y = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [200, 0, -200]);
  const layer1Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.6], [0, 1, 1, 0]);

  const layer2Y = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [200, 0, -200]);
  const layer2Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.7], [0, 1, 1, 0]);

  // Bedroom transitioning
  const bedScale = useTransform(scrollYProgress, [0.6, 0.8, 1], [1.5, 1, 1]);
  const bedOpacity = useTransform(scrollYProgress, [0.6, 0.7, 1], [0, 1, 1]);

  const textY = useTransform(scrollYProgress, [0.7, 0.8], [50, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#0A101D]">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center perspective-[2000px]">
        
        {/* Step 1: Initial Foam Block */}
        <motion.div 
          style={{ 
            scale: foamScale, 
            opacity: foamOpacity,
            rotateX: foamRotateX,
            transformStyle: "preserve-3d" 
          }}
          className="absolute z-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] origin-center"
        >
          <img src={fImg} alt="Raw Foam" className="w-full h-full object-cover rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
          <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-[24px] mix-blend-overlay"></div>
        </motion.div>

        {/* Step 2: Layer Assembly */}
        <motion.div 
          style={{ y: layer1Y, opacity: layer1Opacity }}
          className="absolute z-20 w-[60vw] max-w-[800px] h-[100px] bg-gradient-to-r from-blue-500/20 to-blue-300/20 backdrop-blur-xl border border-blue-200/30 rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.3)] flex items-center justify-center"
        >
          <span className="text-white font-bold tracking-[0.2em] uppercase">High Resilience Core</span>
        </motion.div>

        <motion.div 
          style={{ y: layer2Y, opacity: layer2Opacity }}
          className="absolute z-30 w-[60vw] max-w-[800px] h-[100px] bg-gradient-to-r from-purple-500/20 to-purple-300/20 backdrop-blur-xl border border-purple-200/30 rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.3)] flex items-center justify-center"
        >
          <span className="text-white font-bold tracking-[0.2em] uppercase">Memory Foam Comfort Layer</span>
        </motion.div>

        {/* Step 3: Final Bedroom Scene */}
        <motion.div 
          style={{ scale: bedScale, opacity: bedOpacity }}
          className="absolute inset-0 z-0 origin-center"
        >
          <img src={bedImg} alt="Luxury Bedroom" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D] via-[#0A101D]/60 to-transparent"></div>
        </motion.div>

        {/* Text Overlays */}
        <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
          <motion.div 
            style={{ opacity: foamOpacity }}
            className="absolute top-[20%] text-center"
          >
            <h2 className="text-5xl md:text-7xl font-stylish font-bold text-white tracking-tight drop-shadow-2xl">
              Engineering <span className="text-[#D4AF37] italic font-light">Comfort</span>
            </h2>
            <p className="text-white/70 mt-4 tracking-widest uppercase text-sm">From raw polymer to perfect sleep</p>
          </motion.div>

          <motion.div 
            style={{ y: textY, opacity: textOpacity }}
            className="absolute bottom-[20%] text-center"
          >
            <p className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase mb-4 text-sm">The Final Experience</p>
            <h2 className="text-5xl md:text-7xl font-stylish font-bold text-white drop-shadow-2xl">
              Manufactured by <span className="italic font-light">Shakshi Group</span>
            </h2>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
