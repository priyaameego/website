import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Glass3DCard from '../ui/Glass3DCard';

import hImg from '../../assets/hos.png';
import healthImg from '../../assets/care.png';
import autoImg from '../../assets/a.png';
import furImg from '../../assets/fur.png';
import acousImg from '../../assets/sound.png';
import customImg from '../../assets/c.png';

export default function IndustryCards() {
  const industries = [
    {
      title: 'HOSPITALITY',
      image: hImg,
      desc: 'Premium mattresses and foam solutions for hotels, resorts, and hospitality chains. Custom sizes and firmness levels for luxury guest experiences.'
    },
    {
      title: 'HEALTHCARE',
      image: healthImg,
      desc: 'Medical-grade foam products for hospitals, clinics, and care facilities. Pressure-relief mattresses designed for patient comfort and recovery.'
    },
    {
      title: 'AUTOMOTIVE',
      image: autoImg,
      desc: 'Specialised seat cushioning and insulation foams for the automotive industry. Comfort for daily commuters and long-distance travellers.'
    },
    {
      title: 'FURNITURE',
      image: furImg,
      desc: 'Cushioning foams for sofas, chairs, and office furniture. Our special foams extend the promise of comfort beyond the bed.'
    },
    {
      title: 'SOUND INSULATION',
      image: acousImg,
      desc: 'Acoustic foam panels for studios, theatres, and industrial settings. Designed to absorb unwanted sound and improve environments.'
    },
    {
      title: 'CUSTOM SOLUTIONS',
      image: customImg,
      desc: 'Foam specific to your requirement. Our custom team will work with you to design and develop foam for any industrial application.'
    }
  ];

  return (
    <section className="py-32 bg-[#0A101D] relative overflow-hidden">
      
      {/* 3D Background Particles/Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-full blur-[100px] opacity-40"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-gradient-to-tl from-[#2E5B99]/5 to-transparent rounded-full blur-[120px] opacity-50"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
            <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[11px]">Foam Applications</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-stylish text-white drop-shadow-sm">
            The Wide World of <span className="text-[#D4AF37] italic font-light">Foam</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 text-left mb-24">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.8 }}
              className="h-[450px]"
            >
              <Glass3DCard tiltIntensity={10} className="h-full">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden rounded-t-2xl">
                  <img 
                    src={industry.image} 
                    alt={industry.title} 
                    className="w-full h-[120%] -translate-y-4 object-cover transition-transform duration-1000 group-hover:translate-y-0 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D] to-transparent"></div>
                </div>
                
                {/* Text Description */}
                <div className="p-8 flex flex-col flex-grow bg-[#0A101D]/80">
                  <h3 className="text-white text-2xl font-bold font-stylish tracking-wide mb-4 group-hover:text-[#D4AF37] transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed font-light">
                    {industry.desc}
                  </p>
                </div>
              </Glass3DCard>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="inline-block"
        >
          <Link to="/contact">
            <button className="bg-[#D4AF37] text-[#0A101D] px-10 py-5 rounded-sm font-bold tracking-widest text-sm hover:bg-white transition-colors duration-300 inline-flex items-center gap-3 shadow-[0_0_40px_rgba(212,175,55,0.3)]">
              ENQUIRE FOR YOUR INDUSTRY
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
