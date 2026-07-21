import { motion } from 'framer-motion';
import { Globe, Leaf, CheckCircle, ShieldCheck, HeartHandshake } from 'lucide-react';
import wImg from '../../assets/w.jpeg';
import fImg from '../../assets/f.jpeg';

export default function AboutGlobal() {
  return (
    <>
      {/* Dealer & Distribution Network / Global Presence */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <Globe size={800} className="absolute -right-20 -top-20 text-[#0f172a]" />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl h-[550px] bg-white p-4"
            >
              <img 
                src={wImg} 
                alt="Distribution Network" 
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] font-heading mb-8">
                Fast, Reliable Distribution
              </h2>
              
              <p className="text-[#64748b] text-lg leading-relaxed mb-6">
                24 hours — that is the most any Shakshi product will travel before it reaches the dealer. Our optimized network of 2 manufacturing plants and 500+ distribution points ensures rapid delivery across North India.
              </p>
              
              <p className="text-[#64748b] text-lg leading-relaxed">
                Our strategically located facilities in Lucknow and Kanpur allow us to serve Uttar Pradesh and surrounding states with unmatched speed and reliability.
              </p>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-24 bg-[#081C3A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute inset-0 bg-[#D4AF37] blur-[100px] opacity-20 rounded-full"></div>
              <img 
                src={fImg} 
                alt="Sustainability" 
                className="relative z-10 w-full h-[600px] object-cover rounded-3xl border border-white/10 shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-[#D4AF37] p-8 rounded-2xl z-20 shadow-xl hidden md:block">
                <Leaf size={48} className="text-white mb-4" />
                <div className="text-4xl font-bold text-white mb-1">98%</div>
                <div className="text-sm font-bold text-white uppercase tracking-wider">Scrap Recycled</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6">Sustainability at our Core</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mb-8"></div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We recognize our responsibility to the planet. Shakshi Group has pioneered a closed-loop manufacturing system that significantly reduces emissions and environmental impact, setting a benchmark for the heavy industry.
              </p>
              
              <div className="space-y-6">
                <div className="bg-[#171a29] p-6 rounded-2xl border border-white/5">
                  <h4 className="text-xl font-bold text-[#D4AF37] mb-2">Eco-Friendly Materials</h4>
                  <p className="text-gray-400">Substituting traditional chemicals with bio-based polyols to reduce our carbon footprint by 40%.</p>
                </div>
                <div className="bg-[#171a29] p-6 rounded-2xl border border-white/5">
                  <h4 className="text-xl font-bold text-[#D4AF37] mb-2">Renewable Energy</h4>
                  <p className="text-gray-400">Solar-powered facilities across major manufacturing hubs operating entirely off-grid.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CSR */}
      <section className="py-24 bg-[#F4F7FA]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center">
          <HeartHandshake className="text-[#D4AF37] mx-auto mb-6" size={64} />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#0f172a] font-heading mb-6"
          >
            Corporate Social Responsibility
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#64748b] leading-relaxed mb-8"
          >
            We believe that true leadership means giving back. Through the Shakshi Foundation, we actively invest in local education, build healthcare infrastructure, and run continuous skill development initiatives for marginalized communities across our operational regions.
          </motion.p>
        </div>
      </section>

      {/* s & Certifications & Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* s & Certifications */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#0f172a] font-heading mb-8 flex items-center gap-4">
                <ShieldCheck className="text-[#D4AF37]" size={40} />
                s & Certifications
              </h2>
              <p className="text-lg text-[#64748b] mb-8">
                Our relentless pursuit of perfection has earned us the highest industry accolades and global certifications.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#F4F7FA] p-8 rounded-2xl border border-[#E2E8F0] text-center shadow-sm hover:-translate-y-1 transition-transform">
                  <h4 className="font-bold text-[#0f172a] text-2xl mb-2">ISO 9001:2015</h4>
                  <p className="text-sm text-gray-500 font-semibold uppercase">Quality Management</p>
                </div>
                <div className="bg-[#F4F7FA] p-8 rounded-2xl border border-[#E2E8F0] text-center shadow-sm hover:-translate-y-1 transition-transform">
                  <h4 className="font-bold text-[#0f172a] text-2xl mb-2">ISO 14001:2015</h4>
                  <p className="text-sm text-gray-500 font-semibold uppercase">Environmental Mgt</p>
                </div>
                <div className="bg-[#F4F7FA] p-8 rounded-2xl border border-[#E2E8F0] text-center shadow-sm hover:-translate-y-1 transition-transform">
                  <h4 className="font-bold text-[#0f172a] text-2xl mb-2">CertiPUR-US®</h4>
                  <p className="text-sm text-gray-500 font-semibold uppercase">Certified Foam</p>
                </div>
                <div className="bg-[#F4F7FA] p-8 rounded-2xl border border-[#E2E8F0] text-center shadow-sm hover:-translate-y-1 transition-transform">
                  <h4 className="font-bold text-[#0f172a] text-2xl mb-2">OEKO-TEX®</h4>
                  <p className="text-sm text-gray-500 font-semibold uppercase">Standard 100</p>
                </div>
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#081C3A] p-12 rounded-3xl shadow-2xl text-white relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D4AF37] blur-[100px] opacity-20 rounded-full"></div>
              
              <h2 className="text-4xl font-bold text-white font-heading mb-8 relative z-10">
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
                    <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                      <CheckCircle size={20} className="text-[#D4AF37]" />
                    </div>
                    <span className="text-gray-300 font-medium text-lg leading-tight mt-1">{reason}</span>
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
