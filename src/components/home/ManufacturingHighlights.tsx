import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Simple counter component for animation
const Counter = ({ from, to, duration = 2, suffix = '' }: { from: number; to: number; duration?: number; suffix?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * (to - from) + from));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, from, to, duration]);

  return (
    <span ref={nodeRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

export default function ManufacturingHighlights() {
  const stats = [
    { value: 45, suffix: '+', label: 'Years Experience' },
    { value: 100, suffix: '+', label: 'Foam Variants' },
    { value: 300, suffix: '+', label: 'Dealer Network' },
    { value: 2, suffix: '', label: 'Manufacturing Plants' }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      
      {/* Background with parallax effect */}
      <motion.div 
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.05 }}
        transition={{ duration: 10, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=2070&auto=format&fit=crop" 
          alt="Manufacturing Excellence" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#FAFBFC]/95 backdrop-blur-sm z-10" />
      </motion.div>

      <div className="relative z-20 max-w-[1200px] mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-stylish text-[#081C3A] mb-4">
            Numbers That <span className="italic font-light">Define Us</span>
          </h2>
          <p className="text-[#667085] text-lg max-w-2xl mx-auto">
            A legacy of manufacturing excellence built on scale, precision, and trust.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="text-5xl md:text-6xl font-bold text-[#D4AF37] mb-4 font-heading drop-shadow-sm">
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </div>
              <h4 className="text-[15px] font-bold text-[#081C3A] uppercase tracking-wider">
                {stat.label}
              </h4>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
