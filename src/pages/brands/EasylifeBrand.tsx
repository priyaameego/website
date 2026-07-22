import PageHero from '../../components/PageHero';
import EasylifeCollections from '../../components/brands/easylife/EasylifeCollections';

export default function EasylifeBrand() {
  return (
    <div className="bg-[#FFFFFF] overflow-hidden">
      <PageHero 
        title="Easylife" 
        subtitle="Affordable Premium Comfort for Every Home. Experience the joy of effortless comfort for the whole family."
        backgroundImage="https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2070&auto=format&fit=crop"
      />
      
      <EasylifeCollections />
      

    </div>
  );
}
