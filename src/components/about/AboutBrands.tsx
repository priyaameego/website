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
    <section className="py-24 bg-[#FAFAFA]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#081C3A] font-heading mb-6"
          >
            Taking Comfort Home
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 leading-relaxed"
          >
            Our brands serve the comfort needs of millions across India with a network of 500+ dealer touchpoints. Quality and innovation define every product.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 flex flex-col border border-gray-100"
            >
              <h3 className="text-2xl font-black text-[#081C3A] mb-4">{brand.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">
                {brand.desc}
              </p>
              
              <div className="border-t border-gray-100 pt-6 mb-8 flex gap-8">
                <div>
                  <div className="text-xl font-black text-[#E63946] mb-1">{brand.products}</div>
                  <div className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">Products</div>
                </div>
                <div>
                  <div className="text-xl font-black text-[#E63946] mb-1">{brand.dealers}</div>
                  <div className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">Dealers</div>
                </div>
              </div>

              <Link 
                to={brand.path}
                className="w-full text-center bg-[#171a29] hover:bg-[#282d43] text-white text-xs font-bold tracking-widest uppercase py-4 rounded transition-colors"
              >
                Explore {brand.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
