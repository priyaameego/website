import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function IntimacyCollections() {
  const collections = [
    {
      id: 'premium-mattress',
      eyebrow: 'LUXURY COMFORT',
      title: 'Premium Mattress',
      desc1: 'Experience the pinnacle of luxury sleep with our premium mattress collection. Crafted with the finest materials and advanced coil technology, it delivers unparalleled comfort and motion isolation.',
      stats: [
        { value: 'PLUSH', label: 'FEEL' },
        { value: '15 YRS', label: 'WARRANTY' }
      ],
      image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057&auto=format&fit=crop', // Luxury bedroom
      align: 'left' // Image on the right, text on the left
    },
    {
      id: 'spine-care',
      eyebrow: 'ADVANCED SUPPORT',
      title: 'Spine Care Mattress',
      desc1: 'Designed to bring you closer to perfect sleep. Fit for back support and built for ultimate rest, the Spine Care mattress ensures you wake up refreshed and ready for the day.',
      stats: [
        { value: '5 ZONE', label: 'SUPPORT' },
        { value: 'POSTURE', label: 'CARE' }
      ],
      image: 'https://images.unsplash.com/photo-1629141065715-0552b71ec911?q=80&w=2070&auto=format&fit=crop', // Ortho cross section
      align: 'right' // Image on the left, text on the right
    },
    {
      id: 'anti-microbial',
      eyebrow: 'HYGIENIC SLEEP',
      title: 'Anti-Microbial Mattress',
      desc1: 'Featuring advanced anti-microbial treatments that prevent dustmites, bacteria, and bedbugs. Ensure a clean, safe, and hygienic sleep environment for you and your partner.',
      stats: [
        { value: '100%', label: 'HYGIENIC' },
        { value: 'ALLERGY', label: 'FREE' }
      ],
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?q=80&w=2070&auto=format&fit=crop', // Clean white mattress
      align: 'left' // Image on the right, text on the left
    },
    {
      id: 'luxury-pillow',
      eyebrow: 'ELEVATED REST',
      title: 'Luxury Pillow',
      desc1: 'The perfect complement to your Intimacy mattress. Our luxury pillows are engineered for ultimate neck support and breathability, wrapping you in absolute comfort.',
      stats: [
        { value: 'COOL', label: 'GEL TECH' },
        { value: 'HOTEL', label: 'GRADE' }
      ],
      image: 'https://images.unsplash.com/photo-1620610360341-a1eefb598b9e?q=80&w=2070&auto=format&fit=crop', // Pillows on bed
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
