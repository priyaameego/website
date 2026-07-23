import { motion } from 'framer-motion';

export default function AboutLeadership() {
  const leaders = [
    {
      name: 'Ramesh Gupta',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Operations Officer',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Vikram Singh',
      role: 'Head of R&D',
      image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <>
      <section id="founder" className="py-24 md:py-32 bg-[#1B2430]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute inset-0 bg-[#D4AF37] rounded-3xl shadow-sm -z-10 transition-transform duration-500 -translate-x-4 -translate-y-4 group-hover:-translate-x-6 group-hover:-translate-y-6"></div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-premium">
                <img 
                  src="https://shakshigroup.com/cdn/shop/t/2/assets/sg-founder.png?v=51194021366701148041777563151" 
                  alt="Founder" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2430] via-[#1B2430]/20 to-transparent opacity-80"></div>
                <div className="absolute bottom-10 left-10">
                  <h3 className="text-3xl font-bold font-stylish text-white mb-2">R.K. Aggarwal</h3>
                  <p className="text-[#D4AF37] font-bold tracking-widest uppercase text-[11px]">Founder & Chairman</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="mb-10 text-[#D4AF37]">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-stylish text-white mb-8 leading-tight">
                Our vision is to shape a future where <span className="italic font-light">quality and comfort</span> intersect seamlessly.
              </h2>
              <p className="text-[#F7F8FA]/80 text-lg leading-relaxed mb-6">
                When I founded Shakshi Group, the goal was simple: to bring uncompromising quality to the foam manufacturing industry. Today, that vision has expanded across global markets, driven by our relentless pursuit of innovation and excellence.
              </p>
              <p className="text-[#F7F8FA]/80 text-lg leading-relaxed">
                We believe in building lasting partnerships with our clients, investing heavily in our people and technology to ensure that every product leaving our facilities represents the absolute pinnacle of engineering.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="leadership" className="py-24 md:py-32 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[#1B2430] font-bold tracking-[0.2em] uppercase text-[11px]">Our People</span>
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B2430] font-stylish mb-6">Leadership <span className="italic font-light">Team</span></h2>
            <p className="text-[#4B5563] text-lg leading-relaxed">Guided by a team of industry veterans dedicated to operational excellence and sustainable growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group premium-card p-4 bg-white"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-xl mb-6 relative">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#1B2430]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="text-center pb-4">
                  <h3 className="text-2xl font-bold font-stylish text-[#1B2430] mb-2">{leader.name}</h3>
                  <p className="text-[#D4AF37] font-bold uppercase tracking-widest text-[11px]">{leader.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
