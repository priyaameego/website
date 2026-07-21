import PageLayout from '../../components/PageLayout';
import AboutIntro from '../../components/about/AboutIntro';
import OurJourney from '../../components/about/OurJourney';
import PremiumCTA from '../../components/home/PremiumCTA';

export default function Timeline() {
  return (
    <PageLayout>
      <div className="pt-24">
        <AboutIntro />
        <OurJourney />
      </div>
      <PremiumCTA />
    </PageLayout>
  );
}
