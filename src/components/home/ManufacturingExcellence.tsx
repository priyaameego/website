import { motion } from 'framer-motion';

export default function ManufacturingExcellence() {
  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden text-center">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-[#E63946] uppercase mb-4 block">
            INSIDE OUR FACILITY
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-heading text-white">
            Factory Overview
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[21/9] group cursor-pointer"
        >
          {/* Main Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1565439390118-9fc12c40c839?q=80&w=2070&auto=format&fit=crop" 
            alt="Factory Overview" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          
          {/* Overlay to darken image slightly for better contrast */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>

          {/* Play Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-[#E63946] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(230,57,70,0.6)] transition-all duration-300">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 text-white ml-1" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-white font-medium tracking-wide drop-shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2">Watch Our Story</span>
          </div>

        </motion.div>
        
      </div>
    </section>
  );
}
