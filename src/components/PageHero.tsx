import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
  bgImage?: string;
  backgroundImage?: string;
}

export default function PageHero({ title, subtitle, bgImage, backgroundImage }: PageHeroProps) {
  const imageSource = bgImage || backgroundImage;
  
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-[#081C3A]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#081C3A]/95 via-[#081C3A]/80 to-[#081C3A]/40 z-10" />
        <img 
          src={imageSource} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-12 w-full mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-sm text-steel-gray font-medium mb-6 uppercase tracking-wider">
            <span className="hover:text-white cursor-pointer transition-colors">Home</span>
            <span className="text-[#D4AF37]">•</span>
            <span className="hover:text-white cursor-pointer transition-colors">About</span>
            <span className="text-[#D4AF37]">•</span>
            <span className="text-white">{title}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 font-heading">
            {title}
          </h1>
          
          <div className="w-16 h-1 bg-[#D4AF37] mb-6"></div>

          <p className="text-lg md:text-xl text-light-gray max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
