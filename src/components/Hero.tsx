import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    subtitle: 'Industrial Foam, Mattresses And More',
    title: 'Precision Engineered,<br />Built for Excellence',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2080&auto=format&fit=crop'
  },
  {
    id: 2,
    subtitle: 'Premium Mattresses',
    title: 'Ultimate Sleep<br />Comfort',
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    subtitle: 'Orthopedic Support',
    title: 'Advanced Ergonomics<br />For Your Back',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4,
    subtitle: 'Advanced Manufacturing',
    title: 'Premium Foam<br />Technology',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#081C3A]" id="home">
      
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          {/* Background Image with Ken Burns Effect */}
          <motion.img 
            initial={{ scale: 1 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 25, ease: "linear" }}
            src={slides[current].image} 
            alt="Shakshi Group Hero" 
            className="w-full h-full object-cover"
          />
          {/* Subtle dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40 z-10" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center pt-20">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <p className="text-white/90 text-sm md:text-lg lg:text-xl font-medium tracking-wide mb-4 uppercase">
              {slides[current].subtitle}
            </p>
            
            <h1 
              className="text-4xl sm:text-5xl md:text-7xl lg:text-[84px] font-stylish font-bold text-white leading-[1.1] mb-10 md:mb-12 tracking-tight"
              dangerouslySetInnerHTML={{ __html: slides[current].title }}
            />
          </motion.div>
        </AnimatePresence>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full sm:w-auto"
        >
          <Link 
            to="/industries"
            className="flex sm:inline-flex justify-center items-center px-6 py-3 sm:px-10 sm:py-4 bg-white text-[#1B2430] rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:bg-white/90 hover:scale-105 shadow-xl w-full sm:w-auto"
          >
            Explore Our Solutions
          </Link>
        </motion.div>
        
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-500 rounded-full ${
              current === idx ? 'w-10 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white/70"
      >
        <span className="text-2xl font-light animate-bounce">↓</span>
      </motion.div>

    </section>
  );
}
