import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const framesDir = path.join(__dirname, '../public/frames');
const outputFile = path.join(__dirname, '../src/data/framesManifest.json');

try {
  const files = fs.readdirSync(framesDir);
  
  // Filter for jpg files and sort them naturally
  const frameFiles = files
    .filter(file => file.endsWith('.jpg'))
    .sort((a, b) => {
      return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    });

  const manifest = {
    frameCount: frameFiles.length,
    frames: frameFiles
  };

  // Ensure data directory exists
  const dataDir = path.dirname(outputFile);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(outputFile, JSON.stringify(manifest, null, 2));
  console.log(`✅ Successfully generated manifest with ${frameFiles.length} frames.`);
} catch (error) {
  console.error('Error generating frames manifest:', error);
}
