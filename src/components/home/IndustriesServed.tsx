import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import bedImg from '../../assets/bed.jpeg';
import sciImg from '../../assets/sci.jpeg';
import fImg from '../../assets/f.jpeg';
import eImg from '../../assets/e.jpeg';

export default function IndustriesServed() {
  const [active, setActive] = useState(0);

  const industries = [
    { title: 'Hospitality', desc: 'Premium sleep solutions for world-class luxury hotels and resorts.', img: bedImg },
    { title: 'Healthcare', desc: 'Orthopedic and medical-grade foams meeting strict sanitation standards.', img: sciImg },
    { title: 'Furniture', desc: 'High-resilience foam blocks and sheets for luxury upholstery.', img: fImg },
    { title: 'Automotive', desc: 'Acoustic and seating foams engineered for durability and vibration dampening.', img: eImg },
    { title: 'Packaging', desc: 'Custom die-cut foam solutions for sensitive electronics and luxury goods.', img: fImg },
    { title: 'Acoustics', desc: 'Sound-absorbing foam panels for studios and commercial spaces.', img: sciImg },
  ];

  return (
    <section className="py-32 bg-[#0A101D] relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-stylish font-bold text-white drop-shadow-lg">
            Industries <span className="italic font-light text-[#D4AF37]">We Serve</span>
          </h2>
          <p className="text-white/60 mt-6 max-w-2xl mx-auto text-lg font-light">
            Providing specialized foam and sleep solutions across diverse global sectors.
          </p>
        </div>

        <div className="flex flex-col md:flex-row h-[700px] w-full gap-2 md:gap-4 overflow-hidden rounded-3xl">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              className={`relative h-full cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex-shrink-0 ${
                active === idx ? 'md:w-[50%] flex-grow' : 'md:w-[10%] flex-grow-0'
              }`}
              onMouseEnter={() => setActive(idx)}
              onClick={() => setActive(idx)}
              layout
            >
              <img 
                src={ind.img} 
                alt={ind.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000"
                style={{ filter: active === idx ? 'brightness(0.8)' : 'brightness(0.3) grayscale(100%)' }}
              />
              
              <div className={`absolute inset-0 flex flex-col justify-end p-8 transition-opacity duration-700 ${active === idx ? 'opacity-100 delay-300' : 'opacity-0 md:opacity-100'}`}>
                
                <h3 className={`text-white font-stylish font-bold transition-all duration-700 ${active === idx ? 'text-4xl md:text-5xl mb-4' : 'text-2xl mb-0 md:rotate-[-90deg] md:absolute md:bottom-20 md:left-1/2 md:-translate-x-1/2 md:whitespace-nowrap'}`}>
                  {ind.title}
                </h3>
                
                <AnimatePresence>
                  {active === idx && (
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-white/80 text-lg font-light max-w-md"
                    >
                      {ind.desc}
                    </motion.p>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
