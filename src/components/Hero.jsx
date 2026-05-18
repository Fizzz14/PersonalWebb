import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients & particles */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-graphite-900/40 via-black to-black -z-10"></div>

      {/* Top right blob */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl opacity-50 animate-blob -z-10"></div>

      {/* Bottom left blob */}
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gray-600/5 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000 -z-10"></div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-gray-400 mb-4"
          >
            Available for new opportunities
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
            Hafizh <span className="text-gray-500">Rahmat</span>
          </h1>

          <h2 className="text-xl md:text-3xl text-gray-400 font-light mt-2 pb-4">
            Software & Game Dev Student | Full Stack Aspirant
          </h2>

          <div className="flex justify-center items-center h-12">
            <p className="text-lg md:text-xl text-gray-400 font-mono overflow-hidden whitespace-nowrap border-r-2 border-white pr-2 animate-typewriter">
              Flutter | React | Laravel | MongoDB
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="pt-8"
          >
            <Link to="projects" smooth={true} duration={500} offset={-50}>
              <button className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-black bg-white rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-gray-200 focus:outline-none">
                <span className="mr-2">Lihat Projects</span>
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
