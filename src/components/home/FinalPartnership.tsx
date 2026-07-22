import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FinalPartnership() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="relative rounded-[32px] overflow-hidden">
          
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop" 
              alt="Business Partnership" 
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#081C3A] via-[#081C3A]/90 to-transparent"></div>
          </div>

          <div className="relative z-10 p-12 md:p-20 lg:p-24 max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-[11px]">LET'S BUILD TOGETHER</span>
                <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-stylish text-white mb-6 leading-tight">
                Ready to elevate <br className="hidden md:block"/> your product line?
              </h2>
              
              <p className="text-[#C8D2E1] text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
                Whether you need custom OEM foam manufacturing, a lucrative dealership partnership, or premium mattresses, Shakshi Group is your dedicated manufacturing partner.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/industrial-enquiry" 
                  className="inline-flex justify-center items-center gap-2 bg-[#D4AF37] text-[#081C3A] px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:bg-white hover:scale-105 shadow-xl"
                >
                  OEM & B2B Enquiry <ArrowRight size={18} />
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-flex justify-center items-center gap-2 bg-transparent text-white border border-white/30 px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:bg-white/10 hover:border-white shadow-xl"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
