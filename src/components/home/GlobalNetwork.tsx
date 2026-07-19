import { motion } from 'framer-motion';

export default function GlobalNetwork() {
  return (
    <section className="py-24 bg-[#F4F7FA]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block border border-[#081C3A]/20 rounded-full px-6 py-2 bg-white mb-6"
        >
          <span className="text-[#081C3A] font-bold tracking-widest uppercase text-xs">Global Supply Chain</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-[#081C3A] font-heading leading-tight mb-6"
        >
          A Network Built on <span className="text-[#FF6B00]">Reliability</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-[#4B5563] max-w-3xl mx-auto mb-16"
        >
          Our sophisticated logistics network and strategically located distribution centers ensure just-in-time delivery for OEM partners across 40+ countries.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-md bg-[#081C3A]"
        >
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8ed7c50800?q=80&w=2070&auto=format&fit=crop" 
            alt="Global Logistics" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
             {/* Abstract map or stats could go here, using text for now */}
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
                {[
                  { val: '40+', label: 'Countries Served' },
                  { val: '12+', label: 'Distribution Hubs' },
                  { val: '5M+', label: 'Units Shipped Annually' },
                  { val: '99.9%', label: 'On-Time Delivery' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                    <div className="text-4xl md:text-5xl font-bold font-heading text-[#D4AF37] mb-2">{stat.val}</div>
                    <div className="text-xs md:text-sm font-bold tracking-wider uppercase">{stat.label}</div>
                  </div>
                ))}
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
