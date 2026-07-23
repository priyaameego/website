import { motion } from 'framer-motion';
import Glass3DCard from '../ui/Glass3DCard';

import hImg from '../../assets/h.png';
import healthImg from '../../assets/he.png';
import autoImg from '../../assets/h1.png';
import furImg from '../../assets/fur.png';
import acousImg from '../../assets/au.png';
import customImg from '../../assets/ss2.png';

export default function OurCapabilities() {
  const capabilities = [
    { title: 'HOSPITALITY', desc: 'Premium mattresses and foam solutions for hotels, resorts, and hospitality chains. Custom sizes and firmness levels for luxury guest experiences.', image: hImg },
    { title: 'HEALTHCARE', desc: 'Medical-grade foam products for hospitals, clinics, and care facilities. Pressure-relief mattresses designed for patient comfort and recovery.', image: healthImg },
    { title: 'AUTOMOTIVE', desc: 'Specialised seat cushioning and insulation foams for the automotive industry. Comfort for daily commuters and long-distance travellers.', image: autoImg },
    { title: 'FURNITURE', desc: 'Cushioning foams for sofas, chairs, and office furniture. Our special foams extend the promise of comfort beyond the bed.', image: furImg },
    { title: 'SOUND INSULATION', desc: 'Acoustic foam panels for studios, theatres, and industrial settings. Designed to absorb unwanted sound and improve environments.', image: acousImg },
    { title: 'CUSTOM SOLUTIONS', desc: 'Foam specific to your requirement. Our custom team will work with you to design and develop foam for any industrial application.', image: customImg }
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
