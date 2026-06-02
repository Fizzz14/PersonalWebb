import React from 'react';
import { ArrowUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const socials = [
  { Icon: GithubIcon,    href: 'https://github.com/Fizzz14', label: 'GitHub' },
  { Icon: InstagramIcon, href: 'https://instagram.com/',      label: 'Instagram' },
  { Icon: LinkedinIcon,  href: 'https://linkedin.com/',       label: 'LinkedIn' },
];

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

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.02] text-white/30 hover:text-white/80 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300"
              >
                <Icon size={15} />
              </a>
            ))}
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
