import { motion } from 'framer-motion';
import foamImg from '../../assets/foa.png';
import mattressImg from '../../assets/matter.png';
import pillowImg from '../../assets/pillow.jpeg';
import custImg from '../../assets/cust.jpeg';

export default function WhatWeDo() {
  const offerings = [
    {
      title: 'Foam',
      desc: 'Premium industrial and consumer foam manufacturing with advanced technology.',
      image: foamImg
    },
    {
      title: 'Mattresses',
      desc: 'High-quality orthopedic, memory foam, and pocket spring mattresses.',
      image: mattressImg
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
    <section className="py-24 md:py-32 bg-[#FAFAF8]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20 flex flex-col items-center">
          <span className="text-[#1B2430] text-xs font-bold tracking-[0.2em] uppercase mb-4">Our Expertise</span>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-stylish font-bold text-[#1B2430] mb-6"
          >
            What We Do
          </motion.h2>
          <div className="w-12 h-[2px] bg-[#1B2430] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="premium-card group bg-white overflow-hidden"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-8 text-center flex flex-col items-center">
                <h3 className="text-2xl font-semibold text-[#1B2430] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">
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
