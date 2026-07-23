import { motion } from 'framer-motion';
import Glass3DCard from '../ui/Glass3DCard';

export default function OurCapabilities() {
  const capabilities = [
    {
      title: 'Polyurethane Foam Manufacturing',
      desc: 'High-density precision production',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Premium Mattress Engineering',
      desc: 'Multi-layer comfort design',
      image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Orthopedic Sleep Solutions',
      desc: 'Spinal alignment technology',
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'OEM & Private Label Manufacturing',
      desc: 'Scalable B2B production lines',
      image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Precision Quality Testing',
      desc: 'Rigorous lab diagnostics',
      image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Nationwide Distribution',
      desc: 'Robust logistics network',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#05080f] relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-[20%] left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-100px] w-[400px] h-[400px] bg-[#2E5B99]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase mb-4 border border-[#D4AF37]/30 px-6 py-2 rounded-full">Excellence Delivered</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-stylish font-bold text-white mb-6">
            Complete Manufacturing <span className="text-[#D4AF37] italic font-light">Ecosystem</span>
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto mb-8"></div>
          <p className="text-white/70 text-lg leading-relaxed font-light">
            Our integrated manufacturing facilities combine advanced foam production, mattress engineering, precision cutting, quality testing, and automated packaging to deliver world-class sleep and industrial foam solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="h-[360px]"
            >
              <Glass3DCard tiltIntensity={10} className="h-full w-full group">
                <div className="flex flex-col h-full bg-[#0A101D]/50 rounded-[20px] overflow-hidden">
                  <div className="w-full h-2/3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#0A101D]/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                    <img 
                      src={cap.image} 
                      alt={cap.title} 
                      className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D] to-transparent opacity-90 z-10 pointer-events-none"></div>
                  </div>
                  <div className="p-6 text-left relative z-20 flex-1 flex flex-col justify-center -mt-8">
                    <h3 className="text-white font-bold text-[18px] mb-2 font-stylish leading-tight group-hover:text-[#D4AF37] transition-colors drop-shadow-md">
                      {cap.title}
                    </h3>
                    <p className="text-white/50 text-sm font-light">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              </Glass3DCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
