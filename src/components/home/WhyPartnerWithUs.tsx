import { motion } from 'framer-motion';
import { Factory, Cog, ShieldCheck, PenTool, PackageCheck, Headset } from 'lucide-react';

export default function WhyPartnerWithUs() {
  const benefits = [
    {
      icon: <Factory size={24} className="text-[#D4AF37]" />,
      title: 'Advanced Manufacturing',
      desc: 'State-of-the-art facilities equipped with German and Italian foaming technologies.'
    },
    {
      icon: <Cog size={24} className="text-[#D4AF37]" />,
      title: 'OEM Expertise',
      desc: 'Over four decades of experience manufacturing for top global and domestic brands.'
    },
    {
      icon: <ShieldCheck size={24} className="text-[#D4AF37]" />,
      title: 'Certified Quality',
      desc: 'ISO certified processes ensuring consistent density, ILD, and durability.'
    },
    {
      icon: <PenTool size={24} className="text-[#D4AF37]" />,
      title: 'Custom Engineering',
      desc: 'Tailor-made foam formulations designed for your specific industrial application.'
    },
    {
      icon: <PackageCheck size={24} className="text-[#D4AF37]" />,
      title: 'Reliable Delivery',
      desc: 'Optimized logistics guaranteeing on-time delivery across all states in India.'
    },
    {
      icon: <Headset size={24} className="text-[#D4AF37]" />,
      title: 'Dedicated Technical Support',
      desc: 'Expert engineering support team available for troubleshooting and optimization.'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#081C3A] text-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-[11px]">THE SHAKSHI ADVANTAGE</span>
            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-stylish text-white mb-6">
            Why Partner <span className="italic font-light">With Us</span>
          </h2>
          <p className="text-[#C8D2E1] text-lg max-w-2xl mx-auto leading-relaxed">
            We don't just supply foam; we engineer the foundation of your products. Discover the benefits of partnering with an industry leader.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-[#102848] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#C8D2E1] text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
