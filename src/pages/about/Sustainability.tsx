import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Recycle, HeartHandshake, ArrowRight, TreePine, Leaf, Sun, Droplets } from 'lucide-react';
import PageLayout from '../../components/PageLayout';
import PageHero from '../../components/PageHero';
import Glass3DCard from '../../components/ui/Glass3DCard';
import bioImg from '../../assets/bio.png';

export default function Sustainability() {
  const initiatives = [
    {
      icon: <Recycle size={32} />,
      title: "Circular Economy",
      desc: "We reclaim manufacturing byproducts and integrate recycled materials to systematically reduce our environmental footprint."
    },
    {
      icon: <TreePine size={32} />,
      title: "Clean Production",
      desc: "Our facilities are optimized for maximum energy efficiency, drastically lowering industrial emissions year over year."
    },
    {
      icon: <HeartHandshake size={32} />,
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

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <PageLayout>
      <PageHero 
        title="Sustainable Future" 
        subtitle="Engineering premium foam solutions while fiercely protecting our planet for generations to come."
        bgImage="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2070&auto=format&fit=crop" 
      />

      {/* 1. Responsible Making */}
      <section ref={containerRef} className="py-32 bg-[#0A101D] overflow-hidden relative">
        {/* Animated Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-green-500/20 blur-sm"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-20 lg:gap-24 items-center relative z-10">
          <motion.div 
            style={{ y: y1 }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#4ade80]"></div>
              <span className="text-[#4ade80] font-bold tracking-[0.3em] uppercase text-[11px]">Responsible Engineering</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-stylish font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Technology for a <br/><span className="text-[#4ade80] italic">Healthier Planet</span>
            </h2>
            
            <p className="text-lg text-white/60 mb-6 leading-relaxed font-light">
              At Shakshi Group, we believe industrial progress and environmental stewardship must coexist. We are transforming manufacturing through a conscience-driven approach to planetary health.
            </p>
            <p className="text-lg text-white/60 leading-relaxed font-light">
              Our sustainability initiatives are seamlessly integrated into our operations, ensuring that every product we engineer contributes to the well-being of the environment and the communities we serve.
            </p>
          </motion.div>

          <motion.div 
            style={{ y: y2, perspective: 1200 }}
            className="w-full lg:w-1/2 relative group"
          >
            <Glass3DCard tiltIntensity={5} glowColor="rgba(74, 222, 128, 0.15)">
              <div className="relative w-full h-[600px]">
                <img 
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop" 
                  alt="Eco-Manufacturing Facility" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D] via-transparent to-transparent"></div>
              </div>
            </Glass3DCard>
          </motion.div>
        </div>
      </section>

      {/* 2. Initiatives */}
      <section className="py-32 bg-[#05080f]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
              >
                <Glass3DCard className="h-full" glowColor="rgba(74, 222, 128, 0.1)">
                  <div className="p-10 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#4ade80] mb-8 group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-stylish font-bold text-white mb-4 group-hover:text-[#4ade80] transition-colors duration-500">{item.title}</h3>
                    <p className="text-white/60 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </Glass3DCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ESG Commitment */}
      <section className="py-32 bg-[#0A101D] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4ade80]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#4ade80]"></div>
              <span className="text-[#4ade80] font-bold tracking-[0.3em] uppercase text-[11px]">Corporate Responsibility</span>
              <div className="h-[1px] w-12 bg-[#4ade80]"></div>
            </div>
            <h2 className="text-5xl md:text-7xl font-stylish font-bold text-white">ESG Commitment</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { val: '40%', label: 'Carbon Reduction', desc: 'Achieved a massive reduction in our carbon footprint by implementing off-grid solar power and heat recovery systems.', icon: <Sun size={24} /> },
              { val: '98%', label: 'Zero Waste to Landfill', desc: 'Our advanced closed-loop recycling processes ensure almost all manufacturing scrap is repurposed.', icon: <Leaf size={24} /> },
              { val: '100%', label: 'Eco-Polyol Usage', desc: 'Transitioning to bio-based polyols, drastically reducing dependence on petrochemicals.', icon: <Droplets size={24} /> }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              >
                <Glass3DCard className="h-full text-center" glowColor="rgba(74, 222, 128, 0.15)">
                  <div className="p-12 flex flex-col items-center h-full">
                    <div className="text-[#4ade80] mb-6 opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500">
                      {stat.icon}
                    </div>
                    <div className="text-6xl font-stylish font-bold text-white mb-6 group-hover:text-[#4ade80] transition-colors duration-500">{stat.val}</div>
                    <h4 className="text-2xl font-bold text-white mb-4">{stat.label}</h4>
                    <p className="text-white/60 text-sm leading-relaxed font-light">{stat.desc}</p>
                  </div>
                </Glass3DCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Timeline & Innovation */}
      <section className="py-32 bg-[#05080f]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-24">
            
            {/* Timeline */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-stylish font-bold text-white mb-16">Our Sustainability Journey</h2>
              <div className="border-l border-white/10 pl-10 space-y-16 relative">
                <motion.div 
                  className="absolute top-0 left-0 w-[2px] bg-gradient-to-b from-[#4ade80] via-[#4ade80]/50 to-transparent -translate-x-[1px]"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                />
                
                {[
                  { year: '2010', title: 'Solar Array Installed', desc: 'Transitioned 10% of primary facility to renewable energy.' },
                  { year: '2015', title: 'Closed-Loop Recycling', desc: 'Introduced state-of-the-art scrap regrinding technology.' },
                  { year: '2020', title: 'CertiPUR-US® Certified', desc: 'Ensuring all foams are free from ozone depleters.' },
                  { year: '2035', title: 'Net-Zero Target', desc: 'Pledged to become entirely carbon neutral across operations.' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: i * 0.15 }}
                    className="relative group"
                  >
                    <div className="absolute -left-[45px] top-1 w-3 h-3 rounded-full bg-[#4ade80] shadow-[0_0_10px_rgba(74,222,128,0.5)] group-hover:scale-150 group-hover:shadow-[0_0_20px_rgba(74,222,128,0.8)] transition-all duration-300"></div>
                    <div className="flex items-center gap-6 mb-3">
                      <span className="text-xl text-[#4ade80] font-stylish font-bold">{item.year}</span>
                      <h4 className="font-bold text-white text-xl">{item.title}</h4>
                    </div>
                    <p className="text-base text-white/60 leading-relaxed font-light">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Innovation */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-stylish font-bold text-white mb-16">Innovation Labs</h2>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Glass3DCard tiltIntensity={5} glowColor="rgba(74, 222, 128, 0.15)">
                  <div className="relative w-full h-[600px]">
                    <img src={bioImg} alt="R&D" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D] via-[#0A101D]/60 to-transparent flex flex-col justify-end p-12 border border-white/10 rounded-2xl">
                      <span className="text-[#4ade80] font-bold tracking-[0.3em] uppercase text-[11px] mb-4">Research & Development</span>
                      <h4 className="text-4xl font-stylish font-bold text-white mb-6">Biodegradable Foams</h4>
                      <p className="text-white/70 leading-relaxed mb-8 max-w-md font-light">Our scientists are actively developing next-generation polyurethane foams that break down naturally, solving the end-of-life disposal crisis.</p>
                      <button className="inline-flex items-center gap-3 text-white font-bold hover:text-[#4ade80] transition-colors text-[11px] uppercase tracking-[0.2em]">
                        Explore the Science <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </Glass3DCard>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Gallery */}
      <section className="py-32 bg-[#0A101D]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-stylish font-bold text-white mb-6">Why Sustainability Matters</h2>
            <p className="text-white/60 text-xl leading-relaxed font-light">As a global OEM leader, our environmental footprint is vast. Adopting sustainable practices is not an option—it is an absolute necessity for the survival of our industry and our planet.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gallery.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
              >
                <Glass3DCard tiltIntensity={15} className="h-[400px]">
                  <img src={img} alt="Gallery" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125 opacity-70 group-hover:opacity-100" />
                </Glass3DCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
