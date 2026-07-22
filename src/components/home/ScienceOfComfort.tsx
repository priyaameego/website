import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ScienceOfComfort() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">
                OUR TECHNOLOGY DNA
              </span>
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-stylish font-bold text-[#1B2430] leading-tight mb-8">
              The Science of Comfort
            </h2>
            
            <p className="text-[#4B5563] text-lg leading-relaxed mb-6">
              Comfort science is at the core of our innovative drive. We develop and use the latest manufacturing technology to produce premium foam and mattress products that set industry standards.
            </p>
            
            <p className="text-[#4B5563] text-lg leading-relaxed mb-10">
              Shakshi Group manufactures 100+ types of foam across our state-of-the-art facilities, serving diverse industrial and consumer needs.
            </p>
            
            <Link 
              to="/about/manufacturing" 
              className="btn-primary"
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
            className="w-full lg:w-1/2 relative group"
          >
            <div className="absolute inset-0 bg-[#F7F8FA] rounded-2xl -z-10 transition-transform duration-500 translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <div className="rounded-2xl overflow-hidden shadow-premium relative h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop" 
                alt="Science of Comfort Lab" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
