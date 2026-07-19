import React from 'react';
import PageLayout from '../../components/PageLayout';
import PageHero from '../../components/PageHero';
import { Briefcase, Mail } from 'lucide-react';

export default function Leadership() {
  const leaders = [
    { name: 'Michael Chen', role: 'Chief Executive Officer', exp: '25 Years Exp.' },
    { name: 'Sarah Jenkins', role: 'Chief Operations Officer', exp: '20 Years Exp.' },
    { name: 'David Rossi', role: 'Chief Technology Officer', exp: '18 Years Exp.' },
    { name: 'Elena Rostova', role: 'VP of Global Sales', exp: '15 Years Exp.' },
  ];

  return (
    <PageLayout>
      <PageHero 
        title="Leadership Team" 
        subtitle="Meet the industry veterans driving our vision for global manufacturing excellence."
        bgImage="/assets/hero_factory_bg.png" 
      />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, idx) => (
            <div key={idx} className="group relative bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#E2E8F0] hover:border-[#D4AF37]/50 transition-all duration-300 shadow-xl">
              <div className="aspect-[4/5] bg-gradient-to-b from-[#FFFFFF] to-[#EEF5FF] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold opacity-50">PORTRAIT</div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d2d] via-transparent to-transparent opacity-80"></div>
                
                {/* Social Actions (show on hover) */}
                <div className="absolute top-4 right-4 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-2">
                  <button className="w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-[#081C3A] hover:bg-[#D4AF37] transition-colors">
                    <Briefcase size={18} />
                  </button>
                  <button className="w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-[#081C3A] hover:bg-[#D4AF37] transition-colors">
                    <Mail size={18} />
                  </button>
                </div>
              </div>
              
              <div className="p-6 relative z-10 -mt-10 bg-gradient-to-t from-[#1a1d2d] to-transparent">
                <h3 className="text-xl font-bold text-[#081C3A] mb-1">{leader.name}</h3>
                <p className="text-[#D4AF37] text-sm font-bold uppercase tracking-wider mb-3">{leader.role}</p>
                <div className="text-[#4B5563] text-sm">{leader.exp}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
