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
    <ReactLenis root options={{ lerp: 0.075, duration: 1.1, smoothTouch: false }}>
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
                <Hero />
                <Services />
                <About />
                <ImmersiveSection />
                <Skills />
                <Education />
                <Projects />
                <Certificates />
                <Contact />
              </main>
              <Footer />
            </motion.div>
          )}
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;
