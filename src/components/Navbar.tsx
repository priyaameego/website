import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  type NavItem = {
    name: string;
    path: string;
    dropdown?: {
      name: string;
      path: string;
      desc?: string;
    }[];
  };

  const navLinks: NavItem[] = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '/about',
      dropdown: [
        { name: 'Company Overview', path: '/about' },
        { name: 'Manufacturing', path: '/about/manufacturing' },
        { name: 'Distribution', path: '/about/distribution' },
        { name: 'Our Vision', path: '/about/vision' },
      ]
    },
    { 
      name: 'Brands', 
      path: '#',
      dropdown: [
        { name: 'Shakshi', path: '/brands/shakshi', desc: 'Industrial Foam' },
        { name: 'Easylife', path: '/brands/easylife', desc: 'Premium Mattresses' },
        { name: 'Softline', path: '/brands/softline', desc: 'Orthopedic Sleep' },
        { name: 'Intimacy', path: '/brands/intimacy', desc: 'Luxury Sleep' },
      ]
    },
    { name: 'Industries', path: '/industries' },
    { name: 'Careers', path: '/careers' },
    { name: 'Sustainability', path: '/about/sustainability' }
  ];

  return (
    <>
      {/* Top Utility Bar (Fades out quickly on scroll) */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 pointer-events-none ${scrolled ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'}`}>
        <div className="bg-[#0A101D]/90 backdrop-blur-md border-b border-white/5 pointer-events-auto">
          <div className="max-w-[1400px] mx-auto px-6 h-[40px] flex items-center justify-between text-white/70 text-[11px] font-semibold tracking-widest uppercase">
            <div className="flex gap-8">
              <a href="tel:+919876543210" className="hover:text-white transition-colors flex items-center gap-2">
                <Phone size={12} className="text-[#D4AF37]" /> +91 98765 43210
              </a>
              <a href="mailto:info@shakshigroup.com" className="hidden sm:flex hover:text-white transition-colors items-center gap-2">
                <Mail size={12} className="text-[#D4AF37]" /> info@shakshigroup.com
              </a>
            </div>
            <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-2">
              <MapPin size={12} className="text-[#D4AF37]" /> FIND US
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation (Becomes floating capsule on scroll) */}
      <header className={`fixed left-0 w-full z-40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'top-6 px-4 md:px-8' : 'top-[40px] px-0'}`}>
        <div className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'max-w-[1200px] bg-white/70 dark:bg-[#0A101D]/70 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-white/20 rounded-full h-[72px] px-8' : 'max-w-full bg-transparent border-b border-white/10 h-[90px] px-6 md:px-12'} flex justify-between items-center`}>
          
          {/* Logo */}
          <Link to="/" className="flex items-center z-50">
            <img 
              src="https://shakshigroup.com/cdn/shop/t/2/assets/sg-logo.png?v=56288382328306051021777810980" 
              alt="Shakshi Logo" 
              className={`object-contain transition-all duration-500 hover:scale-105 ${scrolled ? 'h-8' : 'h-10'}`}
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden xl:flex items-center gap-2 h-full absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <li 
                  key={link.name}
                  className="relative h-full flex items-center px-4"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    to={link.path} 
                    className={`flex items-center gap-1.5 text-[12px] uppercase font-bold tracking-[0.15em] transition-all duration-300 relative z-10 ${scrolled ? (isActive ? 'text-[#081C3A] dark:text-white' : 'text-[#667085] hover:text-[#081C3A] dark:text-white/60 dark:hover:text-white') : (isActive ? 'text-white' : 'text-white/70 hover:text-white')}`}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown size={14} className={`transition-transform duration-500 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                  </Link>
                  
                  {/* Hover Pill Background */}
                  <div className={`absolute inset-y-1/4 inset-x-0 rounded-full transition-all duration-300 ease-out z-0 ${activeDropdown === link.name ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${scrolled ? 'bg-[#081C3A]/5 dark:bg-white/10' : 'bg-white/10'}`}></div>
                  
                  {/* Luxury Dropdown */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div 
                          initial={{ opacity: 0, y: 15, scale: 0.95, rotateX: -10 }}
                          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95, rotateX: -10 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          style={{ perspective: 1000 }}
                          className={`absolute top-[90%] left-1/2 -translate-x-1/2 w-[320px] ${scrolled ? 'bg-white/90 dark:bg-[#0A101D]/90 border border-black/5 dark:border-white/10' : 'bg-[#0A101D]/90 border border-white/10'} backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] rounded-[24px] flex flex-col p-2 overflow-hidden`}
                        >
                          {link.dropdown.map((item, idx) => (
                            <Link 
                              key={idx} 
                              to={item.path} 
                              className={`group/item flex flex-col px-5 py-4 rounded-[16px] transition-all duration-300 ${scrolled ? 'hover:bg-black/5 dark:hover:bg-white/10' : 'hover:bg-white/10'}`}
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className={`text-[12px] uppercase tracking-[0.1em] font-bold flex items-center justify-between transition-colors ${scrolled ? 'text-[#1B2430] dark:text-white' : 'text-white'}`}>
                                {item.name}
                                <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-[#D4AF37]" />
                              </span>
                              {item.desc && <span className={`text-[12px] mt-1 ${scrolled ? 'text-[#667085] dark:text-white/50' : 'text-white/50'}`}>{item.desc}</span>}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden xl:flex items-center">
            <Link to="/industrial-enquiry" className={`relative overflow-hidden group px-6 py-2.5 rounded-full font-bold text-[11px] tracking-widest uppercase transition-all duration-500 ${scrolled ? 'bg-[#081C3A] text-white dark:bg-white dark:text-[#081C3A] hover:shadow-[0_10px_20px_rgba(8,28,58,0.2)]' : 'bg-white text-[#081C3A] hover:shadow-[0_10px_20px_rgba(255,255,255,0.2)]'}`}>
              <span className="relative z-10">Enquire Foams</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
              <span className="absolute inset-0 z-20 flex items-center justify-center text-[#081C3A] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">Enquire Foams</span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className={`xl:hidden z-50 transition-colors ${scrolled ? 'text-[#1B2430] dark:text-white' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
          </button>
        </div>

      {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-[#0A101D] z-40 xl:hidden flex flex-col pt-[100px] px-8 overflow-y-auto pb-12"
            >
              <ul className="flex flex-col gap-2 mt-4">
                {navLinks.map((link) => (
                  <li key={link.name} className="border-b border-white/10 pb-2">
                    <div className="flex items-center justify-between py-3">
                      <Link 
                        to={link.path} 
                        className="text-lg uppercase tracking-widest font-semibold text-white hover:text-[#D4AF37] transition-colors" 
                        onClick={() => !link.dropdown && setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                      {link.dropdown && (
                        <button 
                          onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                          className="p-2 text-white/70 hover:text-white transition-colors"
                        >
                          <ChevronDown 
                            size={20} 
                            strokeWidth={1.5}
                            className={`transition-transform duration-500 ${activeDropdown === link.name ? 'rotate-180' : ''}`} 
                          />
                        </button>
                      )}
                    </div>
                    
                    <AnimatePresence>
                      {link.dropdown && activeDropdown === link.name && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex flex-col pl-4 border-l border-[#D4AF37]/30 overflow-hidden mb-4"
                        >
                          {link.dropdown.map((item, idx) => (
                            <Link 
                              key={idx} 
                              to={item.path} 
                              className="py-3 text-[13px] uppercase tracking-wider font-semibold text-white/70 hover:text-white transition-colors" 
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
                
                <li className="border-b border-white/10 pb-2">
                  <div className="flex items-center justify-between py-3">
                    <Link 
                      to="/contact" 
                      className="text-lg uppercase tracking-widest font-semibold text-white hover:text-[#D4AF37] transition-colors" 
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </div>
                </li>
              </ul>
              <div className="mt-12">
                <Link to="/industrial-enquiry" className="w-full inline-flex justify-center items-center px-8 py-4 bg-[#D4AF37] text-[#0A101D] rounded-full font-bold text-[13px] tracking-widest uppercase hover:bg-[#F3E5AB] transition-colors duration-500 shadow-md">
                  Enquire Foams
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
