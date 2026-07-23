import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function EngineeringComfort() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[120vh] bg-[#05080f] overflow-hidden"
    >
      {/* Sticky Container for Cinematic Effect */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Cinematic Background Image */}
        <motion.div 
          style={{ scale, y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop" 
            alt="Premium Mattress Engineering" 
            className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-[#05080f]/50 to-transparent"></div>
        </motion.div>

        {/* Floating Content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div 
            style={{ opacity, y }}
            className="max-w-[1200px] w-full px-6 md:px-12 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-xs md:text-sm border border-[#D4AF37]/30 px-6 py-2 rounded-full mb-8 inline-block backdrop-blur-md bg-black/20">
                01. Engineering Comfort
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-[100px] font-stylish font-bold text-white leading-[0.9] tracking-tight mb-8">
                The Anatomy of <br />
                <span className="italic font-light text-[#D4AF37]">Perfect Sleep</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
                Watch raw engineering transform into luxury. Advanced polyurethane foam layers meticulously cut and assembled for absolute pressure relief.
              </p>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
