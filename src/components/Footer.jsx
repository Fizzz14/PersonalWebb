import React from 'react';
import { ArrowUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';


const Footer = () => {
  return (
    <footer className="relative pt-20 pb-12 border-t border-white/[0.04]">
      {/* Top subtle glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)' }}
      />

      <div className="section-container">
        <div className="flex flex-col items-center gap-10">

          {/* Brand */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl font-black tracking-[-0.04em] text-white/80">
              Hafizh<span className="text-white/20">Rahmat</span>
            </span>
            <span className="text-[9px] font-mono text-white/18 tracking-[0.35em] uppercase">
              Software & Game Dev Student
            </span>
          </div>


          {/* Bottom meta row */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/[0.04]">
            <span className="text-[9px] font-mono text-white/15 tracking-widest uppercase">
              [ LOC // CIDERUM.BOGOR.INA ]
            </span>

            {/* Back to top */}
            <button
              onClick={() => scroll.scrollToTop()}
              className="w-8 h-8 rounded-full border border-white/[0.07] flex items-center justify-center text-white/25 hover:text-white hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp size={13} />
            </button>

            <span className="text-[9px] font-mono text-white/15 tracking-widest uppercase">
              © {new Date().getFullYear()} // ALL_RIGHTS_RESERVED
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
