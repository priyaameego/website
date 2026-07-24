import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, CheckCircle2 } from 'lucide-react';
import Glass3DCard from '../ui/Glass3DCard';

export default function QualitySustainability() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const leafRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#05080f] text-white relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-0 right-[-100px] w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10 relative z-10"
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[11px] border border-[#D4AF37]/30 px-6 py-2 rounded-full">Quality & Certifications</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-stylish font-bold leading-[1.1] mb-8 text-white">
                Engineered to <span className="italic font-light text-[#D4AF37]">Perfection</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed font-light mb-8">
                Our ISO-certified laboratories conduct over 20 unique stress, thermal, and density tests on every batch. We ensure 100% compliance with international OEM specifications, maintaining a zero-defect tolerance.
              </p>
              <ul className="space-y-5">
                {['ISO 9001:2015 Certified', 'IATF 16949 Automotive Standards', 'RoHS & REACH Compliant', 'CertiPUR-US® Approved'].map((cert, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-white">
                    <CheckCircle2 className="text-[#D4AF37]" size={24} strokeWidth={1.5} />
                    <span className="font-semibold font-stylish">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-auto min-h-[550px]"
          >
            <Glass3DCard tiltIntensity={5} className="h-full w-full p-2 group">
              <div className="w-full h-full relative overflow-hidden rounded-[20px] bg-[#0A101D]/80 backdrop-blur-md p-10 md:p-14 border border-white/10 flex flex-col justify-center">
                
                <motion.div 
                  style={{ rotate: leafRotate }}
                  className="absolute -top-10 -right-10 text-[#D4AF37] opacity-10 pointer-events-none transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-20"
                >
                  <Leaf size={300} strokeWidth={0.5} />
                </motion.div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 text-white rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#D4AF37] group-hover:text-[#0A101D] group-hover:border-[#D4AF37] transition-all duration-500 shadow-sm">
                    <Leaf size={32} />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-stylish font-bold mb-6 text-white group-hover:text-[#D4AF37] transition-colors">Sustainable Manufacturing</h3>
                  <p className="text-white/70 text-lg leading-relaxed mb-10 font-light">
                    We are committed to a greener future. Our closed-loop manufacturing processes recycle 98% of foam offcuts. We are continuously reducing our carbon footprint through solar-powered facilities and eco-friendly chemical formulations.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                    <div className="group-hover:translate-x-2 transition-transform duration-500">
                      <div className="text-4xl font-stylish font-bold text-white mb-2 drop-shadow-sm group-hover:text-[#D4AF37] transition-colors">Zero</div>
                      <div className="text-[11px] font-bold text-white/50 uppercase tracking-widest">Ozone Depletion</div>
                    </div>
                    <div className="group-hover:-translate-x-2 transition-transform duration-500">
                      <div className="text-4xl font-stylish font-bold text-white mb-2 drop-shadow-sm group-hover:text-[#D4AF37] transition-colors">100%</div>
                      <div className="text-[11px] font-bold text-white/50 uppercase tracking-widest">Recyclable Scrap</div>
                    </div>
                  </div>
                </div>
              </div>
            </Glass3DCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
