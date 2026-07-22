import { motion } from 'framer-motion';
import { Recycle, HeartHandshake, ArrowRight, TreePine } from 'lucide-react';
import PageLayout from '../../components/PageLayout';
import PageHero from '../../components/PageHero';

export default function Sustainability() {
  const initiatives = [
    {
      icon: <Recycle size={28} className="text-[#081C3A]" />,
      title: "Circular Economy",
      desc: "We reclaim manufacturing byproducts and integrate recycled materials to systematically reduce our environmental footprint."
    },
    {
      icon: <TreePine size={28} className="text-[#081C3A]" />,
      title: "Clean Production",
      desc: "Our facilities are optimized for maximum energy efficiency, drastically lowering industrial emissions year over year."
    },
    {
      icon: <HeartHandshake size={28} className="text-[#081C3A]" />,
      title: "Social Impact",
      desc: "We actively invest in local communities, driving positive social change through strategic employment and development programs."
    }
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop', 
    'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2127&auto=format&fit=crop', 
    'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop', 
    'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop'
  ];

  return (
    <PageLayout>
      <PageHero 
        title="Sustainable Future" 
        subtitle="Engineering premium foam solutions while fiercely protecting our planet for generations to come."
        bgImage="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2070&auto=format&fit=crop" 
      />

      {/* 1. Responsible Making */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[#081C3A] font-bold tracking-widest uppercase text-[11px]">Responsible Engineering</span>
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1B2430] mb-8 leading-tight">
              Technology for a <br/>Healthier Planet
            </h2>
            
            <p className="text-lg text-[#4B5563] mb-6 leading-relaxed">
              At Shakshi Group, we believe industrial progress and environmental stewardship must coexist. We are transforming manufacturing through a conscience-driven approach to planetary health.
            </p>
            <p className="text-lg text-[#4B5563] leading-relaxed">
              Our sustainability initiatives are seamlessly integrated into our operations, ensuring that every product we engineer contributes to the well-being of the environment and the communities we serve.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="absolute inset-0 bg-[#081C3A] translate-x-4 translate-y-4 rounded-sm -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <img 
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop" 
              alt="Eco-Manufacturing Facility" 
              className="relative z-10 w-full h-[500px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Initiatives */}
      <section className="py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="premium-card p-10 flex flex-col"
              >
                <div className="w-16 h-16 border border-[#E7EBF0] flex items-center justify-center mb-8 bg-[#F7F8FA]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1B2430] mb-4">{item.title}</h3>
                <p className="text-[#4B5563] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ESG Commitment */}
      <section className="py-24 md:py-32 bg-[#081C3A]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
              <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-[11px]">Corporate Responsibility</span>
              <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl text-white">ESG Commitment</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { val: '40%', label: 'Carbon Reduction', desc: 'Achieved a massive reduction in our carbon footprint by implementing off-grid solar power and heat recovery systems.' },
              { val: '98%', label: 'Zero Waste to Landfill', desc: 'Our advanced closed-loop recycling processes ensure almost all manufacturing scrap is repurposed.' },
              { val: '100%', label: 'Eco-Polyol Usage', desc: 'Transitioning to bio-based polyols, drastically reducing dependence on petrochemicals.' }
            ].map((stat, idx) => (
              <div key={idx} className="border border-white/20 p-10 hover:border-[#D4AF37]/50 transition-colors bg-white/5">
                <div className="text-5xl font-bold text-white mb-6 font-heading">{stat.val}</div>
                <h4 className="text-xl font-bold text-white mb-4">{stat.label}</h4>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Timeline & Innovation */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-20">
            
            {/* Timeline */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl text-[#1B2430] mb-12">Our Sustainability Journey</h2>
              <div className="border-l border-[#E7EBF0] pl-8 space-y-12">
                {[
                  { year: '2010', title: 'Solar Array Installed', desc: 'Transitioned 10% of primary facility to renewable energy.' },
                  { year: '2015', title: 'Closed-Loop Recycling', desc: 'Introduced state-of-the-art scrap regrinding technology.' },
                  { year: '2020', title: 'CertiPUR-US® Certified', desc: 'Ensuring all foams are free from ozone depleters.' },
                  { year: '2035', title: 'Net-Zero Target', desc: 'Pledged to become entirely carbon neutral across operations.' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[37px] top-1 w-2 h-2 rounded-full bg-[#D4AF37] ring-4 ring-white"></div>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-sm text-[#D4AF37] font-bold">{item.year}</span>
                      <h4 className="font-bold text-[#1B2430]">{item.title}</h4>
                    </div>
                    <p className="text-sm text-[#4B5563] leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Innovation */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl text-[#1B2430] mb-12">Innovation Labs</h2>
              <div className="relative group overflow-hidden rounded-sm">
                <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" alt="R&D" className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0" />
                <div className="absolute inset-0 bg-[#081C3A]/60 flex flex-col justify-end p-10">
                  <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-[10px] mb-2">Research & Development</span>
                  <h4 className="text-3xl text-white mb-4">Biodegradable Foams</h4>
                  <p className="text-white/80 leading-relaxed mb-8 max-w-md">Our scientists are actively developing next-generation polyurethane foams that break down naturally, solving the end-of-life disposal crisis.</p>
                  <a href="#" className="inline-flex items-center gap-2 text-white font-bold hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wider">
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Gallery */}
      <section className="py-24 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl text-[#1B2430] mb-6">Why Sustainability Matters</h2>
            <p className="text-[#4B5563] text-lg leading-relaxed">As a global OEM leader, our environmental footprint is vast. Adopting sustainable practices is not an option—it is an absolute necessity for the survival of our industry and our planet.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="overflow-hidden rounded-sm h-[300px]"
              >
                <img src={img} alt="Gallery" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110 grayscale hover:grayscale-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
