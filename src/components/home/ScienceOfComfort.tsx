import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Glass3DCard from '../ui/Glass3DCard';
import reImg from '../../assets/re.png';

export default function ScienceOfComfort() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#0A101D] relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-[-200px] w-[500px] h-[500px] bg-[#2E5B99]/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[11px]">
                ENGINEERED FOR PERFORMANCE
              </span>
              <div className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-stylish font-bold text-white leading-[1.1] mb-8 drop-shadow-lg">
              From Advanced Foam Engineering to Better <span className="text-[#D4AF37] italic font-light">Sleep</span>
            </h2>
            
            <p className="text-white/70 text-lg leading-relaxed mb-10 font-light">
              Every great mattress begins with exceptional foam. At Shakshi Group, we engineer high-performance polyurethane foam using advanced manufacturing technology, delivering superior comfort, durability, and support for residential, healthcare, hospitality, and industrial applications.
            </p>
            
            <Link 
              to="/about/manufacturing" 
              className="inline-flex items-center gap-4 text-white text-[13px] font-bold tracking-[0.2em] uppercase group"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)] group-hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)]">
                <span className="group-hover:text-[#0A101D] transition-colors duration-300">→</span>
              </div>
              <span>FOAM R&D</span>
            </Link>
          </motion.div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative h-[500px]">
            <Glass3DCard tiltIntensity={5} className="w-full h-full">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <motion.img 
                  style={{ y: imageY, scale: 1.1 }}
                  src={reImg} 
                  alt="Polyurethane foam production and inspection" 
                  className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D] via-transparent to-transparent opacity-80 pointer-events-none"></div>
                <div className="absolute inset-0 bg-[#D4AF37]/5 mix-blend-overlay pointer-events-none"></div>
              </div>
            </Glass3DCard>
          </div>

        </div>
      </div>
    </section>
  );
}
