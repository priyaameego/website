import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const MessageCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const FooterLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
  <li>
    <Link 
      to={to} 
      className="relative group inline-flex items-center text-[#C7D0D9] text-[16px] transition-all duration-300 hover:translate-x-1 hover:text-[#D4AF37]"
    >
      <span>{children}</span>
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </li>
);

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-[#0B1626] text-[#C7D0D9] pt-[120px]"
    >
      {/* Premium Top Border */}
      <div className="absolute top-0 left-0 w-full">
        <div className="h-[1px] w-full bg-[rgba(212,175,55,0.35)]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20 mb-12 text-center md:text-left">
          
          {/* Brand & Socials */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="mb-10">
              <img 
                src="https://shakshigroup.com/cdn/shop/t/2/assets/sg-logo.png?v=56288382328306051021777810980" 
                alt="Shakshi Logo" 
                className="h-16 object-contain"
              />
            </Link>
            
            <p className="text-[#C7D0D9] text-[16px] leading-relaxed max-w-[280px] mb-10">
              Leading manufacturer of premium foam and mattress solutions.
              Delivering comfort and innovation across India with trusted brands and
              advanced foam technology.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-[#FFFFFF] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#C96A2D] hover:text-[#FFFFFF] hover:border-transparent hover:-translate-y-1 hover:shadow-lg">
                <FacebookIcon />
              </a>
              <a href="#" className="w-12 h-12 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-[#FFFFFF] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#C96A2D] hover:text-[#FFFFFF] hover:border-transparent hover:-translate-y-1 hover:shadow-lg">
                <InstagramIcon />
              </a>
              <a href="#" className="w-12 h-12 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-[#FFFFFF] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#C96A2D] hover:text-[#FFFFFF] hover:border-transparent hover:-translate-y-1 hover:shadow-lg">
                <LinkedinIcon />
              </a>
              <a href="#" className="w-12 h-12 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-[#FFFFFF] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#C96A2D] hover:text-[#FFFFFF] hover:border-transparent hover:-translate-y-1 hover:shadow-lg">
                <MessageCircleIcon />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col items-center md:items-start pt-4">
            <h4 className="text-[#FFFFFF] text-[18px] font-bold tracking-[0.15em] uppercase mb-10">
              COMPANY
            </h4>
            <ul className="space-y-6 flex flex-col items-center md:items-start">
              <FooterLink to="/about/overview">About Us</FooterLink>
              <FooterLink to="/brands/shakshi">Our Brands</FooterLink>
              <FooterLink to="/industries">Industries</FooterLink>
              <FooterLink to="/about/sustainability">Sustainability</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/about/values">Our Foundation</FooterLink>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start pt-4">
            <h4 className="text-[#FFFFFF] text-[18px] font-bold tracking-[0.15em] uppercase mb-10">
              QUICK LINKS
            </h4>
            <ul className="space-y-6 flex flex-col items-center md:items-start">
              <FooterLink to="/contact">Contact Us</FooterLink>
              <FooterLink to="/industrial-enquiry">Industrial Enquiry</FooterLink>
              <FooterLink to="/about/manufacturing">Manufacturing</FooterLink>
              <FooterLink to="/about/timeline">Our Journey</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start pt-4">
            <h4 className="text-[#FFFFFF] text-[18px] font-bold tracking-[0.15em] uppercase mb-10">
              CONTACT
            </h4>
            <ul className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left text-[16px] text-[#C7D0D9]">
              <li className="relative group inline-flex items-center transition-all duration-300 hover:translate-x-1 hover:text-[#D4AF37] cursor-pointer">
                <span>+91 7525099861</span>
              </li>
              <li className="relative group inline-flex items-center transition-all duration-300 hover:translate-x-1 hover:text-[#D4AF37] cursor-pointer">
                <span>sales@shakshiproducts.com</span>
              </li>
              <li className="leading-relaxed max-w-[280px]">
                363/288/1, Hasanganj, Campbell Rd, Lucknow, UP - 226017
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#08111E] border-t border-[rgba(255,255,255,0.08)] py-8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[14px] text-[#8E98A7]">
          <p>© {new Date().getFullYear()} Shakshi Group. All rights reserved.</p>
          <div className="flex gap-8 items-center">
            <Link to="/privacy" className="hover:text-[#D4AF37] transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#D4AF37] transition-colors duration-300">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
