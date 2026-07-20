import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import pillowImg from '../../../assets/pillow.jpeg';

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
      image: 'https://images.unsplash.com/photo-1629141065715-0552b71ec911?q=80&w=2070&auto=format&fit=crop', // Ortho cross section
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
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-32">
        
        {collections.map((collection, idx) => (
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
              
              <h2 className="text-4xl md:text-5xl font-black font-heading text-[#081C3A] mb-8">
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
              <Link to="/products">
                <button className="bg-[#E63946] text-white font-bold py-4 px-8 rounded-lg hover:bg-[#D92C3A] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider text-xs shadow-md">
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
