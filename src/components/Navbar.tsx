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
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
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
      {/* Alert Bar */}
      <div className={`relative bg-gradient-to-r from-[#06152B] via-[#102848] to-[#06152B] text-white border-b border-[#D4AF37]/20 transition-all duration-300 overflow-hidden ${scrolled ? 'h-0 opacity-0 border-transparent' : 'h-10 opacity-100'}`}>
        {/* Subtle animated overlay */}
        <motion.div 
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent bg-[length:200%_auto] pointer-events-none"
        />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 h-full flex items-center justify-between lg:justify-end gap-6 text-[11px] uppercase tracking-wider font-semibold">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="group flex items-center gap-2 text-[#C8D2E1] hover:text-[#D4AF37] transition-all duration-300">
              <Phone size={12} className="group-hover:animate-bounce" /> +91 98765 43210
            </a>
            <a href="mailto:info@shakshigroup.com" className="group hidden sm:flex items-center gap-2 text-[#C8D2E1] hover:text-[#D4AF37] transition-all duration-300">
              <Mail size={12} className="group-hover:animate-pulse" /> info@shakshigroup.com
            </a>
          </div>
          <Link to="/contact" className="group flex items-center gap-2 text-[#C8D2E1] hover:text-white transition-all duration-300 sm:border-l sm:border-white/10 sm:pl-6 relative overflow-hidden">
            <MapPin size={12} className="text-[#D4AF37]" /> 
            <span className="relative">
              CONTACT US
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`w-full transition-all duration-300 shadow-sm ${scrolled ? 'bg-[#F7F8FA]/95 backdrop-blur-md h-[82px]' : 'bg-[#F7F8FA] h-[88px]'}`}>
        <div className="h-full max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50">
            <img 
              src="https://shakshigroup.com/cdn/shop/t/2/assets/sg-logo.png?v=56288382328306051021777810980" 
              alt="Shakshi Logo" 
              className="h-10 object-contain"
            />
          </Link>

          {/* Desktop Nav - Centered */}
          <ul className="hidden xl:flex items-center justify-center absolute left-1/2 -translate-x-1/2 h-full gap-8">
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
                    className={`flex items-center gap-1 text-[13px] uppercase font-bold tracking-widest transition-colors duration-300 ${isActive ? 'text-[#1B2430]' : 'text-[#4B5563] hover:text-[#1B2430]'}`}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                  </Link>
                  
                  {/* Active Indicator Line */}
                  <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#1B2430] transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} style={{ transformOrigin: 'center' }}></div>
                  
                  {/* Mega Dropdown */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div 
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[400px] bg-white border border-[#E7EBF0] shadow-premium-hover rounded flex flex-col overflow-hidden"
                        >
                          <div className="p-2">
                            {link.dropdown.map((item, idx) => (
                              <Link 
                                key={idx} 
                                to={item.path} 
                                className="group flex flex-col p-4 hover:bg-[#F7F8FA] rounded transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="text-sm font-bold text-[#1B2430] group-hover:text-[#D4AF37] transition-colors">{item.name}</span>
                                {item.desc && <span className="text-xs text-[#4B5563] mt-1">{item.desc}</span>}
                              </Link>
                            ))}
                          </div>
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
            <Link to="/industrial-enquiry" className="px-6 py-3 bg-[#E63946] text-white rounded-[6px] font-bold text-[11px] tracking-widest uppercase hover:bg-[#D92C3A] transition-colors duration-300 shadow-sm">
              Enquire Industrial Foams
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="xl:hidden text-[#1B2430] z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              className="fixed inset-0 bg-white z-40 xl:hidden flex flex-col pt-[88px] px-6 overflow-y-auto pb-10"
            >
              <ul className="flex flex-col gap-2 mt-8">
                {navLinks.map((link) => (
                  <li key={link.name} className="border-b border-[#E7EBF0] pb-2">
                    <div className="flex items-center justify-between py-2">
                      <Link 
                        to={link.path} 
                        className="text-lg font-bold text-[#1B2430] hover:text-[#D4AF37] transition-colors" 
                        onClick={() => !link.dropdown && setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                      {link.dropdown && (
                        <button 
                          onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                          className="p-2 text-[#4B5563] hover:text-[#1B2430] transition-colors"
                        >
                          <ChevronDown 
                            size={20} 
                            className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} 
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
                          className="flex flex-col pl-4 border-l-2 border-[#D4AF37] overflow-hidden"
                        >
                          {link.dropdown.map((item, idx) => (
                            <Link 
                              key={idx} 
                              to={item.path} 
                              className="py-3 text-sm font-medium text-[#4B5563] hover:text-[#1B2430] transition-colors" 
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
                
                {/* Manual Contact Us in mobile */}
                <li className="border-b border-[#E7EBF0] pb-2">
                  <div className="flex items-center justify-between py-2">
                    <Link 
                      to="/contact" 
                      className="text-lg font-bold text-[#1B2430] hover:text-[#D4AF37] transition-colors" 
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </div>
                </li>
              </ul>
              <div className="mt-12">
                <Link to="/industrial-enquiry" className="w-full inline-flex justify-center items-center px-6 py-3 bg-[#E63946] text-white rounded-[6px] font-bold text-[12px] tracking-widest uppercase hover:bg-[#D92C3A] transition-colors duration-300">
                  Enquire Industrial Foams
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
