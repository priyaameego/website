import React from 'react';
import PageLayout from '../../components/PageLayout';
import AboutLeadership from '../../components/about/AboutLeadership';
import PremiumCTA from '../../components/home/PremiumCTA';

export default function Founder() {
  return (
    <PageLayout>
      <div className="pt-24">
        <AboutLeadership />
      </div>
      <PremiumCTA />
    </PageLayout>
  );
}
