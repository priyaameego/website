import { motion } from 'framer-motion';

export default function WhyJoin() {
  const benefits = [
    {
      title: 'Mentorship',
      desc: 'Learn from industry veterans and grow your career with guided mentorship programs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37]">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37]">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37]">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    {
      title: 'Wellbeing',
      desc: 'Comprehensive health, safety, and wellness programs for all employees.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37]">
          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-[#F4F7FA]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12"
          >
            <div className="mb-6">
              <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs">
                JOIN OUR TEAM
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#0f172a] leading-tight mb-6">
              Build a Rewarding Career
            </h2>
            
            <p className="text-lg text-[#64748b] leading-relaxed mb-6">
              Be a part of driven teams that value and empower everyone — from the veteran to the newcomer. Shakshi Group is a workplace that values effort and talent above everything else.
            </p>
            
            <p className="text-lg text-[#64748b] leading-relaxed">
              We are making lives more comfortable for people. And it starts with our own people at the workplace. From manufacturing innovation to brand building, there's a place for your passion here.
            </p>
          </motion.div>

          {/* Right Cards */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-[#E2E8F0] hover:shadow-[0_20px_40px_-15px_rgba(8,28,58,0.1)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-start group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#0f172a] mb-3">{item.title}</h4>
                  <p className="text-[#64748b] text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
