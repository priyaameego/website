import { motion } from 'framer-motion';

export default function AboutOperations() {
  return (
    <>
      {/* Manufacturing Excellence Intro */}
      <section className="py-24 bg-[#081C3A] text-center">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white font-heading mb-8"
          >
            Manufacturing <span className="text-[#D4AF37]">Excellence</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            Our core strength lies in our unparalleled manufacturing capabilities. We leverage Industry 4.0 automation, precision engineering, and highly skilled technicians to deliver OEM products that exceed global standards.
          </motion.p>
        </div>
      </section>

      {/* OEM Manufacturing */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#081C3A] font-heading mb-6">OEM Manufacturing</h2>
              <div className="w-20 h-1 bg-[#FF6B00] mb-8"></div>
              <p className="text-lg text-[#4B5563] leading-relaxed mb-6">
                Shakshi Group serves as the trusted, silent manufacturing partner for some of the world's most recognizable brands. We provide end-to-end B2B solutions spanning from initial product design and prototyping to mass production and assembly.
              </p>
              <ul className="space-y-4">
                {['Custom Foam Formulations', 'White-Label Mattress Production', 'High-Volume Capacity', 'Strict NDA Compliance'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                    <span className="text-[#081C3A] font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl h-[500px]"
            >
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" alt="OEM Manufacturing" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research & Innovation */}
      <section className="py-24 bg-[#F4F7FA] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl h-[500px]"
            >
              <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1200&auto=format&fit=crop" alt="R&D Lab" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl font-bold text-[#081C3A] font-heading mb-6">Research & Innovation</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mb-8"></div>
              <p className="text-lg text-[#4B5563] leading-relaxed mb-6">
                Innovation is our DNA. Our dedicated R&D laboratories are staffed by expert polymer scientists and engineers constantly developing next-generation foams.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm">
                  <h4 className="font-bold text-[#081C3A] mb-2 text-xl">Thermal Tech</h4>
                  <p className="text-sm text-gray-500">Advanced temperature regulating phase-change materials.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm">
                  <h4 className="font-bold text-[#081C3A] mb-2 text-xl">Acoustic Dampening</h4>
                  <p className="text-sm text-gray-500">Specialized foams for heavy industry noise reduction.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24 bg-[#06152D] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-heading mb-6"
          >
            Uncompromising Quality Assurance
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-16"
          >
            A rigorous 40-point testing protocol ensures every batch meets international ISO standards, achieving a near-zero defect rate. We utilize AI-driven optical sorting and stress testing before any product leaves the line.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                className="bg-[#171a29] border border-white/10 p-8 rounded-2xl"
              >
                <div className="text-4xl font-bold text-[#FF6B00] mb-2">{item.stat}</div>
                <div className="text-gray-300 font-semibold">{item.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="relative py-32 overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8ed7c50800?q=80&w=2000&auto=format&fit=crop" alt="Infrastructure" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#081C3A]/90"></div>
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white font-heading mb-8"
          >
            Infrastructure & Facilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
          >
            Our sprawling manufacturing hubs span millions of square feet, equipped with advanced robotics, automated warehousing, and integrated logistics. This massive infrastructure allows us to process immense volumes with staggering speed, ensuring uninterrupted supply to our global partners.
          </motion.p>
        </div>
      </section>
    </>
  );
}
