import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Glass3DCard from '../ui/Glass3DCard';

export default function WhyChooseShakshi() {
  const reasons = [
    'OEM Manufacturing Expertise',
    '100+ Foam Variants',
    'Custom Foam Development',
    'In-house Quality Testing',
    'Advanced Manufacturing Facilities',
    'Pan-India Distribution',
    'Reliable Production Capacity'
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="py-32 bg-[#05080f] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-24 items-center">
          
          {/* Content Side */}
          <motion.div 
            style={{ y: y1 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
              <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[11px]">Corporate Advantage</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl text-white font-stylish font-bold mb-8 leading-[1.1] tracking-tight">
              Why Industries <br/><span className="text-[#D4AF37] italic">Choose Shakshi</span>
            </h2>
            
            <p className="text-lg text-white/60 mb-12 leading-relaxed font-light">
              We partner with leading businesses to deliver specialized foam and mattress solutions that meet precise technical and commercial requirements. Our commitment to quality and scale ensures a reliable supply chain for your manufacturing needs.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {reasons.map((reason, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300">
                    <CheckCircle2 size={16} strokeWidth={2} className="text-[#D4AF37] group-hover:text-[#0A101D] transition-colors" />
                  </div>
                  <span className="text-white/80 font-semibold text-[15px] group-hover:text-white transition-colors">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            style={{ y: y2, perspective: 1200 }}
            className="w-full lg:w-1/2 relative"
          >
            <Glass3DCard tiltIntensity={5} className="w-full">
              <div className="relative overflow-hidden rounded-2xl h-[600px] group">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                  alt="Advanced Manufacturing" 
                  className="absolute inset-0 w-full h-[120%] -translate-y-10 object-cover group-hover:translate-y-0 group-hover:scale-110 transition-transform duration-1000 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D] via-transparent to-transparent"></div>
              </div>
            </Glass3DCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
