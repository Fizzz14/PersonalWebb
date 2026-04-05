import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const educationData = [
  {
    year: '2024 - Sekarang',
    title: 'PPLG SMK Wikrama Bogor',
    subtitle: 'Pengembangan Perangkat Lunak dan Gim',
    desc: 'Fokus pada pengembangan perangkat lunak (web & mobile), desain database, algoritma, serta dasar-dasar pengembangan game. Aktif dalam berbagai project praktik industri.',
    active: true
  },
  {
    year: '2021 - 2024',
    title: 'SMP NEGERI 2 CIAWI',
    subtitle: 'Pendidikan Dasar',
    desc: 'Membangun dasar logika matematika dan memperdalam minat awal terhadap teknologi informasi.',
    active: false
  }
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="education" className="py-24 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-gray-500 tracking-widest uppercase mb-2">03. Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Education</h3>
        </div>

        <div ref={ref} className="relative max-w-3xl border-l border-white/10 ml-4 md:ml-6 space-y-12 pb-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              <div
                className={`absolute w-4 h-4 rounded-full border-4 border-black -left-[9px] top-1.5 transition-colors duration-300 ${item.active ? 'bg-white shadow-[0_0_10px_#fff]' : 'bg-gray-600'
                  }`}
              />
              <div className="text-sm font-mono text-gray-500 mb-2">{item.year}</div>
              <h4 className="text-2xl font-bold text-white mb-1">{item.title}</h4>
              <h5 className="text-lg text-gray-400 mb-4">{item.subtitle}</h5>
              <p className="text-gray-400 leading-relaxed max-w-2xl">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
