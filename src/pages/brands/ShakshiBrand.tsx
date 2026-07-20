import React from 'react';
import PageHero from '../../components/PageHero';
import ProductCollections from '../../components/brands/shakshi/ProductCollections';

export default function ShakshiBrand() {
  return (
    <div className="bg-[#FFFFFF] overflow-hidden">
      <PageHero 
        title="Shakshi" 
        subtitle="The Custodian of Comfort. Experience premium luxury and advanced foam technology engineered for perfect sleep."
        backgroundImage="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop"
      />
      
      {/* 
        We will render the following components here:
        <WhyChooseShakshi />
      */}
      
      <ProductCollections />

      {/*
        <ComfortTechnology />
        <ManufacturingAndQuality />
        <Applications />
        <ProductGallery />
        <BrandStatistics />
        <BrandCTA />
      */}
      
      <div className="py-24 text-center">
        <h2 className="text-3xl font-bold text-[#081C3A]">Shakshi Flagship Page Under Construction</h2>
        <p className="text-[#4B5563] mt-4">We are currently building this Fortune 500 premium brand experience. Stay tuned!</p>
      </div>
    </div>
  );
}
