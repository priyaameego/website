import { motion } from 'framer-motion';
import { Target, Shield, Users, Zap, Heart } from 'lucide-react';
import bedImg from '../../assets/bed.jpeg';

export default function AboutCore() {
  const values = [
    { icon: <Shield size={32} strokeWidth={1.5} />, title: "Integrity", desc: "Upholding the highest standards of transparency and honesty." },
    { icon: <Zap size={32} strokeWidth={1.5} />, title: "Innovation", desc: "Continuously improving processes and engineering solutions." },
    { icon: <Users size={32} strokeWidth={1.5} />, title: "Collaboration", desc: "Working as a unified team to achieve global objectives." },
    { icon: <Target size={32} strokeWidth={1.5} />, title: "Excellence", desc: "Delivering zero-defect products across all categories." },
    { icon: <Heart size={32} strokeWidth={1.5} />, title: "Sustainability", desc: "Prioritizing eco-friendly manufacturing and closed-loop systems." }
  ];

  return (
    <>
      <section id="vision" className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">Our Vision</span>
                <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-stylish font-bold text-[#1B2430] mb-8 leading-tight">
                A Mattress for <span className="italic font-light">Every Indian</span>
              </h2>
              <p className="text-lg text-[#4B5563] leading-relaxed mb-8">
                Our vision is to be India's most trusted foam and mattress manufacturer, known for quality, innovation, and customer satisfaction. We strive to bring comfort to every home and every industry.
              </p>
              <p className="text-lg text-[#4B5563] leading-relaxed">
                We believe that quality sleep is not a luxury — it's a necessity. Our mission is to make premium comfort accessible to all, through innovative products, fair pricing, and an expanding dealer network.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-premium group"
            >
              <img 
                src={bedImg} 
                alt="Our Vision" 
                className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 border border-[#1B2430]/5 rounded-2xl pointer-events-none"></div>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-20 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-stylish font-bold text-[#1B2430] mb-6">Core Values</h2>
            <div className="w-12 h-[2px] bg-[#1B2430] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="premium-card p-8 text-center group"
              >
                <div className="w-16 h-16 mx-auto bg-[#F7F8FA] text-[#1B2430] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1B2430] group-hover:text-white transition-colors duration-500">
                  {val.icon}
                </div>
                <h4 className="text-xl font-bold font-stylish text-[#1B2430] mb-3">{val.title}</h4>
                <p className="text-sm text-[#4B5563] leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
