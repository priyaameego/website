import { motion } from 'framer-motion';
import { Globe, Leaf, CheckCircle, HeartHandshake } from 'lucide-react';
import wImg from '../../assets/w.jpeg';
import fImg from '../../assets/f.jpeg';

export default function AboutGlobal() {
  return (
    <>
      {/* Dealer & Distribution Network / Global Presence */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <Globe size={800} className="absolute -right-20 -top-20 text-[#1B2430]" strokeWidth={0.5} />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative group"
            >
              <div className="absolute inset-0 bg-[#F7F8FA] rounded-2xl shadow-sm -z-10 transition-transform duration-500 translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6"></div>
              <img 
                src={wImg} 
                alt="Distribution Network" 
                className="w-full h-[550px] object-cover rounded-2xl shadow-premium hover:scale-105 transition-transform duration-1000 relative z-10"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">Global Reach</span>
                <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-stylish text-[#1B2430] mb-8 leading-tight">
                Fast, Reliable <span className="italic font-light">Distribution</span>
              </h2>
              
              <p className="text-[#4B5563] text-lg leading-relaxed mb-6">
                24 hours — that is the most any Shakshi product will travel before it reaches the dealer. Our optimized network of 2 manufacturing plants and 500+ distribution points ensures rapid delivery across North India.
              </p>
              
              <p className="text-[#4B5563] text-lg leading-relaxed">
                Our strategically located facilities in Lucknow and Kanpur allow us to serve Uttar Pradesh and surrounding states with unmatched speed and reliability.
              </p>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-24 md:py-32 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative group"
            >
              <div className="absolute inset-0 bg-white rounded-3xl shadow-sm -z-10 transition-transform duration-500 translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6"></div>
              <img 
                src={fImg} 
                alt="Sustainability" 
                className="relative z-10 w-full h-[600px] object-cover rounded-3xl shadow-premium hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl z-20 shadow-xl border border-[#E7EBF0] hidden md:block group-hover:-translate-y-2 transition-transform duration-500">
                <Leaf size={48} className="text-[#1B2430] mb-4" strokeWidth={1.5} />
                <div className="text-4xl font-stylish font-bold text-[#1B2430] mb-1">98%</div>
                <div className="text-[11px] font-bold text-[#4B5563] uppercase tracking-widest">Scrap Recycled</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">Eco-Initiatives</span>
                <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-stylish text-[#1B2430] mb-8">Sustainability at our Core</h2>
              <p className="text-[#4B5563] text-lg leading-relaxed mb-10">
                We recognize our responsibility to the planet. Shakshi Group has pioneered a closed-loop manufacturing system that significantly reduces emissions and environmental impact, setting a benchmark for the heavy industry.
              </p>
              
              <div className="space-y-6">
                <div className="premium-card p-8 group">
                  <h4 className="text-xl font-bold font-stylish text-[#1B2430] mb-3 group-hover:text-[#D4AF37] transition-colors">Eco-Friendly Materials</h4>
                  <p className="text-[#4B5563] leading-relaxed text-sm">Substituting traditional chemicals with bio-based polyols to reduce our carbon footprint by 40%.</p>
                </div>
                <div className="premium-card p-8 group">
                  <h4 className="text-xl font-bold font-stylish text-[#1B2430] mb-3 group-hover:text-[#D4AF37] transition-colors">Renewable Energy</h4>
                  <p className="text-[#4B5563] leading-relaxed text-sm">Solar-powered facilities across major manufacturing hubs operating entirely off-grid.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CSR */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <div className="w-20 h-20 bg-[#F7F8FA] rounded-full flex items-center justify-center mb-8">
            <HeartHandshake className="text-[#1B2430]" size={40} strokeWidth={1.5} />
          </div>
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">Giving Back</span>
            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B2430] font-stylish mb-8"
          >
            Corporate Social <span className="italic font-light">Responsibility</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#4B5563] leading-relaxed max-w-3xl"
          >
            We believe that true leadership means giving back. Through the Shakshi Foundation, we actively invest in local education, build healthcare infrastructure, and run continuous skill development initiatives for marginalized communities across our operational regions.
          </motion.p>
        </div>
      </section>

      {/* Certifications & Why Choose Us */}
      <section className="py-24 md:py-32 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Certifications */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">Accolades</span>
                <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1B2430] font-stylish mb-8 flex items-center gap-4">
                Certifications
              </h2>
              <p className="text-lg text-[#4B5563] mb-10 leading-relaxed">
                Our relentless pursuit of perfection has earned us the highest industry accolades and global certifications.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-2xl border border-[#E7EBF0] text-center shadow-sm hover:border-[#1B2430] transition-colors">
                  <h4 className="font-bold font-stylish text-[#1B2430] text-2xl mb-2">ISO 9001:2015</h4>
                  <p className="text-[11px] text-[#4B5563] font-bold tracking-widest uppercase">Quality Management</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-[#E7EBF0] text-center shadow-sm hover:border-[#1B2430] transition-colors">
                  <h4 className="font-bold font-stylish text-[#1B2430] text-2xl mb-2">ISO 14001:2015</h4>
                  <p className="text-[11px] text-[#4B5563] font-bold tracking-widest uppercase">Environmental Mgt</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-[#E7EBF0] text-center shadow-sm hover:border-[#1B2430] transition-colors">
                  <h4 className="font-bold font-stylish text-[#1B2430] text-2xl mb-2">CertiPUR-US®</h4>
                  <p className="text-[11px] text-[#4B5563] font-bold tracking-widest uppercase">Certified Foam</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-[#E7EBF0] text-center shadow-sm hover:border-[#1B2430] transition-colors">
                  <h4 className="font-bold font-stylish text-[#1B2430] text-2xl mb-2">OEKO-TEX®</h4>
                  <p className="text-[11px] text-[#4B5563] font-bold tracking-widest uppercase">Standard 100</p>
                </div>
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#1B2430] p-10 md:p-14 rounded-3xl shadow-2xl text-white relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
              
              <h2 className="text-4xl font-bold font-stylish text-white mb-10 relative z-10">
                Why Choose Shakshi
              </h2>
              
              <ul className="space-y-8 relative z-10">
                {[
                  "Unmatched OEM customization capabilities for diverse industries.",
                  "40+ years of proven industry leadership and innovation.",
                  "Zero-waste sustainability initiatives and eco-friendly practices.",
                  "Dedicated R&D facilities pushing the boundaries of material science."
                ].map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <CheckCircle size={20} className="text-white" strokeWidth={1.5} />
                    </div>
                    <span className="text-[#F7F8FA]/90 font-medium text-lg leading-relaxed mt-1">{reason}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
          </div>
        </div>
      </section>
    </>
  );
}
