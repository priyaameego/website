import { motion } from 'framer-motion';
import { Download, FileText, Newspaper } from 'lucide-react';

export default function ResourcesMedia() {
  const downloads = [
    { title: 'Corporate Profile 2026', type: 'PDF (4.2 MB)' },
    { title: 'OEM Manufacturing Catalogue', type: 'PDF (8.5 MB)' },
    { title: 'Acoustics Spec Sheet', type: 'PDF (1.2 MB)' }
  ];

  return (
    <section className="py-24 bg-[#FFFFFF]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Latest News */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block border border-[#081C3A]/20 rounded-full px-6 py-2 bg-white">
              <span className="text-[#081C3A] font-bold tracking-widest uppercase text-xs">Latest News & Insights</span>
            </div>
            <h2 className="text-4xl font-bold font-heading text-[#081C3A]">Industry Updates</h2>
            
            <div className="space-y-6">
              {[
                { date: 'JULY 12, 2026', title: 'Shakshi Group Unveils New Automated Production Line for Automotive OEMs.' },
                { date: 'JUNE 28, 2026', title: 'CertiPUR-US® Recertification Achieved Across All Major Foam Blends.' },
                { date: 'MAY 15, 2026', title: 'Sustainability Report: Achieving 98% Scrap Recycling Milestone.' }
              ].map((news, idx) => (
                <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-[#F4F7FA] border border-[#E2E8F0] hover:shadow-md transition-shadow cursor-pointer">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-[#FF6B00]">
                    <Newspaper size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#FF6B00] mb-1">{news.date}</div>
                    <h4 className="text-[#081C3A] font-bold leading-snug hover:text-[#FF6B00] transition-colors">{news.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Resources & Downloads */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#081C3A] rounded-3xl p-10 md:p-12 text-white shadow-xl"
          >
            <div className="inline-block border border-[#D4AF37]/40 rounded-full px-6 py-2 bg-[#D4AF37]/10 mb-8">
              <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs">Resources</span>
            </div>
            <h2 className="text-3xl font-bold font-heading mb-8">Download Center</h2>
            
            <div className="space-y-4 mb-8">
              {downloads.map((doc, idx) => (
                <div key={idx} className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <FileText className="text-[#D4AF37]" size={24} />
                    <div>
                      <div className="font-bold">{doc.title}</div>
                      <div className="text-xs text-gray-400">{doc.type}</div>
                    </div>
                  </div>
                  <Download className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10">
              <h4 className="font-bold mb-2">Have specific technical requirements?</h4>
              <p className="text-gray-400 text-sm mb-6">Our engineering team is ready to assist with custom formulations and spec sheets.</p>
              <a href="#contact" className="btn-primary w-full text-center">REQUEST TECHNICAL DOCS</a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
