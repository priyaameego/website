import { motion } from 'framer-motion';

export default function GlobalReach() {
  return (
    <section className="py-32 bg-[#0A101D] relative overflow-hidden">
      
      {/* Abstract Globe Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2E5B99]/20 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs border border-[#D4AF37]/30 px-6 py-2 rounded-full mb-8 inline-block">
              10. Global Reach
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-stylish font-bold text-white leading-[1.1] mb-6">
              Empowering Partners <br />
              <span className="italic font-light text-[#D4AF37]">Worldwide</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
              A robust supply chain and manufacturing network delivering premium foam and mattress products to 40+ countries.
            </p>
          </motion.div>
        </div>

        <div className="relative w-full h-[500px] md:h-[600px] rounded-[32px] bg-[#05080f]/50 border border-white/10 backdrop-blur-md overflow-hidden flex items-center justify-center">
          
          {/* Abstract World Map using SVG/CSS for luxury feel */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain filter brightness-0 invert"></div>
          
          {/* Pulsing Nodes */}
          {[
            { top: "30%", left: "20%" },
            { top: "40%", left: "45%" },
            { top: "35%", left: "50%" },
            { top: "50%", left: "70%" },
            { top: "60%", left: "80%" }
          ].map((node, idx) => (
            <div key={idx} className="absolute" style={{ top: node.top, left: node.left }}>
              <div className="w-3 h-3 bg-[#D4AF37] rounded-full relative z-10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-[#D4AF37] rounded-full animate-ping opacity-20"></div>
            </div>
          ))}

          <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end border-t border-white/10 pt-8">
            <div>
              <div className="text-4xl font-stylish font-bold text-white mb-2">40+</div>
              <div className="text-xs font-bold text-white/50 uppercase tracking-widest">Export Countries</div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-stylish font-bold text-white mb-2">500+</div>
              <div className="text-xs font-bold text-white/50 uppercase tracking-widest">B2B Partners</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
