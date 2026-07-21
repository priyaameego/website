import { motion } from 'framer-motion';
import foamImg from '../../assets/fo.png';
import custImg from '../../assets/cust.jpeg';
import pillowImg from '../../assets/pillow.jpeg';

export default function WhatWeDo() {
  const offerings = [
    {
      title: 'Foam',
      desc: 'Premium industrial and consumer foam manufacturing with advanced technology.',
      image: foamImg
    },
    {
      title: 'Mattress',
      desc: 'High-quality orthopedic, memory foam, and pocket spring mattresses.',
      image: 'https://shakshigroup.com/cdn/shop/t/2/assets/sg-img-mattress.png?v=19813383410274590221777797443'
    },
    {
      title: 'Pillows',
      desc: 'Ergonomic and supportive pillows designed for optimal neck alignment.',
      image: pillowImg
    },
    {
      title: 'Customisation',
      desc: 'Tailor-made dimensions and specifications for B2B and industrial needs.',
      image: custImg
    }
  ];

  return (
    <section className="py-24 bg-[#F4F7FA]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading text-[#0f172a] mb-4"
          >
            What We Do
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(8,28,58,0.15)] hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A]/20 to-transparent"></div>
              </div>
              <div className="p-8 text-center flex flex-col items-center">
                <h3 className="text-2xl font-bold font-heading text-[#0f172a] mb-4 relative inline-block">
                  {item.title}
                  <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-[2px] bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed max-w-[250px]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
