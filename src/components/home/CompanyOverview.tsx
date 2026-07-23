import { motion } from 'framer-motion';
import { Microscope, PackageCheck, ClipboardCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Glass3DCard from '../ui/Glass3DCard';

export default function CompanyOverview() {
  const features = [
    { icon: <Microscope size={28} />, title: 'Advanced Foam Technology', desc: 'Engineered for consistent density, resilience, and long-lasting performance.' },
    { icon: <PackageCheck size={28} />, title: 'OEM Manufacturing Excellence', desc: 'Scalable private-label production with strict quality control.' },
    { icon: <ClipboardCheck size={28} />, title: 'Quality Assurance', desc: 'Every product undergoes rigorous durability and comfort testing.' },
    { icon: <Truck size={28} />, title: 'Pan-India Distribution', desc: 'Reliable manufacturing and delivery network serving partners across India.' }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0A101D] relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[11px] border border-[#D4AF37]/30 px-6 py-2 rounded-full">
                Built on Engineering
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-stylish font-bold text-white leading-[1.1] mb-8">
              Built on Engineering. Trusted for <span className="italic font-light text-[#D4AF37]">Comfort.</span>
            </h2>
            
            <p className="text-lg text-white/70 font-light leading-relaxed mb-10">
              For decades, Shakshi Group has combined innovation, manufacturing excellence, and uncompromising quality to create premium foam and mattress solutions trusted by businesses and consumers alike.
            </p>
            
            <Link 
              to="/about" 
              className="inline-flex items-center gap-4 text-white text-[13px] font-bold tracking-[0.2em] uppercase group"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)] group-hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)]">
                <span className="group-hover:text-[#0A101D] transition-colors duration-300">→</span>
              </div>
              <span>DISCOVER OUR LEGACY</span>
            </Link>
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
                <div key={idx} className="h-full min-h-[240px]">
                  <Glass3DCard tiltIntensity={10} className="group h-full">
                    <div className="p-8 h-full flex flex-col justify-start">
                      <div className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent border border-white/20 text-white rounded-[16px] flex shrink-0 items-center justify-center mb-6 group-hover:from-[#D4AF37] group-hover:to-[#b38f29] group-hover:text-[#0A101D] group-hover:border-[#D4AF37] transition-all duration-500 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] group-hover:shadow-[inset_0_2px_10px_rgba(255,255,255,0.5)]">
                        {feat.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold font-stylish text-white mb-3 group-hover:text-[#D4AF37] transition-colors leading-tight">{feat.title}</h4>
                        <p className="text-white/60 text-sm font-light leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  </Glass3DCard>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
