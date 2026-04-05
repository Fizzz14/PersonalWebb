import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Database, Layout, Smartphone, CheckCircle2 } from 'lucide-react';

const hardSkills = [
  { name: 'Flutter', icon: <Smartphone size={24} />, level: 85, color: 'bg-blue-500' },
  { name: 'React JSX', icon: <Layout size={24} />, level: 90, color: 'bg-cyan-400' },
  { name: 'Laravel 11', icon: <Code2 size={24} />, level: 80, color: 'bg-red-500' },
  { name: 'MongoDB', icon: <Database size={24} />, level: 75, color: 'bg-green-500' },
  { name: 'Git', icon: <Code2 size={24} />, level: 85, color: 'bg-orange-500' },
  { name: 'JS/Dart/PHP', icon: <Code2 size={24} />, level: 88, color: 'bg-yellow-400' }
];

const softSkills = [
  "Problem Solving", "Teamwork & Collaboration", "Adaptability", 
  "Time Management", "Eager to Learn", "Communication"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="py-24 bg-graphite-900/20 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-gray-500 tracking-widest uppercase mb-2">02. Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Technical Skills</h3>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Hard Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {hardSkills.map((skill, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="glass-card rounded-xl p-5 group flex items-center gap-4"
              >
                <div className={`p-3 rounded-lg bg-white/5 text-gray-400 group-hover:text-white transition-colors`}>
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-medium mb-2">{skill.name}</h4>
                  <div className="w-full bg-black/50 rounded-full h-1.5 overflow-hidden">
                    <motion.div 
                      className="bg-white h-1.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col justify-center"
          >
            <h4 className="text-2xl font-semibold mb-8">Soft Skills & Personality</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-gray-500" size={20} />
                  <span className="text-gray-300">{skill}</span>
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
