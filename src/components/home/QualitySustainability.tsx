import { motion } from 'framer-motion';
import { Leaf, CheckCircle2 } from 'lucide-react';

export default function QualitySustainability() {
  return (
    <section className="py-24 md:py-32 bg-[#F7F8FA] text-[#1B2430]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">Quality & Certifications</span>
                <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-stylish font-bold leading-tight mb-8">
                Engineered to <span className="italic font-light">Perfection</span>
              </h2>
              <p className="text-lg text-[#4B5563] leading-relaxed mb-8">
                Our ISO-certified laboratories conduct over 20 unique stress, thermal, and density tests on every batch. We ensure 100% compliance with international OEM specifications, maintaining a zero-defect tolerance.
              </p>
              <ul className="space-y-5">
                {['ISO 9001:2015 Certified', 'IATF 16949 Automotive Standards', 'RoHS & REACH Compliant', 'CertiPUR-US® Approved'].map((cert, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-[#1B2430]">
                    <CheckCircle2 className="text-[#1B2430]" size={24} strokeWidth={1.5} />
                    <span className="font-semibold">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="premium-card p-10 md:p-14 relative overflow-hidden group"
          >
            <div className="absolute -top-20 -right-20 text-[#F7F8FA] opacity-50 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
              <Leaf size={300} strokeWidth={0.5} />
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#F7F8FA] text-[#1B2430] rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#1B2430] group-hover:text-white transition-colors duration-500">
                <Leaf size={32} />
              </div>
              <h3 className="text-3xl lg:text-4xl font-stylish font-bold mb-6">Sustainable Manufacturing</h3>
              <p className="text-[#4B5563] text-lg leading-relaxed mb-10">
                We are committed to a greener future. Our closed-loop manufacturing processes recycle 98% of foam offcuts. We are continuously reducing our carbon footprint through solar-powered facilities and eco-friendly chemical formulations.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#E7EBF0]">
                <div>
                  <div className="text-4xl font-stylish font-bold text-[#1B2430] mb-2">Zero</div>
                  <div className="text-[11px] font-bold text-[#4B5563] uppercase tracking-widest">Ozone Depletion</div>
                </div>
                <div>
                  <div className="text-4xl font-stylish font-bold text-[#1B2430] mb-2">100%</div>
                  <div className="text-[11px] font-bold text-[#4B5563] uppercase tracking-widest">Recyclable Scrap</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
