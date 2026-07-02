import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import profileImg from '../assets/hapis1.jpeg';

const cards = [
  { Icon: MapPin, label: 'Location', value: 'Ciderum, Bogor, INA' },
  { Icon: GraduationCap, label: 'Education', value: 'SMK Wikrama Bogor' },
  { Icon: Briefcase, label: 'Experience', value: 'Software Internships' },
  { Icon: User, label: 'Focus', value: 'Architecture & UX' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-32 bg-transparent relative">
      <div className="section-container">

        {/* Header */}
        <div className="mb-20">
          <div className="premium-divider mb-3">
            <span className="tech-label">[ PROFILE ]</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row gap-16 items-start"
        >
          {/* Photo */}
          <div className="w-full md:w-5/12 flex justify-center shrink-0">
            <div className="relative w-full max-w-[340px] aspect-square rounded-none corner-mark group">
              <div className="corner-inner" />

              {/* Tag */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none bg-black/70 border border-outline px-2.5 py-1 text-[8px] font-mono tracking-widest text-primary uppercase">
                IMG_0823 // ENCRYPTED
              </div>

              {/* Frame */}
              <div className="relative w-full h-full overflow-hidden border border-outline bg-neutral-900 shadow-[0_0_60px_-15px_rgba(0,0,0,1)]">
                <img
                  src={profileImg}
                  alt="Muhammad Hafizh Rahmat"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bottom ref tag */}
              <div className="absolute -bottom-4 right-3 z-20 pointer-events-none font-mono text-[8px] tracking-widest text-primary/30">
                REF_ID // 17-PPLG-WIKRAMA
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-7/12 space-y-7">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-snug">
                Muhammad Hafizh Rahmat
              </h3>
              <p className="text-[10px] font-mono text-primary tracking-widest mt-1.5 uppercase">
                // Software & Game Dev Student
              </p>
            </div>

            <div className="text-on-surface-variant space-y-5 text-sm md:text-base leading-[1.85] font-light">
              <p>
                Saya adalah pelajar berusia{' '}
                <span className="text-white font-medium">17 tahun</span>{' '}
                dari Ciderum, Bogor. Saat ini menempuh pendidikan di{' '}
                <span className="text-primary underline underline-offset-4 decoration-primary/45 font-medium">
                  SMK Wikrama Bogor
                </span>
                , tempat saya mengasah keahlian rekayasa perangkat lunak dan game development.
              </p>
              <p>
                Meskipun berstatus siswa, saya telah melangkah lebih awal di dunia industri
                melalui internship pengembangan software skala profesional, melatih kesiapan
                dalam memecahkan masalah kompleks dan merancang arsitektur kode modern.
              </p>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              {cards.map(({ Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3.5 p-4 border border-outline bg-white/[0.01] hover:bg-white/[0.03] hover:border-primary/30 transition-all duration-300 group cursor-default"
                >
                  <div className="p-2 bg-white/[0.03] text-primary/60 group-hover:text-primary group-hover:bg-white/[0.07] transition-all duration-300">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-primary/40 tracking-widest uppercase">{label}</p>
                    <p className="text-sm font-medium text-on-surface-variant group-hover:text-white transition-colors mt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
