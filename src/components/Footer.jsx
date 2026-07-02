import React from 'react';
import { ArrowUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';


const Footer = () => {
  return (
    <footer className="relative pt-20 pb-12 border-t border-outline bg-black">
      {/* Top subtle glow (Gold) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,192,0,0.1), transparent)' }}
      />

      <div className="section-container">
        <div className="flex flex-col items-center gap-10">

          {/* Brand */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-xl font-black tracking-[-0.05em] text-primary font-mono select-none uppercase">
              λRCH
            </span>
            <span className="text-[9px] font-mono text-primary/45 tracking-[0.35em] uppercase">
              Software & Game Dev Student
            </span>
          </div>


          {/* Bottom meta row */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-outline">
            <span className="text-[9px] font-mono text-primary/40 tracking-widest uppercase">
              [ LOC // CIDERUM.BOGOR.INA ]
            </span>

            {/* Back to top (Sharp) */}
            <button
              onClick={() => scroll.scrollToTop()}
              className="w-8 h-8 rounded-none border border-outline flex items-center justify-center text-primary/40 hover:text-black hover:border-primary hover:bg-primary transition-all duration-300 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp size={13} />
            </button>

            <span className="text-[9px] font-mono text-primary/40 tracking-widest uppercase">
              © {new Date().getFullYear()} // ALL_RIGHTS_RESERVED
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
