import React from 'react';
import PageLayout from '../../components/PageLayout';
import PageHero from '../../components/PageHero';

export default function Infrastructure() {
  return (
    <PageLayout>
      <PageHero 
        title="World-Class Infrastructure" 
        subtitle="Sprawling manufacturing plants equipped with the latest smart factory technologies."
        bgImage="/assets/robotic_assembly.png" 
      />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full py-20">
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#081C3A] mb-6 font-heading">Smart Factory Integration</h2>
          <p className="text-[#4B5563] leading-relaxed max-w-3xl">
            Our infrastructure is built on the principles of Industry 4.0. With interconnected machines, real-time data analytics, and predictive maintenance, our plants operate at peak efficiency with minimal downtime.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="group relative aspect-video bg-[#FFFFFF] rounded-xl overflow-hidden border border-[#E2E8F0] cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-6">
                <span className="text-[#081C3A] font-bold tracking-wide">Facility Area {i}</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold uppercase tracking-wider group-hover:scale-110 transition-transform duration-700">
                Gallery Image
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </PageLayout>
  );
}
