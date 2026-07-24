import { motion } from 'framer-motion';
import { useRef } from 'react';
import Glass3DCard from '../ui/Glass3DCard';
import { 
  Factory, 
  Bed, 
  BedDouble, 
  Scissors, 
  Settings, 
  Package,
  Layers,
  ThermometerSun,
  CheckCircle,
  Truck
} from 'lucide-react';



// Industry Images
import hImg from '../../assets/hos.png';
import healthImg from '../../assets/care.png';
import autoImg from '../../assets/a.png';
import furImg from '../../assets/fur.png';
import acousImg from '../../assets/sound.png';
import customImg from '../../assets/c.png';

export default function ManufacturingContent() {
  const processSteps = [
    { icon: <Layers size={24} />, title: 'Raw Material Selection', desc: 'Premium grade polymers.' },
    { icon: <Factory size={24} />, title: 'Foam Production', desc: 'State-of-the-art foaming.' },
    { icon: <ThermometerSun size={24} />, title: 'Foam Curing', desc: 'Optimized resting phase.' },
    { icon: <Scissors size={24} />, title: 'Precision Cutting', desc: 'CNC automated sizing.' },
    { icon: <BedDouble size={24} />, title: 'Mattress Assembly', desc: 'Layering & finishing.' },
    { icon: <CheckCircle size={24} />, title: 'Quality Inspection', desc: 'Rigorous testing.' },
    { icon: <Package size={24} />, title: 'Packaging', desc: 'Compressed & sealed.' },
    { icon: <Truck size={24} />, title: 'Distribution', desc: 'Rapid logistics.' }
  ];

  const capabilities = [
    { icon: <Factory size={32} />, title: 'PU Foam Manufacturing', desc: 'High-quality polyurethane foam blocks and sheets for diverse industrial applications.' },
    { icon: <BedDouble size={32} />, title: 'Mattress Manufacturing', desc: 'End-to-end production of premium spring, memory foam, and orthopedic mattresses.' },
    { icon: <Bed size={32} />, title: 'Pillow Manufacturing', desc: 'Molded memory foam, fiber-fill, and contour pillows designed for optimal neck support.' },
    { icon: <Scissors size={32} />, title: 'Custom Foam Conversion', desc: 'Precision CNC cutting, profiling, and shaping to exact OEM specifications.' },
    { icon: <Settings size={32} />, title: 'OEM Manufacturing', desc: 'Silent manufacturing partner for leading national and international sleep brands.' },
    { icon: <Package size={32} />, title: 'Bulk Production', desc: 'Scalable manufacturing capacity to meet high-volume demands without quality compromise.' }
  ];



  const industries = [
    { img: hImg, title: 'HOSPITALITY', desc: 'Premium mattresses and foam solutions for hotels, resorts, and hospitality chains. Custom sizes and firmness levels for luxury guest experiences.' },
    { img: healthImg, title: 'HEALTHCARE', desc: 'Medical-grade foam products for hospitals, clinics, and care facilities. Pressure-relief mattresses designed for patient comfort and recovery.' },
    { img: autoImg, title: 'AUTOMOTIVE', desc: 'Specialised seat cushioning and insulation foams for the automotive industry. Comfort for daily commuters and long-distance travellers.' },
    { img: furImg, title: 'FURNITURE', desc: 'Cushioning foams for sofas, chairs, and office furniture. Our special foams extend the promise of comfort beyond the bed.' },
    { img: acousImg, title: 'SOUND INSULATION', desc: 'Acoustic foam panels for studios, theatres, and industrial settings. Designed to absorb unwanted sound and improve environments.' },
    { img: customImg, title: 'CUSTOM SOLUTIONS', desc: 'Foam specific to your requirement. Our custom team will work with you to design and develop foam for any industrial application.' }
  ];

  const processRef = useRef(null);

  return (
    <>
      {/* 1. Manufacturing Process */}
      <section ref={processRef} className="relative py-32 bg-[#0A101D] overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#2E5B99]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-stylish font-bold text-white mb-6">Manufacturing <span className="text-[#D4AF37] italic">Process</span></h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">From premium raw materials to rapid distribution, experience our streamlined production lifecycle.</p>
          </div>
          
          <div className="relative">
            {/* Animated Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-8 left-[6%] right-[6%] h-[2px] bg-white/10 z-0 overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37] to-[#D4AF37]/0 w-1/3"
                animate={{ x: ["-100%", "300%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 relative z-10">
              {processSteps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                  className="flex flex-col items-center text-center group cursor-default"
                >
                  <div className="w-16 h-16 rounded-full bg-[#0A101D] border border-white/20 backdrop-blur-md flex items-center justify-center text-white/70 mb-6 group-hover:bg-[#D4AF37] group-hover:text-[#0A101D] group-hover:scale-110 group-hover:border-[#D4AF37] transition-all duration-500 shadow-[0_0_30px_rgba(212,175,55,0)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] relative z-10">
                    {step.icon}
                  </div>
                  <h4 className="text-white font-bold text-[13px] tracking-wide mb-2 group-hover:text-[#D4AF37] transition-colors">{step.title}</h4>
                  <p className="text-white/50 text-[11px] uppercase tracking-wider">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Manufacturing Capabilities */}
      <section className="py-32 bg-[#05080f]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
              <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[11px]">Core Competencies</span>
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
            </div>
            <h2 className="text-5xl md:text-7xl font-stylish font-bold text-white">Manufacturing Capabilities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              >
                <Glass3DCard className="h-full">
                  <div className="p-10 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] mb-8 group-hover:scale-110 transition-transform duration-500">
                      {cap.icon}
                    </div>
                    <h3 className="text-2xl font-stylish font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-500">{cap.title}</h3>
                    <p className="text-white/60 leading-relaxed font-light mt-auto">{cap.desc}</p>
                  </div>
                </Glass3DCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* 4. OEM Industries Served */}
      <section className="py-32 bg-[#05080f]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[11px]">Global Reach</span>
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
            </div>
            <h2 className="text-5xl md:text-7xl font-stylish font-bold text-white mb-6">OEM Industries Served</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">Providing specialized manufacturing solutions tailored to the strict demands of diverse sectors.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
              >
                <Glass3DCard tiltIntensity={8} className="h-96">
                  <img src={ind.img} alt={ind.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D] via-[#0A101D]/60 to-transparent flex flex-col justify-end p-10 border border-white/10 rounded-2xl">
                    <h3 className="text-3xl font-stylish font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">{ind.title}</h3>
                    <p className="text-white/70 font-light transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">{ind.desc}</p>
                  </div>
                </Glass3DCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
