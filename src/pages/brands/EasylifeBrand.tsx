import React from 'react';
import PageHero from '../../components/PageHero';
import EasylifeCollections from '../../components/brands/easylife/EasylifeCollections';

export default function EasylifeBrand() {
  return (
    <div className="bg-[#FFFFFF] overflow-hidden">
      <PageHero 
        title="Easylife" 
        subtitle="Affordable Premium Comfort for Every Home. Experience the joy of effortless comfort for the whole family."
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
      />
      
      <EasylifeCollections />
      
      <div className="py-24 text-center">
        <h2 className="text-3xl font-bold text-[#081C3A]">Easylife Flagship Page Under Construction</h2>
        <p className="text-[#4B5563] mt-4">We are currently building this premium family comfort experience. Stay tuned!</p>
      </div>
    </div>
  );
}
