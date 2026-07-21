import PageHero from '../../components/PageHero';
import IntimacyCollections from '../../components/brands/intimacy/IntimacyCollections';

export default function IntimacyBrand() {
  return (
    <div className="bg-[#FFFFFF] overflow-hidden">
      <PageHero 
        title="Intimacy" 
        subtitle="Advanced Spinal Comfort. Engineered with precision for perfect sleep and ultimate back support."
        backgroundImage="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057&auto=format&fit=crop"
      />
      
      <IntimacyCollections />
      

    </div>
  );
}
