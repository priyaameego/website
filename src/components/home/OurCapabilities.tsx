import { motion } from 'framer-motion';

export default function OurCapabilities() {
  const capabilities = [
    {
      title: 'Foaming',
      desc: 'Advanced foam production',
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2070&auto=format&fit=crop'
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
    <section className="py-24 md:py-32 bg-[#F7F8FA] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-3xl mx-auto flex flex-col items-center"
        >
          <span className="text-[#1B2430] text-xs font-bold tracking-[0.2em] uppercase mb-4">Excellence Delivered</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-stylish font-bold text-[#1B2430] mb-6">
            Our Capabilities
          </h2>
          <div className="w-12 h-[2px] bg-[#1B2430] mx-auto mb-8"></div>
          <p className="text-[#4B5563] text-lg leading-relaxed">
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
              className="premium-card p-6 flex flex-col md:flex-row items-center gap-6 cursor-pointer group"
            >
              <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 relative">
                <img 
                  src={cap.image} 
                  alt={cap.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-[#1B2430] font-bold text-xl mb-1 group-hover:text-[#D4AF37] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-[#4B5563] text-sm">
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
