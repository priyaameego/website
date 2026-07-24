import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import orthoImg from '../../../assets/ortho.png';
import fImg from '../../../assets/f.png';
import health1Img from '../../../assets/health1.png';

export default function SoftlineCollections() {
  const collections = [
    {
      id: 'orthopedic-mattress',
      eyebrow: 'CORE SUPPORT',
      title: 'Orthopedic Mattress',
      desc1: 'Engineered for superior spinal alignment. Our core orthopedic mattresses provide the firm, uncompromising support needed for a healthy back, ensuring you wake up pain-free and refreshed.',
      stats: [
        { value: 'FIRM', label: 'FEEL' },
        { value: '7 ZONE', label: 'SUPPORT' }
      ],
      image: orthoImg,
      align: 'left'
    },
    {
      id: 'doctor-recommended',
      eyebrow: 'CLINICALLY PROVEN',
      title: 'Doctor Recommended',
      desc1: 'Developed in consultation with leading orthopedic specialists. This premium range is specifically designed to aid in the recovery of back pain and is widely trusted by medical professionals.',
      stats: [
        { value: '100+', label: 'CLINICS' },
        { value: 'TRUSTED', label: 'BY DOCTORS' }
      ],
      image: fImg,
      align: 'right'
    },
    {
      id: 'medical-foam',
      eyebrow: 'HEALTHCARE GRADE',
      title: 'Medical Foam',
      desc1: 'High-density, durable medical foam solutions designed for hospital beds, clinics, and long-term care facilities. Built to withstand rigorous use while maintaining hygienic standards.',
      stats: [
        { value: 'ANTI', label: 'BACTERIAL' },
        { value: 'HIGH', label: 'DENSITY' }
      ],
      image: health1Img,
      align: 'left'
    },
    {
      id: 'pressure-relief',
      eyebrow: 'THERAPEUTIC COMFORT',
      title: 'Pressure Relief',
      desc1: 'Advanced foam layers designed to distribute body weight evenly, reducing pressure on hips and shoulders. Ideal for those seeking therapeutic comfort without sacrificing spinal support.',
      stats: [
        { value: 'ZERO', label: 'GRAVITY' },
        { value: 'MEMORY', label: 'FOAM' }
      ],
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop',
      align: 'right'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-32">
        
        {collections.map((collection) => (
          <div 
            key={collection.id} 
            className={`flex flex-col ${collection.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-24 items-center`}
          >
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: collection.align === 'right' ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">{collection.eyebrow}</span>
                <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1B2430] font-stylish font-bold mb-8 leading-tight">
                {collection.title}
              </h2>
              
              <p className="text-lg text-[#4B5563] leading-relaxed mb-12">
                {collection.desc1}
              </p>

              {/* Statistics */}
              <div className="flex gap-12 mb-12">
                {collection.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="border-l-2 border-[#D4AF37] pl-5">
                    <h4 className="text-3xl font-bold font-stylish text-[#1B2430] mb-2">{stat.value}</h4>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-[#4B5563] uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* View Products Button */}
              <Link to="/contact" className="btn-primary group">
                VIEW COLLECTION
                <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Image Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2 relative group"
            >
              <div className={`absolute inset-0 bg-[#F7F8FA] rounded-3xl -z-10 transition-transform duration-500 translate-y-4 ${collection.align === 'right' ? '-translate-x-4 group-hover:-translate-x-6' : 'translate-x-4 group-hover:translate-x-6'} group-hover:translate-y-6`}></div>
              <div className="relative rounded-3xl overflow-hidden shadow-premium">
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </motion.div>

          </div>
        ))}
        
      </div>
    </section>
  );
}
