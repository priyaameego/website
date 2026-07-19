import { motion } from 'framer-motion';

export default function InnovationRND() {
  return (
    <section className="py-24 bg-[#081C3A] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
         <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover mix-blend-screen" alt="Tech Background"/>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-5/12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block border border-[#D4AF37]/40 rounded-full px-6 py-2 bg-[#D4AF37]/10 mb-8"
            >
              <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs">Innovation & R&D</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6"
            >
              Our <span className="text-[#D4AF37]">Technology</span> DNA
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 leading-relaxed mb-8"
            >
              We don't just manufacture foam; we engineer solutions. Our dedicated R&D laboratories continuously develop proprietary polymer blends designed to withstand extreme environments, improve thermal regulation, and enhance acoustic dampening.
            </motion.p>
            
            <motion.a 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              href="#rnd" 
              className="inline-flex justify-center items-center px-8 py-4 bg-[#D4AF37] text-[#081C3A] rounded font-bold tracking-wide transition-all duration-300 hover:bg-[#F2C94C] text-sm"
            >
              EXPLORE OUR LABS
            </motion.a>
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
                  className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
