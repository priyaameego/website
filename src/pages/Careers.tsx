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
        backgroundImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
      />
      <WhyJoin />
      <CompanyStats />
      
      <CareersCTA />
    </div>
  );
}
