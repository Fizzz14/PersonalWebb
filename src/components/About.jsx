import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import profileImg from '../assets/hapis1.jpeg';

const cards = [
  { Icon: MapPin, label: 'Location', value: 'Ciderum, Bogor, INA' },
  { Icon: GraduationCap, label: 'Education', value: 'SMK Wikrama Bogor' },
  { Icon: Briefcase, label: 'Experience', value: 'Software Internships' },
  { Icon: User, label: 'Focus', value: 'Architecture & UX' },
];

const About = () => {
  return (
    <section id="about" className="py-32 bg-black border-y border-outline relative">
      <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left Column: Pinned Header */}
        <div className="lg:col-span-3 lg:sticky lg:top-32 self-start">
          <div className="premium-divider mb-3">
            <span className="tech-label">ABOUT</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white uppercase leading-none font-sans">
            ABOUT <span className="text-primary">ME</span>
          </h2>
          <div className="h-[1px] w-12 bg-primary/30 mt-6 hidden lg:block" />
        </div>

        {/* Right Column: Scrollable Content */}
        <div className="lg:col-span-9">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row gap-12 items-start"
          >
            {/* Photo */}
            <div className="w-full md:w-5/12 flex justify-center shrink-0">
              <div className="relative w-full max-w-[340px] aspect-square rounded-none group">
                {/* Frame */}
                <div className="relative w-full h-full overflow-hidden border border-outline bg-neutral-900 shadow-[0_0_60px_-15px_rgba(0,0,0,1)]">
                  <img
                    src={profileImg}
                    alt="Muhammad Hafizh Rahmat"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                  {/* Subtle Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-7/12 space-y-7">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-snug">
                  Muhammad Hafizh Rahmat
                </h3>
                <p className="text-[10px] font-sans font-semibold text-primary tracking-[0.18em] mt-1.5 uppercase">
                  Software & Mobile Dev Student
                </p>
              </div>

              <div className="text-on-surface-variant space-y-5 text-sm md:text-base leading-[1.85] font-light">
                <p>
                  Saya adalah pelajar berusia{' '}
                  <span className="text-white font-medium">17 tahun</span>{' '}
                  dari Ciderum, Bogor. Saat ini menempuh pendidikan di{' '}
                  <span className="text-[#FFC000] underline underline-offset-4 decoration-[#FFC000]/45 font-medium">
                    SMK Wikrama Bogor
                  </span>
                  , tempat saya mengasah keahlian rekayasa perangkat lunak dan mobile development.
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
                    className="flex items-center gap-3.5 p-4 border border-outline bg-[#080808] hover:bg-white/[0.03] hover:border-primary/50 hover:shadow-[0_0_25px_rgba(255,192,0,0.12)] transition-all duration-300 group cursor-default"
                  >
                    <div className="p-2 bg-white/[0.02] text-primary/70 group-hover:text-primary group-hover:bg-primary/10 group-hover:shadow-[0_0_15px_rgba(255,192,0,0.3)] transition-all duration-300">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-[9px] font-sans font-semibold text-primary/50 tracking-[0.2em] uppercase">{label}</p>
                      <p className="text-sm font-medium text-on-surface-variant group-hover:text-white transition-colors mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
