import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import hImg from '../../assets/h.png';
import healthImg from '../../assets/he.png';
import autoImg from '../../assets/h1.png';
import furImg from '../../assets/fur.png';
import acousImg from '../../assets/au.png';
import customImg from '../../assets/ss2.png';

export default function IndustryCards() {
  const industries = [
    {
      title: 'HOSPITALITY',
      image: hImg,
      desc: 'Premium mattresses and foam solutions for hotels, resorts, and hospitality chains. Custom sizes and firmness levels for luxury guest experiences.'
    },
    {
      title: 'HEALTHCARE',
      image: healthImg,
      desc: 'Medical-grade foam products for hospitals, clinics, and care facilities. Pressure-relief mattresses designed for patient comfort and recovery.'
    },
    {
      title: 'AUTOMOTIVE',
      image: autoImg,
      desc: 'Specialised seat cushioning and insulation foams for the automotive industry. Comfort for daily commuters and long-distance travellers.'
    },
    {
      title: 'FURNITURE',
      image: furImg,
      desc: 'Cushioning foams for sofas, chairs, and office furniture. Our special foams extend the promise of comfort beyond the bed.'
    },
    {
      title: 'SOUND INSULATION',
      image: acousImg,
      desc: 'Acoustic foam panels for studios, theatres, and industrial settings. Designed to absorb unwanted sound and improve environments.'
    },
    {
      title: 'CUSTOM SOLUTIONS',
      image: customImg,
      desc: 'Foam specific to your requirement. Our custom team will work with you to design and develop foam for any industrial application.'
    },
    {
      title: 'BEDDING & SLEEP PRODUCTS',
      image: hImg, // reusing hospitality image
      desc: 'Premium foam solutions for mattresses, pillows, mattress toppers, and sleep accessories designed for comfort, durability, and long-lasting performance.'
    },
    {
      title: 'PACKAGING & PROTECTIVE FOAM',
      image: customImg, // reusing custom image
      desc: 'Custom protective foam inserts for electronics, appliances, furniture, and fragile industrial products, ensuring safe storage and transportation.'
    },
    {
      title: 'EDUCATIONAL & INSTITUTIONAL',
      image: healthImg, // reusing healthcare image
      desc: 'Foam mattresses and bedding solutions for hostels, schools, universities, dormitories, training centers, and institutional housing.'
    },
    {
      title: 'RETAIL & DEALER NETWORK',
      image: autoImg, // reusing auto image or some other image
      desc: 'Supporting dealers, distributors, furniture retailers, mattress showrooms, and sleep solution partners with high-quality products and reliable supply.'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F7F8FA]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">Foam Applications</span>
            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-stylish text-[#1B2430]">
            The Wide World of <span className="italic font-light">Foam</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left mb-20">
          {industries.map((industry, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="premium-card group bg-white flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl bg-[#E7EBF0]">
                <img 
                  src={industry.image} 
                  alt={industry.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              
              {/* Text Description */}
              <div className="p-8 flex-grow">
                <h3 className="text-[#1B2430] text-lg font-bold font-stylish uppercase tracking-widest mb-4 group-hover:text-[#D4AF37] transition-colors">
                  {industry.title}
                </h3>
                <p className="text-[#4B5563] text-[15px] leading-relaxed">
                  {industry.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link to="/contact">
            <button className="btn-primary inline-flex items-center gap-3">
              ENQUIRE FOR YOUR INDUSTRY
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
