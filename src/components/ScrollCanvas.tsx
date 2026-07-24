import { useRef, useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import framesManifest from '../data/framesManifest.json';

gsap.registerPlugin(ScrollTrigger);

interface ScrollCanvasProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function ScrollCanvas({ containerRef }: ScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const renderFrameRef = useRef(0);
  
  // Animation state object for GSAP to tween
  const animState = useRef({ frame: 0 });

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const totalFrames = framesManifest.frameCount;
    const images: HTMLImageElement[] = [];

    const onImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalFrames) {
        imagesRef.current = images;
        setImagesLoaded(true);
      }
    };

    framesManifest.frames.forEach((filename) => {
      const img = new Image();
      img.onload = onImageLoad;
      img.onerror = onImageLoad; // In case an image fails, keep going
      img.src = `/frames/${filename}`;
      images.push(img);
    });

    return () => {
      // Cleanup
      images.forEach(img => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, []);

  // Drawing function
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img) return;

    // Handle high DPI displays
    const dpr = window.devicePixelRatio || 1;
    
    // Fit image to canvas while maintaining aspect ratio (cover)
    const canvasWidth = canvas.width / dpr;
    const canvasHeight = canvas.height / dpr;
    
    const imgRatio = img.width / img.height;
    const canvasRatio = canvasWidth / canvasHeight;
    
    let drawWidth = canvasWidth;
    let drawHeight = canvasHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvasWidth / imgRatio;
      offsetY = (canvasHeight - drawHeight) / 2;
    } else {
      drawWidth = canvasHeight * imgRatio;
      offsetX = (canvasWidth - drawWidth) / 2;
    }

    // Use requestAnimationFrame for smoother rendering
    requestAnimationFrame(() => {
      ctx.fillStyle = '#081C3A'; // Match hero background
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    });
  }, []);

  // Handle Resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !imagesLoaded) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const ctx = canvas.getContext('2d', { alpha: false });
      if (ctx) {
        ctx.scale(dpr, dpr);
      }

      // Redraw current frame on resize
      drawFrame(renderFrameRef.current);
    };

    window.addEventListener('resize', resizeCanvas, { passive: true });
    resizeCanvas(); // Initial resize

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [imagesLoaded, drawFrame]);

  // GSAP ScrollTrigger
  useEffect(() => {
    if (!imagesLoaded || !containerRef.current || !canvasRef.current) return;

    // Draw initial frame
    drawFrame(0);

    const totalFrames = framesManifest.frameCount;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=400%', // 400vh for smooth scrolling
      pin: true,
      scrub: 0.5, // Smooth scrubbing
      animation: gsap.to(animState.current, {
        frame: totalFrames - 1,
        snap: 'frame',
        ease: 'none',
        onUpdate: () => {
          const currentFrame = Math.round(animState.current.frame);
          if (currentFrame !== renderFrameRef.current) {
            renderFrameRef.current = currentFrame;
            drawFrame(currentFrame);
          }
        }
      }),
    });

    return () => {
      trigger.kill();
    };
  }, [imagesLoaded, containerRef, drawFrame]);

  return (
    <div className="absolute inset-0 w-full h-[100vh] overflow-hidden z-0 bg-[#081C3A]">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block opacity-60"
      />
      {/* Luxury Subtle Overlay to blend with UI */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A] via-[#081C3A]/40 to-transparent z-10 pointer-events-none" />
    </div>
  );
}
