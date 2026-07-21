import fs from 'fs';
import path from 'path';

const walkSync = (dir, filelist = []) => {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      filelist = walkSync(p, filelist);
    } else {
      filelist.push(p);
    }
  });
  return filelist;
};

const allFiles = walkSync('src').filter(f => f.endsWith('.tsx'));

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Convert old dark text to premium slate-900
  content = content.replace(/text-\[#081C3A\]/g, 'text-[#0f172a]');
  
  // Convert old gray body text to slate-500
  content = content.replace(/text-\[#4B5563\]/g, 'text-[#64748b]');
  
  // Convert orange to gold for buttons/accents
  content = content.replace(/bg-\[#FF6B00\]/g, 'bg-[#D4AF37]');
  content = content.replace(/text-\[#FF6B00\]/g, 'text-[#D4AF37]');
  content = content.replace(/from-\[#FF6B00\]/g, 'from-[#D4AF37]');
  content = content.replace(/border-\[#FF6B00\]/g, 'border-[#D4AF37]');
  content = content.replace(/bg-\[#E65A00\]/g, 'bg-[#B08D2D]'); // Darker gold for hover

  // Upgrade cards and borders
  content = content.replace(/rounded-lg/g, 'rounded-2xl');
  content = content.replace(/rounded-xl/g, 'rounded-2xl');
  
  // Enhance shadows
  content = content.replace(/shadow-lg/g, 'shadow-[0_8px_30px_rgb(0,0,0,0.04)]');
  content = content.replace(/shadow-md/g, 'shadow-[0_8px_30px_rgb(0,0,0,0.04)]');

  // Inject hover lift effect on cards (safe regex)
  content = content.replace(/shadow-\[0_8px_30px_rgb\(0,0,0,0.04\)\]([^\>]*?)>/g, 'shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2$1>');
  
  // Clean up duplicate transition-all duration-X if created
  content = content.replace(/transition-all duration-300 transition-all duration-500/g, 'transition-all duration-500');
  content = content.replace(/transition-all duration-500 hover:-translate-y-2 hover:-translate-y-1/g, 'transition-all duration-500 hover:-translate-y-2');
  content = content.replace(/hover:-translate-y-2 hover:-translate-y-2/g, 'hover:-translate-y-2');
  content = content.replace(/transition-all transition-all/g, 'transition-all');
  content = content.replace(/duration-500 duration-500/g, 'duration-500');

  // Add group zoom to images
  if (content.includes('<img')) {
    content = content.replace(/<img(.*?)className="(.*?)object-cover(.*?)"(.*?)>/g, '<img$1className="$2object-cover transition-transform duration-700 group-hover:scale-105$3"$4>');
  }
  // Remove duplicate group-hover:scale-105
  content = content.replace(/group-hover:scale-105 group-hover:scale-105/g, 'group-hover:scale-105');
  content = content.replace(/transition-transform transition-transform/g, 'transition-transform');
  content = content.replace(/duration-700 duration-700/g, 'duration-700');

  // Update Buttons (add premium hover and glow if standard btn-primary isn't used)
  // Replaced #FF6B00 with #D4AF37 earlier, now update classes
  content = content.replace(/bg-\[#D4AF37\] text-\[#FFFFFF\]/g, 'bg-[#0f172a] text-white hover:bg-[#D4AF37] shadow-lg hover:shadow-[0_4px_20px_rgba(212,175,55,0.4)] transition-all duration-500 uppercase tracking-widest text-xs font-bold');
  
  fs.writeFileSync(file, content, 'utf8');
});

console.log('Global design update completed!');
