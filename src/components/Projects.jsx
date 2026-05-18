import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// Project screenshots dari assets
import aranyaImg from '../assets/Screenshot 2026-04-05 213034.png';
import imgPOS from '../assets/Screenshot 2026-05-18 190749.png';
import imgAww from '../assets/Screenshot 2026-05-18 190735.png';
import imgHotel from '../assets/Screenshot 2026-05-18 190659.png';

const projects = [
  {
    title: 'WeatherApp',
    desc: 'Aplikasi web prediksi cuaca akurat dengan informasi real-time dan deteksi lokasi, beserta detail kelembapan dan kecepatan angin.',
    tags: ['React', 'Tailwind CSS', 'OpenWeather API'],
    image: imgPOS,
    github: 'https://github.com/Fizzz14/WeatherApp', 
    live: '#',
  },
  {
    title: 'Louis Vuitton Clone',
    desc: 'Landing page bergaya elegan untuk mereplikasi halaman antarmuka website Louis Vuitton dengan responsive frame.',
    tags: ['Laravel 11', 'MySQL', 'REST API'],
    image: imgAww,
    github: 'https://github.com/Fizzz14/Louis-Vuitton',
    live: '#',
  },
  {
    title: 'UK Carbon Tracker',
    desc: 'Aplikasi web pemantau intensitas karbon pada pemakaian energi listrik di Britania Raya (UK) secara real-time.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Fetch API'],
    image: imgHotel,
    github: 'https://github.com/Fizzz14/UK-Carbon-Tracker', 
    live: '#',
  },
  {
    title: 'Aranya Coffee',
    desc: 'Website modern untuk coffee shop lokal Aranya Coffee. Menampilkan menu, galeri, dan info kontak dengan desain elegan dan responsif.',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    image: aranyaImg,
    github: 'https://github.com/Fizzz14/AranyaCoffee', 
    live: '#',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 bg-graphite-900/20 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-gray-500 tracking-widest uppercase mb-2">04. Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h3>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group glass-card rounded-2xl overflow-hidden relative"
            >
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10 duration-500" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Content */}
              <div className="p-8 relative z-20 bg-black/80 md:bg-transparent md:backdrop-blur-none group-hover:bg-black/90 transition-colors duration-500">
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                <p className="text-gray-400 mb-6 line-clamp-3 text-sm leading-relaxed">{item.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {/* taro link github di href di bawah ini */}
                  <a href={item.github || '#'} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
