import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import TiltCard from './TiltCard';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
  </svg>
);

import aranyaImg from '../assets/Screenshot 2026-04-05 213034.png';
import imgPOS    from '../assets/Screenshot 2026-05-18 190749.png';
import imgAww    from '../assets/Screenshot 2026-05-18 190735.png';
import imgHotel  from '../assets/Screenshot 2026-05-18 190659.png';

const projects = [
  {
    index: '01',
    title: 'WeatherApp',
    desc: 'Aplikasi web prediksi cuaca akurat dengan informasi real-time, deteksi lokasi otomatis, serta detail kelembapan dan kecepatan angin.',
    tags: ['React', 'Tailwind CSS', 'OpenWeather API'],
    image: imgPOS,
    github: 'https://github.com/Fizzz14/WeatherApp',
    code: 'WEATHER.APP',
  },
  {
    index: '02',
    title: 'Louis Vuitton Clone',
    desc: 'Landing page bergaya elegan mereplikasi antarmuka website Louis Vuitton dengan responsive frame dan animasi premium.',
    tags: ['Laravel 11', 'MySQL', 'REST API'],
    image: imgAww,
    github: 'https://github.com/Fizzz14/Louis-Vuitton',
    code: 'LUXURY.LV',
  },
  {
    index: '03',
    title: 'UK Carbon Tracker',
    desc: 'Aplikasi web pemantau intensitas karbon pada pemakaian energi listrik di Britania Raya secara real-time.',
    tags: ['React', 'JavaScript', 'Fetch API'],
    image: imgHotel,
    github: 'https://github.com/Fizzz14/UK-Carbon-Tracker',
    code: 'CARBON.UK',
  },
  {
    index: '04',
    title: 'Aranya Coffee',
    desc: 'Website modern untuk coffee shop lokal Aranya Coffee — menampilkan menu, galeri, dan info kontak dengan desain elegan dan responsif.',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    image: aranyaImg,
    github: 'https://github.com/Fizzz14/AranyaCoffee',
    code: 'ARANYA.COFFEE',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-32 bg-transparent relative">
      <div className="section-container">

        {/* Header */}
        <div className="mb-20">
          <div className="premium-divider mb-3">
            <span className="tech-label">[ 04 // WORKS ]</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            Featured <span className="text-white/20">Projects</span>
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="h-full"
            >
              <TiltCard className="group premium-card rounded-2xl overflow-hidden relative h-full flex flex-col corner-mark">
                <div className="corner-inner" />

                {/* Index badge */}
                <div className="absolute top-4 left-4 z-20 pointer-events-none bg-black/70 border border-white/[0.07] px-2.5 py-1 rounded text-[8px] font-mono tracking-widest text-white/35 uppercase">
                  PRJ_{item.index} // {item.code}
                </div>

                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden relative bg-black">
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/15 transition-colors z-10 duration-600" />
                  {/* Gradient bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white/85 mb-2 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-white/35 leading-relaxed font-light flex-1 mb-5">
                    {item.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="px-2.5 py-1 text-[10px] font-mono rounded-full bg-white/[0.03] border border-white/[0.06] text-white/35 group-hover:text-white/60 group-hover:border-white/[0.12] transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-5 pt-4 border-t border-white/[0.05]">
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[11px] font-mono text-white/30 hover:text-white/80 transition-colors duration-300"
                    >
                      <GithubIcon />
                      SOURCE_CODE
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
