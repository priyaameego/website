import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function OEMExcellence() {
  const containerRef = useRef<HTMLDivElement>(null);

  const images = [
    { src: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop", title: "Custom Manufacturing" },
    { src: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop", title: "Quality Assurance" },
    { src: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2070&auto=format&fit=crop", title: "Large-Scale Production" }
  ];

  return (
    <section ref={containerRef} className="bg-[#0A101D] relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row relative">
        
        {/* Sticky Content - Left Side */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-0 h-auto lg:h-screen flex flex-col justify-center py-24 lg:py-0 pr-0 lg:pr-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs border border-[#D4AF37]/30 px-6 py-2 rounded-full mb-8 inline-block">
              05. OEM Excellence
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-stylish font-bold text-white leading-[1.1] mb-8">
              Your Vision.<br />
              <span className="italic font-light text-[#D4AF37]">Our Scale.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-10 max-w-lg">
              We are the silent engine behind the world's leading comfort brands. Our private label manufacturing offers unmatched scalability, rigorous global standards compliance, and bespoke material engineering.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-4xl font-stylish font-bold text-white mb-2">10M+</div>
                <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">Units Annually</div>
              </div>
              <div>
                <div className="text-4xl font-stylish font-bold text-white mb-2">99.9%</div>
                <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">Quality Acceptance</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scrolling Imagery - Right Side */}
        <div className="w-full lg:w-1/2 py-24 lg:py-48 flex flex-col gap-32">
          {images.map((img, idx) => {
            return (
              <motion.div 
                key={idx} 
                className="relative h-[60vh] w-full rounded-2xl overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-10 left-10 text-white font-stylish font-bold text-3xl">
                  {img.title}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
