import PageHero from '../../components/PageHero';
import SoftlineCollections from '../../components/brands/softline/SoftlineCollections';

export default function SoftlineBrand() {
  return (
    <div className="bg-[#FFFFFF] overflow-hidden">
      <PageHero 
        title="Softline" 
        subtitle="Orthopedic Sleep Solutions. Medically engineered mattresses for optimal spinal alignment and therapeutic comfort."
        backgroundImage="https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2070&auto=format&fit=crop"
      />
      
      <div className="bg-[#081C3A] py-8 border-y border-[#D4AF37]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent opacity-50"></div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left relative z-10">
          <div>
            <span className="inline-block border border-[#D4AF37]/30 rounded-full px-4 py-1 bg-[#D4AF37]/10 text-[#D4AF37] font-bold tracking-widest uppercase text-[10px] mb-2">A Brand of Shakshi Group</span>
            <h3 className="text-white text-xl font-heading tracking-wide">Part of the Shakshi Group Family</h3>
          </div>
          <a href="https://softlinemattress.com/" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B08D2D] text-white rounded-xl font-bold tracking-wide hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all">
            Visit Official Softline Website
          </a>
        </div>
      </div>

      <SoftlineCollections />
      

    </div>
  );
}
