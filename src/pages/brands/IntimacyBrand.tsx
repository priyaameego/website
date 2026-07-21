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
      
      <div className="py-24 text-center">
        <h2 className="text-3xl font-bold text-[#081C3A]">Intimacy Flagship Page Under Construction</h2>
        <p className="text-[#4B5563] mt-4">We are currently building this luxury spinal comfort experience. Stay tuned!</p>
      </div>
    </div>
  );
}
