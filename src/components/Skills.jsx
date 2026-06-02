import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Database, Layout, Smartphone, CheckCircle } from 'lucide-react';

const hardSkills = [
  { name: 'Flutter', icon: <Smartphone size={18} />, level: 85, code: 'DART // MOBILE' },
  { name: 'React JSX', icon: <Layout size={18} />, level: 90, code: 'JS // REACT_19' },
  { name: 'Laravel 11', icon: <Code2 size={18} />, level: 80, code: 'PHP // MVC_API' },
  { name: 'MongoDB', icon: <Database size={18} />, level: 75, code: 'DB // NOSQL' },
  { name: 'Git', icon: <Code2 size={18} />, level: 85, code: 'VCS // GITHUB' },
  { name: 'JS / Dart / PHP', icon: <Code2 size={18} />, level: 88, code: 'CORE // LANGS' },
];

const softSkills = [
  'Advanced Problem Solving',
  'Teamwork & Collaboration',
  'Flexible Adaptability',
  'Strict Time Management',
  'Eager to Learn & Grow',
  'Clear Tech Communication',
];

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-32 bg-transparent relative">
      <div className="section-container">

        {/* Header */}
        <div className="mb-20">
          <div className="premium-divider mb-3">
            <span className="tech-label">[ 02 // EXPERTISE ]</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            Technical <span className="text-white/20">Skills</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Hard Skills */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {hardSkills.map((skill, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="premium-card rounded-2xl p-6 group cursor-default"
              >
                {/* Header row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-white/[0.04] text-white/40 group-hover:text-white/80 group-hover:bg-white/[0.07] transition-all duration-300">
                      {skill.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white/85 group-hover:text-white transition-colors">{skill.name}</p>
                      <p className="text-[9px] font-mono text-white/25 tracking-widest mt-0.5">{skill.code}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-white/30 bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="skill-bar-track">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.07 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-4 glass-card rounded-2xl p-7 corner-mark self-stretch flex flex-col justify-center"
          >
            <div className="corner-inner" />

            <div className="mb-7 flex items-center justify-between">
              <h4 className="text-base font-bold tracking-tight text-white/85">Core Strengths</h4>
              <span className="text-[8px] font-mono text-white/15 tracking-widest">[ ENG // 0xCC ]</span>
            </div>

            <div className="space-y-5">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <div className="shrink-0 w-1 h-1 rounded-full bg-white/30 group-hover:bg-white/80 transition-colors duration-300" />
                  <span className="text-sm text-white/40 font-light group-hover:text-white/75 transition-colors duration-300">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
