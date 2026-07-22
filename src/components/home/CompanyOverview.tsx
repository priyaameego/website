import { motion } from 'framer-motion';
import { ShieldCheck, Award, Factory, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CompanyOverview() {
  const features = [
    { icon: <Factory size={28} />, title: 'Advanced Facilities', desc: 'Over 500,000 sq.ft of automated production space.' },
    { icon: <Globe2 size={28} />, title: 'Global Reach', desc: 'Exporting to 40+ countries with robust logistics.' },
    { icon: <ShieldCheck size={28} />, title: 'Uncompromised Quality', desc: 'ISO 9001 certified with rigorous testing.' },
    { icon: <Award size={28} />, title: '45+ Years Legacy', desc: 'Decades of pioneering foam manufacturing.' }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">
                Company Overview
              </span>
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-stylish font-bold text-[#1B2430] leading-tight mb-8">
              Pioneering <span className="italic font-light">Excellence</span> for the World
            </h2>
            
            <p className="text-lg text-[#4B5563] leading-relaxed mb-6">
              Shakshi Group is a premier global OEM manufacturer specializing in advanced foam solutions and precision engineering. We empower industries worldwide by delivering unparalleled quality, scale, and technological innovation.
            </p>
            <p className="text-lg text-[#4B5563] leading-relaxed mb-10">
              From automotive seating to industrial acoustics and luxury bedding, our vertically integrated facilities ensure strict compliance with global standards, making us the trusted partner for Fortune 500 companies.
            </p>
            
            <Link to="/about" className="btn-primary">DISCOVER OUR LEGACY</Link>
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
                <div key={idx} className="premium-card p-8 group">
                  <div className="w-14 h-14 bg-[#F7F8FA] text-[#1B2430] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1B2430] group-hover:text-white transition-colors duration-500">
                    {feat.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#1B2430] mb-3 group-hover:text-[#D4AF37] transition-colors">{feat.title}</h4>
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
