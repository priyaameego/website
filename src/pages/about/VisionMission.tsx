import PageLayout from '../../components/PageLayout';
import PageHero from '../../components/PageHero';
import AboutCore from '../../components/about/AboutCore';
import PremiumCTA from '../../components/home/PremiumCTA';

export default function VisionMission() {
  return (
    <PageLayout>
      <PageHero 
        title="Vision & Mission" 
        subtitle="Our core values and the vision that drives us. Engineering premium comfort for every Indian."
        backgroundImage="https://images.unsplash.com/photo-1565626423194-e0c1f5413158?q=80&w=2070&auto=format&fit=crop"
      />
      <AboutCore />
      <PremiumCTA />
    </PageLayout>
  );
}
