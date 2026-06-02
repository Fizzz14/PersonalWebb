import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const connectionDistance = 110;
    const mouse = { x: null, y: null, radius: 180, speed: 0 };
    
    let lastMouseX = null;
    let lastMouseY = null;
    let lastMouseTime = null;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();

    class Particle {
      constructor(isStar = false) {
        this.isStar = isStar;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.dispX = 0;
        this.dispY = 0;
        
        if (this.isStar) {
          // Twinkling stars: tiny, static/very slow
          this.vx = (Math.random() - 0.5) * 0.02;
          this.vy = (Math.random() - 0.5) * 0.02;
          this.radius = Math.random() * 0.9 + 0.3; // Thin and delicate
          this.minAlpha = Math.random() * 0.15 + 0.15;
          this.alphaRange = Math.random() * 0.2 + 0.1;
          this.twinkleSpeed = Math.random() * 0.005 + 0.002;
          this.twinklePhase = Math.random() * Math.PI * 2;
          this.alpha = this.minAlpha;
          this.colorPrefix = 'rgba(255, 255, 255, ';
        } else {
          // Standard network connecting nodes
          this.vx = (Math.random() - 0.5) * 0.3;
          this.vy = (Math.random() - 0.5) * 0.3;
          this.radius = Math.random() * 1.5 + 0.5;
          this.baseAlpha = Math.random() * 0.18 + 0.08;
          this.alpha = this.baseAlpha;
          
          const colors = [
            'rgba(255, 255, 255, ',
            'rgba(34, 211, 238, ', // Cyan glow
            'rgba(148, 163, 184, '
          ];
          this.colorPrefix = colors[Math.floor(Math.random() * colors.length)];
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Boundaries bounce
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        if (this.isStar) {
          this.twinklePhase += this.twinkleSpeed;
          this.alpha = this.minAlpha + Math.sin(this.twinklePhase) * this.alphaRange;
        }

        // WebGL-inspired Elastic Mouse Ripple & Distortion wave
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.hypot(dx, dy);

          if (distance < mouse.radius) {
            // Speed factor multiplies the amplitude of the ripple wave
            const speedFactor = Math.min(3, (mouse.speed || 0) * 0.12 + 0.15);
            
            // Dynamic wave phase expanding outwards based on distance and elapsed time
            const wavePhase = (distance / mouse.radius) * Math.PI * 3.5 - (window.performance.now() * 0.005);
            
            // Calculate elastic gravitational lens wave distortion
            const distortion = Math.sin(wavePhase) * 14 * (1 - distance / mouse.radius) * speedFactor;
            
            const targetDispX = (dx / (distance || 1)) * distortion;
            const targetDispY = (dy / (distance || 1)) * distortion;

            // Smooth spring damping for natural visual bounce
            this.dispX += (targetDispX - this.dispX) * 0.15;
            this.dispY += (targetDispY - this.dispY) * 0.15;

            // Increase alpha slightly when actively distorted/activated
            if (!this.isStar) {
              this.alpha = Math.min(0.7, this.baseAlpha + (1 - distance / mouse.radius) * 0.4);
            }
          } else {
            this.dispX *= 0.92;
            this.dispY *= 0.92;
            if (!this.isStar && this.alpha > this.baseAlpha) {
              this.alpha -= 0.01;
            }
          }
        } else {
          this.dispX *= 0.92;
          this.dispY *= 0.92;
          if (!this.isStar && this.alpha > this.baseAlpha) {
            this.alpha -= 0.01;
          }
        }
      }

      draw() {
        ctx.beginPath();
        // Render at displaced coordinates
        ctx.arc(this.x + this.dispX, this.y + this.dispY, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${this.colorPrefix}${this.alpha})`;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      // 32 network nodes
      for (let i = 0; i < 32; i++) {
        particles.push(new Particle(false));
      }
      // 55 stars
      for (let i = 0; i < 55; i++) {
        particles.push(new Particle(true));
      }
    };

    init();

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          if (p1.isStar || p2.isStar) continue;

          // Compute distance based on displaced positions to keep lines perfectly aligned to rippling nodes
          const p1_rx = p1.x + p1.dispX;
          const p1_ry = p1.y + p1.dispY;
          const p2_rx = p2.x + p2.dispX;
          const p2_ry = p2.y + p2.dispY;

          const dist = Math.hypot(p1_rx - p2_rx, p1_ry - p2_ry);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.08;
            ctx.beginPath();
            ctx.moveTo(p1_rx, p1_ry);
            ctx.lineTo(p2_rx, p2_ry);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;
      const now = window.performance.now();

      if (lastMouseX !== null && lastMouseTime !== null) {
        const dx = currentX - lastMouseX;
        const dy = currentY - lastMouseY;
        const dt = now - lastMouseTime;

        if (dt > 0) {
          const instantSpeed = Math.hypot(dx, dy) / dt;
          // Exponential moving average for smooth velocity transitions
          mouse.speed = mouse.speed * 0.82 + instantSpeed * 0.18;
        }
      }

      mouse.x = currentX;
      mouse.y = currentY;
      lastMouseX = currentX;
      lastMouseY = currentY;
      lastMouseTime = now;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
      mouse.speed = 0;
      lastMouseX = null;
      lastMouseY = null;
      lastMouseTime = null;
    };

    const parent = canvas.parentElement;
    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[1]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default ParticleBackground;
