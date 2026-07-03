import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';

/* ── Per-letter mask reveal from below ── */
const MaskReveal = ({ text, className = '', delay = 0 }) => {
  const words = text.split(' ');
  return (
    <span className="inline-flex flex-wrap justify-center gap-x-[0.28em]">
      {words.map((word, wi) => (
        <span key={wi} className="inline-flex overflow-hidden leading-none">
          {Array.from(word).map((char, ci) => (
            <motion.span
              key={ci}
              className={`inline-block ${className}`}
              initial={{ y: '110%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{
                duration: 1.0,
                ease: [0.16, 1, 0.3, 1],
                delay: delay + wi * 0.1 + ci * 0.025,
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
};

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Subtle gold ambient orbs for architectural lighting */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 800,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,192,0,0.04) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Mouse spotlight (Gold) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 500px at ${mousePos.x}px ${mousePos.y}px,
            rgba(255,192,0,0.025) 0%,
            rgba(255,192,0,0.005) 50%,
            transparent 70%)`,
          transition: 'background 0.08s',
        }}
      />

      <div className="section-container relative z-10 w-full flex flex-col items-center justify-center text-center py-28 max-w-4xl mx-auto select-none">
        
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2.5 px-4 py-2 border border-primary/30 bg-primary/[0.02] text-[10px] font-sans font-semibold tracking-[0.25em] text-primary uppercase">
            <span
              className="w-1.5 h-1.5 bg-primary inline-block rotate-45"
              style={{ boxShadow: '0 0 6px rgba(255,192,0,0.8)' }}
            />
            NODE // FRONT DESIGN
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-[clamp(2.5rem,7.5vw,5.5rem)] font-black leading-[0.95] tracking-tight mb-8 uppercase text-center w-full">
          <div className="overflow-hidden py-1.5">
            <MaskReveal text="ARCHITECTING" className="text-white" delay={0.15} />
          </div>
          <div className="overflow-hidden py-1.5">
            <MaskReveal text="THE" className="text-primary italic font-light" delay={0.4} />
          </div>
          <div className="overflow-hidden py-1.5">
            <MaskReveal text="INVISIBLE" className="text-white" delay={0.55} />
          </div>
        </h1>

        {/* Description Text */}
        <motion.p
          className="text-sm md:text-base text-on-surface-variant font-light leading-relaxed max-w-xl mx-auto mb-10 font-sans"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        >
          We define the boundaries between structural integrity and precision. 
          Software visualization at the highest level of fidelity.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.95 }}
        >
          <Link to="projects" smooth duration={700} offset={-60} className="w-full sm:w-auto">
            <button className="btn-primary group w-full sm:w-auto px-8 py-3.5 text-[11px] font-sans tracking-[0.15em]">
              EXPLORE ARCHIVE
              <ArrowRight
                size={14}
                className="transform group-hover:translate-x-1 transition-transform duration-300 ml-1 inline-block"
              />
            </button>
          </Link>
          <Link to="contact" smooth duration={700} offset={-60} className="w-full sm:w-auto">
            <button className="btn-outline w-full sm:w-auto px-8 py-3.5 text-[11px] font-sans tracking-[0.15em] border-primary/50 text-primary hover:border-primary hover:bg-primary hover:text-black">
              INITIATE INQUIRY
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative architectural grid lines on sides */}
      <div className="absolute left-10 top-0 bottom-0 w-px bg-outline/20 hidden md:block" />
      <div className="absolute right-10 top-0 bottom-0 w-px bg-outline/20 hidden md:block" />
    </section>
  );
};

export default Hero;
