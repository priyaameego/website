import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import mfgImg from '../../assets/f.jpeg';

export default function ManufacturingExcellence() {
  return (
    <section className="py-24 md:py-32 bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Content Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">Manufacturing Excellence</span>
            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1B2430] font-stylish font-bold mb-8 leading-tight">
            Precision Engineering at Scale
          </h2>
          
          <p className="text-lg text-[#667085] mb-6 leading-relaxed">
            Our state-of-the-art facilities combine advanced automation with meticulous quality control. From technical industrial foams to luxury sleep systems, we maintain uncompromising standards across every production line.
          </p>

          <p className="text-lg text-[#667085] mb-10 leading-relaxed">
            With over two decades of manufacturing expertise, we leverage cutting-edge German technology to deliver consistent, high-performance materials to our global partners.
          </p>
          
          <Link to="/about/manufacturing" className="btn-primary group">
            Explore Our Facilities
            <ArrowRight size={16} strokeWidth={1.5} className="ml-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2 relative group"
        >
          <div className="absolute inset-0 bg-[#FAFAF8] shadow-sm rounded-[24px] -z-10 transition-transform duration-500 translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6"></div>
          <div className="relative overflow-hidden rounded-[24px] shadow-[0_10px_40px_rgb(0,0,0,0.06)]">
            <img 
              src={mfgImg} 
              alt="State of the art manufacturing facility" 
              className="w-full h-[500px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
            />
            {/* Minimalist Data Block Overlay */}
            <div className="absolute bottom-0 left-0 bg-[#FAFAF8]/95 backdrop-blur-xl p-6 md:p-8 rounded-tr-[24px] border-r border-t border-white shadow-lg">
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-[#1B2430] mb-1">500k+</div>
                  <div className="text-[10px] text-[#4B5563] font-bold uppercase tracking-widest">Sq. Ft. Facility</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1B2430] mb-1">ISO</div>
                  <div className="text-[10px] text-[#4B5563] font-bold uppercase tracking-widest">9001:2015</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
