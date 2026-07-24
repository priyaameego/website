import { useRef } from 'react';
import { Link } from 'react-router-dom';
import ScrollCanvas from './ScrollCanvas';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative bg-[#081C3A] w-full h-[100vh] overflow-hidden">
      
      {/* Frame Animation Canvas */}
      <ScrollCanvas containerRef={containerRef} />

      {/* UI Overlay */}
      <div className="absolute inset-0 w-full h-[100vh] pointer-events-none z-10 flex flex-col justify-center px-8 md:px-24">
        <div className="max-w-[1200px] mx-auto w-full flex flex-col items-start gap-8">
          
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
            <p className="text-[#D4AF37] text-[12px] font-bold tracking-[0.3em] uppercase">
              Shakshi Group
            </p>
          </div>

          <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed font-light mt-4">
            From advanced foam engineering to world-class mattress manufacturing and OEM solutions, Shakshi Group transforms innovative materials into exceptional comfort trusted across industries.
          </p>

          <div className="flex gap-6 mt-8 pointer-events-auto">
            <Link 
              to="/industries"
              className="px-8 py-4 bg-[#D4AF37] text-[#081C3A] font-bold text-[12px] tracking-widest uppercase rounded-full hover:bg-white transition-colors duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              Explore Our Manufacturing
            </Link>
            <Link 
              to="/brands/shakshi"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold text-[12px] tracking-widest uppercase rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              Discover Our Brands
            </Link>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase font-bold">Scroll to Explore</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </div>
      
    </section>
  );
}
