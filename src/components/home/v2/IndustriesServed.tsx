import { motion } from 'framer-motion';

export default function IndustriesServed() {
  const industries = [
    { name: "Healthcare", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070&auto=format&fit=crop" },
    { name: "Hospitality", img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070&auto=format&fit=crop" },
    { name: "Automotive", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070&auto=format&fit=crop" },
    { name: "Acoustics", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" }
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#1B2430] font-bold tracking-[0.3em] uppercase text-xs border border-[#1B2430]/20 px-6 py-2 rounded-full mb-8 inline-block">
            06. Industries We Serve
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-stylish font-bold text-[#1B2430] leading-[1.1]">
            Powering Global <span className="italic font-light text-[#D4AF37]">Sectors</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind, idx) => (
            <motion.div 
              key={idx}
              className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-[32px] overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
            >
              <img 
                src={ind.img} 
                alt={ind.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700"></div>
              
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-stylish font-bold mb-4 drop-shadow-lg">
                    {ind.name}
                  </h3>
                  <div className="w-12 h-[2px] bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
