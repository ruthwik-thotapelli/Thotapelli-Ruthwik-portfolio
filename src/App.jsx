import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import WhyMe from './components/WhyMe';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThinkingProcess from './components/ThinkingProcess';
import MetricsDashboard from './components/MetricsDashboard';
import RecruiterFastMode from './components/RecruiterFastMode';
import JourneyTimeline from './components/JourneyTimeline';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [fastModeOpen, setFastModeOpen] = useState(false);

  // Spring-based trailing ring
  const ringX = useMotionValue(0);
  const ringY = useMotionValue(0);
  const springX = useSpring(ringX, { stiffness: 100, damping: 20 });
  const springY = useSpring(ringY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Add hover detection on all interactive elements
    const interactiveEls = document.querySelectorAll('a, button, [role="button"], input, textarea, select, [data-cursor-hover]');
    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
    return () => {
      interactiveEls.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  });

  return (
    <div className="min-h-screen bg-[#050816] selection:bg-cyan-500/30 selection:text-white" style={{ cursor: 'none' }}>
      <ParticleBackground />

      {/* Background Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(700px at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.07), transparent 80%)`
        }}
      />

      {/* Custom Cursor - Small Dot (instant) */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full bg-white mix-blend-difference"
        style={{
          width: 8,
          height: 8,
          left: mousePos.x - 4,
          top: mousePos.y - 4,
          transition: 'none',
        }}
      />

      {/* Custom Cursor - Trailing Ring */}
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full border border-cyan-400/70 mix-blend-normal"
        style={{
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          x: springX,
          y: springY,
          translateX: hovering ? -24 : -16,
          translateY: hovering ? -24 : -16,
          borderColor: hovering ? 'rgba(6,182,212,0.9)' : 'rgba(6,182,212,0.5)',
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease, translate 0.2s ease',
        }}
      />

      <Navbar onToggleFastMode={() => setFastModeOpen(true)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <ThinkingProcess />
        <WhyMe />
        <Projects />
        <MetricsDashboard />
        <JourneyTimeline />
        <Experience />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <RecruiterFastMode isOpen={fastModeOpen} onClose={() => setFastModeOpen(false)} />
    </div>
  );
}

export default App;
