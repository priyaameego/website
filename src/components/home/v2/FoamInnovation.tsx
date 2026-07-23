import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Glass3DCard from '../../ui/Glass3DCard';

export default function FoamInnovation() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const panX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  
  const features = [
    { title: "Precision Engineering", desc: "Density controlled to the micro-level for consistent resilience." },
    { title: "Pressure Relief", desc: "Adaptive cell structure contours instantly to applied weight." },
    { title: "Durability Tested", desc: "Endures 100,000+ compression cycles with zero degradation." }
  ];

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-white">
      
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.img 
          style={{ x: panX }}
          src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop" 
          alt="Foam Expansion Lab" 
          className="w-[120%] h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#1B2430] font-bold tracking-[0.3em] uppercase text-xs border border-[#1B2430]/20 px-6 py-2 rounded-full mb-8 inline-block">
                02. Foam Innovation
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-stylish font-bold text-[#1B2430] leading-[1.1] mb-8">
                Mastering the <br />
                <span className="italic font-light text-[#D4AF37]">Cellular Level</span>
              </h2>
              <p className="text-lg md:text-xl text-[#4B5563] font-light leading-relaxed mb-10 max-w-xl">
                Our proprietary polyurethane formulations create foams with unprecedented airflow, rapid recovery, and thermoregulation. We don't just pour foam; we engineer performance material.
              </p>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid gap-6">
              {features.map((feat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.8 }}
                  className="h-[140px]"
                >
                  <Glass3DCard tiltIntensity={5} className="h-full group">
                    <div className="p-8 h-full bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_20px_40px_rgba(0,0,0,0.03)] rounded-2xl flex flex-col justify-center transition-all duration-500 group-hover:bg-white group-hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)]">
                      <h4 className="text-xl font-bold font-stylish text-[#1B2430] mb-2">{feat.title}</h4>
                      <p className="text-[#4B5563] font-light text-sm">{feat.desc}</p>
                    </div>
                  </Glass3DCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
