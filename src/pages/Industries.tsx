import PageHero from '../components/PageHero';
import IndustryCards from '../components/industries/IndustryCards';

import WhyChooseShakshi from '../components/industries/WhyChooseShakshi';

export default function Industries() {
  return (
    <div className="bg-[#FFFFFF] overflow-hidden">
      <PageHero 
        title="Industries We Serve" 
        subtitle="Delivering advanced OEM manufacturing and specialized foam solutions across global industrial sectors."
        backgroundImage="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2070&auto=format&fit=crop"
      />
      
      {/* 
        We will render the following components here:
        <IndustriesOverview />
      */}
      
      <IndustryCards />
      <WhyChooseShakshi />
      
      {/*
        <OEMSolutions />
      */}
      
      <div className="py-24 text-center">
        <h2 className="text-3xl font-bold text-[#0f172a]">Premium Industries Experience Under Construction</h2>
        <p className="text-[#64748b] mt-4">We are currently building this Fortune 500 OEM experience. Stay tuned!</p>
      </div>
    </div>
  );
}
