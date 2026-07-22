import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AboutBrands() {
  const brands = [
    {
      name: 'Shakshi',
      desc: 'The premium comfort brand. Shakshi mattresses are built with advanced foam technology and deliver superior support for restful sleep. Trusted by hotels and homeowners alike.',
      products: '15+',
      dealers: '300+',
      path: '/brands/shakshi'
    },
    {
      name: 'Easylife',
      desc: 'Comfort made accessible. Easylife brings premium sleep solutions to every household at competitive prices. Featuring innovative designs like Deep Sleep and Dream Shape.',
      products: '10+',
      dealers: '200+',
      path: '/brands/easylife'
    },
    {
      name: 'Softline',
      desc: 'Orthopedic excellence. Softline specialises in medically engineered mattresses and foam solutions designed for optimal spinal alignment and therapeutic comfort.',
      products: '5+',
      dealers: '100+',
      path: '/brands/softline'
    },
    {
      name: 'Intimacy',
      desc: 'Luxury sleep. Intimacy mattresses are designed with advanced spinal support technology to bring you closer to perfect sleep. Built for ultimate rest and rejuvenation.',
      products: '5+',
      dealers: '50+',
      path: '/brands/intimacy'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F7F8FA]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20 max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">Our Portfolio</span>
            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#1B2430] font-stylish mb-6"
          >
            Taking Comfort <span className="italic font-light">Home</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#4B5563] leading-relaxed"
          >
            Our brands serve the comfort needs of millions across India with a network of 500+ dealer touchpoints. Quality and innovation define every product.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="premium-card bg-white p-8 flex flex-col group"
            >
              <h3 className="text-2xl font-bold font-stylish text-[#1B2430] mb-4 group-hover:text-[#D4AF37] transition-colors">{brand.name}</h3>
              <p className="text-[15px] text-[#4B5563] leading-relaxed mb-10 flex-grow">
                {brand.desc}
              </p>
              
              <div className="border-t border-[#E7EBF0] pt-6 mb-8 flex gap-8">
                <div>
                  <div className="text-2xl font-bold font-stylish text-[#1B2430] mb-1">{brand.products}</div>
                  <div className="text-[10px] text-[#4B5563] font-bold tracking-[0.2em] uppercase">Products</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-stylish text-[#1B2430] mb-1">{brand.dealers}</div>
                  <div className="text-[10px] text-[#4B5563] font-bold tracking-[0.2em] uppercase">Dealers</div>
                </div>
              </div>

              <Link 
                to={brand.path}
                className="w-full btn-primary text-center px-0 py-3"
              >
                EXPLORE {brand.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
