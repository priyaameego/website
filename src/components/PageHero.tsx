import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
  bgImage?: string;
  backgroundImage?: string;
  parentPath?: string;
}

export default function PageHero({ title, subtitle, bgImage, backgroundImage, parentPath = 'About' }: PageHeroProps) {
  const imageSource = bgImage || backgroundImage;
  
  return (
    <section className="relative h-[65vh] min-h-[550px] max-h-[700px] flex items-center justify-center overflow-hidden bg-[#FAFAF8]">
      {/* Background Image with subtle zoom */}
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        {imageSource && (
          <img 
            src={imageSource} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        )}
      </motion.div>
      
      {/* Luxury Subtle Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1B2430]/70 via-[#1B2430]/30 to-[#1B2430]/50 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-[1000px] mx-auto px-8 w-full mt-10 md:mt-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-3 text-[12px] text-white/80 font-semibold mb-8 uppercase tracking-[0.2em]">
            <span className="hover:text-white cursor-pointer transition-colors">Home</span>
            <span className="text-[#D4AF37]">—</span>
            <span className="hover:text-white cursor-pointer transition-colors">{parentPath}</span>
            <span className="text-[#D4AF37]">—</span>
            <span className="text-white font-bold">{title}</span>
          </div>

          {/* Premium Page Title */}
          <h1 className="text-5xl md:text-6xl lg:text-[80px] font-bold font-stylish text-white leading-[1.1] mb-10 tracking-tight">
            {title}
          </h1>
          
          {/* Luxury Divider */}
          <div className="w-20 h-[1px] bg-[#D4AF37] mb-10"></div>

          {/* Subheading */}
          <p className="text-xl md:text-[24px] text-white/90 max-w-[700px] leading-relaxed font-light">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
