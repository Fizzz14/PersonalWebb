import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
  </svg>
);

import aranyaImg from '../assets/Screenshot 2026-04-05 213034.png';
import imgPOS    from '../assets/Screenshot 2026-05-18 190749.png';
import imgAww    from '../assets/Screenshot 2026-05-18 190735.png';
import imgHotel  from '../assets/Screenshot 2026-05-18 190659.png';
import imgLokerku from '../assets/Screenshot 2026-06-03 141255.png';

const projects = [
  {
    index: '01',
    title: 'Lokerku',
    desc: 'Platform penyewaan loker pintar berbasis web dengan sistem self-service, pembayaran cashless terintegrasi, manajemen daerah & loker, serta kontrol akses keamanan QR Code.',
    tags: ['Node.js', 'Express.js', 'MySQL', 'React', 'QR Access', 'Cashless API'],
    image: imgLokerku,
    github: 'https://github.com/Fizzz14/fe-lokerku.git',
    links: [
      { label: 'FRONTEND_REPO', url: 'https://github.com/Fizzz14/fe-lokerku.git' },
      { label: 'BACKEND_REPO', url: 'https://github.com/Fizzz14/be-lokerku.git' },
    ],
    code: 'LOKERKU.PLATFORM',
  },
  {
    index: '02',
    title: 'WeatherApp',
    desc: 'Aplikasi web prediksi cuaca akurat dengan informasi real-time, deteksi lokasi otomatis, serta detail kelembapan dan kecepatan angin.',
    tags: ['React', 'Tailwind CSS', 'OpenWeather API'],
    image: imgPOS,
    github: 'https://github.com/Fizzz14/WeatherApp',
    code: 'WEATHER.APP',
  },
  {
    index: '03',
    title: 'Louis Vuitton Clone',
    desc: 'Landing page bergaya elegan mereplikasi antarmuka website Louis Vuitton dengan responsive frame dan animasi premium.',
    tags: ['Laravel 11', 'MySQL', 'REST API'],
    image: imgAww,
    github: 'https://github.com/Fizzz14/Louis-Vuitton',
    code: 'LUXURY.LV',
  },
  {
    index: '04',
    title: 'UK Carbon Tracker',
    desc: 'Aplikasi web pemantau intensitas karbon pada pemakaian energi listrik di Britania Raya secara real-time.',
    tags: ['React', 'JavaScript', 'Fetch API'],
    image: imgHotel,
    github: 'https://github.com/Fizzz14/UK-Carbon-Tracker',
    code: 'CARBON.UK',
  },
  {
    index: '05',
    title: 'Aranya Coffee',
    desc: 'Website modern untuk coffee shop lokal Aranya Coffee — menampilkan menu, galeri, dan info kontak dengan desain elegan dan responsif.',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    image: aranyaImg,
    github: 'https://github.com/Fizzz14/AranyaCoffee',
    code: 'ARANYA.COFFEE',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-black border-y border-outline relative select-none">
      {/* Inline styles for blueprint scanner animation */}
      <style>{`
        @keyframes scanline-sweep {
          0% { left: 0%; opacity: 0.1; }
          50% { opacity: 0.9; }
          100% { left: 100%; opacity: 0.1; }
        }
        .group:hover .sweep-line {
          animation: scanline-sweep 2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        }
      `}</style>

      <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Pinned Header */}
        <div className="lg:col-span-3 lg:sticky lg:top-32 self-start">
          <div className="premium-divider mb-3">
            <span className="tech-label">[ WORKS ]</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white uppercase leading-none font-sans">
            SELECTED <span className="text-primary">ARCHIVE</span>
          </h2>
          <div className="h-[1px] w-12 bg-primary/30 mt-6 hidden lg:block" />
        </div>

        {/* Right Column: Scrollable Grid */}
        <div className="lg:col-span-9 space-y-12">
          
          {/* FEATURED PROJECT: Lokerku (Split Screen Layout) */}
          {projects.filter(p => p.index === '01').map((item) => (
            <motion.div
              key={item.index}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <TiltCard className="group premium-card rounded-none overflow-hidden relative flex flex-col md:flex-row border border-outline hover:border-primary/50 min-h-[420px] bg-black">
                <div className="corner-inner" />
                
                {/* Index badge */}
                <div className="absolute top-4 left-4 z-20 pointer-events-none bg-black/80 border border-outline px-2.5 py-1 text-[8px] font-sans font-bold tracking-[0.2em] text-primary uppercase">
                  FEATURED ARCHIVE // LOKERKU.PLATFORM
                </div>

                {/* Left Column: Image with Blueprint scanner */}
                <div className="w-full md:w-7/12 relative bg-black aspect-video md:aspect-auto overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10 duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-102 transition-all duration-750"
                  />
                  {/* Blueprint Grid Overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                    style={{
                      backgroundImage: 'linear-gradient(to right, rgba(255,192,0,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,192,0,0.12) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                      backgroundColor: 'rgba(0, 0, 0, 0.85)',
                      mixBlendMode: 'screen'
                    }}
                  />
                  {/* Scanline line */}
                  <div className="absolute inset-y-0 w-[2px] bg-primary/80 shadow-[0_0_12px_#FFC000] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 sweep-line z-20" />
                </div>

                {/* Right Column: Text content */}
                <div className="w-full md:w-5/12 p-8 md:p-10 flex flex-col justify-between bg-black">
                  <div>
                    <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-primary/60 block mb-2 uppercase">
                      CASE STUDY // SMART HARDWARE & WEB
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-primary transition-colors font-sans uppercase">
                      {item.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed font-light mb-6">
                      {item.desc}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {item.tags.map((tag, ti) => (
                        <span
                          key={ti}
                          className="px-2.5 py-1 text-[9px] font-sans font-semibold tracking-wider bg-white/[0.01] border border-outline text-primary/60 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300 uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap items-center gap-5 pt-5 border-t border-outline">
                    {item.links.map((link, linkIdx) => (
                      <a
                        key={linkIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[10px] font-sans font-semibold tracking-wider text-primary/50 hover:text-primary transition-colors duration-300 uppercase"
                      >
                        <GithubIcon />
                        {link.label.replace('_REPO', '')}
                      </a>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}

          {/* OTHER PROJECTS (Grid layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.filter(p => p.index !== '01').map((item, i) => (
              <motion.div
                key={item.index}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
                className="h-full"
              >
                <TiltCard className="group premium-card rounded-none overflow-hidden relative h-full flex flex-col corner-mark border border-outline hover:border-primary/50 bg-black">
                  <div className="corner-inner" />

                  {/* Index badge */}
                  <div className="absolute top-4 left-4 z-20 pointer-events-none bg-black/80 border border-outline px-2.5 py-1 text-[8px] font-sans font-bold tracking-[0.2em] text-primary uppercase">
                    ARCHIVE // 0{item.index}
                  </div>

                  {/* Image with Blueprint scanner */}
                  <div className="aspect-[16/9] overflow-hidden relative bg-black">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10 duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-102 transition-all duration-700"
                    />
                    {/* Blueprint Grid Overlay */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                      style={{
                        backgroundImage: 'linear-gradient(to right, rgba(255,192,0,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,192,0,0.12) 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                        backgroundColor: 'rgba(0, 0, 0, 0.85)',
                        mixBlendMode: 'screen'
                      }}
                    />
                    {/* Scanline line */}
                    <div className="absolute inset-y-0 w-[2px] bg-primary/80 shadow-[0_0_12px_#FFC000] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 sweep-line z-20" />
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1 justify-between bg-black">
                    <div>
                      <h3 className="text-xl font-black text-white mb-2 group-hover:text-primary transition-colors font-sans uppercase">
                        {item.title}
                      </h3>

                      <p className="text-sm text-on-surface-variant leading-relaxed font-light mb-6">
                        {item.desc}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.tags.map((tag, ti) => (
                          <span
                            key={ti}
                            className="px-2.5 py-1 text-[9px] font-sans font-semibold tracking-wider bg-white/[0.01] border border-outline text-primary/60 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300 uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-outline">
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[10px] font-sans font-semibold tracking-wider text-primary/50 hover:text-primary transition-colors duration-300 uppercase"
                      >
                        <GithubIcon />
                        SOURCE
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
