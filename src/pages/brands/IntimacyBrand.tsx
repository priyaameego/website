import PageHero from '../../components/PageHero';
import IntimacyCollections from '../../components/brands/intimacy/IntimacyCollections';

export default function IntimacyBrand() {
  return (
    <div className="bg-[#FFFFFF] overflow-hidden">
      <PageHero 
        title="Intimacy" 
        subtitle="Advanced Spinal Comfort. Engineered with precision for perfect sleep and ultimate back support."
        backgroundImage="https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2070&auto=format&fit=crop"
      />
      
      <IntimacyCollections />
      

    </div>
  );
}
