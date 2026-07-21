import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function PremiumCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#081C3A]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
          alt="CTA Background" 
          className="w-full h-full object-cover mix-blend-overlay opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A] via-transparent to-[#081C3A]" />
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight mb-6">
            Ready to Partner with an <span className="text-[#D4AF37]">Industry Leader</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Contact our engineering team today to discuss your specific OEM requirements, request a quote, or schedule a facility tour.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/contact" className="w-full sm:w-auto inline-flex justify-center items-center bg-[#D4AF37] hover:bg-[#B08D2D] text-white font-bold text-sm tracking-widest px-10 py-4 rounded transition-colors shadow-[0_4px_20px_rgba(255,107,0,0.4)]">
              CONTACT SALES
            </Link>
            <Link to="/about/infrastructure" className="w-full sm:w-auto inline-flex justify-center items-center bg-transparent border border-white/60 hover:bg-white/10 text-white font-bold text-sm tracking-widest px-10 py-4 rounded transition-colors backdrop-blur-sm">
              VIEW FACILITIES
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
