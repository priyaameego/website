import { motion } from 'framer-motion';
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

// Gallery Images
import foamImg from '../../assets/foa.png';
import mattressImg from '../../assets/matter.png';
import labImg from '../../assets/sci.jpeg';
import cutImg from '../../assets/f.jpeg';
import packImg from '../../assets/e.jpeg';
import warehouseImg from '../../assets/w.jpeg';

// Industry Images
import hospImg from '../../assets/h1.png';
import healthImg from '../../assets/healthcare.png';
import furnImg from '../../assets/fur.png';
import autoImg from '../../assets/automative.png';
import packIndImg from '../../assets/easy.png';
import custImg from '../../assets/cust.jpeg';

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

  const gallery = [
    { img: foamImg, title: 'Foam Production Line' },
    { img: mattressImg, title: 'Mattress Manufacturing' },
    { img: labImg, title: 'Quality Testing Laboratory' },
    { img: cutImg, title: 'Automated Cutting Machines' },
    { img: packImg, title: 'Packaging Area' },
    { img: warehouseImg, title: 'Warehouse & Logistics' }
  ];

  const industries = [
    { img: hospImg, title: 'Hospitality', desc: 'Durable, premium mattresses for hotels and resorts.' },
    { img: healthImg, title: 'Healthcare', desc: 'Medical-grade foam and supportive mattress solutions.' },
    { img: furnImg, title: 'Furniture & Bedding', desc: 'High-resilience seating and cushioning foams.' },
    { img: autoImg, title: 'Automotive', desc: 'Acoustic and seating foam components for vehicles.' },
    { img: packIndImg, title: 'Packaging', desc: 'Protective foam packaging for sensitive equipment.' },
    { img: custImg, title: 'Custom OEM Solutions', desc: 'Tailor-made foam products for specialized industries.' }
  ];

  return (
    <>
      {/* 1. Manufacturing Process */}
      <section className="py-24 bg-[#1B2430]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-stylish font-bold text-white mb-6">Manufacturing Process</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">From premium raw materials to rapid distribution, experience our streamlined production lifecycle.</p>
          </div>
          
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-[#D4AF37]/30 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 relative z-10">
              {processSteps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group cursor-default"
                >
                  <div className="w-16 h-16 rounded-full bg-[#1B2430] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mb-4 group-hover:bg-[#D4AF37] group-hover:text-[#1B2430] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                    {step.icon}
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-2">{step.title}</h4>
                  <p className="text-white/60 text-xs">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Manufacturing Capabilities */}
      <section className="py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">Core Competencies</span>
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-stylish font-bold text-[#1B2430]">Manufacturing Capabilities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-2xl border border-[#E7EBF0] hover:border-[#D4AF37] hover:shadow-premium transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#F7F8FA] flex items-center justify-center text-[#1B2430] mb-6 group-hover:bg-[#1B2430] group-hover:text-[#D4AF37] transition-colors">
                  {cap.icon}
                </div>
                <h3 className="text-2xl font-stylish font-bold text-[#1B2430] mb-4">{cap.title}</h3>
                <p className="text-[#4B5563] leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Factory Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">Inside Our Facilities</span>
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-stylish font-bold text-[#1B2430]">Factory Gallery</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group rounded-xl overflow-hidden aspect-[4/3] bg-gray-100"
              >
                <img src={img.img} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2430]/90 via-[#1B2430]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h4 className="text-white font-semibold text-lg">{img.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OEM Industries Served */}
      <section className="py-24 bg-[#1B2430]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-white font-bold tracking-[0.2em] uppercase text-[11px]">Global Reach</span>
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-stylish font-bold text-white mb-6">OEM Industries Served</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">Providing specialized manufacturing solutions tailored to the strict demands of diverse sectors.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden h-80"
              >
                <img src={ind.img} alt={ind.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2430] via-[#1B2430]/60 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-stylish font-bold text-white mb-2">{ind.title}</h3>
                  <p className="text-white/80 text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">{ind.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
