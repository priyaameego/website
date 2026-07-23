import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A101D]">
      
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <motion.img 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057&auto=format&fit=crop" 
          alt="Luxury Bedroom" 
          className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-[#05080f]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#05080f] via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 w-full text-center mt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-xs border border-[#D4AF37]/30 px-6 py-2 rounded-full mb-10 inline-block backdrop-blur-sm bg-black/20">
            Partner With Excellence
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-stylish font-bold text-white leading-[1.1] mb-8">
            Ready to Build <br />
            <span className="italic font-light text-[#D4AF37]">Better Sleep?</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            From bespoke formulation to white-label manufacturing, connect with our engineering team to scale your brand.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#enquiry" 
              className="inline-flex items-center justify-center gap-4 text-[#0A101D] bg-white font-bold text-[13px] tracking-[0.2em] uppercase py-5 px-10 rounded-full hover:bg-[#D4AF37] transition-all duration-500 w-full sm:w-auto shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_10px_40px_rgba(212,175,55,0.3)] hover:-translate-y-1"
            >
              Start an Enquiry
            </a>
            <a 
              href="#catalogue" 
              className="inline-flex items-center justify-center gap-4 text-white bg-transparent border border-white/20 backdrop-blur-sm font-bold text-[13px] tracking-[0.2em] uppercase py-5 px-10 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-500 w-full sm:w-auto hover:-translate-y-1"
            >
              Download OEM Catalogue
            </a>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}
