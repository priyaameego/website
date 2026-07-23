import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import PageHero from '../components/PageHero';
import Glass3DCard from '../components/ui/Glass3DCard';

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
    <div className="bg-[#0A101D] overflow-hidden">
      <PageHero 
        title="Contact Us" 
        subtitle="Get in touch with Shakshi Group. Whether you're a prospective partner, customer, or future team member, we're here to help."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-32 relative">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24">
            {/* Left Column: Offices */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pr-12"
            >
              <div className="inline-flex items-center gap-4 mb-8">
                <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[11px]">GET IN TOUCH</span>
                <div className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold font-stylish text-white mb-16">
                Our <span className="italic font-light text-[#D4AF37]">Offices</span>
              </h2>
              
              <div className="space-y-10">
                {/* Office 1 */}
                <Glass3DCard tiltIntensity={5} glowColor="rgba(212, 175, 55, 0.15)">
                  <div className="p-10 flex flex-col h-full relative group">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-6">
                      REGISTERED OFFICE (LUCKNOW)
                    </h4>
                    <div className="flex items-start gap-4 mb-10">
                      <MapPin size={20} className="text-[#D4AF37] mt-1 shrink-0 group-hover:scale-125 transition-transform duration-300" />
                      <p className="text-white/70 text-[15px] leading-relaxed font-light">
                        363/288/1, Hasanganj, Campbell Rd, Lucknow, UP - 226017
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                      <a href="tel:+917525099861" className="flex-1 flex items-center justify-center gap-3 bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#0A101D] px-4 h-14 rounded-xl transition-all duration-300 border border-white/10 hover:border-transparent font-bold text-sm tracking-wide">
                        <Phone size={16} />
                        <span>+91 7525099861</span>
                      </a>
                      <a href="mailto:sales@shakshiproducts.com" className="flex-1 flex items-center justify-center gap-3 bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#0A101D] px-4 h-14 rounded-xl transition-all duration-300 border border-white/10 hover:border-transparent font-bold text-sm tracking-wide">
                        <Mail size={16} />
                        <span>Email Sales</span>
                      </a>
                    </div>
                  </div>
                </Glass3DCard>

                {/* Office 2 */}
                <Glass3DCard tiltIntensity={5} glowColor="rgba(212, 175, 55, 0.15)">
                  <div className="p-10 flex flex-col h-full relative group">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-6">
                      MANUFACTURING PLANT (KANPUR)
                    </h4>
                    <div className="flex items-start gap-4 mb-10">
                      <MapPin size={20} className="text-[#D4AF37] mt-1 shrink-0 group-hover:scale-125 transition-transform duration-300" />
                      <p className="text-white/70 text-[15px] leading-relaxed font-light">
                        Plot No. 45, Industrial Estate, Fazalganj, Kanpur, UP - 208012
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                      <a href="tel:+917525099862" className="flex-1 flex items-center justify-center gap-3 bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#0A101D] px-4 h-14 rounded-xl transition-all duration-300 border border-white/10 hover:border-transparent font-bold text-sm tracking-wide">
                        <Phone size={16} />
                        <span>+91 7525099862</span>
                      </a>
                      <a href="mailto:b2b@shakshiproducts.com" className="flex-1 flex items-center justify-center gap-3 bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#0A101D] px-4 h-14 rounded-xl transition-all duration-300 border border-white/10 hover:border-transparent font-bold text-sm tracking-wide">
                        <Mail size={16} />
                        <span>Email B2B</span>
                      </a>
                    </div>
                  </div>
                </Glass3DCard>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              ref={formRef}
              className={`bg-white/5 backdrop-blur-xl p-10 md:p-14 rounded-3xl transition-all duration-1000 ${
                highlightForm 
                  ? 'border border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.2)]' 
                  : 'border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.2)]'
              }`}
            >
              <h3 className="text-4xl font-stylish font-bold text-white mb-4">Send a Message</h3>
              <p className="text-white/60 text-[15px] mb-12 leading-relaxed font-light">
                For general queries or feedback, please fill out the form below.
              </p>
              
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[11px] font-bold tracking-widest text-white/50 uppercase mb-3 block">
                      Nature of Your Business *
                    </label>
                    <select 
                      ref={selectRef}
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className={`w-full px-5 h-14 rounded-xl border bg-[#05080f] text-white focus:outline-none transition-all duration-300 ${
                        highlightForm ? 'border-[#D4AF37]' : 'border-white/10 focus:border-[#D4AF37]'
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
                    <label className="text-[11px] font-bold tracking-widest text-white/50 uppercase mb-3 block">
                      Company Name
                    </label>
                    <input type="text" className="w-full px-5 h-14 rounded-xl border border-white/10 bg-[#05080f] text-white focus:outline-none focus:border-[#D4AF37] transition-all duration-300" />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[11px] font-bold tracking-widest text-white/50 uppercase mb-3 block">
                      Your Name *
                    </label>
                    <input type="text" className="w-full px-5 h-14 rounded-xl border border-white/10 bg-[#05080f] text-white focus:outline-none focus:border-[#D4AF37] transition-all duration-300" />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold tracking-widest text-white/50 uppercase mb-3 block">
                      Contact Number *
                    </label>
                    <input type="text" className="w-full px-5 h-14 rounded-xl border border-white/10 bg-[#05080f] text-white focus:outline-none focus:border-[#D4AF37] transition-all duration-300" />
                  </div>
                </div>

                {/* Row 3 */}
                <div>
                  <label className="text-[11px] font-bold tracking-widest text-white/50 uppercase mb-3 block">
                    Email Address *
                  </label>
                  <input type="email" className="w-full px-5 h-14 rounded-xl border border-white/10 bg-[#05080f] text-white focus:outline-none focus:border-[#D4AF37] transition-all duration-300" />
                </div>

                {/* Row 4 */}
                <div>
                  <label className="text-[11px] font-bold tracking-widest text-white/50 uppercase mb-3 block">
                    Address
                  </label>
                  <input type="text" className="w-full px-5 h-14 rounded-xl border border-white/10 bg-[#05080f] text-white focus:outline-none focus:border-[#D4AF37] transition-all duration-300" />
                </div>

                {/* Row 5 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[11px] font-bold tracking-widest text-white/50 uppercase mb-3 block">
                      Country
                    </label>
                    <input type="text" className="w-full px-5 h-14 rounded-xl border border-white/10 bg-[#05080f] text-white focus:outline-none focus:border-[#D4AF37] transition-all duration-300" />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold tracking-widest text-white/50 uppercase mb-3 block">
                      State
                    </label>
                    <input type="text" className="w-full px-5 h-14 rounded-xl border border-white/10 bg-[#05080f] text-white focus:outline-none focus:border-[#D4AF37] transition-all duration-300" />
                  </div>
                </div>

                {/* Row 6 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[11px] font-bold tracking-widest text-white/50 uppercase mb-3 block">
                      City *
                    </label>
                    <input type="text" className="w-full px-5 h-14 rounded-xl border border-white/10 bg-[#05080f] text-white focus:outline-none focus:border-[#D4AF37] transition-all duration-300" />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold tracking-widest text-white/50 uppercase mb-3 block">
                      Zip / Postal Code
                    </label>
                    <input type="text" className="w-full px-5 h-14 rounded-xl border border-white/10 bg-[#05080f] text-white focus:outline-none focus:border-[#D4AF37] transition-all duration-300" />
                  </div>
                </div>

                {/* Row 7 */}
                <div>
                  <label className="text-[11px] font-bold tracking-widest text-white/50 uppercase mb-3 block">
                    Enquiry Details *
                  </label>
                  <textarea rows={5} className="w-full px-5 py-5 min-h-[140px] rounded-xl border border-white/10 bg-[#05080f] text-white focus:outline-none focus:border-[#D4AF37] transition-all duration-300 resize-y"></textarea>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full h-16 bg-[#D4AF37] text-[#0A101D] text-[13px] font-bold tracking-[0.2em] uppercase rounded-xl hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center group relative overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                      SUBMIT ENQUIRY
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
