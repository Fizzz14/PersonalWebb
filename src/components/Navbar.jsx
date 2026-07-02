import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Profile',      to: 'home' },
  { name: 'Expertise',    to: 'skills' },
  { name: 'Journey',     to: 'education' },
  { name: 'Works',       to: 'projects' },
  { name: 'Achievements', to: 'certificates' },
  { name: 'Connect',      to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-400 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="section-container flex justify-between items-center">

        {/* Logo */}
        <Link to="home" smooth duration={500} className="cursor-pointer">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-base font-black tracking-[-0.05em] text-primary hover:text-white transition-colors select-none font-mono"
          >
            λRCH
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={link.to}
                smooth
                duration={500}
                spy
                activeClass="!text-primary border-b-2 border-primary pb-1"
                className="text-[10px] font-mono text-on-surface-variant hover:text-primary cursor-pointer tracking-widest uppercase transition-colors duration-250 relative group select-none"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Inquire CTA Button */}
        <div className="hidden md:block">
          <Link
            to="contact"
            smooth
            duration={500}
            className="bg-primary text-black px-5 py-2 font-mono text-[9px] font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black cursor-pointer select-none text-center"
          >
            Inquire
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/50 hover:text-white transition-colors cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(24px)' }}
          >
            <div className="section-container flex flex-col py-6 gap-5 border-t border-outline">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth
                  duration={500}
                  spy
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-mono text-on-surface-variant hover:text-primary cursor-pointer tracking-widest uppercase transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="contact"
                smooth
                duration={500}
                onClick={() => setIsOpen(false)}
                className="bg-primary text-black text-center py-3 font-mono text-[10px] font-bold uppercase tracking-widest"
              >
                Inquire
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
