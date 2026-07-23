import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ResearchInnovation() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const layer1Y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const layer2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={containerRef} className="py-32 bg-[#05080f] relative overflow-hidden flex flex-col justify-center min-h-[100vh]">
      
      {/* Background Orbs & Lights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#2E5B99]/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs border border-[#D4AF37]/30 px-6 py-2 rounded-full mb-8 inline-block">
                08. Research & Innovation
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-stylish font-bold text-white leading-[1.1] mb-8">
                The Science of <br />
                <span className="italic font-light text-[#D4AF37]">Material Perfection</span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-10 max-w-lg">
                Our ISO-certified laboratories are where the future of comfort is designed. We push materials to their absolute limits through rigorous durability testing, thermal imaging, and pressure mapping.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Dynamic Fatigue Testing (100k+ Cycles)",
                  "Thermal Conductivity & Breathability Analysis",
                  "Ergonomic Pressure Point Mapping",
                  "Advanced Polymer Synthesis"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                    <span className="text-white/80 font-light">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px]">
            {/* Parallax Image 1 */}
            <motion.div 
              style={{ y: layer1Y }}
              className="absolute top-0 right-0 w-3/4 h-[400px] rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop" 
                alt="Laboratory Testing"
                className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D] to-transparent opacity-60"></div>
            </motion.div>

            {/* Parallax Image 2 */}
            <motion.div 
              style={{ y: layer2Y }}
              className="absolute bottom-0 left-0 w-2/3 h-[300px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-20"
            >
              <img 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" 
                alt="Material Science"
                className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-[#D4AF37]/10 mix-blend-overlay"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
