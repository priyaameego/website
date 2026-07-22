import { motion } from 'framer-motion';
import { Download, FileText, Newspaper } from 'lucide-react';

export default function ResourcesMedia() {
  const downloads = [
    { title: 'Corporate Profile 2026', type: 'PDF (4.2 MB)' },
    { title: 'OEM Manufacturing Catalogue', type: 'PDF (8.5 MB)' },
    { title: 'Acoustics Spec Sheet', type: 'PDF (1.2 MB)' }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
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
                <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">Latest News & Insights</span>
                <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-stylish font-bold text-[#1B2430] mb-8">Industry Updates</h2>
              
              <div className="space-y-6">
                {[
                  { date: 'JULY 12, 2026', title: 'Shakshi Group Unveils New Automated Production Line for Automotive OEMs.' },
                  { date: 'JUNE 28, 2026', title: 'CertiPUR-US® Recertification Achieved Across All Major Foam Blends.' },
                  { date: 'MAY 15, 2026', title: 'Sustainability Report: Achieving 98% Scrap Recycling Milestone.' }
                ].map((news, idx) => (
                  <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-white border border-[#E7EBF0] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 cursor-pointer group">
                    <div className="w-12 h-12 bg-[#F7F8FA] rounded-2xl flex items-center justify-center flex-shrink-0 text-[#1B2430] group-hover:bg-[#1B2430] group-hover:text-white transition-colors duration-300">
                      <Newspaper size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-[#4B5563] mb-2 tracking-widest uppercase">{news.date}</div>
                      <h4 className="text-[#1B2430] font-bold leading-relaxed group-hover:text-[#D4AF37] transition-colors">{news.title}</h4>
                    </div>
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
            className="bg-[#F7F8FA] rounded-2xl p-10 md:p-14 text-[#1B2430] shadow-sm border border-[#E7EBF0]"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">Resources</span>
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-stylish font-bold mb-10">Download Center</h2>
            
            <div className="space-y-4 mb-10">
              {downloads.map((doc, idx) => (
                <div key={idx} className="flex items-center justify-between p-6 bg-white border border-[#E7EBF0] rounded-2xl hover:border-[#1B2430] transition-colors cursor-pointer group">
                  <div className="flex items-center gap-5">
                    <FileText className="text-[#4B5563] group-hover:text-[#1B2430] transition-colors" size={24} />
                    <div>
                      <div className="font-bold text-[#1B2430]">{doc.title}</div>
                      <div className="text-[11px] font-bold text-[#4B5563] tracking-widest uppercase mt-1">{doc.type}</div>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#F7F8FA] flex items-center justify-center group-hover:bg-[#1B2430] group-hover:text-white transition-colors">
                    <Download size={18} />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-[#E7EBF0]">
              <h4 className="font-bold mb-3 text-lg">Have specific technical requirements?</h4>
              <p className="text-[#4B5563] text-sm leading-relaxed mb-8">Our engineering team is ready to assist with custom formulations and spec sheets.</p>
              <a href="#contact" className="btn-primary w-full text-center">REQUEST TECHNICAL DOCS</a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
