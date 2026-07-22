import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col">
      {/* Alert Bar - Minimal Luxury Redesign */}
      <div className={`relative bg-[#FAFAF8] text-[#667085] border-b border-[#E5E7EB] transition-all duration-500 overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'}`}>
        <div className="max-w-[1400px] mx-auto px-8 h-full flex items-center justify-between lg:justify-end gap-8 text-[11px] uppercase tracking-widest font-semibold">
          <div className="flex items-center gap-8">
            <a href="tel:+919876543210" className="group flex items-center gap-2 hover:text-[#081C3A] transition-colors duration-300">
              <Phone size={12} strokeWidth={1.5} /> +91 98765 43210
            </a>
            <a href="mailto:info@shakshigroup.com" className="group hidden sm:flex items-center gap-2 hover:text-[#081C3A] transition-colors duration-300">
              <Mail size={12} strokeWidth={1.5} /> info@shakshigroup.com
            </a>
          </div>
          <Link to="/contact" className="group flex items-center gap-2 hover:text-[#081C3A] transition-colors duration-300 sm:border-l sm:border-[#E5E7EB] sm:pl-8 relative">
            <MapPin size={12} strokeWidth={1.5} className="text-[#D4AF37]" /> 
            <span className="relative">
              CONTACT US
            </span>
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`w-full transition-all duration-500 ${scrolled ? 'bg-[#FAFAF8]/90 backdrop-blur-xl h-[88px] shadow-[0_4px_30px_rgb(0,0,0,0.03)] border-b border-[#E5E7EB]/50' : 'bg-[#FAFAF8] h-[92px] border-b border-[#E5E7EB]'}`}>
        <div className="h-full max-w-[1400px] mx-auto px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50">
            <img 
              src="https://shakshigroup.com/cdn/shop/t/2/assets/sg-logo.png?v=56288382328306051021777810980" 
              alt="Shakshi Logo" 
              className="h-10 object-contain transition-transform duration-500 hover:scale-105"
            />
          </Link>

          {/* Desktop Nav - Centered */}
          <ul className="hidden xl:flex items-center justify-center absolute left-1/2 -translate-x-1/2 h-full gap-12">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <li 
                  key={link.name}
                  className="relative h-full flex items-center group"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    to={link.path} 
                    className={`flex items-center gap-1.5 text-[14px] uppercase font-semibold tracking-[0.1em] transition-colors duration-300 ${isActive ? 'text-[#081C3A]' : 'text-[#667085] group-hover:text-[#081C3A]'}`}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown size={14} strokeWidth={1.5} className={`transition-transform duration-500 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                  </Link>
                  
                  {/* Subtle Champagne Underline */}
                  <div className={`absolute bottom-[30px] left-0 w-full h-[1px] bg-[#D4AF37] transition-all duration-500 ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'}`} style={{ transformOrigin: 'center' }}></div>
                  
                  {/* Luxury Mega Dropdown */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.98 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="absolute top-[85%] left-1/2 -translate-x-1/2 w-[340px] bg-white/95 backdrop-blur-xl border border-[#E5E7EB] shadow-[0_20px_60px_rgb(0,0,0,0.06)] rounded-[20px] flex flex-col overflow-hidden p-3"
                        >
                          {link.dropdown.map((item, idx) => (
                            <Link 
                              key={idx} 
                              to={item.path} 
                              className="group/item flex flex-col px-5 py-4 hover:bg-[#FAFAF8] rounded-xl transition-colors duration-300"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="text-[13px] uppercase tracking-wider font-semibold text-[#1B2430] group-hover/item:text-[#081C3A] transition-colors flex items-center gap-2">
                                {item.name}
                                <span className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-[#D4AF37]">→</span>
                              </span>
                              {item.desc && <span className="text-[12px] text-[#667085] mt-1">{item.desc}</span>}
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
            <Link to="/industrial-enquiry" className="px-8 py-3.5 bg-[#C96A2D] text-white rounded-full font-semibold text-[12px] tracking-widest uppercase hover:bg-[#A85825] hover:-translate-y-[2px] transition-all duration-500 shadow-[0_8px_20px_rgba(201,106,45,0.2)]">
              Enquire Foams
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="xl:hidden text-[#1B2430] z-50 hover:text-[#D4AF37] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
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
              className="fixed inset-0 bg-[#FAFAF8] z-40 xl:hidden flex flex-col pt-[100px] px-8 overflow-y-auto pb-12"
            >
              <ul className="flex flex-col gap-2 mt-4">
                {navLinks.map((link) => (
                  <li key={link.name} className="border-b border-[#E5E7EB]/50 pb-2">
                    <div className="flex items-center justify-between py-3">
                      <Link 
                        to={link.path} 
                        className="text-lg uppercase tracking-widest font-semibold text-[#1B2430] hover:text-[#081C3A] transition-colors" 
                        onClick={() => !link.dropdown && setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                      {link.dropdown && (
                        <button 
                          onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                          className="p-2 text-[#667085] hover:text-[#1B2430] transition-colors"
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
                              className="py-3 text-[13px] uppercase tracking-wider font-semibold text-[#667085] hover:text-[#081C3A] transition-colors" 
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
                
                <li className="border-b border-[#E5E7EB]/50 pb-2">
                  <div className="flex items-center justify-between py-3">
                    <Link 
                      to="/contact" 
                      className="text-lg uppercase tracking-widest font-semibold text-[#1B2430] hover:text-[#081C3A] transition-colors" 
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </div>
                </li>
              </ul>
              <div className="mt-12">
                <Link to="/industrial-enquiry" className="w-full inline-flex justify-center items-center px-8 py-4 bg-[#C96A2D] text-white rounded-full font-semibold text-[13px] tracking-widest uppercase hover:bg-[#A85825] transition-colors duration-500 shadow-md">
                  Enquire Foams
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
