import { motion } from 'framer-motion';

import sciImg from '../../assets/sci.jpeg';

export default function InnovationLab() {
  const stats = [
    { value: '100%', label: 'CFC-Free Manufacturing' },
    { value: 'Zero', label: 'Waste to Landfill' },
    { value: '40+', label: 'R&D Scientists' },
    { value: 'ISO', label: '14001 Certified' },
  ];

  return (
    <section className="py-32 relative bg-[#0A101D] overflow-hidden">
      
      {/* Background Image with Deep Gradient */}
      <div className="absolute inset-0 z-0">
        <img src={sciImg} alt="Laboratory" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D] via-[#0A101D]/80 to-[#0A101D]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A101D] to-transparent"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
            <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[11px]">R&D / Sustainability</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-stylish font-bold text-white mb-8 drop-shadow-lg">
            Innovation <br />
            <span className="italic font-light text-[#D4AF37]">Meets Nature</span>
          </h2>
          
          <p className="text-lg text-white/70 mb-10 leading-relaxed font-light max-w-xl">
            Our state-of-the-art laboratory constantly pushes the boundaries of polymer science to develop more resilient, comfortable, and eco-friendly foams. We believe that world-class manufacturing must coexist with environmental stewardship.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-white tracking-widest uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Glass Panels */}
        <div className="w-full lg:w-1/2 relative h-[600px]">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-10 right-10 w-[80%] h-[60%] bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center">
              <span className="text-[#D4AF37] text-xl font-bold">🔬</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Material Science</h3>
              <p className="text-white/60 text-sm">Testing tensile strength, IFD (Indentation Force Deflection), and thermal conductivity to ensure absolute perfection.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="absolute bottom-10 left-0 w-[70%] h-[50%] bg-gradient-to-tl from-[#D4AF37]/20 to-transparent backdrop-blur-xl border border-[#D4AF37]/30 rounded-3xl p-8 shadow-[0_30px_60px_rgba(212,175,55,0.1)] flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
              <span className="text-white text-xl font-bold">🌱</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Circular Economy</h3>
              <p className="text-white/60 text-sm">Re-bonding scrap foam and utilizing bio-based polyols to reduce our carbon footprint.</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
