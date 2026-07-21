import PageLayout from '../../components/PageLayout';
import AboutGlobal from '../../components/about/AboutGlobal';
import PremiumCTA from '../../components/home/PremiumCTA';

export default function Distribution() {
  return (
    <PageLayout>
      <div className="pt-24">
        <AboutGlobal />
      </div>
      <PremiumCTA />
    </PageLayout>
  );
}
