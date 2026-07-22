import PageLayout from '../../components/PageLayout';
import PageHero from '../../components/PageHero';
import AboutGlobal from '../../components/about/AboutGlobal';
import PremiumCTA from '../../components/home/PremiumCTA';

export default function Distribution() {
  return (
    <PageLayout>
      <PageHero 
        title="Distribution" 
        subtitle="Experience our optimized network of manufacturing plants and 500+ distribution points ensuring rapid delivery."
        backgroundImage="https://images.unsplash.com/photo-1565626423194-e0c1f5413158?q=80&w=2070&auto=format&fit=crop"
      />
      <AboutGlobal />
      <PremiumCTA />
    </PageLayout>
  );
}
