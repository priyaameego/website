import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import hImg from '../../assets/h.png';
import healthImg from '../../assets/he.png';
import autoImg from '../../assets/h1.png';
import furImg from '../../assets/fur.png';
import acousImg from '../../assets/au.png';
import customImg from '../../assets/ss2.png';

export default function IndustryApplications() {
  const industries = [
    { name: 'Automotive', img: autoImg },
    { name: 'Furniture & Bedding', img: furImg },
    { name: 'Healthcare', img: healthImg },
    { name: 'Hospitality', img: hImg },
    { name: 'Acoustics & Insulation', img: acousImg },
    { name: 'Custom OEM', img: customImg }
  ];

  return (
    <section className="py-24 bg-[#FFFFFF]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block border border-[#D4AF37]/30 rounded-full px-6 py-2 bg-[#D4AF37]/5 mb-6"
            >
              <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs">Foam For Industry</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#0f172a] font-heading leading-tight"
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
            <Link to="/industries" className="btn-outline text-sm w-full md:w-auto text-center">VIEW ALL INDUSTRIES</Link>
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
              className="relative h-[250px] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={ind.img} 
                alt={ind.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A]/90 to-transparent flex items-end p-6 group-hover:bg-[#081C3A]/60 transition-colors duration-500">
                <h4 className="text-lg font-bold text-white font-heading">{ind.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
