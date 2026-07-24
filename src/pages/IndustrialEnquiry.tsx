import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

import hImg from '../assets/hos.png';
import healthImg from '../assets/care.png';
import autoImg from '../assets/a.png';
import furImg from '../assets/fur.png';
import acousImg from '../assets/sound.png';
import customImg from '../assets/c.png';

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
    { title: 'HOSPITALITY', image: hImg, desc: 'Premium mattresses and foam solutions for hotels, resorts, and hospitality chains. Custom sizes and firmness levels for luxury guest experiences.' },
    { title: 'HEALTHCARE', image: healthImg, desc: 'Medical-grade foam products for hospitals, clinics, and care facilities. Pressure-relief mattresses designed for patient comfort and recovery.' },
    { title: 'AUTOMOTIVE', image: autoImg, desc: 'Specialised seat cushioning and insulation foams for the automotive industry. Comfort for daily commuters and long-distance travellers.' },
    { title: 'FURNITURE', image: furImg, desc: 'Cushioning foams for sofas, chairs, and office furniture. Our special foams extend the promise of comfort beyond the bed.' },
    { title: 'SOUND INSULATION', image: acousImg, desc: 'Acoustic foam panels for studios, theatres, and industrial settings. Designed to absorb unwanted sound and improve environments.' },
    { title: 'CUSTOM SOLUTIONS', image: customImg, desc: 'Foam specific to your requirement. Our custom team will work with you to design and develop foam for any industrial application.' }
  ];

  return (
    <div className="bg-[#FFFFFF] overflow-hidden">
      {/* Hero Section */}
      <section className="bg-[#1B2430] pt-40 pb-20 px-6">
        <div className="max-w-[1000px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-stylish text-white mb-6">
            Industrial Foam <span className="italic font-light">Applications</span>
          </h1>
          <p className="text-[#F7F8FA]/80 text-lg leading-relaxed">
            Partner with Shakshi Group for premium foam solutions and bulk orders.
          </p>
        </div>
      </section>

      {/* Contact Bar */}
      <div className="bg-[#0f172a] py-6 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-white font-bold text-sm">
          <a href="tel:+917525099861" className="flex items-center justify-center gap-3 w-full sm:w-auto hover:text-[#D4AF37] px-6 py-3 rounded-full transition-colors">
            <Phone size={18} className="text-[#D4AF37]" />
            <span className="tracking-wide">+91 7525099861</span>
          </a>
          <a href="mailto:b2b@shakshiproducts.com" className="flex items-center justify-center gap-3 w-full sm:w-auto hover:text-[#D4AF37] px-6 py-3 rounded-full transition-colors">
            <Mail size={18} className="text-[#D4AF37]" />
            <span className="tracking-wide">b2b@shakshiproducts.com</span>
          </a>
        </div>
      </div>

      {/* Applications Grid */}
      <section className="py-24 md:py-32 px-6 bg-[#F7F8FA]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">Applications</span>
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-stylish text-[#1B2430] mb-6">
              Industrial <span className="italic font-light">Solutions</span>
            </h2>
            <p className="text-[#4B5563] text-lg max-w-2xl mx-auto leading-relaxed">
              Our high-performance foams are designed to meet the rigorous demands of various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group premium-card bg-white overflow-hidden flex flex-col p-4"
              >
                <div className="h-[250px] overflow-hidden rounded-xl relative mb-4 bg-[#E7EBF0]">
                  <img 
                    src={ind.image} 
                    alt={ind.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-[#1B2430]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="text-center py-4">
                  <h3 className="text-[#1B2430] text-[15px] font-bold font-stylish tracking-[0.1em] uppercase group-hover:text-[#D4AF37] transition-colors">{ind.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-[800px] mx-auto premium-card bg-[#F7F8FA] p-8 md:p-14">
          <h2 className="text-3xl md:text-4xl font-bold font-stylish text-[#1B2430] mb-4 text-center">
            Send Us Your Query
          </h2>
          <p className="text-[#4B5563] mb-12 text-center text-[15px]">
            Our industrial team will respond within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest text-[#1B2430] uppercase mb-2 block">Name <span className="text-[#D4AF37]">*</span></label>
              <input 
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-[#E7EBF0] bg-white focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-[#1B2430] uppercase mb-2 block">Phone <span className="text-[#D4AF37]">*</span></label>
                <div className="flex border border-[#E7EBF0] bg-white rounded-xl overflow-hidden focus-within:ring-1 focus-within:ring-[#D4AF37] focus-within:border-[#D4AF37] transition-all">
                  <div className="bg-[#F7F8FA] px-4 flex items-center border-r border-[#E7EBF0] text-[#4B5563]">
                    <span className="mr-2">🇮🇳</span> +91
                  </div>
                  <input 
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 focus:outline-none bg-transparent"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-[#1B2430] uppercase mb-2 block">Email <span className="text-[#D4AF37]">*</span></label>
                <input 
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#E7EBF0] bg-white focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-[#1B2430] uppercase mb-2 block">Company <span className="text-[#D4AF37]">*</span></label>
                <input 
                  required
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#E7EBF0] bg-white focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-[#1B2430] uppercase mb-2 block">City <span className="text-[#D4AF37]">*</span></label>
                <input 
                  required
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#E7EBF0] bg-white focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest text-[#1B2430] uppercase mb-2 block">Enquiry Details <span className="text-[#D4AF37]">*</span></label>
              <textarea 
                required
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-[#E7EBF0] bg-white focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all resize-y"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full btn-primary mt-8"
            >
              SUBMIT ENQUIRY
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
