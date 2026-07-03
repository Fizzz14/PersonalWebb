import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Smartphone, Layout, Code2, Database, GitBranch, Cpu, Check, Server } from 'lucide-react';
import TiltCard from './TiltCard';
import TechMarquee from './TechMarquee';

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
    <section id="skills" className="py-32 bg-transparent relative overflow-hidden select-none">
      
      {/* Infinite technology ribbon marquee */}
      <TechMarquee />

      <div className="section-container">
        {/* Header */}
        <div className="mb-20">
          <div className="premium-divider mb-3">
            <span className="tech-label">[ EXPERTISE ]</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
            CORE <span className="text-primary">ARCHITECTURE</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Hard Skills Showcase */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-8 isometric-card-container grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {hardSkills.map((skill, i) => (
              <motion.div key={i} variants={fadeUp} className="h-full">
                <TiltCard className="h-full skew-grid-item bg-black rounded-none p-6 group cursor-default flex flex-col justify-between border border-outline hover:border-primary/50">
                  <div>
                    {/* Header Card */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-none bg-white/[0.02] text-primary group-hover:text-black group-hover:bg-primary transition-all duration-300">
                          {skill.icon}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors font-sans">
                            {skill.name}
                          </p>
                          <p className="text-[9px] font-sans font-semibold text-primary/45 tracking-[0.15em] mt-0.5">
                            {skill.code}
                          </p>
                        </div>
                      </div>
                      
                      {/* Status indicator */}
                      <div className="flex items-center gap-1.5 bg-white/[0.01] border border-outline px-2.5 py-1 text-[8px] font-sans font-bold tracking-[0.15em] text-primary group-hover:text-white group-hover:border-primary transition-all duration-300 uppercase">
                        <span className="w-1.5 h-1.5 bg-primary inline-block rotate-45 group-hover:glow-active-dot" />
                        {skill.status}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-on-surface-variant group-hover:text-white leading-relaxed font-light transition-colors duration-300 mb-6 font-sans">
                      {skill.description}
                    </p>
                  </div>

                  {/* Core competencies tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-outline group-hover:border-primary/20 transition-colors duration-300">
                    {skill.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-sans font-semibold px-2 py-0.5 rounded-none bg-white/[0.01] border border-outline text-primary/60 group-hover:text-primary group-hover:bg-primary/5 group-hover:border-primary/30 transition-all duration-300 uppercase tracking-wider"
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
            <TiltCard className="glass-card rounded-none p-7 bg-black corner-mark h-full flex flex-col justify-center border border-outline hover:border-primary/50">
              <div className="corner-inner" />

              <div className="mb-7 flex items-center justify-between border-b border-outline pb-4">
                <h4 className="text-base font-black tracking-tight text-white uppercase font-sans">Core Strengths</h4>
                <span className="text-[9px] font-sans font-bold text-primary/40 tracking-[0.15em] uppercase">[ STRENGTHS ]</span>
              </div>

              <div className="space-y-5">
                {softSkills.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex items-center gap-3.5 group cursor-default"
                  >
                    <div className="shrink-0 p-1 rounded-none bg-white/[0.01] border border-outline text-primary/40 group-hover:text-primary group-hover:border-primary group-hover:bg-white/[0.04] transition-all duration-300">
                      <Check size={10} />
                    </div>
                    <span className="text-sm text-on-surface-variant font-light group-hover:text-white transition-colors duration-300 font-sans">
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
