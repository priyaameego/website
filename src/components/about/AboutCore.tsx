import { motion } from 'framer-motion';
import { Target, Eye, Shield, Users, Zap, Heart } from 'lucide-react';

export default function AboutCore() {
  const values = [
    { icon: <Shield size={32} />, title: "Integrity", desc: "Upholding the highest standards of transparency and honesty." },
    { icon: <Zap size={32} />, title: "Innovation", desc: "Continuously improving processes and engineering solutions." },
    { icon: <Users size={32} />, title: "Collaboration", desc: "Working as a unified team to achieve global objectives." },
    { icon: <Target size={32} />, title: "Excellence", desc: "Delivering zero-defect products across all categories." },
    { icon: <Heart size={32} />, title: "Sustainability", desc: "Prioritizing eco-friendly manufacturing and closed-loop systems." }
  ];

  const milestones = [
    { year: "1980", event: "Company Founded" },
    { year: "1995", event: "First Automated Facility" },
    { year: "2008", event: "ISO 9001 Certification" },
    { year: "2015", event: "Global Export Expansion" },
    { year: "2025", event: "Zero Waste Initiative Achieved" }
  ];

  return (
    <>
      <section id="vision" className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            
            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#081C3A] rounded-3xl p-12 text-white relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Eye size={120} />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold font-heading mb-6 flex items-center gap-4">
                  <span className="w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center">
                    <Eye size={24} className="text-white" />
                  </span>
                  Our Vision
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the global benchmark in innovative foam manufacturing, delivering sustainable, high-performance solutions that enhance comfort and industrial efficiency worldwide.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#F4F7FA] border border-[#E2E8F0] rounded-3xl p-12 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Target size={120} className="text-[#081C3A]" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-[#081C3A] font-heading mb-6 flex items-center gap-4">
                  <span className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                    <Target size={24} className="text-white" />
                  </span>
                  Our Mission
                </h3>
                <p className="text-[#4B5563] text-lg leading-relaxed">
                  To engineer and deliver premium-grade OEM products through continuous technological advancement, rigid quality assurance, and a steadfast commitment to our clients and the environment.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#081C3A] font-heading mb-4">Core Values</h2>
            <div className="w-24 h-1 bg-[#FF6B00] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-[#E2E8F0] p-8 rounded-2xl text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-[#EEF5FF] text-[#081C3A] rounded-full flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h4 className="text-xl font-bold text-[#081C3A] mb-3">{val.title}</h4>
                <p className="text-sm text-[#4B5563] leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section id="timeline" className="py-24 bg-[#06152D] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Our Journey</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Four decades of engineering milestones, transforming from a local manufacturer to a global OEM powerhouse.</p>
          </div>

          <div className="relative">
            {/* Horizontal Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#282d43] -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {milestones.map((m, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative text-center"
                >
                  <div className="hidden md:flex w-6 h-6 bg-[#FF6B00] rounded-full mx-auto mb-6 relative z-10 shadow-[0_0_15px_rgba(255,107,0,0.5)]"></div>
                  <div className="bg-[#171a29] border border-white/10 p-6 rounded-xl hover:bg-[#1a1e30] transition-colors">
                    <div className="text-[#D4AF37] font-bold text-3xl font-heading mb-2">{m.year}</div>
                    <div className="text-gray-300 font-semibold">{m.event}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
