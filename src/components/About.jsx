import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import profileImg from '../assets/hapis1.jpeg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-16 items-center"
        >
          {/* Image Side */}
          <div className="w-full md:w-5/12">
            <div className="relative group">
              <div className="absolute inset-0 bg-white/10 translate-x-4 translate-y-4 rounded-xl transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
              <div className="relative aspect-square overflow-hidden rounded-xl bg-graphite-900 border border-white/10 flex items-center justify-center">
                <img 
                  src={profileImg} 
                  alt="Muhammad Hafizh Rahmat" 
                  className="w-full h-full object-cover grayscale mix-blend-luminosity hover:mix-blend-normal hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-7/12 space-y-6">
            <div>
              <h2 className="text-sm font-mono text-gray-500 tracking-widest uppercase mb-2">01. Tentang Saya</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Halo, saya Muhammad Hafizh Rahmat.</h3>
            </div>

            <div className="text-gray-400 space-y-4 text-lg leading-relaxed">
              <p>
                Saya adalah pelajar berusia 17 tahun dari Ciderum, Bogor. Saat ini menempuh pendidikan di <span className="text-white">SMK Wikrama Bogor</span>, tempat saya mengembangkan passion di dunia software dan game development.
              </p>
              <p>
                Meskipun masih berstatus siswa, saya telah mengumpulkan pengalaman berharga melalui internship di industri perhotelan dan software development, yang membentuk pemahaman saya tentang implementasi teknologi di dunia nyata.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-gray-500" size={20} />
                <span className="text-gray-300">Ciderum, Bogor</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="text-gray-500" size={20} />
                <span className="text-gray-300">SMK Wikrama Bogor</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="text-gray-500" size={20} />
                <span className="text-gray-300">Internship Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <User className="text-gray-500" size={20} />
                <span className="text-gray-300">Teamwork & Problem Solving</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
