import { motion } from 'framer-motion';

export default function OurJourney() {
  const milestones = [
    { year: "1995", event: "Company Founded" },
    { year: "2001", event: "First Automated Facility" },
    { year: "2008", event: "ISO 9001 Certification" },
    { year: "2015", event: "Global Export Expansion" },
    { year: "2025", event: "Zero Waste Initiative Achieved" }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h4 className="text-xs font-black tracking-[0.2em] text-[#E63946] uppercase mb-4">OUR JOURNEY</h4>
          <h2 className="text-4xl font-bold text-[#0f172a] font-heading mb-4">Milestones & History</h2>
        </div>

        <div className="relative border-l-4 border-[#E63946] ml-6 md:ml-12 space-y-12">
          {milestones.map((milestone, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute w-6 h-6 bg-[#E63946] rounded-full -left-[15px] top-1 border-4 border-white shadow-md"></div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E2E8F0]">
                <h3 className="text-2xl font-bold text-[#E63946] mb-2">{milestone.year}</h3>
                <p className="text-lg font-semibold text-[#0f172a]">{milestone.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
