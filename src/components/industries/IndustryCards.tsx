import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import hImg from '../../assets/h.png';
import healthImg from '../../assets/healthcare.png';
import autoImg from '../../assets/automative.png';
import furImg from '../../assets/fur.png';
import acousImg from '../../assets/Acoustics.png';
import customImg from '../../assets/custome.png';

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
    }
    // Note: The remaining 10 new industries from the plan can be added to this array.
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-sm font-bold tracking-[0.2em] text-[#E63946] uppercase mb-4 block">
            FOAM APPLICATIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-heading text-[#081C3A]">
            The Wide World of Foam
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-16">
          {industries.map((industry, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(8,28,58,0.15)] hover:-translate-y-2 transition-all duration-500 border border-[#E2E8F0] flex flex-col"
            >
              {/* Dark Navy Header */}
              <div className="bg-[#081C3A] py-5 px-6 text-center z-10 relative">
                <h3 className="text-white text-sm font-bold tracking-[0.2em] uppercase">
                  {industry.title}
                </h3>
              </div>
              
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={industry.image} 
                  alt={industry.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Subtle dark gradient overlay to make it look premium */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-overlay"></div>
              </div>
              
              {/* Text Description */}
              <div className="p-8 flex-grow bg-white">
                <p className="text-[#6B7280] text-sm leading-relaxed">
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
            <button className="bg-[#E63946] text-white font-bold py-4 px-10 rounded-lg hover:bg-[#D92C3A] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider text-sm inline-flex items-center group">
              Enquire For Your Industry
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-3 group-hover:translate-x-1 transition-transform duration-300" 
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
