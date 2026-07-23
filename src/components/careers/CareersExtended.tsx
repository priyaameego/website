import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Briefcase, GraduationCap, Award, HeartHandshake, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

import fImg from '../../assets/f.jpeg';
import sciImg from '../../assets/sci.jpeg';
import bedImg from '../../assets/bed.jpeg';
import eImg from '../../assets/e.jpeg';
import Glass3DCard from '../ui/Glass3DCard';

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
    <div className="bg-[#0A101D] overflow-hidden">
      
      {/* 1. LIFE AT SHAKSHI GROUP */}
      <section className="py-32 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center relative z-10">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
            <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[11px]">OUR CULTURE</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-stylish font-bold mb-16 leading-tight text-white">
            Life at <span className="italic font-light text-[#D4AF37]">Shakshi Group</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {lifeCards.map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                className="h-full"
              >
                <Glass3DCard tiltIntensity={5} glowColor="rgba(212, 175, 55, 0.2)" className="h-full flex flex-col">
                  <div className="h-56 overflow-hidden relative rounded-t-3xl group">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-[#0A101D]/60 group-hover:bg-[#0A101D]/20 transition-colors duration-500"></div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow relative">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
                    <h3 className="text-white text-xl font-bold font-stylish mb-4 tracking-wide">{card.title}</h3>
                    <p className="text-white/60 text-[15px] leading-relaxed font-light">{card.desc}</p>
                  </div>
                </Glass3DCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CAREER JOURNEY */}
      <section className="py-32 bg-[#05080f] text-white relative">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent"></div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-stylish font-bold mb-6">
              Career <span className="italic font-light text-[#D4AF37]">Journey</span>
            </h2>
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center lg:items-start gap-16 lg:gap-4">
            {/* Horizontal Line for Desktop */}
            <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
            
            {journeySteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center w-full lg:w-1/4 group"
              >
                <div className="w-20 h-20 rounded-full bg-[#0A101D] border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-500">
                  <span className="text-[#D4AF37] font-bold text-xl group-hover:scale-110 transition-transform duration-300">{idx + 1}</span>
                </div>
                <span className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">{step.step}</span>
                <h3 className="text-xl font-bold font-stylish text-white tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">{step.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY WORK WITH SHAKSHI GROUP */}
      <section className="py-32 relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-5xl md:text-6xl font-stylish font-bold text-white mb-20">
            Why Work With <span className="text-[#D4AF37] italic font-light">Shakshi Group</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyWork.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                className="h-full"
              >
                <Glass3DCard tiltIntensity={10} glowColor="rgba(212, 175, 55, 0.1)" className="h-full">
                  <div className="p-8 flex items-center gap-6 group h-full">
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-sm flex-shrink-0 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-500">
                      <div className="group-hover:brightness-0 group-hover:scale-110 transition-all duration-500">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-white font-bold font-stylish text-[18px] text-left group-hover:text-[#D4AF37] transition-colors duration-300 tracking-wide">{item.title}</h3>
                  </div>
                </Glass3DCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CURRENT OPPORTUNITIES */}
      <section className="py-32 bg-[#05080f] relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-stylish font-bold text-white mb-8">
              Current <span className="italic font-light text-[#D4AF37]">Opportunities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((job, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                className="h-full"
              >
                <Glass3DCard tiltIntensity={5} glowColor="rgba(212, 175, 55, 0.2)" className="h-full">
                  <div className="p-10 flex flex-col justify-between h-full group">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <Briefcase size={20} className="text-[#D4AF37]" />
                        <span className="text-white/50 text-xs font-bold uppercase tracking-[0.2em]">Full Time</span>
                      </div>
                      <h3 className="text-2xl font-bold font-stylish text-white mb-8 group-hover:text-[#D4AF37] transition-colors duration-300 tracking-wide">{job}</h3>
                    </div>
                    <Link to="/contact" className="inline-flex items-center text-white/70 font-bold text-[13px] uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                      Apply Now <ChevronRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform duration-300 text-[#D4AF37]" />
                    </Link>
                  </div>
                </Glass3DCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LEARNING & DEVELOPMENT */}
      <section className="py-32 relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 relative"
          >
            <Glass3DCard tiltIntensity={5} glowColor="rgba(212, 175, 55, 0.2)">
              <div className="p-2">
                <div className="relative rounded-[20px] overflow-hidden group">
                  <div className="absolute inset-0 bg-[#D4AF37]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <img src={sciImg} alt="Learning & Development" className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                </div>
              </div>
            </Glass3DCard>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[11px]">GROWTH</span>
              <div className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-stylish font-bold text-white mb-10 leading-[1.1]">
              Learning & <span className="italic font-light text-[#D4AF37]">Development</span>
            </h2>
            <p className="text-lg text-white/60 mb-12 leading-relaxed font-light">
              We believe in the continuous growth of our employees. Our development programs ensure you stay ahead in the manufacturing industry.
            </p>
            <ul className="space-y-6">
              {learning.map((item, idx) => (
                <li key={idx} className="flex items-center gap-5 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300">
                    <CheckCircle2 size={20} className="text-[#D4AF37] group-hover:text-[#0A101D] transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <span className="text-white font-bold tracking-wide text-[16px] group-hover:text-[#D4AF37] transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
