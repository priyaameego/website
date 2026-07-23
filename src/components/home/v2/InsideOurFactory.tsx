import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function InsideOurFactory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    { title: "01. Chemical Synthesis", desc: "Precision blending of raw materials in temperature-controlled vats.", img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop" },
    { title: "02. Foam Pouring", desc: "Automated continuous foaming lines for structural consistency.", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2070&auto=format&fit=crop" },
    { title: "03. CNC Cutting", desc: "Laser-guided cutting for precise, zero-waste block shaping.", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" },
    { title: "04. Assembly", desc: "Layering memory foam, pocket springs, and latex via robotic arms.", img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop" },
    { title: "05. Quality Assurance", desc: "Stress testing and density mapping in ISO-certified labs.", img: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop" },
    { title: "06. Dispatch", desc: "Vacuum roll-packing and automated dispatch logistics.", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070&auto=format&fit=crop" }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    
    if (section && container) {
      // Calculate how far to move left
      const totalWidth = container.scrollWidth;
      const viewportWidth = window.innerWidth;
      
      const pinTrigger = ScrollTrigger.create({
        trigger: section,
        pin: true,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: 1,
        animation: gsap.to(container, {
          x: () => -(totalWidth - viewportWidth),
          ease: "none",
        })
      });

      return () => {
        pinTrigger.kill();
      };
    }
  }, []);

  return (
    <section ref={sectionRef} className="h-screen w-full bg-[#05080f] overflow-hidden flex flex-col justify-center relative">
      
      <div className="absolute top-12 left-6 md:left-12 z-20">
        <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs border border-[#D4AF37]/30 px-6 py-2 rounded-full mb-4 inline-block">
          03. Manufacturing Journey
        </span>
        <h2 className="text-4xl md:text-5xl font-stylish font-bold text-white">Inside Our Factory</h2>
      </div>

      <div ref={containerRef} className="flex gap-8 px-6 md:px-12 w-max items-center h-full pt-32 pb-16">
        {steps.map((step, idx) => (
          <div key={idx} className="w-[85vw] md:w-[60vw] lg:w-[45vw] h-[60vh] shrink-0 relative group rounded-2xl overflow-hidden">
            <img 
              src={step.img} 
              alt={step.title} 
              className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-luminosity opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D] via-[#0A101D]/20 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <div className="flex items-end gap-6">
                <div className="text-5xl md:text-7xl font-bold font-stylish text-transparent [-webkit-text-stroke:2px_rgba(212,175,55,0.3)] group-hover:[-webkit-text-stroke:2px_rgba(212,175,55,1)] transition-all duration-500">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-stylish font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">{step.title.split('. ')[1]}</h3>
                  <p className="text-white/70 font-light max-w-sm">{step.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
