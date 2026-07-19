import React from 'react';
import PageLayout from '../../components/PageLayout';
import AboutOperations from '../../components/about/AboutOperations';
import PremiumCTA from '../../components/home/PremiumCTA';

export default function Manufacturing() {
  return (
    <PageLayout>
      <div className="pt-24">
        <AboutOperations />
      </div>
      <PremiumCTA />
    </PageLayout>
  );
}
