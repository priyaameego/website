import PageLayout from '../../components/PageLayout';
import AboutCore from '../../components/about/AboutCore';
import PremiumCTA from '../../components/home/PremiumCTA';

export default function VisionMission() {
  return (
    <PageLayout>
      <div className="pt-24">
        <AboutCore />
      </div>
      <PremiumCTA />
    </PageLayout>
  );
}
