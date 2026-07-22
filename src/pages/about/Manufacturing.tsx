import PageLayout from '../../components/PageLayout';
import ManufacturingContent from '../../components/about/ManufacturingContent';
import PremiumCTA from '../../components/home/PremiumCTA';

export default function Manufacturing() {
  return (
    <PageLayout>
      <div className="pt-24">
        <ManufacturingContent />
      </div>
      <PremiumCTA />
    </PageLayout>
  );
}
