import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import bannerVideo from '../assets/banner.mp4';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  // Scroll Effects for Parallax & Cinematic Zoom
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Mouse 3D Tilt Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { stiffness: 70, damping: 20, bounce: 0 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
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
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[100vh] min-h-[800px] flex items-center justify-center overflow-hidden bg-[#0A1428] [perspective:1500px]" 
      id="home"
    >
      
      {/* Seamless Cinematic Video Background with Parallax */}
      <motion.div
        style={{ scale: backgroundScale }}
        className="absolute inset-0 z-0 origin-center bg-[#0A1428]"
      >
        {/* Cinematic Ken Burns animation applied to the container itself */}
        <motion.div 
          animate={{ scale: [1, 1.1] }} 
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Cinematic Video Background */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-10 opacity-90 mix-blend-screen"
          >
            <source src={bannerVideo} type="video/mp4" />
          </video>
        </motion.div>
        
        {/* Deep Navy Overlay with Champagne Gold tint for luxury aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D] via-[#0A101D]/60 to-[#0A101D]/30 z-20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#D4AF37]/5 z-20 mix-blend-overlay" />
      </motion.div>

      {/* Floating 3D Particles */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -200, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              scale: Math.random() * 1.5 + 0.5,
            }}
          />
        ))}
      </div>

      {/* Content with 3D Tilt and Scroll Parallax */}
      <motion.div 
        style={{ 
          y: contentY, 
          opacity: contentOpacity,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative z-30 w-full max-w-[1400px] mx-auto px-8 flex flex-col pt-[100px]"
      >
        
        <motion.div
          initial={{ opacity: 0, y: 30, translateZ: 100 }}
          animate={{ opacity: 1, y: 0, translateZ: 100 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1000px]"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
            <p className="text-[#D4AF37] text-[11px] md:text-[13px] font-bold tracking-[0.3em] uppercase">
              Industrial Foam & OEM Solutions
            </p>
          </div>
          
          <h1 
            className="text-[44px] sm:text-[60px] md:text-[90px] lg:text-[110px] font-stylish font-bold text-white leading-[1.02] mb-12 tracking-tight drop-shadow-2xl"
          >
            Precision Engineered.<br />Built for Excellence.
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20, translateZ: 50 }}
          animate={{ opacity: 1, y: 0, translateZ: 50 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-8 items-center"
        >
          <Link 
            to="/industries"
            className="relative overflow-hidden group px-8 py-4 bg-white/5 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-[12px] tracking-widest uppercase hover:border-[#D4AF37] transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
          >
            <span className="relative z-10 group-hover:text-[#0A101D] transition-colors duration-500 delay-100">Explore Solutions</span>
            <div className="absolute inset-0 bg-[#D4AF37] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></div>
          </Link>
          <Link 
            to="/about"
            className="group flex items-center gap-3 text-white font-bold text-[12px] tracking-widest uppercase hover:text-[#D4AF37] transition-colors"
          >
            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:scale-110 transition-all duration-500">
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </div>
            Our Heritage
          </Link>
        </motion.div>
        
      </motion.div>

    </section>
  );
}
