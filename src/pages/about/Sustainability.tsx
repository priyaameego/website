import { motion } from 'framer-motion';
import { Leaf, Recycle, HeartHandshake, ArrowRight, TreePine, } from 'lucide-react';
import sciImg from '../../assets/sci.png';
import solarImg from '../../assets/solar.jpeg';
import PageLayout from '../../components/PageLayout';
import PageHero from '../../components/PageHero';

export default function Sustainability() {
  const initiatives = [
    {
      icon: <Recycle size={32} className="text-[#34D399]" />,
      title: "Recycling",
      desc: "We recycle manufacturing waste and use recycled materials wherever possible to minimize environmental impact."
    },
    {
      icon: <TreePine size={32} className="text-[#34D399]" />,
      title: "Green Manufacturing",
      desc: "Our production processes are optimized for energy efficiency and minimal emissions."
    },
    {
      icon: <HeartHandshake size={32} className="text-[#FBBF24]" />,
      title: "Community",
      desc: "We engage with local communities to create positive social impact through employment and development initiatives."
    }
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <PageLayout>
      <PageHero 
        title="Sustainable Future" 
        subtitle="Engineering premium foam solutions while fiercely protecting our planet for generations to come."
        bgImage="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop" 
      />

      {/* 1. Preserved: Responsible Making */}
      <section id="responsible-making" className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#f13a3a] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                Responsible Making
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-8 font-heading">
                Technology for a Healthier Planet
              </h2>
              <p className="text-[#64748b] text-lg leading-relaxed mb-6">
                Everything on Earth is connected. At Shakshi Group, we believe in a world where we can make a real difference in the planet's health and lives of others.
              </p>
              <p className="text-[#64748b] text-lg leading-relaxed">
                Our sustainability and social responsibility initiatives are part of a larger conscience-driven approach to the well-being of the environment, people, and communities we engage with.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-green-500 rounded-3xl blur-[80px] opacity-20 -translate-x-10"></div>
              <img 
                src={solarImg} 
                alt="Eco-Manufacturing Facility" 
                className="relative z-10 w-full rounded-3xl shadow-2xl border border-[#E2E8F0]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Preserved: Sustainability Initiatives */}
      <section id="initiatives" className="py-24 bg-[#F4F7FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 border border-[#E2E8F0] hover:-translate-y-2 transition-transform duration-300 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#EEF5FF] flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-4">{item.title}</h3>
                <p className="text-[#64748b] leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ESG Commitment & Green Initiatives */}
      <section id="esg-commitment" className="py-24 bg-[#081C3A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <span className="text-white font-bold tracking-widest uppercase text-xs mb-4 block">Our Pledge</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-16 text-white">ESG Commitment</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="border border-white/10 rounded-2xl p-8 bg-[#171a29]">
              <div className="text-5xl font-bold text-white mb-4">40%</div>
              <h4 className="text-xl font-bold text-white mb-2">Carbon Reduction</h4>
              <p className="text-white text-sm">Achieved a massive reduction in our carbon footprint by implementing off-grid solar power and heat recovery systems.</p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-[#171a29]">
              <div className="text-5xl font-bold text-white mb-4">98%</div>
              <h4 className="text-xl font-bold text-white mb-2">Zero Waste to Landfill</h4>
              <p className="text-white text-sm">Our advanced closed-loop recycling processes ensure almost all manufacturing scrap is repurposed into new products.</p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-[#171a29]">
              <div className="text-5xl font-bold text-white mb-4">100%</div>
              <h4 className="text-xl font-bold text-white mb-2">Eco-Polyol Usage</h4>
              <p className="text-white text-sm">We are rapidly transitioning to bio-based and renewable polyols, drastically reducing dependence on petrochemicals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Journey Timeline & Innovation */}
      <section id="journey" className="py-24 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Timeline */}
            <div>
              <h2 className="text-3xl font-bold text-[#0f172a] font-heading mb-10">Our Sustainability Journey</h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#E2E8F0] before:to-transparent">
                {[
                  { year: '2010', title: 'First Solar Array Installed', desc: 'Transitioned 10% of our primary facility to renewable energy.' },
                  { year: '2015', title: 'Closed-Loop Recycling', desc: 'Introduced state-of-the-art scrap regrinding technology.' },
                  { year: '2020', title: 'CertiPUR-US® Certified', desc: 'Ensuring all foams are free from ozone depleters.' },
                  { year: '2025', title: 'Net-Zero Roadmap', desc: 'Pledged to become entirely carbon neutral by 2035.' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#34D399] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <Leaf size={16} />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#F4F7FA] p-6 rounded border border-[#E2E8F0]">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-[#0f172a]">{item.title}</h4>
                        <span className="text-sm text-[#D4AF37] font-bold">{item.year}</span>
                      </div>
                      <p className="text-sm text-[#64748b]">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Innovation */}
            <div>
              <h2 className="text-3xl font-bold text-[#0f172a] font-heading mb-10">Innovation for Sustainability</h2>
              <div className="rounded-3xl overflow-hidden relative shadow-2xl group">
                <img src={sciImg} alt="R&D" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A] via-[#081C3A]/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10">
                  <h4 className="text-2xl font-bold text-white mb-4">Biodegradable Foams</h4>
                  <p className="text-gray-300 leading-relaxed mb-6">Our R&D scientists are actively developing next-generation polyurethane foams that break down naturally, solving the end-of-life disposal crisis.</p>
                  <a href="#" className="flex items-center gap-2 text-[#34D399] font-bold hover:text-white transition-colors">
                    Learn about our labs <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Sustainability Gallery & Why It Matters */}
      <section id="gallery" className="py-24 bg-[#06152D] text-white relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white font-heading mb-6">Why Sustainability Matters</h2>
            <p className="text-gray-400 text-lg">As a global OEM leader, our environmental footprint is vast. We recognize that adopting sustainable practices isn't just an option—it's an absolute necessity for the survival of our industry and our planet.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {gallery.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="overflow-hidden rounded-2xl h-64"
              >
                <img src={img} alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 hover:scale-110 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>



        </div>
      </section>
    </PageLayout>
  );
}
