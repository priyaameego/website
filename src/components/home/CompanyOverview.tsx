import { motion } from 'framer-motion';
import { ShieldCheck, Award, Factory, Globe2 } from 'lucide-react';

export default function CompanyOverview() {
  const features = [
    { icon: <Factory size={28} />, title: 'Advanced Facilities', desc: 'Over 500,000 sq.ft of automated production space.' },
    { icon: <Globe2 size={28} />, title: 'Global Reach', desc: 'Exporting to 40+ countries with robust logistics.' },
    { icon: <ShieldCheck size={28} />, title: 'Uncompromised Quality', desc: 'ISO 9001 certified with rigorous testing.' },
    { icon: <Award size={28} />, title: '45+ Years Legacy', desc: 'Decades of pioneering foam manufacturing.' }
  ];

  return (
    <section className="py-24 bg-[#F4F7FA]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="inline-block border border-[#081C3A]/20 rounded-full px-6 py-2 bg-white">
              <span className="text-[#081C3A] font-bold tracking-widest uppercase text-xs">Company Overview</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#081C3A] font-heading leading-tight">
              Pioneering <span className="text-[#FF6B00]">Engineering Excellence</span> for the World
            </h2>
            
            <p className="text-lg text-[#4B5563] leading-relaxed">
              Shakshi Group is a premier global OEM manufacturer specializing in advanced foam solutions and precision engineering. We empower industries worldwide by delivering unparalleled quality, scale, and technological innovation.
            </p>
            <p className="text-lg text-[#4B5563] leading-relaxed">
              From automotive seating to industrial acoustics and luxury bedding, our vertically integrated facilities ensure strict compliance with global standards, making us the trusted partner for Fortune 500 companies.
            </p>
            
            <div className="pt-4">
              <a href="#about" className="btn-primary text-sm tracking-wide">DISCOVER OUR LEGACY</a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feat, idx) => (
                <div key={idx} className="bg-[#FFFFFF] p-8 rounded-2xl shadow-[0_10px_30px_-15px_rgba(8,28,58,0.1)] border border-[#E2E8F0] hover:-translate-y-2 hover:shadow-[0_15px_35px_-10px_rgba(8,28,58,0.15)] transition-all duration-300 group">
                  <div className="w-14 h-14 bg-[#EEF5FF] text-[#FF6B00] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF6B00] group-hover:text-white transition-colors duration-300">
                    {feat.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#081C3A] mb-3">{feat.title}</h4>
                  <p className="text-[#4B5563] text-sm leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
