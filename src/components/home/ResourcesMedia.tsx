import { motion } from 'framer-motion';
import { Download, FileText, Newspaper } from 'lucide-react';
import Glass3DCard from '../ui/Glass3DCard';

export default function ResourcesMedia() {
  const downloads = [
    { title: 'Corporate Profile 2026', type: 'PDF (4.2 MB)' },
    { title: 'OEM Manufacturing Catalogue', type: 'PDF (8.5 MB)' },
    { title: 'Acoustics Spec Sheet', type: 'PDF (1.2 MB)' }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#05080f] relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-[30%] left-[-100px] w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Latest News */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[11px] border border-[#D4AF37]/30 px-6 py-2 rounded-full">Latest News & Insights</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-stylish font-bold text-white mb-8 leading-[1.1]">Industry Updates</h2>
              
              <div className="space-y-6">
                {[
                  { date: 'JULY 12, 2026', title: 'Shakshi Group Unveils New Automated Production Line for Automotive OEMs.' },
                  { date: 'JUNE 28, 2026', title: 'CertiPUR-US® Recertification Achieved Across All Major Foam Blends.' },
                  { date: 'MAY 15, 2026', title: 'Sustainability Report: Achieving 98% Scrap Recycling Milestone.' }
                ].map((news, idx) => (
                  <div key={idx} className="h-[120px]">
                    <Glass3DCard tiltIntensity={5} className="h-full w-full group cursor-pointer">
                      <div className="flex gap-6 p-6 rounded-[20px] bg-[#0A101D]/80 backdrop-blur-md border border-white/10 h-full items-center transition-all duration-500">
                        <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-white group-hover:bg-[#D4AF37] group-hover:text-[#0A101D] group-hover:border-[#D4AF37] transition-all duration-300 shadow-sm">
                          <Newspaper size={20} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-white/50 mb-2 tracking-widest uppercase">{news.date}</div>
                          <h4 className="text-white font-bold leading-relaxed group-hover:text-[#D4AF37] transition-colors">{news.title}</h4>
                        </div>
                      </div>
                    </Glass3DCard>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Resources & Downloads */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Glass3DCard tiltIntensity={2} className="h-full w-full group">
              <div className="bg-[#0A101D]/80 backdrop-blur-md rounded-[24px] p-10 md:p-14 text-white shadow-2xl border border-white/10 h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 mb-6">
                    <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[11px] border border-[#D4AF37]/30 px-6 py-2 rounded-full">Resources</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-stylish font-bold mb-10 text-white">Download Center</h2>
                  
                  <div className="space-y-4 mb-10">
                    {downloads.map((doc, idx) => (
                      <div key={idx} className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#D4AF37] hover:bg-white/10 transition-all cursor-pointer group/doc">
                        <div className="flex items-center gap-5">
                          <FileText className="text-white/50 group-hover/doc:text-[#D4AF37] transition-colors" size={24} />
                          <div>
                            <div className="font-bold text-white group-hover/doc:text-[#D4AF37] transition-colors">{doc.title}</div>
                            <div className="text-[11px] font-bold text-white/50 tracking-widest uppercase mt-1">{doc.type}</div>
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/doc:bg-[#D4AF37] group-hover/doc:text-[#0A101D] group-hover/doc:border-[#D4AF37] transition-all shadow-sm">
                          <Download size={18} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <h4 className="font-bold mb-3 text-lg font-stylish">Have specific technical requirements?</h4>
                  <p className="text-white/70 text-sm leading-relaxed mb-8 font-light">Our engineering team is ready to assist with custom formulations and spec sheets.</p>
                  <a href="#contact" className="inline-flex items-center justify-center gap-4 text-[#0A101D] bg-white font-bold text-[13px] tracking-[0.2em] uppercase py-4 px-8 rounded-full hover:bg-[#D4AF37] transition-all duration-300 w-full shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                    REQUEST TECHNICAL DOCS
                  </a>
                </div>
              </div>
            </Glass3DCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
