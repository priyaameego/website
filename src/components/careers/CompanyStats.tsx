import { motion } from 'framer-motion';

export default function CompanyStats() {
  const stats = [
    { value: '100+', label: 'EMPLOYEES' },
    { value: '2', label: 'FACTORY LOCATIONS' },
    { value: '500+', label: 'DEALER PARTNERS' }
  ];

  return (
    <section className="py-24 bg-[#FFFFFF] border-y border-[#E2E8F0]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col items-center justify-center p-8"
            >
              <h3 className="text-6xl font-black font-heading text-[#FF6B00] mb-4 tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-sm font-bold tracking-[0.2em] text-[#4B5563] uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
