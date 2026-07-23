import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function OurBrandsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const brands = [
    { name: "Shakshi Foam", desc: "Industrial Grade", y: y1 },
    { name: "Softline", desc: "Luxury Comfort", y: y2 },
    { name: "Easylife", desc: "Everyday Support", y: y3 },
    { name: "Intimacy", desc: "Premium Orthopedic", y: y4 }
  ];

  return (
    <section ref={containerRef} className="py-32 bg-[#05080f] relative overflow-hidden min-h-[120vh] flex flex-col justify-center">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs border border-[#D4AF37]/30 px-6 py-2 rounded-full mb-8 inline-block">
              07. The Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-stylish font-bold text-white leading-[1.1]">
              Engineered for <span className="italic font-light text-[#D4AF37]">Every Need</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-32">
          {brands.map((brand, idx) => (
            <motion.div 
              key={idx}
              style={{ y: brand.y }}
              className="relative group cursor-pointer"
            >
              <div className="h-[400px] w-full rounded-[24px] bg-[#0A101D]/80 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center p-8 transition-all duration-500 group-hover:border-[#D4AF37]/50 group-hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] group-hover:-translate-y-4">
                
                {/* Brand Initial Placeholder / Logo */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/20 mb-8 flex items-center justify-center group-hover:scale-110 group-hover:border-[#D4AF37] transition-all duration-500 shadow-lg">
                  <span className="text-4xl font-stylish font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {brand.name.charAt(0)}
                  </span>
                </div>
                
                <h3 className="text-2xl font-stylish font-bold text-white mb-2 text-center group-hover:text-[#D4AF37] transition-colors">
                  {brand.name}
                </h3>
                <p className="text-[#D4AF37] font-bold tracking-widest uppercase text-[10px] text-center opacity-70">
                  {brand.desc}
                </p>
                
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
