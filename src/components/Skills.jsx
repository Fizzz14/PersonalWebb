import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Layout, Code2, Database, GitBranch, Cpu, Check, Server } from 'lucide-react';
import TiltCard from './TiltCard';
import TechMarquee from './TechMarquee';

const hardSkills = [
  {
    name: 'Flutter',
    icon: <Smartphone size={18} />,
    category: 'Mobile Development',
    description: 'Pengembangan aplikasi mobile lintas platform dengan performa tinggi, clean architecture, dan state management reaktif.',
    tags: ['Bloc / GetX', 'Clean Arch', 'Method Channel', 'App Performance']
  },
  {
    name: 'React JSX',
    icon: <Layout size={18} />,
    category: 'Frontend Development',
    description: 'Pengembangan web app modern, responsive, dengan komponen modular, server components, dan manajemen state efisien.',
    tags: ['React 19', 'Next.js', 'Redux / Zustand', 'Web Performance']
  },
  {
    name: 'Node.js & Express',
    icon: <Server size={18} />,
    category: 'Backend Development',
    description: 'Pembangunan RESTful API berkinerja tinggi, autentikasi aman JWT, middleware, dan query basis data SQL teroptimasi.',
    tags: ['Node.js', 'Express.js', 'MySQL / SQL', 'RESTful API']
  },
  {
    name: 'Laravel 11',
    icon: <Code2 size={18} />,
    category: 'Backend Framework',
    description: 'Membangun arsitektur server-side yang aman, scalable, relasi database kompleks, dan RESTful API terstruktur.',
    tags: ['Eloquent ORM', 'REST API', 'Sanctum / JWT', 'Microservices']
  },
  {
    name: 'MongoDB',
    icon: <Database size={18} />,
    category: 'NoSQL Database',
    description: 'Pemodelan data NoSQL performa tinggi, optimasi query, indexing terstruktur, dan manajemen kluster database.',
    tags: ['Aggregation', 'Indexing', 'Mongoose', 'Database Modeling']
  },
  {
    name: 'Git & GitHub',
    icon: <GitBranch size={18} />,
    category: 'Version Control',
    description: 'Manajemen version control tingkat lanjut, branching flow (GitFlow), CI/CD, dan kolaborasi repositori modern.',
    tags: ['GitFlow', 'Actions / CI-CD', 'Code Review', 'Monorepo']
  },
  {
    name: 'JS / Dart / PHP',
    icon: <Cpu size={18} />,
    category: 'Core Languages',
    description: 'Penguasaan logika pemrograman, paradigma OOP & fungsional, dan algoritma efisien lintas bahasa pemrograman utama.',
    tags: ['JavaScript (ESNext)', 'Dart OOP', 'PHP 8.x', 'Data Structures']
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
  return (
    <section id="skills" className="py-32 bg-black border-y border-outline relative overflow-hidden select-none">
      
      {/* Infinite technology ribbon marquee */}
      <TechMarquee />

      <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left Column: Pinned Header */}
        <div className="lg:col-span-3 lg:sticky lg:top-32 self-start">
          <div className="premium-divider mb-3">
            <span className="tech-label">EXPERTISE</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white uppercase leading-none font-sans">
            SKILLS & <span className="text-primary">EXPERTISE</span>
          </h2>
          <div className="h-[1px] w-12 bg-primary/30 mt-6 hidden lg:block" />
        </div>

        {/* Right Column: Scrollable Content Grid */}
        <div className="lg:col-span-9 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Hard Skills Showcase */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {hardSkills.map((skill, i) => (
              <motion.div key={i} variants={fadeUp} className="h-full">
                <TiltCard className="h-full premium-card rounded-none p-6 group cursor-default flex flex-col justify-between border border-outline transition-all duration-300">
                  <div>
                    {/* Header Card */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-none bg-white/[0.02] text-primary group-hover:text-black group-hover:bg-primary transition-all duration-300 group-hover:shadow-[0_0_20px_#FFC000]">
                          {skill.icon}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors font-sans">
                            {skill.name}
                          </p>
                          <p className="text-[10px] font-sans text-neutral-400 mt-0.5">
                            {skill.category}
                          </p>
                        </div>
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
                        className="text-[9px] font-sans font-semibold px-2 py-0.5 rounded-none bg-white/[0.02] border border-outline text-neutral-300 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300 uppercase tracking-wider"
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
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4 h-full"
          >
            <TiltCard className="glass-card rounded-none p-7 h-full flex flex-col justify-center border border-outline">
              <div className="mb-7 flex items-center justify-between border-b border-outline pb-4">
                <h4 className="text-base font-bold tracking-tight text-white uppercase font-sans">Core Strengths</h4>
                <span className="text-[10px] font-sans font-semibold text-primary/60 tracking-wider uppercase">HIGHLIGHTS</span>
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
