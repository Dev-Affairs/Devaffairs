'use client';

import React, { useEffect, useRef } from 'react';

// Define types for our particles and elements
type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  blurAmount: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
};

type FloatingElement = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  type: number;
  opacity: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
};

type GlowEffect = {
  x: number;
  y: number;
  radius: number;
  color: string;
  speedX: number;
  speedY: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
};

const BackgroundBlur: React.FC = () => {
  const bgOn = true; // Enable immersive glow effect
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!bgOn || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return; // Ensure we have a valid context
    
    // Set canvas dimensions to match window
    const setCanvasSize = (): void => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Create particles
    const createParticle = (): Particle => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
        color: `hsla(${Math.random() * 60 + 200}, 100%, 50%, 0.8)`,
        blurAmount: Math.random() * 2 + 2,
        
        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          
          // Bounce off edges
          if (this.x > canvas.width || this.x < 0) {
            this.speedX = -this.speedX;
          }
          if (this.y > canvas.height || this.y < 0) {
            this.speedY = -this.speedY;
          }
        },
        
        draw(ctx: CanvasRenderingContext2D) {
          ctx.shadowBlur = this.blurAmount * 5;
          ctx.shadowColor = this.color;
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      };
    };
    
    // Create floating elements (code, design elements)
    const createFloatingElement = (): FloatingElement => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 30 + 15,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        rotation: 0,
        rotationSpeed: Math.random() * 0.02 - 0.01,
        type: Math.floor(Math.random() * 4), // 0: <>, 1: {}, 2: //, 3: #
        opacity: Math.random() * 0.5 + 0.1,
        
        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          this.rotation += this.rotationSpeed;
          
          // Wrap around edges
          if (this.x > canvas.width + this.size) this.x = -this.size;
          if (this.x < -this.size) this.x = canvas.width + this.size;
          if (this.y > canvas.height + this.size) this.y = -this.size;
          if (this.y < -this.size) this.y = canvas.height + this.size;
        },
        
        draw(ctx: CanvasRenderingContext2D) {
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.rotate(this.rotation);
          ctx.font = `${this.size}px monospace`;
          ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
          
          let symbol = '';
          switch(this.type) {
            case 0: symbol = '</>'; break;
            case 1: symbol = '{}'; break;
            case 2: symbol = '//'; break;
            case 3: symbol = '#'; break;
          }
          
          // ctx.fillText(symbol, -this.size/2, this.size/4);
          // ctx.restore();
        }
      };
    };
    
    // Create glow effect in background
    const createGlowEffect = (): GlowEffect => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 200 + 100,
        color: `hsla(${Math.random() * 60 + 200}, 80%, 50%, 0.05)`,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        
        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          
          // Bounce off edges with some padding
          const padding = this.radius;
          if (this.x > canvas.width - padding || this.x < padding) {
            this.speedX = -this.speedX;
          }
          if (this.y > canvas.height - padding || this.y < padding) {
            this.speedY = -this.speedY;
          }
        },
        
        draw(ctx: CanvasRenderingContext2D) {
          const gradient = ctx.createRadialGradient(
            this.x, this.y, 0, 
            this.x, this.y, this.radius
          );
          
          gradient.addColorStop(0, this.color);
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      };
    };
    
    // Initialize elements
    const particles: Particle[] = [];
    const numParticles = Math.min(50, Math.floor(canvas.width * canvas.height / 20000));
    for (let i = 0; i < numParticles; i++) {
      particles.push(createParticle());
    }
    
    const floatingElements: FloatingElement[] = [];
    const numFloatingElements = Math.min(15, Math.floor(canvas.width * canvas.height / 50000));
    for (let i = 0; i < numFloatingElements; i++) {
      floatingElements.push(createFloatingElement());
    }
    
    const glowEffects: GlowEffect[] = [];
    const numGlowEffects = 5;
    for (let i = 0; i < numGlowEffects; i++) {
      glowEffects.push(createGlowEffect());
    }
    
    // Animation loop
    const animate = (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw dark background
      ctx.fillStyle = 'rgba(10, 15, 30, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update glow effects
      glowEffects.forEach(glow => {
        glow.update();
        glow.draw(ctx);
      });
      
      // Draw and update floating elements
      floatingElements.forEach(element => {
        element.update();
        element.draw(ctx);
      });
      
      // Draw and update particles
      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [bgOn]);

  return (
    <>
      {bgOn && (
        <div className="fixed inset-0 w-full h-full z-[-1] pointer-events-none overflow-hidden">
          <canvas 
            ref={canvasRef} 
            className="absolute inset-0 w-full h-full"
          />
        </div>
      )}
    </>
  );
};

export default BackgroundBlur;