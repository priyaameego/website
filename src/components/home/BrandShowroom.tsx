import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

import bedImg from '../../assets/bed.jpeg';

export default function BrandShowroom() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const brands = [
    { name: 'Shakshi', category: 'Industrial Foam Solutions', link: '/brands/shakshi', img: bedImg, yOffset: 50 },
    { name: 'Easylife', category: 'Premium Mattresses', link: '/brands/easylife', img: bedImg, yOffset: -50 },
    { name: 'Softline', category: 'Orthopedic Sleep', link: '/brands/softline', img: bedImg, yOffset: 80 },
    { name: 'Intimacy', category: 'Luxury Sleep Experience', link: '/brands/intimacy', img: bedImg, yOffset: -30 },
  ];

  return (
    <section ref={containerRef} className="py-32 bg-[#05080f] overflow-hidden relative perspective-[2000px]">
      
      {/* Dynamic Background Light */}
      <motion.div 
        style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.5]), opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0.1]) }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#D4AF37]/20 to-transparent rounded-full blur-[100px] pointer-events-none"
      ></motion.div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-stylish font-bold text-white drop-shadow-lg mb-6">
          The <span className="italic font-light text-[#D4AF37]">Showroom</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
          Discover our portfolio of premium consumer and industrial brands, crafted with decades of manufacturing excellence.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand, idx) => {
            const y = useTransform(scrollYProgress, [0, 1], [brand.yOffset, -brand.yOffset]);
            
            return (
              <motion.div 
                key={idx}
                style={{ y }}
                className="group relative"
              >
                <Link to={brand.link} className="block w-full aspect-[3/4] rounded-3xl overflow-hidden relative shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/5 bg-white/5 backdrop-blur-sm transition-transform duration-700 group-hover:-translate-y-4 group-hover:border-[#D4AF37]/30">
                  
                  {/* Floating Image */}
                  <div className="absolute inset-x-4 top-4 bottom-[100px] rounded-2xl overflow-hidden">
                    <img src={brand.img} alt={brand.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D] to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
                  </div>

                  {/* Brand Content */}
                  <div className="absolute bottom-0 left-0 w-full p-8 text-center flex flex-col items-center justify-end">
                    <div className="h-[1px] w-12 bg-[#D4AF37] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                    <h3 className="text-3xl font-stylish font-bold text-white mb-2">{brand.name}</h3>
                    <p className="text-[#D4AF37] text-[11px] font-bold tracking-[0.2em] uppercase">{brand.category}</p>
                  </div>
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-[#D4AF37] opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none"></div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
      
    </section>
  );
}
