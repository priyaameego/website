import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function PremiumCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#1B2430]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
          alt="CTA Background" 
          className="w-full h-full object-cover opacity-10 mix-blend-luminosity grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2430] via-transparent to-[#1B2430]" />
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="text-white font-bold tracking-[0.2em] uppercase text-[11px]">Next Steps</span>
            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-stylish text-white leading-tight mb-8">
            Partner with an <span className="italic font-light">Industry Leader</span>
          </h2>
          
          <p className="text-lg md:text-xl text-[#F7F8FA]/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact our engineering team today to discuss your specific OEM requirements, request a quote, or schedule a facility tour.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
            <Link to="/contact" className="inline-flex justify-center items-center px-10 py-4 bg-white text-[#1B2430] rounded-full font-bold tracking-wide text-[13px] uppercase transition-all duration-300 hover:bg-[#F7F8FA] hover:-translate-y-[2px] shadow-lg">
              CONTACT SALES
            </Link>
            <Link to="/about/infrastructure" className="inline-flex justify-center items-center px-10 py-4 bg-transparent border border-white text-white rounded-full font-bold tracking-wide text-[13px] uppercase transition-all duration-300 hover:bg-white hover:text-[#1B2430] hover:-translate-y-[2px]">
              VIEW FACILITIES
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
