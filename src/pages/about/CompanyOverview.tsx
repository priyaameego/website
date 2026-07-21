import PageLayout from '../../components/PageLayout';
import PageHero from '../../components/PageHero';

export default function CompanyOverview() {
  return (
    <PageLayout>
      <PageHero 
        title="Company Overview" 
        subtitle="Discover our legacy of precision engineering and our commitment to providing world-class OEM solutions for global industries."
        bgImage="/assets/hero_factory_bg.png" 
      />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#081C3A] mb-6 font-heading">
              Engineering the Future <br/>
              <span className="text-[#D4AF37]">With Uncompromised Quality</span>
            </h2>
            <p className="text-[#4B5563] mb-6 leading-relaxed">
              For over four decades, Shakshi Group has been at the forefront of industrial manufacturing, providing cutting-edge solutions for the most demanding global Original Equipment Manufacturers (OEMs). 
            </p>
            <p className="text-[#4B5563] mb-8 leading-relaxed">
              Our commitment goes beyond simply manufacturing parts; we are a strategic partner in engineering excellence. With state-of-the-art facilities and a relentless focus on innovation, we deliver unparalleled value across the entire supply chain.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#FFFFFF] p-6 rounded-xl border border-[#E2E8F0]">
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">45+</div>
                <div className="text-sm text-[#4B5563] font-semibold uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="bg-[#FFFFFF] p-6 rounded-xl border border-[#E2E8F0]">
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">120+</div>
                <div className="text-sm text-[#4B5563] font-semibold uppercase tracking-wider">Global Partners</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-[#D4AF37] rounded-2xl blur-xl opacity-20 translate-x-4 translate-y-4"></div>
            <img 
              src="/assets/cnc_precision.png" 
              alt="Precision Engineering" 
              className="relative z-10 w-full h-auto rounded-2xl border border-[#E2E8F0] shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
