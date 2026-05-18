import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// Import PDF certificate files
import pdfDataAnalysis from '../assets/certificate_1758072556_68ca0eec8bfe6.pdf';
import pdfJS from '../assets/certificate_1758072610_68ca0f22c0180.pdf';
import pdfIGDX from '../assets/certificate_1758072711_68ca0f87755f7.pdf';
import pdfWeb from '../assets/certificate_1758072767_68ca0fbfa59a5.pdf';
import pdfAI from '../assets/certificate_1759302043_68dcd19bd2da3.pdf';

// Import certificate preview images (yang di-request user, nyamperin assets baru)
import certImg1 from '../assets/certif1.png';
import certImg2 from '../assets/certif2.png';
import certImg3 from '../assets/certif3.png';
import certImg4 from '../assets/certif4.png';
import certImg5 from '../assets/certif5.png';
import certImg6 from '../assets/certif6.png';
import certImg7 from '../assets/certif7.png';

const certificates = [
  {
    title: 'Belajar Dasar AI',
    issuer: 'Dicoding',
    date: '30 September 2025',
    pdf: pdfAI,
    image: certImg1,
  },
  {
    title: 'Creating Your Own Digital World',
    issuer: 'CV Sentra Bisnis Wikrama',
    date: '27 April 2024',
    pdf: certImg2, // Fallback ke gambar jika tidak ada PDF-nya
    image: certImg2,
  },
  {
    title: 'Express Course',
    issuer: 'Code.org',
    date: '2021',
    pdf: certImg3, // Fallback ke gambar jika tidak ada PDF-nya
    image: certImg3,
  },
  {
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding',
    date: '04 November 2024',
    pdf: pdfWeb,
    image: certImg4,
  },
  {
    title: 'Career Guidance For Aspiring Game Developer',
    issuer: 'Kementerian Komunikasi dan Informatika',
    date: '18 Desember 2024',
    pdf: pdfIGDX,
    image: certImg5,
  },
  {
    title: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding',
    date: '05 Januari 2025',
    pdf: pdfJS,
    image: certImg6,
  },
  {
    title: 'Data Analysis Fundamental',
    issuer: 'MySkill',
    date: '04 Agustus 2025',
    pdf: pdfDataAnalysis,
    image: certImg7,
  },
];

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certificates" className="py-24 bg-graphite-900/20 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-gray-500 tracking-widest uppercase mb-2">05. Achievements</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Certificates</h3>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.a
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group glass-card rounded-2xl overflow-hidden relative flex flex-col cursor-pointer"
            >
              {/* Image Thumbnail */}
              <div className="aspect-[4/3] overflow-hidden relative bg-white">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay link icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="bg-black/60 p-3 rounded-full backdrop-blur-sm">
                    <ExternalLink size={24} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 bg-black/80 md:bg-transparent md:backdrop-blur-none group-hover:bg-black/90 transition-colors duration-500">
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h4>
                <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                <p className="text-gray-500 text-xs font-mono">{cert.date}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
