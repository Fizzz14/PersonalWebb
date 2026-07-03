import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import TiltCard from './TiltCard';

import pdfDataAnalysis from '../assets/certificate_1758072556_68ca0eec8bfe6.pdf';
import pdfJS           from '../assets/certificate_1758072610_68ca0f22c0180.pdf';
import pdfIGDX         from '../assets/certificate_1758072711_68ca0f87755f7.pdf';
import pdfWeb          from '../assets/certificate_1758072767_68ca0fbfa59a5.pdf';
import pdfAI           from '../assets/certificate_1759302043_68dcd19bd2da3.pdf';
import pdfSQLAI        from '../assets/certificate-dqlab.pdf';

import certImg1 from '../assets/certif1.png';
import certImg2 from '../assets/certif2.png';
import certImg3 from '../assets/certif3.png';
import certImg4 from '../assets/certif4.png';
import certImg5 from '../assets/certif5.png';
import certImg6 from '../assets/certif6.png';
import certImg7 from '../assets/certif7.png';
import certImg8 from '../assets/certif8.png';

const certificates = [
  { title: 'Guide to Learn SQL with AI at DQLab', issuer: 'DQLab',                                 date: '02 Juni 2026',      pdf: pdfSQLAI,        image: certImg8 },
  { title: 'Belajar Dasar AI',                     issuer: 'Dicoding',                              date: '30 Sep 2025',       pdf: pdfAI,           image: certImg1 },
  { title: 'Creating Your Own Digital World',      issuer: 'CV Sentra Bisnis Wikrama',              date: '27 Apr 2024',       pdf: certImg2,        image: certImg2 },
  { title: 'Express Course',                       issuer: 'Code.org',                              date: '2021',              pdf: certImg3,        image: certImg3 },
  { title: 'Belajar Dasar Pemrograman Web',        issuer: 'Dicoding',                              date: '04 Nov 2024',       pdf: pdfWeb,          image: certImg4 },
  { title: 'Career Guidance — Game Developer',     issuer: 'Kemenkominfo',                          date: '18 Des 2024',       pdf: pdfIGDX,         image: certImg5 },
  { title: 'Belajar Dasar Pemrograman JavaScript', issuer: 'Dicoding',                              date: '05 Jan 2025',       pdf: pdfJS,           image: certImg6 },
  { title: 'Data Analysis Fundamental',            issuer: 'MySkill',                               date: '04 Agu 2025',       pdf: pdfDataAnalysis, image: certImg7 },
];

const stats = [
  { value: '40+', label: 'Projects Built' },
  { value: '100%', label: 'Code Integrity' },
  { value: '10+', label: 'Core Technologies' },
  { value: '17', label: 'Years of Velocity' },
  { value: '4K+', label: 'Commits Made' },
  { value: '24/7', label: 'Automated Deployments' },
  { value: '100%', label: 'Custom Architecture' },
  { value: '0', label: 'Compromise on Quality' }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-32 bg-transparent relative">
      <div className="section-container">

        {/* Header */}
        <div className="mb-20">
          <div className="premium-divider mb-3">
            <span className="tech-label">[ ACHIEVEMENTS ]</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
            SYSTEM <span className="text-primary">RECOGNITION</span>
          </h2>
        </div>

        {/* 2x4 Metric Capabilities Dashboard Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-outline mb-16 select-none bg-black">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="border-r border-b border-outline p-6 md:p-8 flex flex-col justify-between hover:bg-white/[0.01] transition-colors duration-300"
            >
              <span className="text-3xl md:text-4xl font-black text-primary tracking-tight font-sans">
                {stat.value}
              </span>
              <span className="text-[10px] font-bold tracking-[0.18em] text-white/40 uppercase mt-2.5 font-sans leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Certificates Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              className="block h-full"
            >
              <TiltCard className="group glass-card rounded-none overflow-hidden relative flex flex-col h-full corner-mark border border-outline hover:border-primary">
                <div className="corner-inner" />

                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative bg-neutral-900">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10 duration-500" />
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700"
                  />

                  {/* Hover icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="bg-black/75 border border-primary p-3 rounded-none backdrop-blur-sm">
                      <ExternalLink size={20} className="text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 bg-black">
                  <h4 className="text-sm font-semibold text-white mb-1.5 leading-snug group-hover:text-primary transition-colors line-clamp-2 uppercase font-sans">
                    {cert.title}
                  </h4>
                  <p className="text-[11px] text-on-surface-variant mb-1 uppercase font-sans font-medium">{cert.issuer}</p>
                  <p className="text-[10px] font-sans font-semibold text-primary/60 tracking-[0.15em] mt-auto pt-2 border-t border-outline uppercase">
                    {cert.date}
                  </p>
                </div>
              </TiltCard>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
