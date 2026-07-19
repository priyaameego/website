import { motion } from 'framer-motion';

export default function IndustryApplications() {
  const industries = [
    { name: 'Automotive', img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop' },
    { name: 'Furniture & Bedding', img: 'https://images.unsplash.com/photo-1541123437800-1413158c30c5?q=80&w=800&auto=format&fit=crop' },
    { name: 'Healthcare', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop' },
    { name: 'Hospitality', img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop' },
    { name: 'Construction', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop' },
    { name: 'Packaging', img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop' },
    { name: 'OEM Manufacturing', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop' },
    { name: 'Industrial Applications', img: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=800&auto=format&fit=crop' }
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
              className="inline-block border border-[#FF6B00]/30 rounded-full px-6 py-2 bg-[#FF6B00]/5 mb-6"
            >
              <span className="text-[#FF6B00] font-bold tracking-widest uppercase text-xs">Foam For Industry</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#081C3A] font-heading leading-tight"
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
            <a href="#industries" className="btn-outline text-sm">VIEW ALL INDUSTRIES</a>
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
              className="relative h-[250px] rounded-xl overflow-hidden group cursor-pointer"
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
