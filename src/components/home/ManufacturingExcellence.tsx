import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import mfgImg from '../../assets/en.png';
import Glass3DCard from '../ui/Glass3DCard';

export default function ManufacturingExcellence() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#05080f] overflow-hidden relative">
      
      {/* Background Orbs */}
      <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Content Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col items-start relative z-10"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[11px] border border-[#D4AF37]/30 px-6 py-2 rounded-full">Manufacturing Excellence</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-stylish font-bold mb-8 leading-[1.1]">
            Precision <span className="italic font-light text-[#D4AF37]">Engineering</span> at Scale
          </h2>
          
          <p className="text-lg text-white/70 mb-6 leading-relaxed font-light">
            Our state-of-the-art facilities combine advanced automation with meticulous quality control. From technical industrial foams to luxury sleep systems, we maintain uncompromising standards across every production line.
          </p>

          <p className="text-lg text-white/70 mb-10 leading-relaxed font-light">
            With over two decades of manufacturing expertise, we leverage cutting-edge German technology to deliver consistent, high-performance materials to our global partners.
          </p>
          
          <Link to="/about/manufacturing" className="inline-flex items-center gap-4 text-white text-[13px] font-bold tracking-[0.2em] uppercase group">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)] group-hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)]">
              <span className="group-hover:text-[#0A101D] transition-colors duration-300">→</span>
            </div>
            <span>Explore Our Facilities</span>
          </Link>
        </motion.div>

        {/* Image Side with Glass3DCard */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2 relative h-[500px] md:h-[600px]"
        >
          <Glass3DCard tiltIntensity={5} className="w-full h-full p-2 group">
            <div className="relative w-full h-full overflow-hidden rounded-[20px]">
              <motion.img 
                style={{ y: imageY, scale: 1.1 }}
                src={mfgImg} 
                alt="State of the art manufacturing facility" 
                className="w-full h-full object-cover opacity-80 grayscale mix-blend-luminosity hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D] via-transparent to-transparent opacity-80 pointer-events-none"></div>
              <div className="absolute inset-0 bg-[#D4AF37]/5 mix-blend-overlay pointer-events-none"></div>
              
              {/* Minimalist Data Block Overlay */}
              <div className="absolute bottom-6 left-6 bg-[#0A101D]/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl">
                <div className="flex gap-8">
                  <div>
                    <div className="text-3xl font-bold font-stylish text-white mb-1 group-hover:text-[#D4AF37] transition-colors">500k+</div>
                    <div className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Sq. Ft. Facility</div>
                  </div>
                  <div className="w-[1px] bg-white/10"></div>
                  <div>
                    <div className="text-3xl font-bold font-stylish text-white mb-1 group-hover:text-[#D4AF37] transition-colors">ISO</div>
                    <div className="text-[10px] text-white/50 font-bold uppercase tracking-widest">9001:2015</div>
                  </div>
                </div>
              </div>
            </div>
          </Glass3DCard>
        </motion.div>

      </div>
    </section>
  );
}
