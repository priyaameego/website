import { motion } from 'framer-motion';
import Glass3DCard from '../ui/Glass3DCard';

export default function WhyJoin() {
  const benefits = [
    {
      title: 'Mentorship',
      desc: 'Learn from industry veterans and grow your career with guided mentorship programs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37]">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      )
    },
    {
      title: 'Create Products',
      desc: 'Develop and perfect new materials that improve comfort for customers.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37]">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    },
    {
      title: 'Build Brands',
      desc: 'Work on innovative consumer brands that dominate the market.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37]">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    {
      title: 'Wellbeing',
      desc: 'Comprehensive health, safety, and wellness programs for all employees.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37]">
          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="py-32 bg-[#0A101D] relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-24 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-5/12"
          >
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
              <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[11px]">JOIN OUR TEAM</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-stylish text-white leading-[1.1] mb-8 tracking-tight">
              Build a <span className="text-[#D4AF37] italic font-light">Rewarding Career</span>
            </h2>
            
            <p className="text-lg text-white/60 leading-relaxed mb-6 font-light">
              Be a part of driven teams that value and empower everyone — from the veteran to the newcomer. Shakshi Group is a workplace that values effort and talent above everything else.
            </p>
            
            <p className="text-lg text-white/60 leading-relaxed font-light">
              We are making lives more comfortable for people. And it starts with our own people at the workplace. From manufacturing innovation to brand building, there's a place for your passion here.
            </p>
          </motion.div>

          {/* Right Cards */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.15 }}
                  className="h-full"
                >
                  <Glass3DCard tiltIntensity={10} glowColor="rgba(212, 175, 55, 0.15)" className="h-full">
                    <div className="p-10 flex flex-col h-full group">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-500">
                        <div className="group-hover:scale-110 group-hover:brightness-0 transition-transform duration-500">
                          {item.icon}
                        </div>
                      </div>
                      <h4 className="text-2xl font-bold font-stylish text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">{item.title}</h4>
                      <p className="text-white/60 text-[15px] leading-relaxed font-light group-hover:text-white/80 transition-colors duration-300">{item.desc}</p>
                    </div>
                  </Glass3DCard>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
