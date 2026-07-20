import React from 'react';
import PageHero from '../components/PageHero';
import IndustryCards from '../components/industries/IndustryCards';

export default function Industries() {
  return (
    <div className="bg-[#FFFFFF] overflow-hidden">
      <PageHero 
        title="Industries We Serve" 
        subtitle="Delivering advanced OEM manufacturing and specialized foam solutions across global industrial sectors."
        backgroundImage="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
      />
      
      {/* 
        We will render the following components here:
        <IndustriesOverview />
      */}
      
      <IndustryCards />
      
      {/*
        <OEMSolutions />
        <WhyIndustriesChooseUs />
        <IndustryProcessTimeline />
        <IndustriesCTA />
      */}
      
      <div className="py-24 text-center">
        <h2 className="text-3xl font-bold text-[#081C3A]">Premium Industries Experience Under Construction</h2>
        <p className="text-[#4B5563] mt-4">We are currently building this Fortune 500 OEM experience. Stay tuned!</p>
      </div>
    </div>
  );
}
