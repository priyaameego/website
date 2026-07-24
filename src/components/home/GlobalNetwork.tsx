import { motion } from 'framer-motion';

export default function GlobalNetwork() {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Content Side */}
        <div className="w-full lg:w-1/3">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="text-[#081C3A] font-bold tracking-widest uppercase text-[11px]">Global Supply Chain</span>
            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl text-[#1B2430] mb-6 leading-tight"
          >
            A Network Built on Reliability
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#4B5563] leading-relaxed"
          >
            Our sophisticated logistics network and strategically located distribution centers ensure just-in-time delivery for OEM partners across the globe. We maintain a zero-compromise approach to supply chain integrity.
          </motion.p>
        </div>
        
        {/* Stats Grid over Image */}
        <div className="w-full lg:w-2/3 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative w-full h-[300px] md:h-[400px] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8ed7c50800?q=80&w=2070&auto=format&fit=crop" 
              alt="Global Logistics" 
              className="w-full h-full object-cover grayscale opacity-90"
            />
            <div className="absolute inset-0 bg-[#081C3A]/40"></div>
            
            {/* Premium Stat Blocks */}
            <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end">
               <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {[
                    { val: '40+', label: 'Countries Served' },
                    { val: '12+', label: 'Distribution Hubs' },
                    { val: '5M+', label: 'Units Shipped Annually' },
                    { val: '99.9%', label: 'On-Time Delivery' }
                  ].map((stat, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + (idx * 0.1) }}
                      className="bg-white p-6 md:p-8 border-l-4 border-[#D4AF37] shadow-premium hover:shadow-premium-hover transition-shadow duration-300"
                    >
                      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#081C3A] mb-2">{stat.val}</div>
                      <div className="text-[10px] md:text-xs text-[#4B5563] font-bold uppercase tracking-widest">{stat.label}</div>
                    </motion.div>
                  ))}
               </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
