import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import orthoImg from '../../../assets/ortho.png';
import maImg from '../../../assets/matter.png';
import foaImg from '../../../assets/foa.png';

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
      image: orthoImg, // Ortho cross section
      align: 'left' // Image on the right, text on the left
    },
    {
      id: 'doctor-recommended',
      eyebrow: 'CLINICALLY PROVEN',
      title: 'Doctor Recommended Mattress',
      desc1: 'Developed in consultation with leading orthopedic specialists. This premium range is specifically designed to aid in the recovery of back pain and is widely trusted by medical professionals.',
      stats: [
        { value: '100+', label: 'CLINICS' },
        { value: 'TRUSTED', label: 'BY DOCTORS' }
      ],
      image: maImg, // Healthcare aesthetic
      align: 'right' // Image on the left, text on the right
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
      image: foaImg, // Hospital beds/foam
      align: 'left' // Image on the right, text on the left
    },
    {
      id: 'pressure-relief',
      eyebrow: 'THERAPEUTIC COMFORT',
      title: 'Pressure Relief Mattress',
      desc1: 'Advanced foam layers designed to distribute body weight evenly, reducing pressure on hips and shoulders. Ideal for those seeking therapeutic comfort without sacrificing spinal support.',
      stats: [
        { value: 'ZERO', label: 'GRAVITY' },
        { value: 'MEMORY', label: 'FOAM' }
      ],
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop', // Mattress close up
      align: 'right' // Image on the left, text on the right
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-32">
        
        {collections.map((collection) => (
          <div 
            key={collection.id} 
            className={`flex flex-col ${collection.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
          >
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: collection.align === 'right' ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex flex-col items-start"
            >
              <span className="text-xs font-bold tracking-[0.2em] text-[#E63946] uppercase mb-6">
                {collection.eyebrow}
              </span>
              
              <h2 className="text-4xl md:text-5xl font-black font-heading text-[#0f172a] mb-8">
                {collection.title}
              </h2>
              
              <p className="text-[#6B7280] leading-relaxed mb-6">
                {collection.desc1}
              </p>

              {/* Statistics */}
              <div className="flex gap-16 mb-10 mt-4">
                {collection.stats.map((stat, sIdx) => (
                  <div key={sIdx}>
                    <h4 className="text-3xl font-bold text-[#E63946] mb-2">{stat.value}</h4>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-[#9CA3AF] uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* View Products Button */}
              <Link to="/contact">
                <button className="bg-[#E63946] text-white font-bold py-4 px-8 rounded-2xl hover:bg-[#D92C3A] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 transition-all duration-300 uppercase tracking-wider text-xs shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  View Collection
                </button>
              </Link>
            </motion.div>

            {/* Image Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative rounded-[24px] overflow-hidden shadow-2xl group">
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </motion.div>

          </div>
        ))}
        
      </div>
    </section>
  );
}
