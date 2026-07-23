import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import Glass3DCard from '../ui/Glass3DCard';

export default function CareersCTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#05080f]">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Glass3DCard tiltIntensity={5} glowColor="rgba(212, 175, 55, 0.2)">
            <div className="relative overflow-hidden rounded-3xl group">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
                  alt="Modern Manufacturing Facility" 
                  className="w-full h-[120%] -translate-y-10 object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D] via-[#0A101D]/80 to-[#0A101D]/50"></div>
              </div>

              <div className="relative z-10 p-12 md:p-24 flex flex-col items-center text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                  <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[11px]">Interested in joining us?</span>
                  <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
                </div>

                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-stylish leading-[1.1] mb-8 text-white tracking-tight">
                  Ready to Build Your Career with <span className="text-[#D4AF37] italic font-light">Shakshi Group?</span>
                </h2>

                <p className="text-lg text-white/60 leading-relaxed mb-12 font-light">
                  Join our growing team and become part of an innovative OEM manufacturing company where talent, learning, and excellence drive success.
                </p>

                <Link to="/contact" state={{ fromCareers: true }} className="inline-block group/btn relative">
                  <div className="absolute inset-0 bg-[#D4AF37] blur-md opacity-30 group-hover/btn:opacity-60 transition-opacity duration-300"></div>
                  <button className="relative bg-[#0A101D] border border-[#D4AF37]/50 text-white px-10 py-5 rounded-sm font-bold tracking-widest text-sm hover:bg-[#D4AF37] hover:text-[#0A101D] transition-all duration-300 inline-flex items-center gap-4">
                    <Mail size={18} />
                    VIEW CONTACT PAGE
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </Glass3DCard>
        </motion.div>
      </div>
    </section>
  );
}
