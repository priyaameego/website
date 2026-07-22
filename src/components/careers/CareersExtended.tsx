import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Briefcase, GraduationCap, Award, HeartHandshake, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

import fImg from '../../assets/f.jpeg';
import sciImg from '../../assets/sci.jpeg';
import bedImg from '../../assets/bed.jpeg';
import eImg from '../../assets/e.jpeg';

export default function CareersExtended() {
  const lifeCards = [
    {
      title: 'Manufacturing Excellence',
      desc: 'Work with advanced foam and mattress manufacturing technologies in a modern production environment.',
      image: fImg
    },
    {
      title: 'Research & Innovation',
      desc: 'Collaborate with engineers and product specialists to develop innovative foam and comfort solutions.',
      image: sciImg
    },
    {
      title: 'Sales & Distribution',
      desc: 'Support a growing dealer and distributor network delivering premium products across India.',
      image: bedImg
    },
    {
      title: 'Corporate Team',
      desc: 'Join professionals in operations, marketing, finance, customer support, and business development.',
      image: eImg
    }
  ];

  const journeySteps = [
    { step: 'Step 1', title: 'Apply Online' },
    { step: 'Step 2', title: 'Application Review' },
    { step: 'Step 3', title: 'Technical & HR Interview' },
    { step: 'Step 4', title: 'Join Shakshi Group' }
  ];

  const whyWork = [
    { title: 'Career Growth', icon: <Award className="text-[#D4AF37]" size={24} /> },
    { title: 'Technical Training', icon: <Zap className="text-[#D4AF37]" size={24} /> },
    { title: 'Leadership Development', icon: <GraduationCap className="text-[#D4AF37]" size={24} /> },
    { title: 'Safe Manufacturing Environment', icon: <ShieldCheck className="text-[#D4AF37]" size={24} /> },
    { title: 'Employee Wellbeing', icon: <HeartHandshake className="text-[#D4AF37]" size={24} /> },
    { title: 'Performance Recognition', icon: <Award className="text-[#D4AF37]" size={24} /> },
  ];

  const opportunities = [
    'Production Engineer',
    'Quality Engineer',
    'R&D Executive',
    'Sales Executive',
    'Machine Operator',
    'Supply Chain Executive'
  ];

  const learning = [
    'Technical Skill Development',
    'Manufacturing Excellence Programs',
    'Product Knowledge Training',
    'Leadership & Management Learning',
    'Cross-functional Collaboration'
  ];

  return (
    <div className="bg-[#FFFFFF] overflow-hidden">
      
      {/* 1. LIFE AT SHAKSHI GROUP */}
      <section className="py-24 md:py-32 bg-[#FAFAF8]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
            <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">Our Culture</span>
            <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1B2430] font-stylish font-bold mb-16 leading-tight">
            Life at Shakshi Group
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {lifeCards.map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="premium-card group p-0 overflow-hidden flex flex-col"
              >
                <div className="h-56 overflow-hidden relative">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow bg-white">
                  <h3 className="text-[#1B2430] text-xl font-bold font-stylish mb-4">{card.title}</h3>
                  <p className="text-[#667085] text-[15px] leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CAREER JOURNEY */}
      <section className="py-24 md:py-32 bg-[#0B1626] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-stylish font-bold mb-6">Career Journey</h2>
            <div className="h-[1px] w-16 bg-[#D4AF37] mx-auto"></div>
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-4">
            {/* Horizontal Line for Desktop */}
            <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-[rgba(212,175,55,0.3)]"></div>
            
            {journeySteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center w-full lg:w-1/4"
              >
                <div className="w-20 h-20 rounded-full bg-[#08111E] border border-[rgba(212,175,55,0.4)] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                  <span className="text-[#D4AF37] font-bold text-lg">{idx + 1}</span>
                </div>
                <span className="text-[#D4AF37] text-[11px] font-bold tracking-[0.2em] uppercase mb-2">{step.step}</span>
                <h3 className="text-xl font-semibold text-[#E8EDF5]">{step.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY WORK WITH SHAKSHI GROUP */}
      <section className="py-24 md:py-32 bg-[#FFFFFF]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-stylish font-bold text-[#1B2430] mb-16">
            Why Work With Shakshi Group
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyWork.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[24px] border border-[#E5E7EB] bg-[#FAFAF8] flex items-center gap-6 hover:shadow-[0_10px_30px_rgb(0,0,0,0.04)] transition-shadow duration-500"
              >
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-[#1B2430] font-semibold text-[17px] text-left">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CURRENT OPPORTUNITIES */}
      <section className="py-24 md:py-32 bg-[#FAFAF8]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-stylish font-bold text-[#1B2430] mb-6">Current Opportunities</h2>
            <div className="h-[1px] w-16 bg-[#C96A2D] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((job, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="premium-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase size={20} className="text-[#D4AF37]" />
                    <span className="text-[#667085] text-xs font-bold uppercase tracking-widest">Full Time</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1B2430] mb-6">{job}</h3>
                </div>
                <Link to="/contact" className="inline-flex items-center text-[#C96A2D] font-semibold text-[14px] uppercase tracking-wider group-hover:text-[#A85825] transition-colors">
                  Apply Now <ChevronRight size={18} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LEARNING & DEVELOPMENT */}
      <section className="py-24 md:py-32 bg-[#FFFFFF]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-[#FAFAF8] shadow-sm rounded-[24px] -z-10 translate-x-4 translate-y-4"></div>
            <img src={sciImg} alt="Learning & Development" className="w-full h-[500px] object-cover rounded-[24px] shadow-lg grayscale" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-stylish font-bold text-[#1B2430] mb-8">
              Learning & Development
            </h2>
            <p className="text-lg text-[#667085] mb-10 leading-relaxed">
              We believe in the continuous growth of our employees. Our development programs ensure you stay ahead in the manufacturing industry.
            </p>
            <ul className="space-y-5">
              {learning.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <CheckCircle2 size={22} className="text-[#D4AF37]" strokeWidth={2} />
                  <span className="text-[#1B2430] font-semibold text-[16px]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#0F2038] to-[#08111E] text-center">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-stylish font-bold text-white mb-8 leading-tight">
              Build the Future of Comfort with Shakshi Group
            </h2>
            <p className="text-lg text-[#C7D0D9] mb-12 leading-relaxed">
              Become part of a team committed to manufacturing excellence, innovation, quality, and customer satisfaction. Help us create premium foam and mattress solutions trusted by industries and households across India.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="btn-primary w-full sm:w-auto">
                Apply Now
              </Link>
              <Link to="/contact" className="btn-secondary text-white border-white/30 hover:border-white hover:text-white w-full sm:w-auto">
                Contact HR
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
