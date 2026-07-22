import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const MessageCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const FooterLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
  <li>
    <Link 
      to={to} 
      className="relative group inline-flex items-center text-[#C8D2E1] transition-all duration-300 hover:translate-x-1 hover:text-[#D4AF37]"
    >
      <span>{children}</span>
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </li>
);

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-gradient-to-b from-[#102848] via-[#081C3A] to-[#06152B] text-[#C8D2E1] pt-[120px]"
    >
      {/* Premium Top Border */}
      <div className="absolute top-0 left-0 w-full">
        <div className="h-[1px] w-full bg-[#D4AF37]"></div>
        <div className="h-4 w-full bg-[#D4AF37]/20 blur-md"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-center md:text-left">
          
          {/* Brand & Socials */}
          <div className="space-y-8 flex flex-col items-center md:items-start">
            <Link to="/">
              <img 
                src="https://shakshigroup.com/cdn/shop/t/2/assets/sg-logo.png?v=56288382328306051021777810980" 
                alt="Shakshi Logo" 
                className="h-16 object-contain"
              />
            </Link>
            
            <p className="text-[#C8D2E1] text-[15px] leading-relaxed max-w-sm">
              Leading manufacturer of premium foam and mattress solutions.
              Delivering comfort and innovation across India with trusted brands and
              advanced foam technology.
            </p>
            
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-11 h-11 bg-white/5 border border-white/10 text-[#C8D2E1] rounded-2xl flex items-center justify-center transition-all duration-300 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:-translate-y-1 hover:scale-105">
                <FacebookIcon />
              </a>
              <a href="#" className="w-11 h-11 bg-white/5 border border-white/10 text-[#C8D2E1] rounded-2xl flex items-center justify-center transition-all duration-300 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:-translate-y-1 hover:scale-105">
                <InstagramIcon />
              </a>
              <a href="#" className="w-11 h-11 bg-white/5 border border-white/10 text-[#C8D2E1] rounded-2xl flex items-center justify-center transition-all duration-300 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:-translate-y-1 hover:scale-105">
                <LinkedinIcon />
              </a>
              <a href="#" className="w-11 h-11 bg-white/5 border border-white/10 text-[#C8D2E1] rounded-2xl flex items-center justify-center transition-all duration-300 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:-translate-y-1 hover:scale-105">
                <MessageCircleIcon />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-8 flex flex-col items-center md:items-start">
              <h4 className="text-white text-lg font-bold tracking-[0.15em] uppercase">COMPANY</h4>
              <div className="w-8 h-[2px] bg-[#D4AF37] mt-3"></div>
            </div>
            <ul className="space-y-5 text-[15px] flex flex-col items-center md:items-start">
              <FooterLink to="/about/overview">About Us</FooterLink>
              <FooterLink to="/brands/shakshi">Our Brands</FooterLink>
              <FooterLink to="/industries">Industries</FooterLink>
              <FooterLink to="/about/sustainability">Sustainability</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/about/values">Our Foundation</FooterLink>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-8 flex flex-col items-center md:items-start">
              <h4 className="text-white text-lg font-bold tracking-[0.15em] uppercase">QUICK LINKS</h4>
              <div className="w-8 h-[2px] bg-[#D4AF37] mt-3"></div>
            </div>
            <ul className="space-y-5 text-[15px] flex flex-col items-center md:items-start">
              <FooterLink to="/contact">Contact Us</FooterLink>
              <FooterLink to="/industrial-enquiry">Industrial Enquiry</FooterLink>
              <FooterLink to="/about/manufacturing">Manufacturing</FooterLink>
              <FooterLink to="/about/timeline">Our Journey</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-8 flex flex-col items-center md:items-start">
              <h4 className="text-white text-lg font-bold tracking-[0.15em] uppercase">CONTACT</h4>
              <div className="w-8 h-[2px] bg-[#D4AF37] mt-3"></div>
            </div>
            <ul className="space-y-5 text-[15px] flex flex-col items-center md:items-start text-center md:text-left">
              <li className="hover:text-[#D4AF37] transition-colors cursor-pointer text-[#C8D2E1]">+91 7525099861</li>
              <li className="hover:text-[#D4AF37] transition-colors cursor-pointer text-[#C8D2E1]">sales@shakshiproducts.com</li>
              <li className="hover:text-[#D4AF37] transition-colors cursor-pointer leading-relaxed text-[#C8D2E1] max-w-[250px]">
                363/288/1, Hasanganj, Campbell Rd, Lucknow, UP - 226017
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white/5 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#C8D2E1]">
          <p>© {new Date().getFullYear()} Shakshi Group. All rights reserved.</p>
          <div className="flex gap-6 items-center">
            <Link to="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <Link to="/terms" className="hover:text-[#D4AF37] transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
