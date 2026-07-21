import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const yStats = useTransform(scrollY, [0, 500], [0, -50]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const stats = [
    { label: 'Years Excellence', value: '45+' },
    { label: 'Global Partners', value: '120+' },
    { label: 'Modern CNCs', value: '500+' },
    { label: 'Certifications', value: '100+' },
  ];

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1541123437800-1413158c30c5?q=80&w=2070&auto=format&fit=crop", 
      tag: "SHAKSHI GROUP",
      title: (
        <>
          <span className="text-[#FF6B00]">Premium Brands</span> for Every Need
        </>
      ),
      description: "Discover our comprehensive portfolio of foam and mattress brands designed for ultimate comfort and industrial excellence.",
      primaryBtn: "EXPLORE OUR SOLUTIONS",
      primaryLink: "/brands/shakshi",
      secondaryBtn: "REQUEST A QUOTE",
      secondaryLink: "/contact-us"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", 
      tag: "INDUSTRIAL LEADER",
      title: (
        <>
          Precision Engineering for <br/> Global OEM Manufacturing
        </>
      ),
      description: "Delivering world-class manufacturing solutions with advanced technology, uncompromised quality, and decades of engineering excellence.",
      primaryBtn: "VIEW CAPABILITIES",
      primaryLink: "/industries",
      secondaryBtn: "CONTACT US",
      secondaryLink: "/contact-us"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2070&auto=format&fit=crop", 
      tag: "INNOVATIVE SOLUTIONS",
      title: (
        <>
          <span className="text-[#D4AF37]">Next-Gen</span> Comfort & Durability
        </>
      ),
      description: "Pioneering advanced foam technologies that redefine standards across automotive, bedding, and industrial applications.",
      primaryBtn: "DISCOVER INNOVATION",
      primaryLink: "/about",
      secondaryBtn: "OUR STORY",
      secondaryLink: "/about"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop", 
      tag: "AUTOMOTIVE SEATING",
      title: (
        <>
          <span className="text-[#FF6B00]">Advanced Foam</span> for Automotive
        </>
      ),
      description: "Engineered for maximum resilience and comfort, delivering premium seating experiences for leading global automakers.",
      primaryBtn: "EXPLORE AUTOMOTIVE",
      primaryLink: "/industries",
      secondaryBtn: "LEARN MORE",
      secondaryLink: "/industries"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?q=80&w=2072&auto=format&fit=crop", 
      tag: "ACOUSTICS & INSULATION",
      title: (
        <>
          <span className="text-[#D4AF37]">Superior</span> Soundproofing
        </>
      ),
      description: "High-density acoustic foam solutions designed to eliminate noise and optimize sound quality in industrial spaces.",
      primaryBtn: "VIEW ACOUSTICS",
      primaryLink: "/industries",
      secondaryBtn: "GET A QUOTE",
      secondaryLink: "/contact-us"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[70vh] min-h-[750px] flex items-center overflow-hidden bg-[#081C3A]" id="home">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          {/* Dark gradient overlay similar to reference image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#081C3A]/95 via-[#081C3A]/50 to-transparent z-20" />
          <div className="absolute inset-0 bg-[#081C3A]/30 z-20 mix-blend-multiply" />
          <motion.img 
            initial={{ scale: 1 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 10, ease: "linear" }}
            src={slides[currentSlide].image} 
            alt="Hero Background" 
            className="absolute inset-0 w-full h-full object-cover z-10 origin-center"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-12 w-full mt-20">
        <div className="max-w-4xl text-center flex flex-col items-center mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              {/* Tag / Pill */}
              <div className="inline-block border border-[#FF6B00]/40 rounded-full px-6 py-2 mb-8 backdrop-blur-sm bg-black/20">
                <span className="text-[#FF6B00] font-bold tracking-[0.2em] uppercase text-xs">
                  {slides[currentSlide].tag}
                </span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-[76px] font-bold text-white leading-[1.1] mb-6 font-heading tracking-tight text-center">
                {slides[currentSlide].title}
              </h1>
              
              {/* Subheading */}
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mb-12 leading-relaxed text-center font-body">
                {slides[currentSlide].description}
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-center">
                <Link 
                  to={slides[currentSlide].primaryLink}
                  className="w-full sm:w-auto inline-flex justify-center items-center px-10 py-4 bg-[#FF6B00] text-white rounded font-bold tracking-wide transition-all duration-300 hover:bg-[#E65A00] hover:shadow-[0_4px_20px_rgba(255,107,0,0.4)] text-sm"
                >
                  {slides[currentSlide].primaryBtn}
                </Link>
                <Link 
                  to={slides[currentSlide].secondaryLink}
                  className="w-full sm:w-auto inline-flex justify-center items-center px-10 py-4 bg-transparent text-white border border-white/60 rounded font-bold tracking-wide transition-all duration-300 hover:bg-white/10 hover:border-white text-sm backdrop-blur-sm"
                >
                  {slides[currentSlide].secondaryBtn}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-[20%] left-0 w-full z-30">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center opacity-70 hover:opacity-100 transition-opacity">
          <div className="flex gap-4 items-center">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors backdrop-blur-md"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors backdrop-blur-md"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex gap-3 hidden md:flex">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === idx 
                    ? 'w-12 h-2 bg-[#FF6B00]' 
                    : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
