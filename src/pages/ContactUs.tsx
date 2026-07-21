import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
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
    <div className="bg-[#FFFFFF] overflow-hidden">
      <PageHero 
        title="Contact Us" 
        subtitle="Get in touch with Shakshi Group. Whether you're a prospective partner, customer, or future team member, we're here to help."
        backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8ed7c50800?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-24 bg-[#F4F7FA]">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
            {/* Left Column: Offices */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-bold tracking-widest text-[#E63946] uppercase mb-4">
                GET IN TOUCH
              </h4>
              <h2 className="text-4xl md:text-5xl font-black font-heading text-[#0f172a] mb-12">
                Our Offices
              </h2>
              
              <div className="space-y-8">
                {/* Office 1 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E2E8F0]">
                  <h4 className="text-sm font-bold tracking-widest text-[#E63946] uppercase mb-4">
                    REGISTERED OFFICE (LUCKNOW)
                  </h4>
                  <p className="text-[#6B7280] text-sm mb-6">
                    363/288/1, Hasanganj, Campbell Rd, Lucknow, UP - 226017
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="tel:+917525099861" className="flex-1 flex items-center justify-center gap-2 bg-[#F8FAFC] hover:bg-[#EEF5FF] text-[#0f172a] hover:text-[#C19B5E] px-4 py-3 rounded-2xl transition-colors border border-[#E2E8F0] shadow-sm">
                      <Phone size={16} />
                      <span className="text-sm font-semibold">+91 7525099861</span>
                    </a>
                    <a href="mailto:sales@shakshiproducts.com" className="flex-1 flex items-center justify-center gap-2 bg-[#F8FAFC] hover:bg-[#EEF5FF] text-[#0f172a] hover:text-[#C19B5E] px-4 py-3 rounded-2xl transition-colors border border-[#E2E8F0] shadow-sm">
                      <Mail size={16} />
                      <span className="text-sm font-semibold">Email Sales</span>
                    </a>
                  </div>
                </div>

                {/* Office 2 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E2E8F0]">
                  <h4 className="text-sm font-bold tracking-widest text-[#0f172a] uppercase mb-4">
                    MANUFACTURING PLANT (KANPUR)
                  </h4>
                  <p className="text-[#6B7280] text-sm mb-6">
                    Plot No. 45, Industrial Estate, Fazalganj, Kanpur, UP - 208012
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="tel:+917525099862" className="flex-1 flex items-center justify-center gap-2 bg-[#F8FAFC] hover:bg-[#EEF5FF] text-[#0f172a] hover:text-[#C19B5E] px-4 py-3 rounded-2xl transition-colors border border-[#E2E8F0] shadow-sm">
                      <Phone size={16} />
                      <span className="text-sm font-semibold">+91 7525099862</span>
                    </a>
                    <a href="mailto:b2b@shakshiproducts.com" className="flex-1 flex items-center justify-center gap-2 bg-[#F8FAFC] hover:bg-[#EEF5FF] text-[#0f172a] hover:text-[#C19B5E] px-4 py-3 rounded-2xl transition-colors border border-[#E2E8F0] shadow-sm">
                      <Mail size={16} />
                      <span className="text-sm font-semibold">Email B2B</span>
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
              className={`bg-white p-10 md:p-12 rounded-2xl border transition-all duration-1000 ${
                highlightForm 
                  ? 'border-[#E63946] shadow-[0_0_30px_rgba(230,57,70,0.2)]' 
                  : 'border-[#E2E8F0] shadow-sm'
              }`}
            >
              <h3 className="text-2xl text-[#64748b] mb-4 font-light">Send a Message</h3>
              <p className="text-[#6B7280] text-sm mb-10">
                For general queries or feedback, please fill out the form below.
              </p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-[#64748b] mb-2 block">
                      Nature of Your Business *
                    </label>
                    <select 
                      ref={selectRef}
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className={`w-full px-4 py-3 rounded-2xl border text-[#64748b] focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                        highlightForm ? 'border-[#E63946] ring-2 ring-[#E63946]' : 'border-[#E5E7EB] focus:ring-[#D4AF37]'
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
                    <label className="text-sm font-medium text-[#64748b] mb-2 block">
                      Company Name
                    </label>
                    <input type="text" className="w-full px-4 py-3 rounded-2xl border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all" />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-[#64748b] mb-2 block">
                      Your Name *
                    </label>
                    <input type="text" className="w-full px-4 py-3 rounded-2xl border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#64748b] mb-2 block">
                      Contact Number *
                    </label>
                    <input type="text" className="w-full px-4 py-3 rounded-2xl border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all" />
                  </div>
                </div>

                {/* Row 3 */}
                <div>
                  <label className="text-sm font-medium text-[#64748b] mb-2 block">
                    Email Address *
                  </label>
                  <input type="email" className="w-full px-4 py-3 rounded-2xl border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all" />
                </div>

                {/* Row 4 */}
                <div>
                  <label className="text-sm font-medium text-[#64748b] mb-2 block">
                    Address
                  </label>
                  <input type="text" className="w-full px-4 py-3 rounded-2xl border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all" />
                </div>

                {/* Row 5 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-[#64748b] mb-2 block">
                      Country
                    </label>
                    <input type="text" className="w-full px-4 py-3 rounded-2xl border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#64748b] mb-2 block">
                      State
                    </label>
                    <input type="text" className="w-full px-4 py-3 rounded-2xl border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all" />
                  </div>
                </div>

                {/* Row 6 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-[#64748b] mb-2 block">
                      City *
                    </label>
                    <input type="text" className="w-full px-4 py-3 rounded-2xl border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#64748b] mb-2 block">
                      Zip / Postal Code
                    </label>
                    <input type="text" className="w-full px-4 py-3 rounded-2xl border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all" />
                  </div>
                </div>

                {/* Row 7 */}
                <div>
                  <label className="text-sm font-medium text-[#64748b] mb-2 block">
                    Enquiry Details *
                  </label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-2xl border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all resize-y"></textarea>
                </div>

                <button type="submit" className="w-full bg-[#C19B5E] text-white font-bold py-4 rounded-2xl hover:bg-[#A88650] transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 mt-4">
                  Submit Enquiry
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
