import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseShakshi() {
  const reasons = [
    'OEM Manufacturing Expertise',
    '100+ Foam Variants',
    'Custom Foam Development',
    'In-house Quality Testing',
    'Advanced Manufacturing Facilities',
    'Pan-India Distribution',
    'Reliable Production Capacity'
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FFFFFF]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">Corporate Advantage</span>
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1B2430] font-stylish font-bold mb-8 leading-tight">
              Why Industries Choose Shakshi
            </h2>
            
            <p className="text-lg text-[#667085] mb-10 leading-relaxed">
              We partner with leading businesses to deliver specialized foam and mattress solutions that meet precise technical and commercial requirements. Our commitment to quality and scale ensures a reliable supply chain for your manufacturing needs.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {reasons.map((reason, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={20} strokeWidth={1.5} className="text-[#D4AF37] flex-shrink-0" />
                  <span className="text-[#1B2430] font-semibold text-[15px]">{reason}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="absolute inset-0 bg-[#FAFAF8] shadow-sm rounded-[24px] -z-10 transition-transform duration-500 translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <div className="relative overflow-hidden rounded-[24px] shadow-[0_10px_40px_rgb(0,0,0,0.06)]">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                alt="Advanced Manufacturing" 
                className="w-full h-[500px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
