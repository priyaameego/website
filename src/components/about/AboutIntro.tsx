import { motion } from 'framer-motion';
import chaImg from '../../assets/cha.png';

export default function AboutIntro() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1565626423194-e0c1f5413158?q=80&w=2000&auto=format&fit=crop" 
            alt="Corporate Facility" 
            className="w-full h-full object-cover grayscale opacity-80"
          />
          <div className="absolute inset-0 bg-[#1B2430]/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B2430] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white font-stylish mb-6"
          >
            About Shakshi Group
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 font-light"
          >
            A legacy of precision, engineering excellence, and unwavering commitment to global industries.
          </motion.p>
        </div>
      </section>

      <section id="overview" className="py-24 md:py-32 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">Overview</span>
                <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B2430] mb-8 font-stylish leading-tight">
                Engineering the Future <br/>
                <span className="italic font-light">With Uncompromised Quality</span>
              </h2>
              <p className="text-[#4B5563] mb-6 leading-relaxed text-lg">
                For over four decades, Shakshi Group has been at the forefront of industrial manufacturing, providing cutting-edge solutions for the most demanding global Original Equipment Manufacturers (OEMs). 
              </p>
              <p className="text-[#4B5563] mb-10 leading-relaxed text-lg">
                Our commitment goes beyond simply manufacturing parts; we are a strategic partner in engineering excellence. With state-of-the-art facilities and a relentless focus on innovation, we deliver unparalleled value across the entire supply chain.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-2xl border border-[#E7EBF0] shadow-sm hover:border-[#1B2430] transition-colors">
                  <div className="text-4xl font-stylish font-bold text-[#1B2430] mb-2">45+</div>
                  <div className="text-[11px] text-[#4B5563] font-bold uppercase tracking-widest">Years Experience</div>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-[#E7EBF0] shadow-sm hover:border-[#1B2430] transition-colors">
                  <div className="text-4xl font-stylish font-bold text-[#1B2430] mb-2">120+</div>
                  <div className="text-[11px] text-[#4B5563] font-bold uppercase tracking-widest">Global Partners</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white rounded-3xl shadow-sm -z-10 transition-transform duration-500 translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6"></div>
              <img 
                src={chaImg} 
                alt="Precision Engineering" 
                className="relative z-10 w-full h-[600px] object-cover rounded-3xl shadow-premium"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
