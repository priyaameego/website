import React from 'react';
import PageLayout from '../../components/PageLayout';
import PageHero from '../../components/PageHero';
import { Target, Shield, Zap, Users } from 'lucide-react';

export default function CoreValues() {
  const values = [
    { icon: Target, title: 'Precision First', desc: 'We engineer components with micron-level accuracy, ensuring flawless performance.' },
    { icon: Shield, title: 'Uncompromising Quality', desc: 'Zero defects is our standard. Our quality control processes are globally recognized.' },
    { icon: Zap, title: 'Relentless Innovation', desc: 'We constantly invest in R&D to stay ahead of the industrial technology curve.' },
    { icon: Users, title: 'Collaborative Success', desc: 'We work as an extension of our clients’ teams to solve complex manufacturing challenges.' }
  ];

  return (
    <PageLayout>
      <PageHero 
        title="Our Core Values" 
        subtitle="The fundamental principles that guide our decisions, actions, and commitment to excellence."
        bgImage="/assets/hero_factory_bg.png" 
      />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="bg-[#FFFFFF] p-10 rounded-2xl border border-[#E2E8F0] flex gap-6 hover:border-[#D4AF37]/50 transition-colors group">
              <div className="shrink-0">
                <div className="w-16 h-16 bg-gradient-to-b from-[#FFFFFF] to-[#EEF5FF] border border-[#E2E8F0] rounded-xl flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                  <val.icon size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#081C3A] mb-3">{val.title}</h3>
                <p className="text-[#4B5563] leading-relaxed">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
