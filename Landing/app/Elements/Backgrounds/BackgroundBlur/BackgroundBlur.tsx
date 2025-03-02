'use client';

import React, { useEffect, useRef } from 'react';

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

type ConnectionLine = {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  opacity: number;
  draw: (ctx: CanvasRenderingContext2D) => void;
};

type MouseTrail = {
  positions: {x: number, y: number, age: number}[];
  maxLength: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
  addPosition: (x: number, y: number) => void;
};

const ImmersiveBackground: React.FC = () => {
  const bgOn = false; // Enable immersive effect
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
    let isMouseMoving = false;
    let lastMouseMoveTime = 0;

    // Track mouse position
    const handleMouseMove = (e: MouseEvent): void => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseMoving = true;
      lastMouseMoveTime = Date.now();
      // mouseTrail.addPosition(mouseX, mouseY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Generate a soft pastel color
    const generatePastelColor = (): string => {
      const hue = Math.floor(Math.random() * 360);
      return `hsla(${hue}, 80%, 75%, 0.6)`;
    };

    // Create the mouse trail
    const createMouseTrail = (): MouseTrail => {
      return {
        positions: [],
        maxLength: 20,
        
        addPosition(x: number, y: number) {
          this.positions.unshift({x, y, age: 0});
          if (this.positions.length > this.maxLength) {
            this.positions.pop();
          }
        },
        
        update() {
          // Age all positions
          this.positions.forEach(pos => {
            pos.age += 0.05;
          });
          
          // Remove old positions
          this.positions = this.positions.filter(pos => pos.age < 1);
          
          // If mouse hasn't moved in a while, gradually reduce the trail
          if (Date.now() - lastMouseMoveTime > 300) {
            isMouseMoving = false;
            if (this.positions.length > 0) {
              this.positions.pop();
            }
          }
        },
        
        draw(ctx: CanvasRenderingContext2D) {
          if (this.positions.length < 2) return;
          
          // Draw the trail as a gradient line
          ctx.beginPath();
          ctx.moveTo(this.positions[0].x, this.positions[0].y);
          
          // Create a path through all positions
          for (let i = 1; i < this.positions.length; i++) {
            const xc = (this.positions[i].x + this.positions[i-1].x) / 2;
            const yc = (this.positions[i].y + this.positions[i-1].y) / 2;
            ctx.quadraticCurveTo(this.positions[i-1].x, this.positions[i-1].y, xc, yc);
          }
          
          // Create gradient for trail
          const gradient = ctx.createLinearGradient(
            this.positions[0].x, this.positions[0].y,
            this.positions[this.positions.length-1].x, this.positions[this.positions.length-1].y
          );
          
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          
          // Draw the path
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 8;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();
          
          // Draw glowing effect
          ctx.filter = 'blur(8px)';
          ctx.lineWidth = 12;
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.stroke();
          ctx.filter = 'none';
          
          // Draw ripple effect at current mouse position
          if (isMouseMoving && this.positions.length > 0) {
            const current = this.positions[0];
            const rippleRadius = 40;
            
            // Draw concentric circles
            for (let i = 0; i < 3; i++) {
              const radius = rippleRadius * (i + 1) * 0.3;
              const opacity = 0.3 - (i * 0.1);
              
              ctx.beginPath();
              ctx.arc(current.x, current.y, radius, 0, Math.PI * 2);
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
              ctx.lineWidth = 2 - (i * 0.5);
              ctx.stroke();
            }
          }
        }
      };
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
            // Particles will move away from the mouse when it's moving
            const repelMultiplier = isMouseMoving ? -0.0004 : 0.0002;
            this.speedX += dx * repelMultiplier;
            this.speedY += dy * repelMultiplier;
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
    
    // Initialize elements - create more particles to compensate for removed orbs
    const particles: Particle[] = [];
    const numParticles = Math.min(80, Math.floor(canvas.width * canvas.height / 15000)); // Increased from 60
    for (let i = 0; i < numParticles; i++) {
      particles.push(createParticle());
    }
    
    // Create mouse trail
    const mouseTrail = createMouseTrail();
    
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
    
    // Animation loop
    const animate = (): void => {
      // Clear with more transparent white for longer trailing effect
      ctx.fillStyle = 'rgba(252, 252, 255, 0.15)'; // Reduced from 0.2
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Apply noise texture at very low opacity
      ctx.putImageData(noiseTexture, 0, 0);
      
      // Update and draw particles
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
      
      // Update and draw mouse trail
      mouseTrail.update();
      mouseTrail.draw(ctx);
      
      // Apply overall bloom effect
      applyBloom(ctx, 0.15);
      
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