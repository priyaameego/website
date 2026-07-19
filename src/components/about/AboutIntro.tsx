import { motion } from 'framer-motion';

export default function AboutIntro() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" 
            alt="Corporate Facility" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#081C3A]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white font-heading mb-6"
          >
            About Shakshi Group
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 font-light"
          >
            A legacy of precision, engineering excellence, and unwavering commitment to global industries.
          </motion.p>
        </div>
      </section>

      <section id="overview" className="py-24 bg-[#FFFFFF]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#081C3A] mb-6 font-heading">
                Engineering the Future <br/>
                <span className="text-[#D4AF37]">With Uncompromised Quality</span>
              </h2>
              <p className="text-[#4B5563] mb-6 leading-relaxed text-lg">
                For over four decades, Shakshi Group has been at the forefront of industrial manufacturing, providing cutting-edge solutions for the most demanding global Original Equipment Manufacturers (OEMs). 
              </p>
              <p className="text-[#4B5563] mb-8 leading-relaxed text-lg">
                Our commitment goes beyond simply manufacturing parts; we are a strategic partner in engineering excellence. With state-of-the-art facilities and a relentless focus on innovation, we deliver unparalleled value across the entire supply chain.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#F4F7FA] p-6 rounded-xl border border-[#E2E8F0]">
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">45+</div>
                  <div className="text-sm text-[#081C3A] font-bold uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="bg-[#F4F7FA] p-6 rounded-xl border border-[#E2E8F0]">
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">120+</div>
                  <div className="text-sm text-[#081C3A] font-bold uppercase tracking-wider">Global Partners</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#D4AF37] rounded-3xl blur-2xl opacity-10 translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1565439390236-0761e0bb4261?q=80&w=1200&auto=format&fit=crop" 
                alt="Precision Engineering" 
                className="relative z-10 w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
