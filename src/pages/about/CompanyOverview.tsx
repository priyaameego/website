import PageLayout from '../../components/PageLayout';
import PageHero from '../../components/PageHero';
import { motion } from 'framer-motion';

export default function CompanyOverview() {
  return (
    <PageLayout>
      <PageHero 
        title="Company Overview" 
        subtitle="Discover our legacy of precision engineering and our commitment to providing world-class OEM solutions for global industries."
        bgImage="https://images.unsplash.com/photo-1565626423194-e0c1f5413158?q=80&w=2070&auto=format&fit=crop" 
      />
      
      <div className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-[#081C3A] font-bold tracking-widest uppercase text-[11px]">Our Heritage</span>
                <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1B2430] mb-8 leading-tight">
                Engineering the Future <br/>
                <span className="text-[#D4AF37]">With Precision</span>
              </h2>
              
              <p className="text-lg text-[#4B5563] mb-6 leading-relaxed">
                For over four decades, Shakshi Group has been at the forefront of industrial manufacturing, providing cutting-edge solutions for the most demanding global Original Equipment Manufacturers (OEMs). 
              </p>
              
              <p className="text-lg text-[#4B5563] mb-12 leading-relaxed">
                Our commitment goes beyond simply manufacturing parts; we are a strategic partner in engineering excellence. With state-of-the-art facilities and a relentless focus on innovation, we deliver unparalleled value across the entire supply chain.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 border-l-4 border-[#D4AF37] shadow-premium">
                  <div className="text-4xl font-bold text-[#081C3A] mb-2">45+</div>
                  <div className="text-[10px] text-[#4B5563] font-bold uppercase tracking-widest">Years Experience</div>
                </div>
                <div className="bg-white p-6 border-l-4 border-[#D4AF37] shadow-premium">
                  <div className="text-4xl font-bold text-[#081C3A] mb-2">120+</div>
                  <div className="text-[10px] text-[#4B5563] font-bold uppercase tracking-widest">Global Partners</div>
                </div>
              </div>
            </motion.div>
            
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2 relative group"
            >
              <div className="absolute inset-0 bg-[#081C3A] translate-x-4 translate-y-4 rounded-sm -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1580983524250-7058a59fa421?q=80&w=2070&auto=format&fit=crop" 
                alt="Precision Engineering" 
                className="relative z-10 w-full h-[500px] md:h-[600px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

          </div>
        </div>
      </div>
    </PageLayout>
  );
}
