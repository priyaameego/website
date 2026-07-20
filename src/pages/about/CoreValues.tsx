import React from 'react';
import PageLayout from '../../components/PageLayout';
import PageHero from '../../components/PageHero';
import { BookOpen, HeartPulse, TreePine } from 'lucide-react';
import { motion } from 'framer-motion';
import waterImg from '../../assets/water.png';

export default function CoreValues() {
  const initiatives = [
    { 
      icon: BookOpen, 
      title: 'Education Support', 
      desc: 'Providing scholarships and infrastructure support to local schools to ensure quality education for all.',
      color: 'text-[#4F46E5]',
      bg: 'bg-[#EEF2FF]'
    },
    { 
      icon: HeartPulse, 
      title: 'Healthcare Access', 
      desc: 'Organizing free health camps and providing medical equipment to rural clinics.',
      color: 'text-[#E11D48]',
      bg: 'bg-[#FFF1F2]'
    },
    { 
      icon: TreePine, 
      title: 'Tree Plantation', 
      desc: 'Annual plantation drives aimed at increasing green cover and reducing carbon footprints.',
      color: 'text-[#16A34A]',
      bg: 'bg-[#F0FDF4]'
    }
  ];

  return (
    <PageLayout>
      <PageHero 
        title="Our Foundation" 
        subtitle="Giving back to the community and building a better tomorrow through sustainable social initiatives."
        bgImage="https://images.unsplash.com/photo-1593113565694-c6f33e5fc4cb?q=80&w=2070&auto=format&fit=crop" 
      />
      
      {/* Empowering Communities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xs font-black tracking-[0.2em] text-[#E63946] uppercase mb-4">
                CSR INITIATIVES
              </h4>
              <h2 className="text-4xl md:text-5xl font-black font-heading text-[#081C3A] mb-8 leading-tight">
                Empowering Communities
              </h2>
              <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                At Shakshi Group, we believe our responsibility extends beyond business. The Shakshi Foundation is dedicated to driving positive change in education, healthcare, and environmental sustainability.
              </p>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                By actively engaging with local communities, we strive to build a more equitable and prosperous society for future generations.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src={waterImg} 
                alt="Empowering Communities" 
                className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 border border-black/5 rounded-3xl pointer-events-none"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Initiatives Cards */}
      <section className="py-24 bg-[#FAFAFA] border-t border-[#E5E7EB]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-12 rounded-3xl border border-[#E5E7EB] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 ${item.bg} group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={36} className={item.color} />
                </div>
                <h3 className="text-2xl font-black text-[#081C3A] mb-4">{item.title}</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
