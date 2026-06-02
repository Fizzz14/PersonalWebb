import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  'Initializing systems...',
  'Connecting to Wikrama Bogor network...',
  'Loading projects and achievements...',
  'Compiling developer personality...',
  'Running software environment...',
  'Ready!'
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
          }, 600);
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
    // Dynamic messages based on progress
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
      className="fixed inset-0 z-[9999] flex flex-col justify-between p-8 md:p-16 select-none"
    >
      {/* Top logo */}
      <div className="flex justify-between items-center">
        <div className="font-mono text-xs text-white/40 tracking-wider">
          PORTFOLIO
        </div>
        <div className="font-mono text-xs text-white/40">
          © {new Date().getFullYear()}
        </div>
      </div>

      {/* Center content */}
      <div className="max-w-xl w-full mx-auto flex flex-col justify-center items-start flex-1 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-8"
        >
          Hafizh<span className="text-gray-500">Rahmat</span>
        </motion.h1>

        {/* Console Log */}
        <div className="w-full font-mono text-sm mb-4 h-6 text-white/70 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={msgIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="text-gray-400"
            >
              &gt; {messages[msgIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full bg-white/5 border border-white/10 rounded-full h-[6px] overflow-hidden mb-2 relative">
          <motion.div
            className="absolute left-0 top-0 bottom-0 bg-white"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Progress % */}
        <div className="w-full flex justify-between font-mono text-xs text-white/40">
          <span>STATUS: LOADING</span>
          <span className="font-bold text-white">{progress}%</span>
        </div>
      </div>

      {/* Bottom status */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-2 border-t border-white/5 pt-4">
        <div className="font-mono text-[10px] text-white/20">
          LOC: CIDERUM, BOGOR, INDONESIA
        </div>
        <div className="font-mono text-[10px] text-white/20">
          PPLG // WIKRAMA BOGOR
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
