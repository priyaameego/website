import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProductCollections() {
  const collections = [
    {
      id: 'shakshi',
      eyebrow: 'PREMIUM COMFORT',
      title: 'The Custodian of Comfort',
      desc1: 'Shakshi is our flagship brand — the comforting voice of assurance and quality in a competitive marketplace. With superior materials and innovation, it commands a premium at every price level, representing a step up for the conscious buyer.',
      desc2: "From Intimacy to Doctor's Choice, the Shakshi range covers every comfort need — hotel-grade luxury, orthopedic support, and everyday comfort.",
      stats: [
        { value: '15+', label: 'PRODUCTS' },
        { value: '300+', label: 'DEALERS' }
      ],
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop',
      align: 'left' // Image on the right, text on the left
    },
    {
      id: 'easylife',
      eyebrow: 'COMFORT MADE ACCESSIBLE',
      title: 'The Joy of Comfort',
      desc1: 'Easylife brings premium sleep solutions to every household at competitive prices. Featuring innovative designs like Pleasure P-Top, Deep Sleep, and Dream Shape, Easylife promotes the idea of effortless comfort.',
      stats: [
        { value: '10+', label: 'PRODUCTS' },
        { value: '200+', label: 'RETAIL POINTS' }
      ],
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', // Family on bed lifestyle image
      align: 'right' // Image on the left, text on the right
    },
    {
      id: 'softline',
      eyebrow: 'ORTHOPEDIC EXCELLENCE',
      title: 'Progress and Precision',
      desc1: 'Softline specialises in medically engineered mattresses and foam solutions designed for optimal spinal alignment and therapeutic comfort. The Orthopedic and Orthopedic Advance ranges are trusted by healthcare professionals.',
      stats: [
        { value: '5+', label: 'PRODUCTS' },
        { value: '100+', label: 'OUTLETS' }
      ],
      image: 'https://images.unsplash.com/photo-1629141065715-0552b71ec911?q=80&w=2070&auto=format&fit=crop', // Orthopedic mattress cross section visualization
      align: 'left' // Image on the right, text on the left
    },
    {
      id: 'intimacy',
      eyebrow: 'COMPLETE BACK SUPPORT',
      title: 'INTIMACY',
      desc1: 'Intimacy mattresses are designed with advanced spinal support technology to bring you closer to perfect sleep. Fit for back and built for ultimate rest, Intimacy ensures you wake up refreshed and ready for the day.',
      desc2: 'Featuring anti-microbial treatments that prevent dustmites, bacteria, and bedbugs, ensuring a clean and hygienic sleep environment.',
      stats: [
        { value: '8+', label: 'PRODUCTS' },
        { value: '150+', label: 'OUTLETS' }
      ],
      image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057&auto=format&fit=crop', // Luxury bedroom setup
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
              
              {collection.desc2 && (
                <p className="text-[#6B7280] leading-relaxed mb-10">
                  {collection.desc2}
                </p>
              )}

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
                  View Products
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
