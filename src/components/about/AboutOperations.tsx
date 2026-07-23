import { motion } from 'framer-motion';
import pImg from '../../assets/p.png';
import oemImg from '../../assets/oem.png';

export default function AboutOperations() {
  return (
    <>
      {/* Manufacturing Excellence Intro */}
      <section className="py-24 md:py-32 bg-[#1B2430] text-center">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white font-stylish mb-10"
          >
            Manufacturing <span className="italic font-light">Excellence</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#F7F8FA]/80 leading-relaxed max-w-3xl"
          >
            Our core strength lies in our unparalleled manufacturing capabilities. We leverage Industry 4.0 automation, precision engineering, and highly skilled technicians to deliver OEM products that exceed global standards.
          </motion.p>
        </div>
      </section>

      {/* OEM Manufacturing */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">B2B Solutions</span>
                <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-stylish font-bold text-[#1B2430] mb-8">OEM Manufacturing</h2>
              <p className="text-lg text-[#4B5563] leading-relaxed mb-10">
                Shakshi Group serves as the trusted, silent manufacturing partner for some of the world's most recognizable brands. We provide end-to-end B2B solutions spanning from initial product design and prototyping to mass production and assembly.
              </p>
              <ul className="space-y-5">
                {['Custom Foam Formulations', 'White-Label Mattress Production', 'High-Volume Capacity', 'Strict NDA Compliance'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-[#1B2430] rounded-full"></div>
                    <span className="text-[#1B2430] font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden shadow-premium h-[500px]"
            >
              <img src={pImg} alt="OEM Manufacturing" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research & Innovation */}
      <section className="py-24 md:py-32 bg-[#F7F8FA] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative group rounded-2xl overflow-hidden shadow-premium h-full min-h-[400px]"
            >
              <img src={oemImg} alt="R&D Lab" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 flex flex-col justify-center py-4"
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">Innovation</span>
                <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-stylish font-bold text-[#1B2430] mb-8">Research & Labs</h2>
              <p className="text-lg text-[#4B5563] leading-relaxed mb-10">
                Innovation is our DNA. Our dedicated R&D laboratories are staffed by expert polymer scientists and engineers constantly developing next-generation foams.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 items-stretch">
                <div className="premium-card p-8 group h-full">
                  <h4 className="font-bold font-stylish text-[#1B2430] mb-3 text-2xl group-hover:text-[#D4AF37] transition-colors">Thermal Tech</h4>
                  <p className="text-sm text-[#4B5563] leading-relaxed">Advanced temperature regulating phase-change materials.</p>
                </div>
                <div className="premium-card p-8 group h-full">
                  <h4 className="font-bold font-stylish text-[#1B2430] mb-3 text-2xl group-hover:text-[#D4AF37] transition-colors">Acoustic Dampening</h4>
                  <p className="text-sm text-[#4B5563] leading-relaxed">Specialized foams for heavy industry noise reduction.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24 md:py-32 bg-white text-[#1B2430]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">Quality</span>
            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-stylish font-bold mb-8"
          >
            Uncompromising Quality Assurance
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#4B5563] max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            A rigorous 40-point testing protocol ensures every batch meets international ISO standards, achieving a near-zero defect rate. We utilize AI-driven optical sorting and stress testing before any product leaves the line.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            {[
              { stat: "99.9%", text: "Defect-Free Rate" },
              { stat: "40+", text: "Quality Checkpoints" },
              { stat: "AI", text: "Optical Inspection" },
              { stat: "100%", text: "Batch Traceability" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#F7F8FA] border border-[#E7EBF0] p-10 rounded-2xl hover:border-[#1B2430] transition-colors"
              >
                <div className="text-4xl font-stylish font-bold text-[#1B2430] mb-3">{item.stat}</div>
                <div className="text-[#4B5563] font-semibold text-sm uppercase tracking-widest">{item.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="relative py-32 md:py-48 overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8ed7c50800?q=80&w=2000&auto=format&fit=crop" alt="Infrastructure" className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-[#1B2430]/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B2430] via-transparent to-[#1B2430]"></div>
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-white font-bold tracking-[0.2em] uppercase text-[11px]">Scale</span>
            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-stylish text-white mb-10"
          >
            Infrastructure & <span className="italic font-light">Facilities</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed"
          >
            Our sprawling manufacturing hubs span millions of square feet, equipped with advanced robotics, automated warehousing, and integrated logistics. This massive infrastructure allows us to process immense volumes with staggering speed, ensuring uninterrupted supply to our global partners.
          </motion.p>
        </div>
      </section>
    </>
  );
}
