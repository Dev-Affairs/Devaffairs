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
  opacity: number;
  blurAmount: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
};

type GlowOrb = {
  x: number;
  y: number;
  radius: number;
  baseRadius: number;
  pulseSpeed: number;
  pulsePhase: number;
  color: string;
  speedX: number;
  speedY: number;
  blurAmount: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
};

type ConnectionLine = {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  opacity: number;
  draw: (ctx: CanvasRenderingContext2D) => void;
};

const ImmersiveBackground: React.FC = () => {
  const bgOn = true; // Enable immersive effect
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

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    // Track mouse position
    const handleMouseMove = (e: MouseEvent): void => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Generate a soft pastel color
    const generatePastelColor = (): string => {
      const hue = Math.floor(Math.random() * 360);
      return `hsla(${hue}, 80%, 75%, 0.6)`;
    };

    // Create small floating particles
    const createParticle = (): Particle => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 2,
        // Slower movement for particles
        speedX: (Math.random() * 0.6 - 0.3) * 0.5,
        speedY: (Math.random() * 0.6 - 0.3) * 0.5,
        color: generatePastelColor(),
        opacity: Math.random() * 0.5 + 0.2,
        // Increased blur amount
        blurAmount: Math.random() * 4 + 3,
        
        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          
          // Add slight attraction to mouse (reduced strength for slower movement)
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            this.speedX += dx * 0.0002; // Reduced from 0.0005
            this.speedY += dy * 0.0002; // Reduced from 0.0005
          }
          
          // Limit speed (reduced for slower movement)
          const maxSpeed = 0.8; // Reduced from 1.5
          const currentSpeed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);
          if (currentSpeed > maxSpeed) {
            this.speedX = (this.speedX / currentSpeed) * maxSpeed;
            this.speedY = (this.speedY / currentSpeed) * maxSpeed;
          }
          
          // Bounce off edges
          if (this.x > canvas.width || this.x < 0) {
            this.speedX = -this.speedX;
          }
          if (this.y > canvas.height || this.y < 0) {
            this.speedY = -this.speedY;
          }
        },
        
        draw(ctx: CanvasRenderingContext2D) {
          // Enhanced blur effect
          ctx.shadowBlur = this.blurAmount * 8; // Increased from 5
          ctx.shadowColor = this.color;
          ctx.fillStyle = this.color;
          ctx.globalAlpha = this.opacity;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1.0;
        }
      };
    };
    
    // Create larger glowing orbs
    const createGlowOrb = (): GlowOrb => {
      const baseRadius = Math.random() * 100 + 60; // Larger orbs
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseRadius: baseRadius,
        radius: baseRadius,
        // Slower pulsing
        pulseSpeed: Math.random() * 0.01 + 0.005, // Reduced from 0.02 + 0.01
        pulsePhase: Math.random() * Math.PI * 2,
        color: generatePastelColor(),
        // Slower movement for orbs
        speedX: (Math.random() * 0.2 - 0.1) * 0.5, // Reduced from 0.3 - 0.15
        speedY: (Math.random() * 0.2 - 0.1) * 0.5, // Reduced from 0.3 - 0.15
        blurAmount: Math.random() * 5 + 10, // Added blur amount for orbs
        
        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          
          // Gentle pulsing effect (slower)
          this.pulsePhase += this.pulseSpeed;
          this.radius = this.baseRadius + Math.sin(this.pulsePhase) * (this.baseRadius * 0.08);
          
          // Bounce off edges with some padding
          const padding = this.baseRadius;
          if (this.x > canvas.width - padding || this.x < padding) {
            this.speedX = -this.speedX;
          }
          if (this.y > canvas.height - padding || this.y < padding) {
            this.speedY = -this.speedY;
          }
          
          // Slight attraction to mouse (reduced for slower movement)
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 300) {
            this.speedX += dx * 0.00005; // Reduced from 0.0001
            this.speedY += dy * 0.00005; // Reduced from 0.0001
          }
        },
        
        draw(ctx: CanvasRenderingContext2D) {
          // Add blur effect to orbs
          ctx.shadowBlur = this.blurAmount;
          ctx.shadowColor = this.color;
          
          const gradient = ctx.createRadialGradient(
            this.x, this.y, 0, 
            this.x, this.y, this.radius
          );
          
          // Get the base color and create a transparent version
          const baseColor = this.color;
          const transparentColor = baseColor.replace('0.6', '0');
          
          gradient.addColorStop(0, baseColor);
          gradient.addColorStop(0.6, baseColor.replace('0.6', '0.3'));
          gradient.addColorStop(1, transparentColor);
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fill();
          
          // Reset shadow for other elements
          ctx.shadowBlur = 0;
        }
      };
    };
    
    // Create connection lines between particles when they are close
    const createConnectionLine = (p1: Particle, p2: Particle): ConnectionLine => {
      return {
        startX: p1.x,
        startY: p1.y,
        endX: p2.x,
        endY: p2.y,
        opacity: 0.15, // Reduced from 0.2 for softer connections
        
        draw(ctx: CanvasRenderingContext2D) {
          const dx = this.endX - this.startX;
          const dy = this.endY - this.startY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Only draw lines between close particles
          if (distance < 150) {
            // Fade out with distance
            const opacity = 1 - (distance / 150);
            ctx.strokeStyle = `rgba(200, 200, 230, ${opacity * this.opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(this.startX, this.startY);
            ctx.lineTo(this.endX, this.endY);
            ctx.stroke();
          }
        }
      };
    };
    
    // Apply a bloom post-processing effect
    const applyBloom = (ctx: CanvasRenderingContext2D, strength: number = 0.25): void => {
      // This is a simplified bloom effect
      ctx.filter = `blur(${strength * 10}px)`;
      ctx.globalCompositeOperation = 'lighter';
      ctx.globalAlpha = strength;
      ctx.drawImage(canvas, 0, 0);
      ctx.filter = 'none';
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1.0;
    };
    
    // Initialize elements
    const particles: Particle[] = [];
    const numParticles = Math.min(60, Math.floor(canvas.width * canvas.height / 20000));
    for (let i = 0; i < numParticles; i++) {
      particles.push(createParticle());
    }
    
    const glowOrbs: GlowOrb[] = [];
    const numGlowOrbs = Math.min(8, Math.floor(canvas.width * canvas.height / 90000));
    for (let i = 0; i < numGlowOrbs; i++) {
      glowOrbs.push(createGlowOrb());
    }
    
    // Add subtle noise texture with more transparency
    const createNoiseTexture = (): ImageData => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 5; // Reduced from 10 for more subtle noise
        data[i] = 255;       // r
        data[i + 1] = 255;   // g
        data[i + 2] = 255;   // b
        data[i + 3] = value; // alpha
      }
      
      return imageData;
    };
    
    const noiseTexture = createNoiseTexture();
    
    // Create offscreen canvas for blur effects
    const offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = canvas.width;
    offscreenCanvas.height = canvas.height;
    const offCtx = offscreenCanvas.getContext('2d');
    
    // Animation loop
    const animate = (): void => {
      // Clear with more transparent white for longer trailing effect
      ctx.fillStyle = 'rgba(252, 252, 255, 0.15)'; // Reduced from 0.2
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Apply noise texture at very low opacity
      ctx.putImageData(noiseTexture, 0, 0);
      
      if (offCtx) {
        // Clear offscreen canvas
        offCtx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw orbs to offscreen canvas for blurring
        glowOrbs.forEach(orb => {
          orb.update();
          orb.draw(offCtx);
        });
        
        // Apply blur to offscreen canvas
        offCtx.filter = 'blur(20px)';
        offCtx.globalAlpha = 0.6;
        offCtx.drawImage(offscreenCanvas, 0, 0);
        offCtx.filter = 'none';
        offCtx.globalAlpha = 1.0;
        
        // Draw blurred offscreen canvas to main canvas
        ctx.drawImage(offscreenCanvas, 0, 0);
      } else {
        // Fallback if offscreen canvas is not supported
        glowOrbs.forEach(orb => {
          orb.update();
          orb.draw(ctx);
        });
      }
      
      // Draw and update particles
      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });
      
      // Draw connections between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const connection = createConnectionLine(particles[i], particles[j]);
          connection.draw(ctx);
        }
      }
      
      // Apply overall bloom effect
      applyBloom(ctx, 0.15);
      
      // Draw mouse interaction effect with enhanced blur
      ctx.beginPath();
      const mouseRadius = 150; // Increased from 100
      const gradient = ctx.createRadialGradient(
        mouseX, mouseY, 0,
        mouseX, mouseY, mouseRadius
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.filter = 'blur(15px)'; // Added blur to mouse effect
      ctx.arc(mouseX, mouseY, mouseRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.filter = 'none';
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [bgOn]);

  return (
    <>
      {bgOn && (
        <div className="fixed inset-0 w-full h-full z-[-1] pointer-events-none overflow-hidden bg-gradient-to-b from-white to-blue-50">
          <canvas 
            ref={canvasRef} 
            className="absolute inset-0 w-full h-full"
          />
        </div>
      )}
    </>
  );
};

export default ImmersiveBackground;