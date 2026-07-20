import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Building2, Factory, Truck, User, 
  History, Eye, Users, Heart, HardHat, Award, Leaf, ChevronDown
} from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { 
      name: 'ABOUT', 
      path: '/about',
      dropdown: [
        { name: 'MANUFACTURING', path: '/about/manufacturing' },
        { name: 'DISTRIBUTION', path: '/about/distribution' },
        { name: 'FOUNDER', path: '/about/founder' },
        { name: 'TIMELINE', path: '/about/timeline' },
        { name: 'OUR VISION', path: '/about/vision' },
      ]
    },
    { 
      name: 'BRANDS', 
      path: '#',
      dropdown: [
        { name: 'SHAKSHI', path: '/brands/shakshi' },
        { name: 'EASYLIFE', path: '/brands/easylife' },
        { name: 'SOFTLINE', path: '/brands/softline' },
        { name: 'INTIMACY', path: '/brands/intimacy' },
      ]
    },
    { name: 'INDUSTRIES', path: '/industries' },
    { name: 'CAREERS', path: '/careers' },
    { name: 'SUSTAINABILITY', path: '/about/sustainability' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-[#D4AF37] ${scrolled ? 'bg-[#06152D] shadow-lg py-4' : 'bg-[#081C3A] py-5'}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center z-50">
          <img 
            src="https://shakshigroup.com/cdn/shop/t/2/assets/sg-logo.png?v=56288382328306051021777810980" 
            alt="Shakshi Logo" 
            className="h-12 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <li 
              key={link.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to={link.path} className="flex items-center gap-1 text-[#FFFFFF] text-[13px] font-bold tracking-wide py-2 transition-colors hover:text-[#D4AF37]">
                {link.name}
              </Link>
              
              {/* Dropdown Menu */}
              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-4 w-max min-w-[200px] bg-[#FFFFFF] border border-[#D4AF37]/20 rounded-md p-2 shadow-2xl flex flex-col"
                    >
                      {link.dropdown.map((item, idx) => (
                        <Link 
                          key={idx} 
                          to={item.path} 
                          className="px-4 py-3 text-xs font-bold text-[#1F2937] tracking-wide hover:bg-[#EEF5FF] hover:text-[#081C3A] border-l-2 border-transparent hover:border-[#D4AF37] rounded transition-all"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden xl:flex items-center">
          <Link to="/industrial-enquiry" className="bg-[#FF6B00] text-[#FFFFFF] font-bold text-sm tracking-wide px-6 py-3 rounded hover:bg-[#E65A00] transition-colors shadow-[0_4px_14px_0_rgba(255,107,0,0.30)]">
            ENQUIRE INDUSTRIAL FOAMS
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="xl:hidden text-[#FFFFFF] z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-[#081C3A] z-40 xl:hidden flex flex-col pt-32 px-6 overflow-y-auto pb-10"
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.name} className="border-b border-white/10 pb-4">
                  <div className="flex items-center justify-between">
                    <Link 
                      to={link.path} 
                      className="text-xl font-bold tracking-wide text-[#FFFFFF] hover:text-[#D4AF37] transition-colors" 
                      onClick={() => !link.dropdown && setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <button 
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className="p-2 text-white hover:text-[#D4AF37]"
                      >
                        <ChevronDown 
                          size={24} 
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
                        className="mt-4 flex flex-col p-2 bg-[#FFFFFF] rounded-md border-l-4 border-[#D4AF37] overflow-hidden"
                      >
                        {link.dropdown.map((item, idx) => (
                          <Link 
                            key={idx} 
                            to={item.path} 
                            className="py-3 px-3 text-sm font-bold text-[#1F2937] hover:bg-[#EEF5FF] hover:text-[#081C3A] transition-colors rounded" 
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
            </ul>
            <div className="mt-8 flex flex-col gap-4">
              <Link to="/industrial-enquiry" className="bg-[#FF6B00] text-[#FFFFFF] font-bold text-sm tracking-wide px-6 py-3 rounded hover:bg-[#E65A00] transition-colors text-center w-full shadow-[0_4px_14px_0_rgba(255,107,0,0.30)]">
                ENQUIRE INDUSTRIAL FOAMS
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
