import PageHero from '../../components/PageHero';
import ProductCollections from '../../components/brands/shakshi/ProductCollections';

export default function ShakshiBrand() {
  return (
    <div className="bg-[#FFFFFF] overflow-hidden">
      <PageHero 
        title="Shakshi" 
        subtitle="The Custodian of Comfort. Experience premium luxury and advanced foam technology engineered for perfect sleep."
        backgroundImage="https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2070&auto=format&fit=crop"
      />
      
      {/* 
        We will render the following components here:
        <WhyChooseShakshi />
      */}
      
      <ProductCollections />

      {/*
        <ComfortTechnology />
        <ManufacturingAndQuality />
        <Applications />
        <ProductGallery />
        <BrandStatistics />
        <BrandCTA />
      */}
      

    </div>
  );
}
