import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import sciImg from '../../assets/sci.jpeg';
import eImg from '../../assets/e.jpeg';

export default function OEMExcellence() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="py-32 bg-[#05080f] overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[11px]">B2B Partnerships</span>
              <div className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-stylish font-bold text-white mb-10 leading-[1.1] drop-shadow-lg">
              OEM <br />
              <span className="text-[#D4AF37] italic font-light">Excellence</span>
            </h2>
            
            <p className="text-xl text-white/70 mb-12 font-light leading-relaxed">
              We empower global sleep brands with end-to-end manufacturing solutions. From custom polymer formulations to automated roll-packing.
            </p>

            <ul className="space-y-6">
              {['Robotic Automation & Precision CNC', 'Custom Formulation & R&D', 'High-Volume Bulk Production', 'White Label & Private Label'].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                  <span className="text-white text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/2 relative h-[600px] flex items-center justify-center">
            <motion.div style={{ y: y1 }} className="absolute left-0 w-[60%] h-[70%] z-20 rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
              <img src={sciImg} alt="Robotics" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-[#0A101D]/20 hover:bg-transparent transition-colors duration-700"></div>
            </motion.div>
            
            <motion.div style={{ y: y2 }} className="absolute right-0 top-10 w-[55%] h-[60%] z-10 rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_30px_60px_rgba(212,175,55,0.1)]">
              <img src={eImg} alt="Testing" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#D4AF37]/10 mix-blend-overlay"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
