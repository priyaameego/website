import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Glass3DCard from '../ui/Glass3DCard';

const MotionLink = motion(Link);

export default function InnovationRND() {
  return (
    <section className="py-24 md:py-32 bg-[#0A101D] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
         <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale mix-blend-luminosity" alt="Tech Background"/>
         <div className="absolute inset-0 bg-gradient-to-r from-[#0A101D] to-transparent"></div>
      </div>
      
      {/* Background Orbs */}
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#2E5B99]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="w-full lg:w-5/12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[11px] border border-[#D4AF37]/30 px-6 py-2 rounded-full">Innovation & R&D</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-stylish font-bold leading-[1.1] mb-6 text-white"
            >
              Our <span className="italic font-light text-[#D4AF37]">Technology</span> DNA
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/70 leading-relaxed font-light mb-10"
            >
              We don't just manufacture foam; we engineer solutions. Our dedicated R&D laboratories continuously develop proprietary polymer blends designed to withstand extreme environments, improve thermal regulation, and enhance acoustic dampening.
            </motion.p>
            
            <MotionLink 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              to="/about/manufacturing" 
              className="inline-flex items-center gap-4 text-white text-[13px] font-bold tracking-[0.2em] uppercase group"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)] group-hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)]">
                <span className="group-hover:text-[#0A101D] transition-colors duration-300">→</span>
              </div>
              <span>EXPLORE OUR LABS</span>
            </MotionLink>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Thermal Regulation', desc: 'Phase-change materials infused in foam for dynamic cooling.' },
                { title: 'Acoustic Dampening', desc: 'Micro-cellular structures optimizing noise reduction coefficients.' },
                { title: 'Fire Retardancy', desc: 'Halogen-free FR foams meeting stringent aerospace standards.' },
                { title: 'Ergonomic Support', desc: 'Multi-density layering mapped to human biomechanics.' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="h-full min-h-[220px]"
                >
                  <Glass3DCard tiltIntensity={10} className="p-8 group h-full flex flex-col justify-center">
                    <h4 className="text-xl font-bold font-stylish text-white mb-3 group-hover:text-[#D4AF37] transition-colors">{item.title}</h4>
                    <p className="text-white/50 text-sm font-light leading-relaxed flex-1">{item.desc}</p>
                  </Glass3DCard>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
