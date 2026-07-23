import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import easyImg from '../../assets/easy.png';
import Glass3DCard from '../ui/Glass3DCard';

// Parallax Row Component
function BrandRow({ brand, idx }: { brand: any, idx: number }) {
  const isEven = idx % 2 === 0;
  const rowRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <div ref={rowRef} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
      
      {/* Image Side with Parallax & Glass3DCard */}
      <motion.div 
        style={{ y: imgY }}
        className="w-full lg:w-[55%] relative z-10 h-[400px] md:h-[550px]"
      >
        <Glass3DCard tiltIntensity={5} className="w-full h-full group p-2">
          <div className="w-full h-full relative overflow-hidden rounded-[20px]">
            <motion.img 
              src={brand.img} 
              alt={brand.name} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 origin-center opacity-80 grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-8 left-8 bg-[#0A101D]/80 border border-white/10 backdrop-blur-md px-6 py-3 rounded-full shadow-lg translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              <span className="text-white font-bold tracking-[0.2em] uppercase text-[10px]">Brand {idx + 1}</span>
            </div>
          </div>
        </Glass3DCard>
      </motion.div>

      {/* Content Side with Parallax */}
      <motion.div 
        style={{ y: textY }}
        className="w-full lg:w-[45%] flex flex-col items-start relative z-20"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
          <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[11px]">{brand.type}</span>
        </div>
        <h3 className="text-5xl md:text-6xl lg:text-[70px] font-stylish font-bold text-white mb-8 leading-[1.1]">{brand.name}</h3>
        <p className="text-[17px] text-white/70 mb-12 leading-relaxed max-w-md font-light">{brand.desc}</p>
        
        <Link to={brand.path} className="group flex items-center gap-4 text-white font-bold text-[12px] tracking-widest uppercase hover:text-[#D4AF37] transition-colors relative">
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:scale-110 transition-all duration-500 bg-white/5 shadow-[0_10px_20px_rgba(0,0,0,0.2)] group-hover:bg-[#D4AF37] group-hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)]">
            <ArrowRight size={16} className="group-hover:translate-x-1 group-hover:text-[#0A101D] transition-all duration-300" />
          </div>
          <span className="relative overflow-hidden">
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Explore {brand.name}</span>
            <span className="absolute left-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-[#D4AF37]">Explore {brand.name}</span>
          </span>
        </Link>
      </motion.div>
      
    </div>
  );
}

export default function OurBrands() {
  const brands = [
    { 
      name: 'SHAKSHI', 
      type: 'Industrial Foam', 
      desc: 'Engineered for resilience and precision. Shakshi delivers advanced foam solutions tailored for automotive, packaging, and high-performance industrial applications.',
      img: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2070&auto=format&fit=crop', 
      path: '/brands/shakshi' 
    },
    { 
      name: 'EASYLIFE', 
      type: 'Premium Mattresses', 
      desc: 'Bringing comfort to millions. Easylife combines ergonomic support with premium materials to create mattresses designed for deep, restorative sleep.',
      img: easyImg, 
      path: '/brands/easylife' 
    },
    { 
      name: 'SOFTLINE', 
      type: 'Orthopedic Sleep', 
      desc: 'Medically engineered sleep systems. Softline focuses on spinal alignment and therapeutic support, recommended by experts for superior back care.',
      img: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2070&auto=format&fit=crop', 
      path: '/brands/softline' 
    },
    { 
      name: 'INTIMACY', 
      type: 'Luxury Sleep', 
      desc: 'The pinnacle of bedroom luxury. Intimacy mattresses are crafted with exquisite materials and pocket spring technology for an unparalleled sleep experience.',
      img: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2070&auto=format&fit=crop', 
      path: '/brands/intimacy' 
    }
  ];

  return (
    <section className="relative py-32 md:py-48 bg-[#05080f] overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-4xl mx-auto mb-32 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase border border-[#D4AF37]/30 px-6 py-2 rounded-full">Portfolio of Excellence</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[90px] font-stylish font-bold text-white leading-[1.05] tracking-tight mb-8"
          >
            Our Family of Brands
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl font-light"
          >
            Serving diverse markets through specialized entities—from robust industrial engineering to luxurious residential comfort.
          </motion.p>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {brands.map((brand, idx) => (
            <BrandRow key={idx} brand={brand} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
