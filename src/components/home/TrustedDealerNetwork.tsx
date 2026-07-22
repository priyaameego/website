import { motion } from 'framer-motion';
import { Network, Truck, Users, HeadphonesIcon } from 'lucide-react';

export default function TrustedDealerNetwork() {
  const features = [
    {
      icon: <Users size={28} className="text-[#081C3A]" />,
      title: '300+ Dealer Partners',
      desc: 'A robust and rapidly expanding network of trusted dealers ensuring premium products reach every corner.'
    },
    {
      icon: <Network size={28} className="text-[#081C3A]" />,
      title: 'Pan India Distribution',
      desc: 'Strategic distribution channels providing unmatched accessibility across all major cities and states.'
    },
    {
      icon: <Truck size={28} className="text-[#081C3A]" />,
      title: 'Fast Logistics',
      desc: 'Optimized supply chain and advanced warehousing ensuring lightning-fast delivery to our partners.'
    },
    {
      icon: <HeadphonesIcon size={28} className="text-[#081C3A]" />,
      title: 'Dedicated B2B Support',
      desc: 'Exclusive account management and priority technical support designed specifically for our B2B partners.'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FAFBFC] border-t border-[#E9EEF5]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-[#E63946] font-bold tracking-[0.2em] uppercase text-[11px]">TRUSTED BY LEADING BRANDS</span>
            <div className="h-[1px] w-12 bg-[#E63946]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-stylish text-[#081C3A] mb-6">
            Our Partners <span className="italic font-light">& Channels</span>
          </h2>
          <p className="text-[#667085] text-lg max-w-2xl mx-auto leading-relaxed">
            We collaborate with India's leading retail and distribution platforms to bring premium comfort to every doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative bg-white p-8 rounded-2xl border border-[#E9EEF5] shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-14 h-14 bg-[#FAFBFC] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-[#E9EEF5]">
                {feature.icon}
              </div>
              
              <h3 className="text-[17px] font-bold text-[#081C3A] mb-3 group-hover:text-[#D4AF37] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#667085] text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
