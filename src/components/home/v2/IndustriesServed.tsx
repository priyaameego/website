import { motion } from 'framer-motion';

import hImg from '../../../assets/hos.png';
import healthImg from '../../../assets/care.png';
import autoImg from '../../../assets/a.png';
import furImg from '../../../assets/fur.png';
import acousImg from '../../../assets/sound.png';
import customImg from '../../../assets/c.png';

export default function IndustriesServed() {
  const industries = [
    { name: 'HOSPITALITY', img: hImg, desc: 'Premium mattresses and foam solutions for hotels, resorts, and hospitality chains. Custom sizes and firmness levels for luxury guest experiences.' },
    { name: 'HEALTHCARE', img: healthImg, desc: 'Medical-grade foam products for hospitals, clinics, and care facilities. Pressure-relief mattresses designed for patient comfort and recovery.' },
    { name: 'AUTOMOTIVE', img: autoImg, desc: 'Specialised seat cushioning and insulation foams for the automotive industry. Comfort for daily commuters and long-distance travellers.' },
    { name: 'FURNITURE', img: furImg, desc: 'Cushioning foams for sofas, chairs, and office furniture. Our special foams extend the promise of comfort beyond the bed.' },
    { name: 'SOUND INSULATION', img: acousImg, desc: 'Acoustic foam panels for studios, theatres, and industrial settings. Designed to absorb unwanted sound and improve environments.' },
    { name: 'CUSTOM SOLUTIONS', img: customImg, desc: 'Foam specific to your requirement. Our custom team will work with you to design and develop foam for any industrial application.' }
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#1B2430] font-bold tracking-[0.3em] uppercase text-xs border border-[#1B2430]/20 px-6 py-2 rounded-full mb-8 inline-block">
            06. Industries We Serve
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-stylish font-bold text-[#1B2430] leading-[1.1]">
            Powering Global <span className="italic font-light text-[#D4AF37]">Sectors</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind, idx) => (
            <motion.div 
              key={idx}
              className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-[32px] overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
            >
              <img 
                src={ind.img} 
                alt={ind.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700"></div>
              
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-stylish font-bold mb-4 drop-shadow-lg">
                    {ind.name}
                  </h3>
                  <div className="w-12 h-[2px] bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
