import { motion } from 'framer-motion';

export default function ManufacturingExcellence() {
  const processes = [
    { num: '01', title: 'Raw Material Processing', desc: 'Sourcing premium polymers with automated mixing algorithms.' },
    { num: '02', title: 'Precision Molding', desc: 'High-pressure injection and vacuum foaming for exact densities.' },
    { num: '03', title: 'CNC Profiling', desc: '5-axis automated cutting for complex geometries.' },
    { num: '04', title: 'Automated Assembly', desc: 'Robotic integration ensuring zero-defect product assembly.' }
  ];

  return (
    <section className="py-24 bg-[#FFFFFF]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border border-[#FF6B00]/30 rounded-full px-6 py-2 bg-[#FF6B00]/5 mb-6"
          >
            <span className="text-[#FF6B00] font-bold tracking-widest uppercase text-xs">Manufacturing Excellence</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#081C3A] font-heading leading-tight mb-6"
          >
            Inside Our Facility
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#4B5563]"
          >
            Explore our state-of-the-art production workflow designed for massive scale and uncompromised precision.
          </motion.p>
        </div>

        {/* Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {processes.map((proc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative bg-[#F4F7FA] p-8 rounded-2xl border border-[#E2E8F0] hover:-translate-y-2 hover:bg-[#FFFFFF] hover:shadow-[0_15px_35px_-10px_rgba(8,28,58,0.1)] transition-all duration-300 group"
            >
              <div className="text-6xl font-heading font-black text-[#E2E8F0] mb-4 group-hover:text-[#FF6B00]/20 transition-colors">
                {proc.num}
              </div>
              <h4 className="text-xl font-bold text-[#081C3A] mb-3">{proc.title}</h4>
              <p className="text-[#4B5563] text-sm leading-relaxed">{proc.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Big Industrial Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-[500px] rounded-3xl overflow-hidden relative shadow-premium group"
        >
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
            alt="CNC Machinery" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A]/90 via-[#081C3A]/40 to-transparent flex items-end p-10">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-bold text-white font-heading mb-4">Precision CNC Machinery</h3>
              <p className="text-gray-200">Our massive fleet of 5-axis CNC routers ensures complex foam profiles are cut with millimeter accuracy, catering specifically to automotive and technical acoustics.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
