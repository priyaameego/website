import { motion } from 'framer-motion';
import Glass3DCard from '../ui/Glass3DCard';
import foamImg from '../../assets/screen.png';
import mattressImg from '../../assets/mat.png';
import pillowImg from '../../assets/pillow.jpeg';
import factoryImg from '../../assets/en.png';

export default function WhatWeDo() {
  const offerings = [
    {
      step: '01',
      title: 'Memory Foam',
      desc: 'Viscoelastic precision-graded foam engineered for pressure relief and thermal response.',
      image: foamImg,
    },
    {
      step: '02',
      title: 'Luxury Mattresses',
      desc: 'Multi-layer sleep systems built with hand-finished quilting and OEM-grade tolerances.',
      image: mattressImg,
    },
    {
      step: '03',
      title: 'Ergonomic Pillows',
      desc: 'Contour-engineered support cores designed around spinal alignment data.',
      image: pillowImg,
    },
    {
      step: '04',
      title: 'Industrial & OEM',
      desc: 'Custom density blocks and technical foam components for global manufacturing partners.',
      image: factoryImg,
    }
  ];

  return (
    <section className="relative py-32 md:py-40 bg-[#0A101D] overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[300px] -right-[300px] w-[800px] h-[800px] bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-full blur-[100px] opacity-40"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -left-[200px] w-[600px] h-[600px] bg-gradient-to-tl from-[#2E5B99]/5 to-transparent rounded-full blur-[120px] opacity-50"
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
             <span className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase border border-[#D4AF37]/30 px-6 py-2 rounded-full">Our Expertise</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[90px] text-white leading-[1.1] tracking-tight"
          >
            <span className="italic font-light font-stylish text-[#D4AF37]">Engineering Every</span><br/>
            <span className="font-bold font-stylish">Layer of Comfort</span>
          </motion.h2>
        </div>

        {/* 4-Card 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="h-[450px]"
            >
              <Glass3DCard tiltIntensity={10} className="h-full group">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden rounded-t-[32px]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-[120%] -translate-y-4 object-cover transition-transform duration-1000 group-hover:translate-y-0 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D] to-transparent"></div>
                </div>
                
                {/* Text Description */}
                <div className="p-8 flex flex-col flex-grow bg-[#0A101D]/80 rounded-b-[32px]">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#D4AF37] font-bold text-lg tracking-wider font-stylish">
                      {item.step}
                    </span>
                    <div className="h-[1px] w-8 bg-[#D4AF37]/50 group-hover:w-12 transition-all duration-500"></div>
                  </div>
                  <h3 className="text-white text-2xl font-bold font-stylish mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-[15px] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </Glass3DCard>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
