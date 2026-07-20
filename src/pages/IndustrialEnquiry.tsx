import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import hImg from '../assets/h.png';
import healthImg from '../assets/healthcare.png';
import autoImg from '../assets/automative.png';
import furImg from '../assets/fur.png';
import acousImg from '../assets/Acoustics.png';
import customImg from '../assets/custome.png';

export default function IndustrialEnquiry() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    city: '',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you! Our industrial team will respond within 24 hours.');
    setFormData({ name: '', phone: '', email: '', company: '', city: '', details: '' });
  };

  const industries = [
    { title: 'HOSPITALITY', image: hImg },
    { title: 'HEALTHCARE', image: healthImg },
    { title: 'AUTOMOTIVE', image: autoImg },
    { title: 'FURNITURE', image: furImg },
    { title: 'ACOUSTICS', image: acousImg },
    { title: 'CUSTOM PACKAGING', image: customImg }
  ];

  return (
    <div className="bg-[#FAFAFA] overflow-hidden">
      {/* Hero Section */}
      <section className="bg-[#121E36] pt-40 pb-20 px-6">
        <div className="max-w-[1000px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white mb-6 tracking-tight">
            Industrial Foam Applications
          </h1>
          <p className="text-[#9CA3AF] text-lg font-medium">
            Partner with Shakshi Group for premium foam solutions and bulk orders.
          </p>
        </div>
      </section>

      {/* Contact Bar */}
      <div className="bg-[#1C2033] py-6 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-[#D4AF37] font-bold text-sm">
          <a href="tel:+917525099861" className="flex items-center justify-center gap-2 w-full sm:w-auto bg-white/5 hover:bg-white/10 px-6 py-3 rounded-lg transition-colors border border-white/10">
            <Phone size={18} className="text-[#E63946]" />
            <span className="tracking-wide">+91 7525099861</span>
          </a>
          <a href="mailto:b2b@shakshiproducts.com" className="flex items-center justify-center gap-2 w-full sm:w-auto bg-white/5 hover:bg-white/10 px-6 py-3 rounded-lg transition-colors border border-white/10">
            <Mail size={18} className="text-[#E63946]" />
            <span className="tracking-wide">b2b@shakshiproducts.com</span>
          </a>
        </div>
      </div>

      {/* Applications Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.3em] text-[#E63946] uppercase mb-4 block">
              APPLICATIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-heading text-[#081C3A] mb-4">
              INDUSTRIAL SOLUTIONS
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Our high-performance foams are designed to meet the rigorous demands of various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group rounded-[16px] overflow-hidden bg-[#121E36] flex flex-col shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="py-4 text-center border-b border-white/10">
                  <h3 className="text-white text-sm font-bold tracking-[0.2em]">{ind.title}</h3>
                </div>
                <div className="h-[250px] overflow-hidden relative">
                  <img 
                    src={ind.image} 
                    alt={ind.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-24 px-6 bg-[#FAFAFA]">
        <div className="max-w-[800px] mx-auto bg-white rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] p-8 md:p-12">
          <h2 className="text-3xl font-bold font-heading text-[#081C3A] mb-2">
            Send Us Your Query
          </h2>
          <p className="text-[#4B5563] mb-10">
            Our industrial team will respond within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#4B5563]">Name<span className="text-[#E63946]">*</span></label>
              <input 
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#4B5563]">Phone<span className="text-[#E63946]">*</span></label>
                <div className="flex border border-[#E5E7EB] rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#D4AF37]">
                  <div className="bg-[#F9FAFB] px-4 flex items-center border-r border-[#E5E7EB]">
                    <span className="mr-2">🇮🇳</span> +91
                  </div>
                  <input 
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 focus:outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#4B5563]">Email<span className="text-[#E63946]">*</span></label>
                <input 
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#4B5563]">Company<span className="text-[#E63946]">*</span></label>
                <input 
                  required
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#4B5563]">City<span className="text-[#E63946]">*</span></label>
                <input 
                  required
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#4B5563]">Enquiry Details<span className="text-[#E63946]">*</span></label>
              <textarea 
                required
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#C19B5E] text-white font-bold py-4 rounded-lg hover:bg-[#A88650] transition-colors shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
