import PageHero from '../components/PageHero';
import WhyJoin from '../components/careers/WhyJoin';
import CompanyStats from '../components/careers/CompanyStats';
import CareersCTA from '../components/careers/CareersCTA';

export default function Careers() {
  return (
    <div className="bg-[#FFFFFF] overflow-hidden">
      <PageHero 
        title="Careers at Shakshi Group" 
        subtitle="Join the leading force in OEM manufacturing. We are building the future of industrial production, and we want you to be a part of it."
        backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
      />
      <WhyJoin />
      <CompanyStats />
      
      <div className="py-24 text-center">
        <h2 className="text-3xl font-bold text-[#081C3A]">Careers Page Under Construction</h2>
        <p className="text-[#4B5563] mt-4">We are currently building this premium experience. Stay tuned!</p>
      </div>
      <CareersCTA />
    </div>
  );
}
