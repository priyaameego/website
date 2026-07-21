import { motion } from 'framer-motion';

export default function AboutLeadership() {
  const leaders = [
    {
      name: 'Ramesh Gupta',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Operations Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Vikram Singh',
      role: 'Head of R&D',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <>
      <section id="founder" className="py-24 bg-[#081C3A]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl">
                <img 
                  src="https://shakshigroup.com/cdn/shop/t/2/assets/sg-founder.png?v=51194021366701148041777563151" 
                  alt="Founder" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A] via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-3xl font-bold text-white mb-1">R.K. Aggarwal</h3>
                  <p className="text-[#D4AF37] font-semibold tracking-wide uppercase text-sm">Founder & Chairman</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 lg:pl-12"
            >
              <div className="mb-8 text-[#D4AF37]">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-heading leading-tight">
                Our vision is to shape a future where quality and comfort intersect seamlessly.
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                When I founded Shakshi Group, the goal was simple: to bring uncompromising quality to the foam manufacturing industry. Today, that vision has expanded across global markets, driven by our relentless pursuit of innovation and excellence.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We believe in building lasting partnerships with our clients, investing heavily in our people and technology to ensure that every product leaving our facilities represents the absolute pinnacle of engineering.
              </p>
              
              <div className="mt-10">
                <img src="/assets/signature.png" alt="Signature" className="h-16 brightness-0 invert opacity-70" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="leadership" className="py-24 bg-[#F4F7FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs mb-4 block">Our People</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] font-heading mb-6">Leadership Team</h2>
            <p className="text-[#64748b] text-lg">Guided by a team of industry veterans dedicated to operational excellence and sustainable growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#081C3A] to-transparent pt-24 pb-8 px-6 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="text-2xl font-bold text-white mb-1">{leader.name}</h3>
                  <p className="text-[#D4AF37] font-semibold text-sm">{leader.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
