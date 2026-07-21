import { motion } from 'framer-motion';
import { Leaf, CheckCircle2 } from 'lucide-react';

export default function QualitySustainability() {
  return (
    <section className="py-24 bg-[#081C3A] text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <div className="inline-block border border-[#D4AF37]/40 rounded-full px-6 py-2 bg-[#D4AF37]/10 mb-6">
                <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs">Quality & Certifications</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6 text-white">
                Engineered to <span className="text-[#D4AF37]">Perfection</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Our ISO-certified laboratories conduct over 20 unique stress, thermal, and density tests on every batch. We ensure 100% compliance with international OEM specifications, maintaining a zero-defect tolerance.
              </p>
              <ul className="space-y-4">
                {['ISO 9001:2015 Certified', 'IATF 16949 Automotive Standards', 'RoHS & REACH Compliant', 'CertiPUR-US® Approved'].map((cert, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="text-[#D4AF37]" size={20} />
                    <span className="font-medium">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#FFFFFF] p-10 md:p-12 rounded-3xl text-[#0f172a] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 text-[#EEF5FF] opacity-50 pointer-events-none">
              <Leaf size={300} />
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#EEF5FF] text-[#0f172a] rounded-2xl flex items-center justify-center mb-8">
                <Leaf size={32} />
              </div>
              <h3 className="text-3xl font-bold font-heading mb-6">Sustainable Manufacturing</h3>
              <p className="text-[#64748b] text-lg leading-relaxed mb-8">
                We are committed to a greener future. Our closed-loop manufacturing processes recycle 98% of foam offcuts. We are continuously reducing our carbon footprint through solar-powered facilities and eco-friendly chemical formulations.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#E2E8F0]">
                <div>
                  <div className="text-4xl font-bold font-heading text-[#0f172a] mb-2">Zero</div>
                  <div className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider">Ozone Depletion</div>
                </div>
                <div>
                  <div className="text-4xl font-bold font-heading text-[#0f172a] mb-2">100%</div>
                  <div className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider">Recyclable Scrap</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
