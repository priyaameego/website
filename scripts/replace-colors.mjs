import fs from 'fs';
import path from 'path';

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file));
  });
  return filelist;
};

const pagesFiles = walkSync('c:/Users/Priya/Documents/website/src/pages');
const componentsFiles = walkSync('c:/Users/Priya/Documents/website/src/components');
const allFiles = [...pagesFiles, ...componentsFiles];

allFiles.forEach(file => {
  if (file.endsWith('.tsx') && !file.endsWith('Navbar.tsx')) {
    let content = fs.readFileSync(file, 'utf8');

    // Accent colors
    content = content.replace(/#E51D2A/g, '#D4AF37');
    content = content.replace(/bg-accent-orange/g, 'bg-[#FF6B00]');
    content = content.replace(/text-accent-orange/g, 'text-[#D4AF37]');

    if (file.endsWith('Hero.tsx') || file.endsWith('PageHero.tsx')) {
      // Dark premium sections handling
      content = content.replace(/bg-dark-bg/g, 'bg-[#081C3A]');
      content = content.replace(/from-dark-bg/g, 'from-[#081C3A]');
      content = content.replace(/via-dark-bg/g, 'via-[#081C3A]');
      content = content.replace(/to-dark-bg/g, 'to-[#081C3A]');

      content = content.replace(/bg-\[#1e2233\]/g, 'bg-[#081C3A]');
      content = content.replace(/from-\[#1e2233\]/g, 'from-[#081C3A]');
      content = content.replace(/via-\[#1e2233\]/g, 'via-[#081C3A]');
      content = content.replace(/to-\[#1e2233\]/g, 'to-[#081C3A]');
      
      // Hero stats cards should also be updated
      content = content.replace(/glass-card/g, 'bg-[#FFFFFF] text-[#081C3A] border border-[#E2E8F0] shadow-md rounded-2xl');
      // Fix text pure white inside the cards manually if needed, wait text-pure-white in Hero needs to stay white except inside the stats cards
      // The stats cards have: text-pure-white (for label)
      content = content.replace(/text-pure-white uppercase tracking-wider/g, 'text-[#4B5563] uppercase tracking-wider');

    } else {
      // Light pages handling
      content = content.replace(/bg-\[#1a1d2d\]/g, 'bg-[#FFFFFF]');
      content = content.replace(/bg-\[#1e2233\]/g, 'bg-gradient-to-b from-[#FFFFFF] to-[#EEF5FF]');
      content = content.replace(/border-white\/5/g, 'border-[#E2E8F0]');
      content = content.replace(/border-white\/10/g, 'border-[#E2E8F0]');
      
      content = content.replace(/text-white/g, 'text-[#081C3A]');
      content = content.replace(/text-pure-white/g, 'text-[#081C3A]');
      
      content = content.replace(/text-gray-400/g, 'text-[#4B5563]');
      content = content.replace(/text-gray-300/g, 'text-[#4B5563]');
      content = content.replace(/text-light-gray/g, 'text-[#4B5563]');
      content = content.replace(/text-steel-gray/g, 'text-[#4B5563]');
      
      // Some cards might have hover:-translate-y-2. Let's add hover bg
      content = content.replace(/bg-\[#FFFFFF\](.*?)hover:-translate-y-2/g, 'bg-[#FFFFFF] hover:bg-[#F8FAFC] $1hover:-translate-y-2');
    }

    fs.writeFileSync(file, content, 'utf8');
  }
});
