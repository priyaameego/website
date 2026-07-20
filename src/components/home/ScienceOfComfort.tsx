import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import scImg from '../../assets/sc.png';

export default function ScienceOfComfort() {
  return (
    <section className="py-24 bg-[#FFFFFF]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="mb-6">
              <span className="text-[#FF6B00] font-bold tracking-widest uppercase text-xs">
                OUR TECHNOLOGY DNA
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#081C3A] font-heading leading-tight mb-8">
              The Science of Comfort
            </h2>
            
            <p className="text-[#4B5563] text-lg leading-relaxed mb-8">
              Comfort science is at the core of our innovative drive. We develop and use the latest manufacturing technology to produce premium foam and mattress products that set industry standards.
            </p>
            
            <p className="text-[#4B5563] text-lg leading-relaxed mb-10">
              Shakshi Group manufactures 100+ types of foam across our state-of-the-art facilities, serving diverse industrial and consumer needs.
            </p>
            
            <Link 
              to="/about/manufacturing" 
              className="inline-flex items-center justify-center bg-[#081C3A] hover:bg-[#06152D] text-white font-bold text-xs tracking-widest uppercase px-8 py-4 rounded transition-colors shadow-lg hover:shadow-xl duration-300"
            >
              FOAM R&D &nbsp; &rarr;
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[500px]">
              <img 
                src={scImg} 
                alt="Science of Comfort Lab" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
