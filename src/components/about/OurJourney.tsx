import { motion } from 'framer-motion';

export default function OurJourney() {
  const milestones = [
    { 
      title: "Foundation", 
      description: "Shakshi Coir Products Pvt. Ltd. was founded in Lucknow, Uttar Pradesh, marking the beginning of our journey in advanced foam manufacturing." 
    },
    { 
      title: "Brand Launch", 
      description: "Launched our flagship Shakshi brand, establishing a benchmark for industrial resilience and technical foam applications in Northern India." 
    },
    { 
      title: "Expansion", 
      description: "Opened a second state-of-the-art manufacturing facility in Kanpur, expanding our highly-regulated dealer network to 500+ strategic touchpoints." 
    },
    { 
      title: "Multi-Brand Strategy", 
      description: "Diversified our portfolio by launching the Easylife and Softline entities to serve specialized residential and medical market segments." 
    },
    { 
      title: "Today", 
      description: "Shakshi Group stands as a premier B2B industrial manufacturer with 30+ engineered products, serving the hospitality, healthcare, and automotive sectors." 
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        <div className="text-center mb-24 max-w-3xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">Corporate History</span>
            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-stylish font-bold text-[#1B2430] mb-6"
          >
            Milestones of Growth
          </motion.h2>
          <div className="w-12 h-[2px] bg-[#1B2430] mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-[#E7EBF0]"></div>
          
          <div className="space-y-16 md:space-y-0">
            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between w-full md:pb-24 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-[45%]"></div>
                  
                  {/* Central Node */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-[3px] border-[#1B2430] rounded-full z-10"></div>
                  
                  {/* Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="w-full md:w-[45%]"
                  >
                    <div className="pl-6 md:pl-0 border-l md:border-none border-[#E7EBF0] relative group">
                      <div className="md:hidden absolute left-[-4px] top-2 w-2 h-2 bg-[#1B2430] rounded-full"></div>
                      
                      <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest mb-3">
                        Phase {idx + 1}
                      </div>
                      <h3 className="text-2xl font-bold font-stylish text-[#1B2430] mb-4 group-hover:text-[#D4AF37] transition-colors">{milestone.title}</h3>
                      <p className="text-[#4B5563] text-base leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                  
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}
