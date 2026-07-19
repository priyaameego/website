import React from 'react';
import Hero from '../components/Hero';
import TrustedBrands from '../components/home/TrustedBrands';
import WhatWeDo from '../components/home/WhatWeDo';
import ScienceOfComfort from '../components/home/ScienceOfComfort';
import CompanyOverview from '../components/home/CompanyOverview';
import ManufacturingExcellence from '../components/home/ManufacturingExcellence';
import InnovationRND from '../components/home/InnovationRND';
import OurBrands from '../components/home/OurBrands';
import IndustryApplications from '../components/home/IndustryApplications';
import QualitySustainability from '../components/home/QualitySustainability';
import GlobalNetwork from '../components/home/GlobalNetwork';
import ResourcesMedia from '../components/home/ResourcesMedia';
import PremiumCTA from '../components/home/PremiumCTA';

export default function Home() {
  return (
    <div className="bg-[#FFFFFF] overflow-hidden">
      <Hero />
      <TrustedBrands />
      <WhatWeDo />
      <ScienceOfComfort />
      <CompanyOverview />
      <ManufacturingExcellence />
      <InnovationRND />
      <OurBrands />
      <IndustryApplications />
      <QualitySustainability />
      <GlobalNetwork />
      <ResourcesMedia />
      <PremiumCTA />
    </div>
  );
}
