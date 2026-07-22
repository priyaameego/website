import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import pillowImg from '../../../assets/pillow.jpeg';
import orthoImg from '../../../assets/ortho.png';

export default function EasylifeCollections() {
  const collections = [
    {
      id: 'memory-foam',
      eyebrow: 'PRESSURE RELIEF',
      title: 'Memory Foam Mattress',
      desc1: 'Experience weightless comfort with our premium memory foam collection. Designed to contour to your body shape, it relieves pressure points and minimizes motion transfer so you and your partner can sleep undisturbed.',
      stats: [
        { value: '3+', label: 'VARIANTS' },
        { value: '10 YRS', label: 'WARRANTY' }
      ],
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop', // Close up of soft mattress
      align: 'left' // Image on the right, text on the left
    },
    {
      id: 'pocket-spring',
      eyebrow: 'BOUNCY SUPPORT',
      title: 'Pocket Spring Mattress',
      desc1: 'Individual pocket springs move independently to provide targeted support right where you need it. The breathable structure ensures perfect temperature regulation throughout the night.',
      stats: [
        { value: '5+', label: 'MODELS' },
        { value: 'EDGE', label: 'SUPPORT' }
      ],
      image: 'https://shakshigroup.com/cdn/shop/t/2/assets/sg-img-pillows.png?v=132920406996043062581777797443', // Pocket Spring Mattress
      align: 'right' // Image on the left, text on the right
    },
    {
      id: 'orthopedic',
      eyebrow: 'SPINE ALIGNMENT',
      title: 'Orthopedic Mattress',
      desc1: 'Firm support engineered for those who need extra care for their back. Our orthopedic mattresses maintain natural spinal alignment, preventing morning aches and promoting healthier posture.',
      stats: [
        { value: 'FIRM', label: 'COMFORT' },
        { value: 'DOCTOR', label: 'APPROVED' }
      ],
      image: orthoImg, // Ortho cross section
      align: 'left' // Image on the right, text on the left
    },
    {
      id: 'pillows',
      eyebrow: 'NECK SUPPORT',
      title: 'Pillow Collection',
      desc1: 'Complete your sleep setup with our ergonomic pillow collection. From contour memory foam to plush microfiber, we have the perfect pillow to support your preferred sleeping position.',
      stats: [
        { value: '10+', label: 'STYLES' },
        { value: 'WASHABLE', label: 'COVERS' }
      ],
      image: pillowImg, // Pillows on bed
      align: 'right' // Image on the left, text on the right
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F7F8FA] overflow-hidden">
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
              <div className={`absolute inset-0 bg-white rounded-3xl -z-10 transition-transform duration-500 translate-y-4 ${collection.align === 'right' ? '-translate-x-4 group-hover:-translate-x-6' : 'translate-x-4 group-hover:translate-x-6'} group-hover:translate-y-6`}></div>
              <div className="relative rounded-3xl overflow-hidden shadow-premium">
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </motion.div>

          </div>
        ))}
        
      </div>
    </section>
  );
}
