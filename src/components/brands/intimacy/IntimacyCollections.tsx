import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import bedImg from '../../../assets/bed.jpeg';
import orthoImg from '../../../assets/ortho.png';
import maImg from '../../../assets/ma.png';
import pillowImg from '../../../assets/pillow.jpeg';

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
      image: bedImg, // Luxury bedroom
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
      image: orthoImg, // Ortho cross section
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
      image: maImg, // Clean white mattress
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
      image: pillowImg, // Pillows on bed
      align: 'right' // Image on the left, text on the right
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
