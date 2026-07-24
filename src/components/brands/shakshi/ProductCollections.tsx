import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Glass3DCard from '../../ui/Glass3DCard';
import bedImg from '../../../assets/bed.jpeg';

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
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', 
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
      image: bedImg, 
      align: 'left' 
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
      image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057&auto=format&fit=crop', 
      align: 'right' 
    }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="py-32 bg-[#05080f] overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-[#2E5B99]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-40 relative z-10">
        
        {collections.map((collection, idx) => (
          <div 
            key={collection.id} 
            className={`flex flex-col ${collection.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-20 lg:gap-24 items-center`}
          >
            
            {/* Text Content */}
            <motion.div 
              style={{ y: idx % 2 === 0 ? y1 : y2 }}
              className="w-full lg:w-1/2 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-4 mb-8">
                {collection.align === 'right' && <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>}
                <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[11px]">{collection.eyebrow}</span>
                {collection.align === 'left' && <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>}
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl text-white font-stylish font-bold mb-8 leading-[1.1] tracking-tight">
                {collection.title}
              </h2>
              
              <p className="text-lg text-white/60 leading-relaxed mb-6 font-light">
                {collection.desc1}
              </p>
              
              {collection.desc2 && (
                <p className="text-lg text-white/60 leading-relaxed mb-8 font-light">
                  {collection.desc2}
                </p>
              )}

              {/* Statistics */}
              <div className="flex gap-12 mb-12 mt-4">
                {collection.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="border-l border-[#D4AF37]/50 pl-6 relative overflow-hidden group">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
                    />
                    <h4 className="text-4xl font-bold font-stylish text-white mb-2 relative z-10 group-hover:text-[#D4AF37] transition-colors">{stat.value}</h4>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase relative z-10 group-hover:text-white transition-colors">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* View Products Button */}
              <Link to={`/brands/${collection.id}`} className="inline-block group relative">
                <div className="absolute inset-0 bg-[#D4AF37] blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                <button className="relative bg-[#0A101D] border border-[#D4AF37]/50 text-white px-8 py-4 font-bold tracking-widest text-sm hover:bg-[#D4AF37] hover:text-[#0A101D] transition-all duration-300 inline-flex items-center gap-3">
                  VIEW PRODUCTS
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>

            {/* Image Content */}
            <motion.div 
              style={{ y: idx % 2 === 0 ? y2 : y1, perspective: 1200 }}
              className="w-full lg:w-1/2 relative group"
            >
              <Glass3DCard tiltIntensity={5} className="w-full">
                <div className="relative overflow-hidden rounded-2xl h-[300px] md:h-[400px] group">
                  <img 
                    src={collection.image} 
                    alt={collection.title} 
                    className="absolute inset-0 w-full h-[120%] -translate-y-10 object-cover group-hover:translate-y-0 group-hover:scale-110 transition-transform duration-1000 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D] via-transparent to-transparent"></div>
                </div>
              </Glass3DCard>
            </motion.div>

          </div>
        ))}
        
      </div>
    </section>
  );
}
