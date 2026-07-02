import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

/* ── Per-letter mask reveal from below ── */
const MaskReveal = ({ text, className = '', delay = 0 }) => {
  const words = text.split(' ');
  return (
    <span className="inline-flex flex-wrap gap-x-[0.28em]">
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
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const meta = [
    { label: 'ROLE', value: 'Full-Stack Aspirant' },
    { label: 'STACK', value: 'React · Flutter · Laravel' },
    { label: 'LOC', value: 'Bogor, INA' },
  ];

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Subtle gold ambient orb top-right ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '5%', right: '-5%',
          width: 700, height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,192,0,0.02) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />
      {/* ── Bottom-left orb ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '0%', left: '-5%',
          width: 500, height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,192,0,0.01) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      {/* ── Mouse spotlight (Gold) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 420px at ${mousePos.x}px ${mousePos.y}px,
            rgba(255,192,0,0.03) 0%,
            rgba(255,192,0,0.005) 45%,
            transparent 70%)`,
          transition: 'background 0.08s',
        }}
      />

      {/* ── Grid ── */}
      <div className="section-container relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center py-28 max-w-container-max mx-auto">

        {/* LEFT — Typography block */}
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-6 max-w-xl">

          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="floating-label">
              <span
                className="w-1.5 h-1.5 bg-primary inline-block rotate-45"
                style={{ boxShadow: '0 0 6px rgba(255,192,0,0.8)' }}
              />
              System Active // Available for Projects
            </span>
          </motion.div>

          {/* Main title */}
          <div>
            <h1 className="font-headline-xl text-[clamp(2.5rem,7.5vw,5.5rem)] font-extrabold leading-[0.92] tracking-tighter mb-4 uppercase">
              <MaskReveal text="BRUTALIST" className="text-white" delay={0.1} />
              <br />
              <MaskReveal text="PRECISION." className="text-primary" delay={0.3} />
            </h1>
          </div>

          {/* Subtitle */}
          <motion.p
            className="font-body-lg text-sm md:text-base text-on-surface-variant leading-relaxed max-w-lg mb-4"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.72 }}
          >
            Hafizh Rahmat (λRCH) is a software engineer and digital designer crafting immutable web, backend, and interactive structures. Rooted in the philosophy of digital brutalism, every line of code is a calculated intent.
          </motion.p>

          {/* Meta info row */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.88 }}
          >
            {meta.map(({ label, value }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-1.5 border border-outline bg-white/[0.01]"
              >
                <span className="text-[9px] font-mono text-primary tracking-widest">{label}</span>
                <span className="w-px h-3 bg-outline" />
                <span className="text-[11px] font-mono text-on-surface-variant">{value}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="flex flex-wrap gap-4 pt-2"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.05 }}
          >
            <Link to="projects" smooth duration={700} offset={-60}>
              <button className="btn-primary group">
                Explore Works
                <ArrowRight
                  size={14}
                  className="transform group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </Link>
            <Link to="contact" smooth duration={700} offset={-60}>
              <button className="btn-outline">Initiate Contact</button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT — 3D Viewport */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="col-span-12 lg:col-span-5 relative w-full aspect-square max-h-[500px] corner-mark group"
        >
          <div className="corner-inner" />

          {/* Subtle outer frame glow */}
          <div
            className="absolute -inset-px pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255,192,0,0.06) 0%, transparent 40%, rgba(255,192,0,0.02) 100%)',
            }}
          />

          {/* Main viewport */}
          <div className="relative w-full h-full overflow-hidden border border-outline bg-black shadow-[0_0_100px_-20px_rgba(0,0,0,1)]">

            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 py-3 pointer-events-none border-b border-outline bg-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 bg-primary inline-block rotate-45"
                  style={{ boxShadow: '0 0 6px rgba(255,192,0,0.7)' }}
                />
                <span className="text-[9px] font-mono text-primary tracking-[0.28em] uppercase">3D_VIEWPORT // ACTIVE</span>
              </div>
              <span className="text-[9px] font-mono text-on-surface-variant tracking-widest">6.59°S · 106.81°E</span>
            </div>

            {/* Bottom bar */}
            <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-5 py-3 pointer-events-none border-t border-outline bg-black/20 backdrop-blur-sm">
              <span className="text-[8px] font-mono text-text-secondary opacity-30 tracking-widest">REF // HAFIZH_RAHMAT_3D</span>
              <span className="text-[8px] font-mono text-text-secondary opacity-30 tracking-widest">RENDER // SPLINE_WEBGL</span>
            </div>

            {/* Loader */}
            {!splineLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10 bg-black">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 border border-outline" />
                  <div className="absolute inset-0 border-t border-primary animate-spin" />
                </div>
                <span className="text-[9px] font-mono text-primary tracking-widest">LOADING SCENE...</span>
              </div>
            )}

            <Spline
              scene="https://prod.spline.design/VNzctMdR5Rwr2Zcc/scene.splinecode"
              className="w-full h-full"
              onLoad={() => setSplineLoaded(true)}
            />
          </div>

          {/* Right accent line */}
          <div
            className="absolute -right-px top-1/4 bottom-1/4 w-px pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,192,0,0.15), transparent)' }}
          />
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
