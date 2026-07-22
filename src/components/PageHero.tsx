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
    <section className="relative h-[65vh] min-h-[500px] max-h-[700px] flex items-center justify-center overflow-hidden bg-[#081C3A]">
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
      
      {/* Deep Navy Overlay (75-80%) */}
      <div className="absolute inset-0 bg-[#081C3A]/75 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-[900px] mx-auto px-6 md:px-12 w-full mt-10 md:mt-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[14px] text-[#F7F8FA]/90 font-medium mb-8 uppercase tracking-[0.2em]">
            <span className="hover:text-white cursor-pointer transition-colors">Home</span>
            <span className="text-[#D4AF37]">•</span>
            <span className="hover:text-white cursor-pointer transition-colors">{parentPath}</span>
            <span className="text-[#D4AF37]">•</span>
            <span className="text-white font-bold">{title}</span>
          </div>

          {/* Premium Page Title */}
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold font-stylish text-white leading-tight mb-8">
            {title}
          </h1>
          
          {/* Luxury Divider */}
          <div className="w-16 h-[1px] bg-[#D4AF37] mb-8"></div>

          {/* Subheading */}
          <p className="text-xl md:text-[22px] text-[#E7EBF0] max-w-[700px] leading-relaxed font-light">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
