import React from 'react';

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 stroke-[#61DAFB]" strokeWidth="2">
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30,12,12)"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90,12,12)"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150,12,12)"/>
    <circle cx="12" cy="12" r="1.8" fill="#61DAFB"/>
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 stroke-[#339933] fill-[#339933]/5" strokeWidth="1.5">
    <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2v20M4 7l8 5 8-5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FlutterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 stroke-[#02569B] fill-[#02569B]/5" strokeWidth="1.5">
    <path d="M14 2L20 8l-6 6-6-6 6-6zM8 8l6 6-6 6-6-6 6-6z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LaravelIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 stroke-[#FF2D20] fill-[#FF2D20]/5" strokeWidth="1.5">
    <path d="M4 4h8v8H4zM12 12h8v8h-8zM8 8h8v8H8z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 stroke-[#06B6D4]" strokeWidth="1.5">
    <path d="M12 3c-2.5 0-4.5 1.5-6 4 2-1 4-1 6 0 1.5 2.5 3 4 6 4 2.5 0 4.5-1.5 6-4-2 1-4 1-6 0-1.5-2.5-3-4-6-4z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 11c-2.5 0-4.5 1.5-6 4 2-1 4-1 6 0 1.5 2.5 3 4 6 4 2.5 0 4.5-1.5 6-4-2 1-4 1-6 0-1.5-2.5-3-4-6-4z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MongoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 stroke-[#47A248]" strokeWidth="1.5">
    <path d="M12 2C9 5 9 13 12 22C15 13 15 5 12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 12C9.5 12 12 10.5 12 2" strokeLinecap="round"/>
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 stroke-[#F05032]" strokeWidth="1.5">
    <rect x="4" y="4" width="16" height="16" rx="2" transform="rotate(45 12 12)"/>
    <circle cx="12" cy="12" r="2.5" fill="#F05032"/>
    <path d="M12 7v5M12 12h5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 stroke-[#F24E1E]" strokeWidth="1.5">
    <circle cx="9" cy="5" r="3"/>
    <circle cx="15" cy="5" r="3"/>
    <circle cx="9" cy="12" r="3"/>
    <circle cx="15" cy="12" r="3"/>
    <path d="M6 19a3 3 0 0 0 6 0v-3H6v3z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PostgresIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 stroke-[#4169E1]" strokeWidth="1.5">
    <path d="M12 2a9 9 0 0 0-9 9c0 4.5 3.5 8 8 9h2c4.5 0 8-3.5 8-9a9 9 0 0 0-9-9Z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 10c1-2 4-2 5 0M8 14h8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const JsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 stroke-[#F7DF1E]" strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="1"/>
    <path d="M12 16c.5 1 1 1.5 2 1.5s1.5-1 1.5-2.5v-5M8 17.5c1 .5 2 0 2-1.5s-1-1.5-2-2.5c-1-1-1.5-1.5-1.5-2.5s1-2 2.5-2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const brands = [
  { name: 'React', color: 'rgba(97, 218, 251, 0.45)', icon: <ReactIcon /> },
  { name: 'Node.js', color: 'rgba(51, 153, 81, 0.45)', icon: <NodeIcon /> },
  { name: 'Flutter', color: 'rgba(2, 86, 155, 0.45)', icon: <FlutterIcon /> },
  { name: 'Laravel', color: 'rgba(255, 45, 32, 0.45)', icon: <LaravelIcon /> },
  { name: 'Tailwind', color: 'rgba(6, 182, 212, 0.45)', icon: <TailwindIcon /> },
  { name: 'MongoDB', color: 'rgba(71, 162, 72, 0.45)', icon: <MongoIcon /> },
  { name: 'Git', color: 'rgba(240, 80, 50, 0.45)', icon: <GitIcon /> },
  { name: 'Figma', color: 'rgba(242, 78, 30, 0.45)', icon: <FigmaIcon /> },
  { name: 'Postgres', color: 'rgba(65, 105, 225, 0.45)', icon: <PostgresIcon /> },
  { name: 'JavaScript', color: 'rgba(247, 223, 30, 0.45)', icon: <JsIcon /> }
];

const TechMarquee = () => {
  // Triple the list to guarantee seamless visual loop
  const list = [...brands, ...brands, ...brands];

  return (
    <div className="py-8 bg-white/[0.003] border-y border-outline overflow-hidden relative mb-20 w-screen left-1/2 -translate-x-1/2 select-none">
      <div className="flex whitespace-nowrap gap-16 items-center tech-marquee-track">
        {list.map((brand, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-3.5 group cursor-default transition-all duration-300 transform hover:scale-105"
          >
            {/* SVG Logo Wrapper */}
            <div
              className="w-8 h-8 flex items-center justify-center filter grayscale opacity-45 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              style={{
                '--hover-glow': brand.color
              }}
            >
              {brand.icon}
            </div>
            
            <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-white/30 group-hover:text-primary transition-colors uppercase">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
      
      {/* Scroll animation keyframes styling */}
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .tech-marquee-track {
          animation: marquee-scroll 24s linear infinite;
        }
        .tech-marquee-track:hover {
          animation-play-state: paused;
        }
        .group:hover div {
          filter: drop-shadow(0 0 12px var(--hover-glow)) !important;
        }
      `}</style>
    </div>
  );
};

export default TechMarquee;
