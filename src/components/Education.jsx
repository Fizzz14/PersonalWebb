import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const educationData = [
  {
    year: '2024 — Sekarang',
    title: 'PPLG SMK Wikrama Bogor',
    subtitle: 'Pengembangan Perangkat Lunak dan Gim',
    desc: 'Fokus mendalam pada rekayasa perangkat lunak modern (Web, Mobile & API architecture), pemodelan basis data relasional/NoSQL, perancangan algoritma, serta fundamental pengembangan game interaktif.',
    code: 'SYS // WIKRAMA.EDU',
    active: true,
  },
  {
    year: '2021 — 2024',
    title: 'SMP Negeri 2 Ciawi',
    subtitle: 'Pendidikan Dasar',
    desc: 'Mengembangkan landasan logika matematika terapan, algoritma dasar, serta memperkokoh antusiasme awal di bidang teknologi informasi.',
    code: 'SYS // CIAWI_2.EDU',
    active: false,
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="py-32 bg-transparent relative">
      <div className="section-container">

        {/* Header */}
        <div className="mb-20">
          <div className="premium-divider mb-3">
            <span className="tech-label">[ JOURNEY ]</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">
            Academic <span className="text-primary">Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative max-w-4xl pl-6 md:pl-10 space-y-12">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,192,0,0.15) 15%, rgba(255,192,0,0.08) 85%, transparent)' }}
          />

          {educationData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.18 }}
              className="relative group animate-none"
            >
              {/* Node dot (Gold & Sharp) */}
              {item.active ? (
                <div className="absolute -left-[27px] md:-left-[35px] top-4 flex items-center justify-center w-5 h-5 z-10">
                  <div className="absolute w-full h-full bg-primary/10 glow-active-dot" />
                  <div
                    className="absolute w-2.5 h-2.5 bg-primary rotate-45"
                    style={{ boxShadow: '0 0 8px rgba(255,192,0,0.9), 0 0 20px rgba(255,192,0,0.4)' }}
                  />
                </div>
              ) : (
                <div className="absolute -left-[23px] md:-left-[31px] top-4.5 w-3 h-3 border border-primary/30 bg-black rotate-45 group-hover:border-primary transition-all duration-300 z-10" />
              )}

              {/* Card */}
              <div className="premium-card rounded-none p-7 md:p-8 border border-outline">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-4">
                  <div>
                    <span className="text-[10px] font-mono text-primary/50 tracking-widest block mb-1.5">
                      {item.year}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant mt-1 font-light">{item.subtitle}</p>
                  </div>
                  <span className="text-[9px] font-mono text-primary tracking-widest bg-white/[0.01] border border-outline px-2.5 py-1 rounded-none self-start shrink-0">
                    {item.code}
                  </span>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
