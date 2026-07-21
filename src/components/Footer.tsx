import { Link } from 'react-router-dom';

const FacebookIcon = () => (
  <svg xmlns="http://www.空中/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

export default function Footer() {
  return (
    <footer className="bg-[#051124] text-[#9498a9] py-16 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          
          {/* Brand & Socials */}
          <div className="space-y-6">
            <div className="flex flex-col items-start">
              <img 
                src="https://shakshigroup.com/cdn/shop/t/2/assets/sg-logo.png?v=56288382328306051021777810980" 
                alt="Shakshi Logo" 
                className="h-16 object-contain mb-2"
              />
            </div>
            
            <p className="text-sm leading-relaxed mt-6 text-gray-300">
              Leading manufacturer of premium foam and mattress solutions.
              Delivering comfort and innovation across India with trusted brands and
              advanced foam technology.
            </p>
            
            <div className="flex gap-3 pt-4">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#D4AF37] text-gray-300 hover:text-white rounded-2xl flex items-center justify-center transition-colors border border-white/10">
                <FacebookIcon />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#D4AF37] text-gray-300 hover:text-white rounded-2xl flex items-center justify-center transition-colors border border-white/10">
                <InstagramIcon />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#D4AF37] text-gray-300 hover:text-white rounded-2xl flex items-center justify-center transition-colors border border-white/10">
                <LinkedinIcon />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#D4AF37] text-gray-300 hover:text-white rounded-2xl flex items-center justify-center transition-colors border border-white/10">
                <MessageCircleIcon />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-8">COMPANY</h4>
            <ul className="space-y-5 text-sm">
              <li><Link to="/about/overview" className="hover:text-[#D4AF37] transition-colors">About Us</Link></li>
              <li><Link to="/brands/shakshi" className="hover:text-[#D4AF37] transition-colors">Our Brands</Link></li>
              <li><Link to="/industries" className="hover:text-[#D4AF37] transition-colors">Industries</Link></li>
              <li><Link to="/about/sustainability" className="hover:text-[#D4AF37] transition-colors">Sustainability</Link></li>
              <li><Link to="/careers" className="hover:text-[#D4AF37] transition-colors">Careers</Link></li>
              <li><Link to="/about/values" className="hover:text-[#D4AF37] transition-colors">Our Foundation</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-8">QUICK LINKS</h4>
            <ul className="space-y-5 text-sm">
              <li><Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Contact Us</Link></li>
              <li><Link to="/industrial-enquiry" className="hover:text-[#D4AF37] transition-colors">Industrial Enquiry</Link></li>
              <li><Link to="/about/manufacturing" className="hover:text-[#D4AF37] transition-colors">Manufacturing</Link></li>
              <li><Link to="/about/timeline" className="hover:text-[#D4AF37] transition-colors">Our Journey</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-8">CONTACT</h4>
            <ul className="space-y-5 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer text-gray-300">+91 7525099861</li>
              <li className="hover:text-white transition-colors cursor-pointer text-gray-300">sales@shakshiproducts.com</li>
              <li className="hover:text-white transition-colors cursor-pointer leading-relaxed text-gray-300">
                363/288/1, Hasanganj, Campbell Rd, Lucknow, UP -
                226017
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2026 Shakshi Group. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#D4AF37] transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
