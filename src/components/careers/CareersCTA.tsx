import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ArrowIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);



const MailIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="mr-2"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export default function CareersCTA() {
  return (
    <section className="relative bg-[#081C3A] text-white py-24 overflow-hidden">
      {/* Animated Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF6B00]/50 to-transparent opacity-50">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="w-1/4 h-full bg-[#D4AF37]"
        />
      </div>

      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1565439390118-9fc12c40c839?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Manufacturing Facility" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A] via-[#081C3A]/80 to-[#081C3A]/50"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border border-[#D4AF37]/30 rounded-full px-6 py-2 bg-[#D4AF37]/10 mb-8 backdrop-blur-sm"
          >
            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs">
              Interested in joining us?
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6 text-white"
          >
            Ready to Build Your Career with Shakshi Group?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 leading-relaxed mb-12"
          >
            Join our growing team and become part of an innovative OEM manufacturing company where talent, learning, and excellence drive success.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <Link to="/contact" state={{ fromCareers: true }} className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(255, 107, 0, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-white rounded-[14px] font-bold tracking-wide transition-colors hover:bg-[#B08D2D]"
              >
                <MailIcon />
                View Contact Page
                <ArrowIcon />
              </motion.button>
            </Link>


          </motion.div>

        </div>
      </div>
    </section>
  );
}
