import React from 'react';
import { ArrowUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-12 border-t border-outline bg-black select-none">
      {/* Top subtle glow (Gold) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,192,0,0.1), transparent)' }}
      />

      <div className="section-container">
        <div className="flex flex-col items-center gap-10">

          {/* Brand Monogram */}
          <div className="flex flex-col items-center gap-3">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-primary">
              <path d="M12 4L12 12L7 20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 12L17 20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="3" y="3" width="18" height="18" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            <span className="text-[10px] font-sans font-bold text-primary/60 tracking-[0.25em] uppercase">
              Software & Game Dev Student
            </span>
          </div>

          {/* Bottom meta row */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-outline">
            <span className="text-[9px] font-sans font-semibold text-primary/40 tracking-[0.15em] uppercase">
              BOGOR, INDONESIA
            </span>

            {/* Back to top (Sharp) */}
            <button
              onClick={() => scroll.scrollToTop()}
              className="w-8 h-8 rounded-none border border-outline flex items-center justify-center text-primary/45 hover:text-black hover:border-primary hover:bg-primary transition-all duration-300 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp size={13} />
            </button>

            <span className="text-[9px] font-sans font-semibold text-primary/40 tracking-[0.15em] uppercase text-center md:text-right">
              © {new Date().getFullYear()} FAHMI HAFIZH. ALL RIGHTS RESERVED.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
