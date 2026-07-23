import { useRef } from 'react';
import PageLayout from '../../components/PageLayout';
import PageHero from '../../components/PageHero';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

export default function CompanyOverview() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  // 3D Tilt for Image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <PageLayout>
      <PageHero 
        title="Company Overview" 
        subtitle="Discover our legacy of precision engineering and our commitment to providing world-class OEM solutions for global industries."
        bgImage="https://images.unsplash.com/photo-1565626423194-e0c1f5413158?q=80&w=2070&auto=format&fit=crop" 
      />
      
      <div ref={containerRef} className="relative bg-[#0A101D] py-32 overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2E5B99]/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <div className="flex flex-col lg:flex-row gap-20 lg:gap-24 items-center">
            
            {/* Content Side */}
            <motion.div 
              style={{ y: y1 }}
              className="w-full lg:w-1/2 flex flex-col"
            >
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[11px]">Our Heritage</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-7xl font-stylish font-bold text-white mb-8 leading-[1.1] tracking-tight">
                Engineering the Future <br/>
                <span className="text-[#D4AF37] italic">With Precision</span>
              </h2>
              
              <p className="text-lg text-white/60 mb-6 leading-relaxed font-light">
                For over four decades, Shakshi Group has been at the forefront of industrial manufacturing, providing cutting-edge solutions for the most demanding global Original Equipment Manufacturers (OEMs). 
              </p>
              
              <p className="text-lg text-white/60 mb-12 leading-relaxed font-light">
                Our commitment goes beyond simply manufacturing parts; we are a strategic partner in engineering excellence. With state-of-the-art facilities and a relentless focus on innovation, we deliver unparalleled value across the entire supply chain.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="group relative bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:border-[#D4AF37]/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  <div className="relative z-10 text-5xl font-stylish font-bold text-white mb-2 group-hover:scale-110 group-hover:text-[#D4AF37] origin-left transition-all duration-500">45+</div>
                  <div className="relative z-10 text-[10px] text-white/70 font-bold uppercase tracking-[0.2em]">Years Experience</div>
                </div>
                <div className="group relative bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:border-[#D4AF37]/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  <div className="relative z-10 text-5xl font-stylish font-bold text-white mb-2 group-hover:scale-110 group-hover:text-[#D4AF37] origin-left transition-all duration-500">120+</div>
                  <div className="relative z-10 text-[10px] text-white/70 font-bold uppercase tracking-[0.2em]">Global Partners</div>
                </div>
              </div>
            </motion.div>
            
            {/* Image Side with 3D Tilt */}
            <motion.div 
              style={{ y: y2, perspective: 1200 }}
              className="w-full lg:w-1/2 relative"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative w-full h-[600px] md:h-[700px] rounded-3xl overflow-hidden group"
              >
                {/* Image Parallax (moves opposite to container scroll) */}
                <motion.img 
                  style={{ y: y1, scale: 1.2 }}
                  src="https://images.unsplash.com/photo-1580983524250-7058a59fa421?q=80&w=2070&auto=format&fit=crop" 
                  alt="Precision Engineering" 
                  className="absolute inset-0 w-full h-[120%] object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                />
                
                {/* Glass overlay that shifts with mouse */}
                <motion.div 
                  style={{ translateZ: 50 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#0A101D] via-transparent to-transparent pointer-events-none"
                />
                
                <motion.div
                  style={{ translateZ: 80 }}
                  className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100"
                >
                  <div className="text-[#D4AF37] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Facility Excellence</div>
                  <h3 className="text-white text-2xl font-bold font-stylish">Next-Gen Production</h3>
                </motion.div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </PageLayout>
  );
}
