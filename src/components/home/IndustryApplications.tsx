import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function IndustryApplications() {
  const industries = [
    { name: 'Automotive', img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Furniture & Bedding', img: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Healthcare', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Hospitality', img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Acoustics & Insulation', img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Custom OEM', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop' }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">Foam For Industry</span>
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-stylish font-bold text-[#1B2430] leading-tight"
            >
              Powering Global Sectors
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/industries" className="btn-secondary w-full md:w-auto text-center">VIEW ALL INDUSTRIES</Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {industries.map((ind, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative h-[280px] rounded-2xl overflow-hidden group cursor-pointer shadow-premium"
            >
              <img 
                src={ind.img} 
                alt={ind.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2430]/90 to-transparent flex items-end p-6 group-hover:bg-[#1B2430]/60 transition-colors duration-500">
                <h4 className="text-xl font-semibold text-white group-hover:text-[#D4AF37] transition-colors duration-300">{ind.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
