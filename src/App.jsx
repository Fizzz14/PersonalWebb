import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import Services     from './components/Services';
import About        from './components/About';
import ImmersiveSection from './components/ImmersiveSection';
import Skills       from './components/Skills';
import Education    from './components/Education';
import Projects     from './components/Projects';
import Certificates from './components/Certificates';
import Contact      from './components/Contact';
import Footer       from './components/Footer';
import Preloader    from './components/Preloader';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <>
      {/* ── LAYER 1: Base black background ── */}
      <div className="bg-black min-h-screen text-white font-sans relative tech-grid">

        {/* ── LAYER 2: Permanent noise/particle canvas ── */}
        <ParticleBackground />

        {/* ── LAYER 3: Scroll progress bar ── */}
        <motion.div className="scroll-progress" style={{ scaleX }} />

        {/* ── LAYER 4: Dynamic content ── */}
        <div className="relative z-10 w-full min-h-screen bg-transparent flex flex-col">

          {/* Preloader */}
          <AnimatePresence mode="wait">
            {loading && <Preloader onComplete={() => setLoading(false)} />}
          </AnimatePresence>

          {/* Main site */}
          {!loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
              className="relative z-10 w-full bg-transparent flex flex-col flex-1"
            >
              <Navbar />
              <main className="relative z-10 bg-transparent flex-1">
                {/* Hero is pinned at the bottom layer */}
                <div className="sticky top-0 z-10 w-full h-screen bg-black">
                  <Hero />
                </div>
                
                {/* Services slides up over Hero */}
                <div className="relative z-20 w-full bg-black shadow-[0_-30px_60px_rgba(0,0,0,0.8)]">
                  <Services />
                </div>

                {/* About slides up next */}
                <div className="relative z-20 w-full bg-black">
                  <About />
                </div>

                {/* Immersive Section triggers scroll pinning */}
                <div className="relative z-30 w-full bg-black">
                  <ImmersiveSection />
                </div>

                {/* Skills slides up over Immersive Section */}
                <div className="relative z-40 w-full bg-black shadow-[0_-30px_60px_rgba(0,0,0,0.8)]">
                  <Skills />
                </div>

                {/* Education, Projects, Certificates, Contact follow naturally */}
                <div className="relative z-40 w-full bg-black">
                  <Education />
                </div>
                <div className="relative z-45 w-full bg-black">
                  <Projects />
                </div>
                <div className="relative z-45 w-full bg-black">
                  <Certificates />
                </div>
                <div className="relative z-50 w-full bg-black">
                  <Contact />
                </div>
              </main>
              <Footer />
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
