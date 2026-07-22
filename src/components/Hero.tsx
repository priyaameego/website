import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import hero1 from '../assets/f.jpeg';
import hero2 from '../assets/bed.jpeg';
import hero3 from '../assets/sci.jpeg';
import hero4 from '../assets/foa.png';

const slides = [
  {
    id: 1,
    subtitle: 'Industrial Foam & OEM Solutions',
    title: 'Precision Engineered.<br />Built for Excellence.',
    image: hero1
  },
  {
    id: 2,
    subtitle: 'Luxury Sleep Systems',
    title: 'Ultimate Sleep<br />Comfort.',
    image: hero2
  },
  {
    id: 3,
    subtitle: 'Research & Innovation',
    title: 'Advanced Ergonomics<br />For Your Back.',
    image: hero3
  },
  {
    id: 4,
    subtitle: 'Advanced Manufacturing',
    title: 'Premium Foam<br />Technology.',
    image: hero4
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // Slower, more elegant transition
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[100vh] min-h-[800px] flex items-center justify-center overflow-hidden bg-[#FAFAF8]" id="home">
      
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          {/* Background Image with Slow Ken Burns Effect */}
          <motion.img 
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 30, ease: "linear" }}
            src={slides[current].image} 
            alt="Shakshi Group Hero" 
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient overlay for luxury commercial feel instead of harsh black */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B2430]/60 via-[#1B2430]/20 to-[#1B2430]/40 z-10" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-8 flex flex-col pt-[100px]">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-[900px]"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
              <p className="text-white text-[11px] md:text-[13px] font-semibold tracking-[0.2em] uppercase">
                {slides[current].subtitle}
              </p>
            </div>
            
            <h1 
              className="text-[40px] sm:text-[56px] md:text-[80px] lg:text-[100px] font-stylish font-bold text-white leading-[1.05] mb-12 tracking-tight"
              dangerouslySetInnerHTML={{ __html: slides[current].title }}
            />
          </motion.div>
        </AnimatePresence>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap gap-6"
        >
          <Link 
            to="/industries"
            className="btn-primary bg-[#D4AF37] hover:bg-[#B8962D] text-[#1B2430]"
          >
            Explore Solutions
          </Link>
          <Link 
            to="/about"
            className="btn-secondary text-white border-white/30 hover:border-white hover:bg-white hover:text-[#1B2430]"
          >
            Our Heritage
          </Link>
        </motion.div>
        
      </div>

      {/* Luxury Carousel Indicators */}
      <div className="absolute bottom-12 left-8 md:left-auto md:right-12 z-20 flex gap-4 items-center">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-700 relative flex items-center justify-center ${
              current === idx ? 'w-12 h-12' : 'w-8 h-8'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          >
            <span className={`absolute bg-white transition-all duration-700 rounded-full ${current === idx ? 'w-2 h-2' : 'w-1.5 h-1.5 opacity-50'}`}></span>
            {current === idx && (
              <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <motion.circle 
                  cx="50" cy="50" r="48" 
                  fill="none" 
                  stroke="rgba(255,255,255,0.4)" 
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="origin-center -rotate-90"
                />
              </motion.svg>
            )}
          </button>
        ))}
      </div>

    </section>
  );
}
