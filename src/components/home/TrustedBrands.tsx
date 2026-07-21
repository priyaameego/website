import { motion } from 'framer-motion';

export default function TrustedBrands() {
  const brands = ['Siemens', 'Bosch', 'ABB', 'Honeywell', 'Caterpillar'];
  
  return (
    <section className="py-16 bg-[#FFFFFF] border-b border-[#E2E8F0]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-70">
          {brands.map((brand, idx) => (
            <motion.div 
              key={brand} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-2xl font-heading font-bold text-center text-[#0f172a] grayscale hover:grayscale-0 hover:text-[#D4AF37] hover:scale-105 transition-all cursor-pointer duration-300"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
