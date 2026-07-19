import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function OurBrands() {
  const brands = [
    { name: 'SHAKSHI', type: 'Industrial & Tech Foam', img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop' },
    { name: 'EASYLIFE', type: 'Premium Mattresses', img: 'https://images.unsplash.com/photo-1541123437800-1413158c30c5?q=80&w=1000&auto=format&fit=crop' },
    { name: 'SOFTLINE', type: 'Comfort Solutions', img: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1000&auto=format&fit=crop' },
    { name: 'INTIMACY', type: 'Luxury Sleep', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop' }
  ];

  return (
    <section className="py-24 bg-[#F4F7FA]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border border-[#081C3A]/20 rounded-full px-6 py-2 bg-white mb-6"
          >
            <span className="text-[#081C3A] font-bold tracking-widest uppercase text-xs">Our Brands</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#081C3A] font-heading leading-tight mb-6"
          >
            A Portfolio of <span className="text-[#FF6B00]">Excellence</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#4B5563]"
          >
            Discover our specialized child brands tailored to meet specific market demands—from robust industrial applications to luxurious comfort.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-premium transition-shadow duration-500"
            >
              <img 
                src={brand.img} 
                alt={brand.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A]/90 via-[#081C3A]/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white font-heading tracking-wider mb-1">{brand.name}</h3>
                <p className="text-[#D4AF37] text-sm font-medium mb-4 uppercase tracking-widest">{brand.type}</p>
                <div className="flex items-center text-white text-sm font-bold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  VISIT BRAND <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
