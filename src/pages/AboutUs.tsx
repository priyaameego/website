import React from 'react';
import AboutIntro from '../components/about/AboutIntro';
import AboutLeadership from '../components/about/AboutLeadership';
import AboutCore from '../components/about/AboutCore';
import AboutOperations from '../components/about/AboutOperations';
import AboutGlobal from '../components/about/AboutGlobal';
import AboutBrands from '../components/about/AboutBrands';
import PremiumCTA from '../components/home/PremiumCTA';

export default function AboutUs() {
  return (
    <div className="bg-[#FFFFFF] overflow-hidden">
      <AboutIntro />
      <AboutCore />
      <AboutLeadership />
      <AboutOperations />
      <AboutGlobal />
      <AboutBrands />
      <PremiumCTA />
    </div>
  );
}
