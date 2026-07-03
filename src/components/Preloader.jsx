import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  'Manifesting spatial concepts...',
  'Structuring digital monoliths...',
  'Curating selected archives...',
  'Entering the void.'
];

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    // Lock scrolling
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            document.body.style.overflow = '';
            onComplete();
          }, 800);
          return 100;
        }
        const remaining = 100 - prev;
        const increment = Math.max(1, Math.floor(Math.random() * 15));
        return Math.min(100, prev + increment);
      });
    }, 150);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  useEffect(() => {
    // Progress-based messages
    const idx = Math.min(
      messages.length - 1,
      Math.floor((progress / 100) * messages.length)
    );
    setMsgIndex(idx);
  }, [progress]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: '-100vh',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[9999] flex flex-col justify-between p-8 md:p-16 select-none bg-black rounded-none"
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center font-sans text-[10px] tracking-[0.2em] text-white/40 uppercase">
        <div>PORTFOLIO ARCHIVE</div>
        <div>© {new Date().getFullYear()}</div>
      </div>

      {/* Center content */}
      <div className="max-w-xl w-full mx-auto flex flex-col justify-center items-center flex-1 py-12">
        {/* Monogram SVG Logo */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-primary">
            <path d="M12 4L12 12L7 20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 12L17 20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="3" y="3" width="18" height="18" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </motion.div>

        {/* Developer Name */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl font-bold tracking-[0.3em] text-white uppercase text-center mb-8 font-sans"
        >
          HAFIZH RAHMAT
        </motion.h1>

        {/* Loading Logs */}
        <div className="w-full font-sans text-[11px] tracking-[0.15em] mb-4 h-6 text-primary/50 text-center overflow-hidden uppercase">
          <AnimatePresence mode="wait">
            <motion.div
              key={msgIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {messages[msgIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress % Countdown */}
        <div className="w-full text-center font-sans text-[11px] tracking-[0.25em] text-white/40 mb-3 uppercase">
          [ {progress.toString().padStart(3, '0')} / 100 ]
        </div>

        {/* Progress Bar (Thin & Sharp) */}
        <div className="w-32 bg-outline h-[1px] relative overflow-hidden rounded-none">
          <motion.div
            className="absolute left-0 top-0 bottom-0 bg-primary rounded-none"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 border-t border-outline pt-4 font-sans text-[9px] tracking-[0.15em] text-white/20 uppercase">
        <div>LOC: BOGOR, INDONESIA</div>
        <div>ACADEMIC CONTEXT // PPLG</div>
      </div>
    </motion.div>
  );
};

export default Preloader;
