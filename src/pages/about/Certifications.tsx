import React from 'react';
import PageLayout from '../../components/PageLayout';
import PageHero from '../../components/PageHero';
import { Award, CheckCircle } from 'lucide-react';

export default function Certifications() {
  const certs = [
    { title: 'ISO 9001:2015', desc: 'Quality Management Systems' },
    { title: 'ISO 14001:2015', desc: 'Environmental Management Systems' },
    { title: 'IATF 16949:2016', desc: 'Automotive Quality Management' },
    { title: 'ISO 45001:2018', desc: 'Occupational Health and Safety' },
  ];

  return (
    <PageLayout>
      <PageHero 
        title="Global Certifications" 
        subtitle="Our commitment to quality, safety, and environmental standards is validated by internationally recognized certifications."
        bgImage="/assets/hero_factory_bg.png" 
      />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certs.map((cert, idx) => (
            <div key={idx} className="bg-[#FFFFFF] p-8 rounded-xl border border-[#E2E8F0] flex items-start gap-6 hover:border-[#D4AF37]/30 transition-colors">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center shrink-0">
                <Award className="text-[#D4AF37]" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#081C3A] mb-2">{cert.title}</h3>
                <p className="text-[#4B5563] mb-4">{cert.desc}</p>
                <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-semibold">
                  <CheckCircle size={16} /> Globally Recognized
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
