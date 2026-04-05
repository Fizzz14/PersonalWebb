import React from 'react';
import { ArrowUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="py-8 bg-black border-t border-white/10 text-center relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => scroll.scrollToTop()}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-white hover:text-black transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
          <p className="text-gray-500 font-mono text-sm mt-4">
            Designed & Built by  Hafizh
          </p>
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
