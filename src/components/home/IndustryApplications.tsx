import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Glass3DCard from '../ui/Glass3DCard';

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
    <section className="py-24 md:py-32 bg-[#0A101D] relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-[20%] left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-100px] w-[400px] h-[400px] bg-[#2E5B99]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[11px] border border-[#D4AF37]/30 px-6 py-2 rounded-full">Foam For Industry</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-stylish font-bold text-white leading-[1.1]"
            >
              Powering Global <span className="italic font-light text-[#D4AF37]">Sectors</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              to="/industries" 
              className="inline-flex items-center gap-4 text-white text-[13px] font-bold tracking-[0.2em] uppercase group"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)] group-hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)]">
                <span className="group-hover:text-[#0A101D] transition-colors duration-300">→</span>
              </div>
              <span>VIEW ALL INDUSTRIES</span>
            </Link>
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
              className="h-[280px]"
            >
              <Glass3DCard tiltIntensity={15} className="w-full h-full p-2 group cursor-pointer">
                <div className="w-full h-full relative overflow-hidden rounded-[16px]">
                  <img 
                    src={ind.img} 
                    alt={ind.name} 
                    className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-luminosity opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D] to-transparent flex items-end p-6 opacity-90 group-hover:opacity-60 transition-colors duration-500">
                    <h4 className="text-xl font-stylish font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300">{ind.name}</h4>
                  </div>
                </div>
              </Glass3DCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
