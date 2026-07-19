import React from 'react';
import PageLayout from '../../components/PageLayout';
import AboutIntro from '../../components/about/AboutIntro';
import AboutCore from '../../components/about/AboutCore';
import PremiumCTA from '../../components/home/PremiumCTA';

export default function Timeline() {
  return (
    <PageLayout>
      <div className="pt-24">
        <AboutIntro />
        {/* We reuse AboutCore here to display the timeline/journey at the bottom */}
        <AboutCore />
      </div>
      <PremiumCTA />
    </PageLayout>
  );
}
