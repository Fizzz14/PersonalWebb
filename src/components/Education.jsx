import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    year: '2024 — Sekarang',
    title: 'PPLG',
    school: 'SMK WIKRAMA BOGOR',
    subtitle: 'Pengembangan Perangkat Lunak dan Gim',
    desc: 'Fokus mendalam pada rekayasa perangkat lunak modern (Web, Mobile & API architecture), pemodelan basis data relasional/NoSQL, perancangan algoritma, serta pengembangan aplikasi mobile berkinerja tinggi.',
    badge: 'Vocational High School',
    active: true,
  },
  {
    year: '2021 — 2024',
    title: '',
    school: 'SMP NEGERI 2 CIAWI',
    subtitle: 'Pendidikan Dasar',
    desc: 'Mengembangkan landasan logika matematika terapan, algoritma dasar, serta memperkokoh antusiasme awal di bidang teknologi informasi.',
    badge: 'Junior High School',
    active: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-32 bg-black border-y border-outline relative overflow-hidden select-none">
      
      {/* Ambient background gold glow */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[450px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 192, 0, 0.05) 0%, rgba(255, 192, 0, 0.01) 40%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">

        {/* Left Column: Pinned Header */}
        <div className="lg:col-span-3 lg:sticky lg:top-32 self-start">
          <div className="premium-divider mb-3">
            <span className="tech-label">EDUCATION</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white uppercase leading-none font-sans">
            EDUCATION <span className="text-primary drop-shadow-[0_0_15px_rgba(255,192,0,0.4)]">HISTORY</span>
          </h2>
          <div className="h-[1px] w-12 bg-primary/40 mt-6 hidden lg:block shadow-[0_0_8px_rgba(255,192,0,0.5)]" />
        </div>

        {/* Right Column: Luminous Connected Timeline */}
        <div className="lg:col-span-9 max-w-3xl space-y-2">
          {educationData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
              className="flex items-start gap-5 md:gap-7 relative group"
            >
              {/* Timeline Track Column (Dot + Glowing Line) */}
              <div className="flex flex-col items-center self-stretch shrink-0 pt-7">
                {/* Glowing Dot */}
                {item.active ? (
                  <div className="relative flex items-center justify-center w-7 h-7 z-10">
                    <span className="absolute w-7 h-7 rounded-full bg-primary/20 animate-ping opacity-75" />
                    <span className="absolute w-5 h-5 rounded-full bg-primary/40 blur-[3px]" />
                    <span className="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_#FFC000,0_0_24px_rgba(255,192,0,0.9)]" />
                  </div>
                ) : (
                  <div className="relative flex items-center justify-center w-7 h-7 z-10">
                    <span className="w-3 h-3 rounded-full border-2 border-primary/50 bg-black shadow-[0_0_10px_rgba(255,192,0,0.25)]" />
                  </div>
                )}

                {/* Glowing Vertical Connector Line */}
                {i !== educationData.length - 1 && (
                  <div
                    className="w-[2px] flex-1 my-2"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(255, 192, 0, 0.6), rgba(255, 192, 0, 0.15))',
                      boxShadow: '0 0 10px rgba(255, 192, 0, 0.3)',
                    }}
                  />
                )}
              </div>

              {/* Card Container with Gold Accents */}
              <div className="flex-1 pb-10">
                <div
                  className={`p-7 md:p-8 rounded-none transition-all duration-400 relative overflow-hidden ${
                    item.active
                      ? 'border border-primary/45 bg-gradient-to-br from-[#1a1402] via-[#0b0b0b] to-black shadow-[0_0_35px_rgba(255,192,0,0.12)] hover:border-primary hover:shadow-[0_0_55px_rgba(255,192,0,0.22)]'
                      : 'border border-outline bg-white/[0.01] hover:bg-white/[0.025] hover:border-primary/40 hover:shadow-[0_0_30px_rgba(255,192,0,0.08)]'
                  }`}
                >
                  {/* Subtle top-right golden glow highlight */}
                  {item.active && (
                    <div
                      className="absolute -top-16 -right-16 w-36 h-36 rounded-full pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle, rgba(255, 192, 0, 0.15) 0%, transparent 70%)',
                        filter: 'blur(20px)',
                      }}
                    />
                  )}

                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-4 relative z-10">
                    <div>
                      <span className="text-[11px] font-sans font-bold text-primary tracking-wider block mb-1">
                        {item.year}
                      </span>
                      <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-primary transition-colors leading-tight uppercase font-sans">
                        {item.title ? `${item.title} ` : ''}
                        <span className="text-[#FFC000] drop-shadow-[0_0_12px_rgba(255,192,0,0.45)]">
                          {item.school}
                        </span>
                      </h3>
                      <p className="text-sm text-neutral-300 mt-1 font-light">{item.subtitle}</p>
                    </div>
                    <span
                      className={`text-[10px] font-sans font-bold px-3 py-1 rounded-none self-start shrink-0 uppercase tracking-wider ${
                        item.active
                          ? 'text-primary bg-primary/10 border border-primary/50 shadow-[0_0_15px_rgba(255,192,0,0.25)]'
                          : 'text-neutral-300 bg-white/[0.03] border border-outline'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed font-light relative z-10">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;

