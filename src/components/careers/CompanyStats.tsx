import { motion } from 'framer-motion';
import Glass3DCard from '../ui/Glass3DCard';

export default function CompanyStats() {
  const stats = [
    { value: '100+', label: 'EMPLOYEES' },
    { value: '2', label: 'FACTORY LOCATIONS' },
    { value: '500+', label: 'DEALER PARTNERS' }
  ];

  return (
    <section className="py-24 bg-[#05080f]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              className="h-full"
            >
              <Glass3DCard className="h-full" glowColor="rgba(212, 175, 55, 0.1)">
                <div className="flex flex-col items-center justify-center p-12 group">
                  <h3 className="text-6xl md:text-7xl font-bold font-stylish text-white mb-4 tracking-tighter group-hover:text-[#D4AF37] transition-colors duration-500">
                    {stat.value}
                  </h3>
                  <p className="text-sm font-bold tracking-[0.2em] text-white/50 uppercase group-hover:text-white/80 transition-colors duration-300">
                    {stat.label}
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
