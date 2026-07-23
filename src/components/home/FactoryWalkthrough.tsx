import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import fImg from '../../assets/f.jpeg';
import eImg from '../../assets/e.jpeg';
import sciImg from '../../assets/sci.jpeg';
import bedImg from '../../assets/bed.jpeg';

gsap.registerPlugin(ScrollTrigger);

export default function FactoryWalkthrough() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  const factorySteps = [
    { title: "Foam Production", desc: "Advanced continuous foaming plants with precise chemical metering.", image: fImg },
    { title: "CNC Cutting", desc: "Computer-controlled cutting for complex shapes and exact dimensions.", image: eImg },
    { title: "Mattress Assembly", desc: "Automated conveyor systems layering pocket springs, memory foam, and latex.", image: sciImg },
    { title: "Quilting & Taping", desc: "Multi-needle quilting machines for premium covers and edge finishing.", image: bedImg },
    { title: "Quality Inspection", desc: "Rigorous testing for durability, firmness, and dimensional accuracy.", image: fImg },
    { title: "Packaging", desc: "Roll-packing and vacuum sealing for efficient global logistics.", image: eImg },
  ];

  useEffect(() => {
    if (!containerRef.current || !scrollWrapperRef.current) return;

    const sections = gsap.utils.toArray('.factory-step');
    
    const tl = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + scrollWrapperRef.current?.offsetWidth,
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="h-screen bg-[#0A101D] overflow-hidden flex items-center relative">
      <div className="absolute top-12 left-12 z-20">
        <h2 className="text-4xl md:text-6xl font-stylish font-bold text-white drop-shadow-lg">
          Inside Our <span className="text-[#D4AF37] italic font-light">Factory</span>
        </h2>
        <p className="text-white/60 mt-2 uppercase tracking-widest text-sm">A Cinematic Walkthrough</p>
      </div>

      <div ref={scrollWrapperRef} className="flex h-[70vh] w-[600vw]">
        {factorySteps.map((step, idx) => (
          <div key={idx} className="factory-step w-screen h-full flex flex-col justify-center px-12 md:px-24">
            <div className="relative w-full max-w-[1200px] mx-auto h-full rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)] group">
              <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D] via-[#0A101D]/40 to-transparent"></div>
              
              <div className="absolute bottom-12 left-12 max-w-[600px]">
                <div className="text-[#D4AF37] font-bold text-xl mb-2 opacity-80 tracking-widest uppercase">0{idx + 1}</div>
                <h3 className="text-5xl font-stylish font-bold text-white mb-4 drop-shadow-xl">{step.title}</h3>
                <p className="text-xl text-white/80 leading-relaxed font-light drop-shadow-md">{step.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
