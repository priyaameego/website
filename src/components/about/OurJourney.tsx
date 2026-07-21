import { motion } from 'framer-motion';

export default function OurJourney() {
  return (
    <section id="timeline" className="py-24 bg-white">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[#E63946] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            OUR JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-[#0f172a]">
            Milestones of Growth
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#E5E7EB] -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {[
              {
                title: "Foundation",
                desc: "Shakshi Coir Products Pvt. Ltd. was founded in Lucknow, Uttar Pradesh, marking the beginning of our journey in foam manufacturing."
              },
              {
                title: "Brand Launch",
                desc: "Launched our flagship Shakshi brand, quickly becoming a trusted name among households in Uttar Pradesh."
              },
              {
                title: "Expansion",
                desc: "Opened second manufacturing facility in Kanpur, expanded dealer network to 500+ touchpoints across North India."
              },
              {
                title: "Multi-Brand Strategy",
                desc: "Launched Easylife and Softline sub-brands to serve different market segments and customer needs."
              },
              {
                title: "Today",
                desc: "Shakshi Group is now a leading B2B foam and mattress manufacturer with 30+ premium products, serving hospitality, healthcare, and retail sectors."
              }
            ].map((m, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
              >
                <div className={`w-full md:w-[45%] bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[#F3F4F6] relative z-10`}>
                  <h4 className="text-[#E63946] font-bold text-lg mb-3">{m.title}</h4>
                  <p className="text-[#64748b] leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
