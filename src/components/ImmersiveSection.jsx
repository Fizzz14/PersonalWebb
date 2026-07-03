import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import bgImg from '../assets/dark_architecture.png';

const ImmersiveSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Background and text transitions based on scroll progress
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.12]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.45, 0.65, 0.9], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.1, 0.45, 0.65, 0.9], [30, 0, 0, -30]);

  return (
    <div ref={containerRef} className="relative h-[180vh] bg-black">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* Background Image */}
        <motion.div
          style={{
            backgroundImage: `url(${bgImg})`,
            scale: bgScale,
          }}
          className="absolute inset-0 bg-cover bg-center opacity-25 filter grayscale contrast-125 pointer-events-none"
        />

        {/* Ambient radial overlay to blend borders into absolute black */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, transparent 20%, rgba(0,0,0,0.8) 75%, #000000 100%)'
          }}
        />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

        {/* Content Overlay */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="relative z-10 text-center px-6 max-w-3xl mx-auto flex flex-col items-center select-none"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 bg-primary/[0.01] text-[10px] font-sans font-semibold tracking-[0.25em] text-primary uppercase mb-6">
            DESIGN DIRECTIVE
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase mb-6 font-sans">
            STRUCTURAL INTEGRITY
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant font-light leading-relaxed tracking-wide text-center max-w-xl">
            "In an era of fleeting aesthetics, we pursue the immutable. Our code is not merely space,
            it is a manifestation of mathematical certainty and structural dominance."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ImmersiveSection;
