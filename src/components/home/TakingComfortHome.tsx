import { Link } from 'react-router-dom';

export default function TakingComfortHome() {
  const brands = [
    {
      name: 'Shakshi',
      description: 'The premium comfort brand. Shakshi mattresses are built with advanced foam technology and deliver superior support for restful sleep. Trusted by hotels and homeowners alike.',
      products: '15+',
      dealers: '300+',
      link: '/brands/shakshi',
      btnText: 'EXPLORE SHAKSHI'
    },
    {
      name: 'Easylife',
      description: 'Comfort made accessible. Easylife brings premium sleep solutions to every household at competitive prices. Featuring innovative designs like Deep Sleep and Dream Shape.',
      products: '10+',
      dealers: '200+',
      link: '/brands/easylife',
      btnText: 'EXPLORE EASYLIFE'
    },
    {
      name: 'Softline',
      description: 'Orthopedic excellence. Softline specialises in medically engineered mattresses and foam solutions designed for optimal spinal alignment and therapeutic comfort.',
      products: '5+',
      dealers: '100+',
      link: '/brands/softline',
      btnText: 'EXPLORE SOFTLINE'
    },
    {
      name: 'INTIMACY',
      description: 'Complete back support. Intimacy mattresses bring you closer to perfect sleep with advanced spinal support technology. Fit for back and designed for ultimate rest.',
      products: '8+',
      dealers: '150+',
      link: '/brands/intimacy',
      btnText: 'EXPLORE INTIMACY'
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-6 font-heading">
            Taking Comfort Home
          </h2>
          <p className="text-[#64748b] leading-relaxed text-lg">
            Our brands serve the comfort needs of millions across India with a network of 500+ dealer touchpoints. Quality and innovation define every product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 flex flex-col"
            >
              <h3 className="text-xl font-bold text-[#0f172a] mb-4 tracking-wide font-heading">
                {brand.name}
              </h3>
              
              <p className="text-[#64748b] text-sm leading-relaxed mb-8 flex-grow">
                {brand.description}
              </p>
              
              <div className="border-t border-gray-100 pt-6 mb-8 flex gap-12">
                <div>
                  <h4 className="text-xl font-bold text-[#dc2626] mb-1">{brand.products}</h4>
                  <p className="text-[10px] font-bold tracking-widest text-[#94a3b8] uppercase">
                    PRODUCTS
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#dc2626] mb-1">{brand.dealers}</h4>
                  <p className="text-[10px] font-bold tracking-widest text-[#94a3b8] uppercase">
                    DEALERS
                  </p>
                </div>
              </div>
              
              <Link to={brand.link} className="w-full">
                <button className="w-full bg-[#1e1b4b] text-white text-xs font-bold py-4 rounded-md uppercase tracking-wider hover:bg-[#312e81] transition-colors">
                  {brand.btnText}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
