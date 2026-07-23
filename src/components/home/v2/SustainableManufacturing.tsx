import { motion } from 'framer-motion';
import Glass3DCard from '../../ui/Glass3DCard';

export default function SustainableManufacturing() {
  return (
    <section className="py-32 bg-[#F7F8FA] relative overflow-hidden">
      
      {/* Soft Light Reflections */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#e2e8f0] rounded-full blur-[120px] opacity-50 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2 relative h-[600px]">
            <Glass3DCard tiltIntensity={5} className="w-full h-full">
              <div className="w-full h-full rounded-[32px] overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white p-4 relative">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
                  alt="Sustainable Technology"
                  className="w-full h-full object-cover rounded-[24px]"
                />
                <div className="absolute inset-0 rounded-[24px] bg-gradient-to-t from-white/40 to-transparent"></div>
              </div>
            </Glass3DCard>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100"
            >
              <div className="text-[#D4AF37] font-stylish font-bold text-5xl mb-2">98%</div>
              <div className="text-sm font-bold text-[#1B2430] uppercase tracking-widest">Scrap Recycled</div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#1B2430] font-bold tracking-[0.3em] uppercase text-xs border border-[#1B2430]/20 px-6 py-2 rounded-full mb-8 inline-block">
                09. Sustainable Manufacturing
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-stylish font-bold text-[#1B2430] leading-[1.1] mb-8">
                Engineering for <br />
                <span className="italic font-light text-[#D4AF37]">Tomorrow</span>
              </h2>
              <p className="text-lg md:text-xl text-[#4B5563] font-light leading-relaxed mb-10 max-w-lg">
                Responsibility is built into our production line. By implementing closed-loop manufacturing, we maximize material efficiency and minimize our environmental footprint.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-[#1B2430] text-lg mb-2">Zero Ozone Depletion</h4>
                  <p className="text-sm text-[#4B5563] font-light">Eco-friendly blowing agents and chemical synthesis.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#1B2430] text-lg mb-2">Energy Efficient</h4>
                  <p className="text-sm text-[#4B5563] font-light">Solar-powered facilities and optimized logistics.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
