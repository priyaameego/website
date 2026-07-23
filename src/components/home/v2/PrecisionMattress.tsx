import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function PrecisionMattress() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const layer1Y = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, -150, -300]);
  const layer2Y = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, -75, -150]);
  const layer3Y = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 0, 0]);
  const layer4Y = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 75, 150]);
  
  const rotateX = useTransform(scrollYProgress, [0, 1], [50, 70]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [-20, -40]);

  return (
    <section ref={containerRef} className="py-32 min-h-[150vh] bg-white relative overflow-hidden flex items-center">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row items-center gap-16 sticky top-0 h-screen py-24">
        
        <div className="w-full lg:w-1/2 z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#1B2430] font-bold tracking-[0.3em] uppercase text-xs border border-[#1B2430]/20 px-6 py-2 rounded-full mb-8 inline-block">
              04. Precision Mattress Engineering
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-stylish font-bold text-[#1B2430] leading-[1.1] mb-8">
              The Architecture <br />
              <span className="italic font-light text-[#D4AF37]">of Rest</span>
            </h2>
            <p className="text-lg text-[#4B5563] font-light leading-relaxed mb-8 max-w-xl">
              Our premium mattresses are engineered layer by layer. From the breathable cooling cover to the robust pocket spring core, every element works in harmony for perfect orthopedic alignment.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Cooling Knit Fabric", desc: "Temperature regulation surface" },
                { title: "Memory Foam Transition", desc: "Pressure point relief" },
                { title: "High Resilience Support", desc: "Spinal alignment layer" },
                { title: "Titanium Pocket Springs", desc: "Zero motion transfer core" }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 border-b border-gray-100 pb-4">
                  <div className="w-8 h-8 rounded-full bg-[#1B2430] text-white flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1B2430]">{feature.title}</h4>
                    <p className="text-sm text-[#4B5563] font-light">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 h-[600px] relative perspective-[1200px] flex items-center justify-center">
          <motion.div style={{ rotateX, rotateZ }} className="relative w-full max-w-[400px] h-[400px] transform-style-3d">
            
            {/* Layer 1: Cover */}
            <motion.div style={{ y: layer1Y }} className="absolute inset-0 bg-white shadow-2xl rounded-3xl border border-gray-200 flex items-center justify-center">
              <span className="text-[#1B2430] font-bold tracking-widest uppercase opacity-20 text-4xl">01</span>
            </motion.div>

            {/* Layer 2: Memory Foam */}
            <motion.div style={{ y: layer2Y }} className="absolute inset-0 bg-[#f0f4f8] shadow-2xl rounded-3xl border border-gray-200 flex items-center justify-center">
              <span className="text-[#1B2430] font-bold tracking-widest uppercase opacity-20 text-4xl">02</span>
            </motion.div>

            {/* Layer 3: HR Foam */}
            <motion.div style={{ y: layer3Y }} className="absolute inset-0 bg-[#e2e8f0] shadow-2xl rounded-3xl border border-gray-300 flex items-center justify-center">
              <span className="text-[#1B2430] font-bold tracking-widest uppercase opacity-20 text-4xl">03</span>
            </motion.div>

            {/* Layer 4: Springs (Base) */}
            <motion.div style={{ y: layer4Y }} className="absolute inset-0 bg-[#94a3b8] shadow-2xl rounded-3xl border border-gray-400 flex flex-wrap gap-2 p-6 justify-center items-center overflow-hidden">
              <span className="text-white font-bold tracking-widest uppercase opacity-20 text-4xl absolute z-10">04</span>
              {/* Fake springs pattern */}
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="w-8 h-8 border-2 border-gray-500 rounded-full opacity-30"></div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
