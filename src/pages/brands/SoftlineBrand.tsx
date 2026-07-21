import PageHero from '../../components/PageHero';
import SoftlineCollections from '../../components/brands/softline/SoftlineCollections';

export default function SoftlineBrand() {
  return (
    <div className="bg-[#FFFFFF] overflow-hidden">
      <PageHero 
        title="Softline" 
        subtitle="Orthopedic Sleep Solutions. Medically engineered mattresses for optimal spinal alignment and therapeutic comfort."
        backgroundImage="https://images.unsplash.com/photo-1629141065715-0552b71ec911?q=80&w=2070&auto=format&fit=crop"
      />
      
      <SoftlineCollections />
      

    </div>
  );
}
