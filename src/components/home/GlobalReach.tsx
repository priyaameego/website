import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, MapPin, Truck, PhoneCall } from 'lucide-react';

export default function GlobalReach() {
  const stats = [
    { label: 'Dealers', value: '500+', icon: <MapPin size={24} className="text-[#D4AF37]" /> },
    { label: 'States Covered', value: '25+', icon: <Globe size={24} className="text-[#D4AF37]" /> },
    { label: 'Daily Dispatch', value: '10K+', icon: <Truck size={24} className="text-[#D4AF37]" /> },
  ];

  return (
    <section className="py-32 bg-[#05080f] relative overflow-hidden">
      
      {/* Abstract Glowing Map Background (Simulated via gradients/blur for luxury feel) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[1000px] h-[600px] bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain opacity-20 invert-[1]"></div>
        <div className="absolute inset-0 bg-[#05080f]/80"></div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-3 h-3 bg-[#D4AF37] rounded-full shadow-[0_0_20px_#D4AF37]"
          style={{ top: '45%', left: '68%' }}
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_15px_white]"
          style={{ top: '50%', left: '72%' }}
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_15px_#D4AF37]"
          style={{ top: '60%', left: '65%' }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-4 mb-8">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
          <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[11px]">Global Reach</span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-stylish font-bold text-white mb-8 drop-shadow-lg">
          Delivering Comfort <br />
          <span className="italic font-light text-[#D4AF37]">Worldwide</span>
        </h2>
        
        <p className="text-lg text-white/60 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
          Our robust logistics network ensures that premium quality foam and sleep products reach our B2B partners and consumers with unmatched efficiency and reliability.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 max-w-4xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center hover:border-[#D4AF37]/30 hover:bg-white/10 transition-all duration-500"
            >
              <div className="mb-4">{stat.icon}</div>
              <div className="text-4xl font-stylish font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-white/70 tracking-widest uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Final Premium CTA */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto bg-gradient-to-br from-[#081C3A] to-[#05080f] border border-[#D4AF37]/20 rounded-[40px] p-12 md:p-20 overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <h2 className="text-4xl md:text-6xl font-stylish font-bold text-white mb-6 relative z-10">
            Partner with the <span className="italic font-light text-[#D4AF37]">Industry Leader</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto relative z-10 font-light">
            Whether you need custom OEM manufacturing, bulk supply, or premium retail products, Shakshi Group is your trusted partner.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <Link 
              to="/industrial-enquiry" 
              className="px-10 py-5 bg-white text-[#0A101D] rounded-full font-bold text-[13px] tracking-[0.2em] uppercase hover:bg-[#D4AF37] transition-all duration-500 shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_10px_40px_rgba(212,175,55,0.4)] w-full sm:w-auto"
            >
              Enquire Foams
            </Link>
            <Link 
              to="/contact" 
              className="px-10 py-5 bg-transparent border border-white/30 text-white rounded-full font-bold text-[13px] tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-500 flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <PhoneCall size={16} /> Contact Sales
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
