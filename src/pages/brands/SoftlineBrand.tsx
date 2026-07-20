import React from 'react';
import PageHero from '../../components/PageHero';
import SoftlineCollections from '../../components/brands/softline/SoftlineCollections';

export default function SoftlineBrand() {
  return (
    <div className="bg-[#FFFFFF] overflow-hidden">
      <PageHero 
        title="Softline" 
        subtitle="Orthopedic Sleep Solutions. Medically engineered mattresses for optimal spinal alignment and therapeutic comfort."
        backgroundImage="https://images.unsplash.com/photo-1629141065715-0552b71ec911?q=80&w=2070&auto=format&fit=crop"
      />
      
      <SoftlineCollections />
      
      <div className="py-24 text-center">
        <h2 className="text-3xl font-bold text-[#081C3A]">Softline Flagship Page Under Construction</h2>
        <p className="text-[#4B5563] mt-4">We are currently building this premium orthopedic brand experience. Stay tuned!</p>
      </div>
    </div>
  );
}
