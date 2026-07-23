import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

import bedImg from '../../assets/bed.jpeg';
import easyImg from '../../assets/easy.png';
import luxuryImg from '../../assets/pillow.jpeg';

// Premium 3D Dark Glass Card Component
function DarkGlassCard({ item, index }: { item: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative flex flex-col group cursor-pointer [perspective:1000px] h-full"
    >
      <div className="absolute inset-0 bg-[#111C30]/40 backdrop-blur-2xl rounded-[32px] border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.4)] transition-all duration-500 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)] group-hover:border-white/20 group-hover:bg-[#111C30]/60"></div>
      
      {/* Glare effect */}
      <motion.div 
        className="absolute inset-0 z-20 rounded-[32px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"
        style={{
          background: useTransform(
            () => `radial-gradient(circle at ${(x.get() + 0.5) * 100}% ${(y.get() + 0.5) * 100}%, rgba(212,175,55,0.15) 0%, transparent 60%)`
          )
        }}
      />

      <div 
        className="relative z-10 flex flex-col h-full p-6"
        style={{ transform: "translateZ(30px)" }}
      >
        <div className="relative h-56 md:h-64 overflow-hidden rounded-[20px] mb-8 shadow-inner">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <motion.img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover origin-center transition-transform duration-700 group-hover:scale-110"
            style={{ transform: "translateZ(20px)" }}
          />
        </div>
        
        <div className="px-2 flex-grow flex flex-col" style={{ transform: "translateZ(40px)" }}>
          <h3 className="text-white text-2xl font-bold font-stylish mb-3 group-hover:text-[#D4AF37] transition-colors">
            {item.title}
          </h3>
          <p className="text-[#94A3B8] text-[15px] leading-relaxed mb-8 flex-grow">
            {item.desc}
          </p>
          <Link to={item.link} className="inline-flex items-center text-[#D4AF37] font-bold text-xs tracking-widest uppercase mt-auto group/link">
            <div className="w-8 h-8 rounded-full border border-[#D4AF37]/30 flex items-center justify-center mr-3 group-hover/link:border-[#D4AF37] group-hover/link:bg-[#D4AF37] group-hover/link:text-[#0A101D] transition-all duration-300">
              <span className="transition-transform duration-300">→</span> 
            </div>
            VIEW RANGE
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductLine() {
  const products = [
    {
      title: 'CloudRest Series',
      desc: 'Adaptive memory foam with cooling gel infusion for temperature-neutral sleep.',
      image: easyImg,
      link: '/brands/easylife'
    },
    {
      title: 'Orthocare Support',
      desc: 'Zoned firmness engineering built around ergonomic spinal research.',
      image: bedImg,
      link: '/brands/softline'
    },
    {
      title: 'OEM Foam Blocks',
      desc: 'Custom density and cut specifications for industrial and automotive partners.',
      image: luxuryImg,
      link: '/brands/shakshi'
    }
  ];

  return (
    <section className="relative py-32 md:py-40 bg-[#0A101D] overflow-hidden">
      {/* Cinematic Lighting Background */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#081C3A]/40 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="text-center mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
             <span className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase border border-[#D4AF37]/30 px-6 py-2 rounded-full">Product Line</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-[80px] text-white font-stylish italic font-light leading-tight drop-shadow-2xl"
          >
            Crafted for Every Sleep Need
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((item, index) => (
            <DarkGlassCard key={index} item={item} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
