import Hero from '../components/Hero';

import WhatWeDo from '../components/home/WhatWeDo';
import ScienceOfComfort from '../components/home/ScienceOfComfort';
import OurCapabilities from '../components/home/OurCapabilities';
import CompanyOverview from '../components/home/CompanyOverview';
import ManufacturingExcellence from '../components/home/ManufacturingExcellence';
import InnovationRND from '../components/home/InnovationRND';
import OurBrands from '../components/home/OurBrands';
import IndustryApplications from '../components/home/IndustryApplications';
import QualitySustainability from '../components/home/QualitySustainability';
import ResourcesMedia from '../components/home/ResourcesMedia';

import TrustedDealerNetwork from '../components/home/TrustedDealerNetwork';
import WhyPartnerWithUs from '../components/home/WhyPartnerWithUs';
import ManufacturingHighlights from '../components/home/ManufacturingHighlights';
import FinalPartnership from '../components/home/FinalPartnership';

import PremiumCTA from '../components/home/PremiumCTA';

export default function Home() {
  return (
    <div className="bg-[#FFFFFF] overflow-hidden">
      <Hero />

      <WhatWeDo />
      <ScienceOfComfort />
      <OurCapabilities />
      <CompanyOverview />
      <ManufacturingExcellence />
      <InnovationRND />
      <OurBrands />
      <IndustryApplications />
      <QualitySustainability />
      <ResourcesMedia />
      
      {/* New Premium Sections */}
      <TrustedDealerNetwork />
      <WhyPartnerWithUs />
      <ManufacturingHighlights />
      <FinalPartnership />

      <PremiumCTA />
    </div>
  );
}
