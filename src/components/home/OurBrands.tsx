import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import easyImg from '../../assets/easy.png';

export default function OurBrands() {
  const brands = [
    { 
      name: 'SHAKSHI', 
      type: 'Industrial & Tech Foam', 
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
      type: 'Orthopedic Solutions', 
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
    <section className="py-24 md:py-32 bg-[#F7F8FA] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-24 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">Portfolio of Excellence</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-stylish font-bold text-[#1B2430] mb-6"
          >
            Our Family of Brands
          </motion.h2>
          
          <div className="w-12 h-[2px] bg-[#1B2430] mx-auto mb-8"></div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#4B5563]"
          >
            Serving diverse markets through specialized entities—from robust industrial engineering to luxurious residential comfort.
          </motion.p>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {brands.map((brand, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                
                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2 relative group"
                >
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-sm -z-10 transition-transform duration-500 translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                  <div className="overflow-hidden rounded-2xl shadow-premium relative">
                    <img 
                      src={brand.img} 
                      alt={brand.name} 
                      className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur px-5 py-2.5 rounded-full shadow-md">
                      <span className="text-[#1B2430] font-bold tracking-widest uppercase text-[10px]">Brand {idx + 1}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full lg:w-1/2 flex flex-col items-start"
                >
                  <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-xs mb-4">{brand.type}</span>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-stylish font-bold text-[#1B2430] mb-6">{brand.name}</h3>
                  <p className="text-lg text-[#4B5563] mb-10 leading-relaxed">{brand.desc}</p>
                  
                  <Link to={brand.path} className="btn-secondary group">
                    Explore {brand.name}
                    <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
