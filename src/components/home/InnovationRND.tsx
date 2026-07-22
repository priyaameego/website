import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

export default function InnovationRND() {
  return (
    <section className="py-24 md:py-32 bg-white text-[#1B2430] overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
         <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Tech Background"/>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="w-full lg:w-5/12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">Innovation & R&D</span>
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-stylish font-bold leading-tight mb-6 text-[#1B2430]"
            >
              Our <span className="italic font-light">Technology</span> DNA
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#4B5563] leading-relaxed mb-10"
            >
              We don't just manufacture foam; we engineer solutions. Our dedicated R&D laboratories continuously develop proprietary polymer blends designed to withstand extreme environments, improve thermal regulation, and enhance acoustic dampening.
            </motion.p>
            
            <MotionLink 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              to="/about/manufacturing" 
              className="btn-primary inline-flex"
            >
              EXPLORE OUR LABS
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
                  className="premium-card p-8 group"
                >
                  <h4 className="text-xl font-bold text-[#1B2430] mb-3 group-hover:text-[#D4AF37] transition-colors">{item.title}</h4>
                  <p className="text-[#4B5563] text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
