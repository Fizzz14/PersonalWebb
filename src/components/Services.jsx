import React from 'react';
import { motion } from 'framer-motion';

const specializations = [
  {
    num: '01',
    title: 'BACKEND DEVELOPMENT',
    subtitle: 'Node.js, Express & Laravel',
    desc: 'Membangun arsitektur server-side yang scalable, RESTful API terstruktur, keamanan autentikasi JWT, dan integrasi backend yang andal.',
    highlight: false,
  },
  {
    num: '02',
    title: 'MOBILE & WEB APPS',
    subtitle: 'Flutter & React',
    desc: 'Pengembangan aplikasi mobile lintas platform dan aplikasi web modern yang responsif, cepat, serta nyaman digunakan pengguna.',
    highlight: false,
  },
  {
    num: '03',
    title: 'DATABASE ARCHITECTURE',
    subtitle: 'MySQL & MongoDB',
    desc: 'Perancangan skema basis data relasional dan NoSQL yang terstruktur, optimasi query, efisiensi indexing, dan pemodelan data bersih.',
    highlight: false,
  },
  {
    num: '04',
    title: 'UI/UX DESIGN',
    subtitle: 'Figma & Prototyping',
    desc: 'Merancang desain antarmuka modern yang berfokus pada kemudahan pengguna (user-centric), hierarki visual elegan, dan konsistensi sistem desain.',
    highlight: true,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-black relative select-none">
      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <div className="premium-divider mb-3">
            <span className="tech-label">SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
            CORE <span className="text-primary">SERVICES</span>
          </h2>
        </div>

        {/* Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializations.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`p-8 border rounded-none flex flex-col justify-between min-h-[320px] transition-all duration-500 cursor-default relative overflow-hidden group ${
                spec.highlight
                  ? 'bg-primary text-black border-primary shadow-[0_20px_50px_rgba(255,192,0,0.15)]'
                  : 'bg-white/[0.01] border-outline text-white hover:border-primary/50 hover:bg-white/[0.03]'
              }`}
            >
              {/* Card Glare Effect */}
              {!spec.highlight && <div className="card-glare" />}

              <div>
                {/* Card Top Row */}
                <div className="flex justify-between items-start mb-6">
                  <span className={`text-[10px] font-sans font-bold tracking-[0.25em] ${
                    spec.highlight ? 'text-black/50' : 'text-primary/50'
                  }`}>
                    SPECIALIZATION
                  </span>
                  <span className={`text-2xl font-black tracking-tighter ${
                    spec.highlight ? 'text-black/30' : 'text-outline/40 group-hover:text-primary/30'
                  } transition-colors`}>
                    {spec.num}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg font-black tracking-tight mb-1 uppercase font-sans">
                  {spec.title}
                </h3>
                <p className={`text-[10px] font-semibold tracking-widest uppercase mb-4 ${
                  spec.highlight ? 'text-black/75' : 'text-primary/70'
                }`}>
                  {spec.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className={`text-[13px] leading-relaxed font-light ${
                spec.highlight ? 'text-black/85' : 'text-on-surface-variant'
              }`}>
                {spec.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
