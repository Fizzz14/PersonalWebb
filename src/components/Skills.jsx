import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Smartphone, Layout, Code2, Database, GitBranch, Cpu, Check, Server } from 'lucide-react';
import TiltCard from './TiltCard';

const hardSkills = [
  {
    name: 'Flutter',
    icon: <Smartphone size={18} />,
    code: 'DART // MOBILE',
    status: 'PRODUCTION READY',
    description: 'Arsitektur aplikasi mobile lintas platform dengan performa tinggi, native bridge, dan reactive state management.',
    tags: ['Bloc / GetX', 'Clean Arch', 'Method Channel', 'App Performance']
  },
  {
    name: 'React JSX',
    icon: <Layout size={18} />,
    code: 'JS // REACT_19',
    status: 'ENTERPRISE LEVEL',
    description: 'Pengembangan web app modern, responsive, dengan rendering optimis, server components, dan state management efisien.',
    tags: ['React 19', 'Next.js', 'Redux / Zustand', 'Web Performance']
  },
  {
    name: 'Node.js & Express',
    icon: <Server size={18} />,
    code: 'JS // NODE_BACKEND',
    status: 'PRODUCTION READY',
    description: 'Pembangunan RESTful API berkinerja tinggi, otentikasi aman JWT, manajemen session, integrasi middleware, dan query SQL teroptimasi.',
    tags: ['Node.js', 'Express.js', 'MySQL / SQL', 'RESTful API']
  },
  {
    name: 'Laravel 11',
    icon: <Code2 size={18} />,
    code: 'PHP // MVC_API',
    status: 'ROBUST BACKEND',
    description: 'Membangun arsitektur server-side yang aman, scalable, database relations kompleks, dan RESTful/GraphQL API.',
    tags: ['Eloquent ORM', 'REST API', 'Sanctum / JWT', 'Microservices']
  },
  {
    name: 'MongoDB',
    icon: <Database size={18} />,
    code: 'DB // NOSQL',
    status: 'SCALABLE DATA',
    description: 'Pemodelan data NoSQL performa tinggi, optimasi query, indexing terstruktur, dan agregasi data kompleks.',
    tags: ['Aggregation', 'Indexing', 'Mongoose', 'Cluster Mgmt']
  },
  {
    name: 'Git',
    icon: <GitBranch size={18} />,
    code: 'VCS // GITHUB',
    status: 'COLLABORATIVE',
    description: 'Manajemen version control tingkat lanjut, branching flow (GitFlow), CI/CD, dan kolaborasi tim yang mulus.',
    tags: ['GitFlow', 'Actions / CI-CD', 'Code Review', 'Monorepo']
  },
  {
    name: 'JS / Dart / PHP',
    icon: <Cpu size={18} />,
    code: 'CORE // LANGS',
    status: 'POLYGLOT CORE',
    description: 'Penguasaan mendalam logika pemrograman, paradigma OOP & fungsional, dan algoritma efisien lintas bahasa core.',
    tags: ['ESNext JS', 'Dart OOP', 'Modern PHP 8.x', 'Data Structures']
  },
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

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Hard Skills Showcase */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {hardSkills.map((skill, i) => (
              <motion.div key={i} variants={fadeUp} className="h-full">
                <TiltCard className="h-full premium-card rounded-2xl p-6 group cursor-default flex flex-col justify-between">
                  <div>
                    {/* Header Card */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-white/[0.04] text-white/40 group-hover:text-white group-hover:bg-white/[0.08] group-hover:scale-110 transition-all duration-300">
                          {skill.icon}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white/85 group-hover:text-white transition-colors">
                            {skill.name}
                          </p>
                          <p className="text-[9px] font-mono text-white/25 tracking-widest mt-0.5">
                            {skill.code}
                          </p>
                        </div>
                      </div>
                      
                      {/* Status indicator */}
                      <div className="flex items-center gap-1.5 bg-white/[0.02] border border-white/[0.06] px-2.5 py-1 rounded text-[8px] font-mono tracking-wider text-white/40 group-hover:text-white/70 group-hover:border-white/10 transition-all duration-300">
                        <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-white group-hover:glow-active-dot animate-pulse" />
                        {skill.status}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-white/40 group-hover:text-white/70 leading-relaxed font-light transition-colors duration-300 mb-6">
                      {skill.description}
                    </p>
                  </div>

                  {/* Core competencies tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.03] group-hover:border-white/[0.06] transition-colors duration-300">
                    {skill.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.02] border border-white/[0.04] text-white/35 group-hover:text-white/70 group-hover:bg-white/[0.04] group-hover:border-white/[0.08] transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Soft Skills (Core Strengths) */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-4 h-full"
          >
            <TiltCard className="glass-card rounded-2xl p-7 corner-mark h-full flex flex-col justify-center">
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
                    className="flex items-center gap-3.5 group cursor-default"
                  >
                    <div className="shrink-0 p-1 rounded-md bg-white/[0.02] border border-white/[0.06] text-white/20 group-hover:text-white group-hover:border-white/20 group-hover:bg-white/[0.06] transition-all duration-300">
                      <Check size={10} />
                    </div>
                    <span className="text-sm text-white/40 font-light group-hover:text-white/75 transition-colors duration-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
