import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function ContactUs() {
  const location = useLocation();
  const formRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const [businessType, setBusinessType] = useState('');
  const [highlightForm, setHighlightForm] = useState(false);

  useEffect(() => {
    const state = location.state as { fromCareers?: boolean };
    
    if (state?.fromCareers) {
      setBusinessType('Other');
      setHighlightForm(true);
      
      setTimeout(() => {
        if (formRef.current) {
          formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        if (selectRef.current) {
          selectRef.current.focus();
        }
      }, 500);

      const timer = setTimeout(() => {
        setHighlightForm(false);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="bg-[#FAFBFC] overflow-hidden">
      <PageHero 
        title="Contact Us" 
        subtitle="Get in touch with Shakshi Group. Whether you're a prospective partner, customer, or future team member, we're here to help."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 relative">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            {/* Left Column: Offices */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:border-r border-[#E9EEF5] lg:pr-12"
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-[#081C3A] font-bold tracking-[0.2em] uppercase text-[11px]">GET IN TOUCH</span>
                <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-stylish text-[#081C3A] mb-12">
                Our <span className="italic font-light">Offices</span>
              </h2>
              
              <div className="space-y-8">
                {/* Office 1 */}
                <div className="relative overflow-hidden bg-white p-8 rounded-[24px] border border-[#E9EEF5] shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] group">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h4 className="text-[11px] font-bold tracking-widest text-[#081C3A] uppercase mb-4">
                    REGISTERED OFFICE (LUCKNOW)
                  </h4>
                  <div className="flex items-start gap-3 mb-8">
                    <MapPin size={18} className="text-[#D4AF37] mt-1 shrink-0" />
                    <p className="text-[#667085] text-[15px] leading-relaxed">
                      363/288/1, Hasanganj, Campbell Rd, Lucknow, UP - 226017
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="tel:+917525099861" className="flex-1 flex items-center justify-center gap-2 bg-[#FAFBFC] hover:bg-[#081C3A] text-[#081C3A] hover:text-white px-4 h-12 rounded-xl transition-all duration-300 border border-[#E9EEF5] shadow-sm hover:shadow-md hover:-translate-y-1">
                      <Phone size={16} />
                      <span className="text-sm font-semibold tracking-wide">+91 7525099861</span>
                    </a>
                    <a href="mailto:sales@shakshiproducts.com" className="flex-1 flex items-center justify-center gap-2 bg-[#FAFBFC] hover:bg-[#081C3A] text-[#081C3A] hover:text-white px-4 h-12 rounded-xl transition-all duration-300 border border-[#E9EEF5] shadow-sm hover:shadow-md hover:-translate-y-1">
                      <Mail size={16} />
                      <span className="text-sm font-semibold tracking-wide">Email Sales</span>
                    </a>
                  </div>
                </div>

                {/* Office 2 */}
                <div className="relative overflow-hidden bg-white p-8 rounded-[24px] border border-[#E9EEF5] shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] group">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h4 className="text-[11px] font-bold tracking-widest text-[#081C3A] uppercase mb-4">
                    MANUFACTURING PLANT (KANPUR)
                  </h4>
                  <div className="flex items-start gap-3 mb-8">
                    <MapPin size={18} className="text-[#D4AF37] mt-1 shrink-0" />
                    <p className="text-[#667085] text-[15px] leading-relaxed">
                      Plot No. 45, Industrial Estate, Fazalganj, Kanpur, UP - 208012
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="tel:+917525099862" className="flex-1 flex items-center justify-center gap-2 bg-[#FAFBFC] hover:bg-[#081C3A] text-[#081C3A] hover:text-white px-4 h-12 rounded-xl transition-all duration-300 border border-[#E9EEF5] shadow-sm hover:shadow-md hover:-translate-y-1">
                      <Phone size={16} />
                      <span className="text-sm font-semibold tracking-wide">+91 7525099862</span>
                    </a>
                    <a href="mailto:b2b@shakshiproducts.com" className="flex-1 flex items-center justify-center gap-2 bg-[#FAFBFC] hover:bg-[#081C3A] text-[#081C3A] hover:text-white px-4 h-12 rounded-xl transition-all duration-300 border border-[#E9EEF5] shadow-sm hover:shadow-md hover:-translate-y-1">
                      <Mail size={16} />
                      <span className="text-sm font-semibold tracking-wide">Email B2B</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              ref={formRef}
              className={`bg-white p-10 md:p-14 rounded-[32px] transition-all duration-1000 ${
                highlightForm 
                  ? 'border border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.15)]' 
                  : 'border border-[#E9EEF5] shadow-[0_8px_40px_rgb(0,0,0,0.06)]'
              }`}
            >
              <h3 className="text-3xl font-stylish font-bold text-[#081C3A] mb-4">Send a Message</h3>
              <p className="text-[#667085] text-[15px] mb-10 leading-relaxed">
                For general queries or feedback, please fill out the form below.
              </p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[11px] font-bold tracking-widest text-[#081C3A] uppercase mb-2 block">
                      Nature of Your Business *
                    </label>
                    <select 
                      ref={selectRef}
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className={`w-full px-5 h-14 rounded-xl border bg-white text-[#081C3A] shadow-sm focus:outline-none focus:ring-1 focus:border-transparent transition-all duration-300 ${
                        highlightForm ? 'border-[#D4AF37] ring-1 ring-[#D4AF37]' : 'border-[#E9EEF5] focus:ring-[#D4AF37] focus:border-[#D4AF37]'
                      }`}
                    >
                      <option value="" disabled>Select Business Type</option>
                      <option value="Dealer">Dealer</option>
                      <option value="Distributor">Distributor</option>
                      <option value="Supplier">Supplier</option>
                      <option value="Customer">Customer</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold tracking-widest text-[#081C3A] uppercase mb-2 block">
                      Company Name
                    </label>
                    <input type="text" className="w-full px-5 h-14 rounded-xl border border-[#E9EEF5] bg-white text-[#081C3A] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all duration-300" />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[11px] font-bold tracking-widest text-[#081C3A] uppercase mb-2 block">
                      Your Name *
                    </label>
                    <input type="text" className="w-full px-5 h-14 rounded-xl border border-[#E9EEF5] bg-white text-[#081C3A] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all duration-300" />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold tracking-widest text-[#081C3A] uppercase mb-2 block">
                      Contact Number *
                    </label>
                    <input type="text" className="w-full px-5 h-14 rounded-xl border border-[#E9EEF5] bg-white text-[#081C3A] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all duration-300" />
                  </div>
                </div>

                {/* Row 3 */}
                <div>
                  <label className="text-[11px] font-bold tracking-widest text-[#081C3A] uppercase mb-2 block">
                    Email Address *
                  </label>
                  <input type="email" className="w-full px-5 h-14 rounded-xl border border-[#E9EEF5] bg-white text-[#081C3A] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all duration-300" />
                </div>

                {/* Row 4 */}
                <div>
                  <label className="text-[11px] font-bold tracking-widest text-[#081C3A] uppercase mb-2 block">
                    Address
                  </label>
                  <input type="text" className="w-full px-5 h-14 rounded-xl border border-[#E9EEF5] bg-white text-[#081C3A] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all duration-300" />
                </div>

                {/* Row 5 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[11px] font-bold tracking-widest text-[#081C3A] uppercase mb-2 block">
                      Country
                    </label>
                    <input type="text" className="w-full px-5 h-14 rounded-xl border border-[#E9EEF5] bg-white text-[#081C3A] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all duration-300" />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold tracking-widest text-[#081C3A] uppercase mb-2 block">
                      State
                    </label>
                    <input type="text" className="w-full px-5 h-14 rounded-xl border border-[#E9EEF5] bg-white text-[#081C3A] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all duration-300" />
                  </div>
                </div>

                {/* Row 6 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[11px] font-bold tracking-widest text-[#081C3A] uppercase mb-2 block">
                      City *
                    </label>
                    <input type="text" className="w-full px-5 h-14 rounded-xl border border-[#E9EEF5] bg-white text-[#081C3A] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all duration-300" />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold tracking-widest text-[#081C3A] uppercase mb-2 block">
                      Zip / Postal Code
                    </label>
                    <input type="text" className="w-full px-5 h-14 rounded-xl border border-[#E9EEF5] bg-white text-[#081C3A] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all duration-300" />
                  </div>
                </div>

                {/* Row 7 */}
                <div>
                  <label className="text-[11px] font-bold tracking-widest text-[#081C3A] uppercase mb-2 block">
                    Enquiry Details *
                  </label>
                  <textarea rows={5} className="w-full px-5 py-4 min-h-[140px] rounded-xl border border-[#E9EEF5] bg-white text-[#081C3A] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all duration-300 resize-y"></textarea>
                </div>

                <button type="submit" className="w-full h-14 bg-[#081C3A] text-white text-[13px] font-bold tracking-[0.15em] uppercase rounded-xl hover:bg-[#102848] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(8,28,58,0.2)] mt-8">
                  SUBMIT ENQUIRY
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
