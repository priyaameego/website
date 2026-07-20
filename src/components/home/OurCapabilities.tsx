import { motion } from 'framer-motion';

export default function OurCapabilities() {
  const capabilities = [
    {
      title: 'Foaming',
      desc: 'Advanced foam production',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Mattress',
      desc: 'End-to-end manufacturing',
      image: 'https://shakshigroup.com/cdn/shop/t/2/assets/sg-img-mattress.png?v=19813383410274590221777797443'
    },
    {
      title: 'On Time Shipment',
      desc: 'Reliable delivery logistics',
      image: 'https://shakshigroup.com/cdn/shop/t/2/assets/sg-distribution.png?v=33792108670326876651777563150'
    },
    {
      title: 'Quality Compliance',
      desc: 'Strict industry standards',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Lab Testing',
      desc: 'In-house quality assurance',
      image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Pocket Spring',
      desc: 'Advanced spring technology',
      image: 'https://shakshigroup.com/cdn/shop/t/2/assets/sg-img-pillows.png?v=132920406996043062581777797443'
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black font-heading text-[#081C3A] mb-6">
            Our Capabilities
          </h2>
          <p className="text-[#6B7280] text-lg">
            As a premier Fortune 500 OEM manufacturer, Shakshi Group delivers excellence across the entire production spectrum. From raw materials to final delivery, our state-of-the-art facilities ensure unmatched quality and scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 flex flex-col md:flex-row items-center gap-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_-15px_rgba(8,28,58,0.15)] hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-24 h-24 rounded-[16px] overflow-hidden flex-shrink-0 relative shadow-md">
                <img 
                  src={cap.image} 
                  alt={cap.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-[#081C3A] font-bold text-xl mb-1 group-hover:text-[#E63946] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-[#6B7280] text-sm font-medium">
                  {cap.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
