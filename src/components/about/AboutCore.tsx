import { motion } from 'framer-motion';
import { Target, Shield, Users, Zap, Heart } from 'lucide-react';

export default function AboutCore() {
  const values = [
    { icon: <Shield size={32} />, title: "Integrity", desc: "Upholding the highest standards of transparency and honesty." },
    { icon: <Zap size={32} />, title: "Innovation", desc: "Continuously improving processes and engineering solutions." },
    { icon: <Users size={32} />, title: "Collaboration", desc: "Working as a unified team to achieve global objectives." },
    { icon: <Target size={32} />, title: "Excellence", desc: "Delivering zero-defect products across all categories." },
    { icon: <Heart size={32} />, title: "Sustainability", desc: "Prioritizing eco-friendly manufacturing and closed-loop systems." }
  ];

  const milestones = [
    { year: "2001", event: "Company Founded" },
    { year: "1995", event: "First Automated Facility" },
    { year: "2008", event: "ISO 9001 Certification" },
    { year: "2015", event: "Global Export Expansion" },
    { year: "2025", event: "Zero Waste Initiative Achieved" }
  ];

  return (
    <>
      <section id="vision" className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xs font-black tracking-[0.2em] text-[#E63946] uppercase mb-4">
                OUR VISION
              </h4>
              <h2 className="text-4xl md:text-5xl font-black text-[#081C3A] mb-8 leading-tight font-heading">
                A Mattress for Every Indian
              </h2>
              <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
                Our vision is to be India's most trusted foam and mattress manufacturer, known for quality, innovation, and customer satisfaction. We strive to bring comfort to every home and every industry.
              </p>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                We believe that quality sleep is not a luxury — it's a necessity. Our mission is to make premium comfort accessible to all, through innovative products, fair pricing, and an expanding dealer network.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Vision" 
                className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 border border-black/5 rounded-3xl pointer-events-none"></div>
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
      <section id="timeline" className="py-24 bg-white text-[#081C3A]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-[#081C3A]">Our Journey</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Four decades of engineering milestones, transforming from a local manufacturer to a global OEM powerhouse.</p>
          </div>

          <div className="relative">
            {/* Horizontal Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#E5E7EB] -translate-y-1/2"></div>
            
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
                  <div className="bg-[#F9FAFB] border border-[#E5E7EB] p-6 rounded-xl hover:bg-[#F3F4F6] transition-colors shadow-sm">
                    <div className="text-[#FF6B00] font-bold text-3xl font-heading mb-2">{m.year}</div>
                    <div className="text-[#081C3A] font-semibold">{m.event}</div>
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
