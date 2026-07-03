import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const mouse = { x: null, y: null };
    const particleCount = 100;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 1.5 + 0.4;
        
        // Base drift speed - extremely slow & gentle upwards movement
        this.baseVx = (Math.random() - 0.5) * 0.08;
        this.baseVy = (Math.random() - 0.5) * 0.06 - 0.03; // Slight upward bias
        
        this.vx = this.baseVx;
        this.vy = this.baseVy;
        
        this.alpha = Math.random() * 0.35 + 0.1;
        this.twinkleSpeed = Math.random() * 0.012 + 0.004;
        this.twinklePhase = Math.random() * Math.PI * 2;
      }

      update() {
        // Apply mouse repeller force
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          const repelRadius = 150;

          if (dist < repelRadius) {
            const force = (repelRadius - dist) / repelRadius;
            const angle = Math.atan2(dy, dx);
            
            // Pushes particles away gently
            this.vx += Math.cos(angle) * force * 0.22;
            this.vy += Math.sin(angle) * force * 0.22;
          }
        }

        // Apply friction to return to base drift speed
        this.vx += (this.baseVx - this.vx) * 0.035;
        this.vy += (this.baseVy - this.vy) * 0.035;

        this.x += this.vx;
        this.y += this.vy;

        // Twinkle opacity oscillation (gentle breathing spec effect)
        this.twinklePhase += this.twinkleSpeed;
        const currentAlpha = Math.max(0.04, this.alpha + Math.sin(this.twinklePhase) * 0.08);

        // Seamless screen wrapping
        if (this.x < -10) this.x = canvas.width + 10;
        if (this.x > canvas.width + 10) this.x = -10;
        if (this.y < -10) this.y = canvas.height + 10;
        if (this.y > canvas.height + 10) this.y = -10;

        return currentAlpha;
      }

      draw(currentAlpha) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // Cosmic Gold Dust Color: #ffe3ad -> rgba(255, 227, 173, alpha)
        ctx.fillStyle = `rgba(255, 227, 173, ${currentAlpha})`;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    init();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        const alpha = p.update();
        p.draw(alpha);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
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
