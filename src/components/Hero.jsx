import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, FileText, Github, Linkedin, Terminal, Sparkles } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const TerminalIntro = ({ onDone }) => {
  const [lines, setLines] = useState([]);
  const [done, setDone] = useState(false);

  const sequence = [
    { text: '> Initializing Dev Environment...', delay: 300 },
    { text: '> Loading Projects...', delay: 900 },
    { text: `> Welcome, Thotapelli Ruthwik 👋`, delay: 1500 },
  ];

  useEffect(() => {
    let timeouts = [];
    sequence.forEach(({ text, delay }, i) => {
      const t = setTimeout(() => {
        setLines(prev => [...prev, text]);
        if (i === sequence.length - 1) {
          setTimeout(() => { setDone(true); setTimeout(onDone, 500); }, 800);
        }
      }, delay);
      timeouts.push(t);
    });
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="font-mono text-left bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-[95%] sm:w-full max-w-md mx-auto shadow-2xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-3 text-xs text-slate-500 tracking-widest uppercase">terminal</span>
          </div>
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`text-sm mb-1 ${i === lines.length - 1 && i === 2 ? 'text-cyan-400 font-bold' : i === lines.length - 1 ? 'text-green-400' : 'text-slate-400'}`}
            >
              {line}
              {i === lines.length - 1 && <span className="ml-1 animate-pulse">▌</span>}
            </motion.p>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Hero = () => {
  const [showTerminal, setShowTerminal] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const roles = [
    'Full-Stack Developer',
    'DevOps Enthusiast',
    'Cloud Engineer',
    'Problem Solver'
  ];

  const handleTerminalDone = () => {
    setShowTerminal(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <section id="hero" className="section-transition min-h-screen flex items-center justify-center relative overflow-hidden bg-[#050816] pt-24 lg:pt-0">

      {/* Particle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1,
            }}
            animate={{
              y: [0, Math.random() * -60 - 20, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: 'easeInOut',
            }}
          />
        ))}
        {/* Gradient blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-purple-700/15 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-cyan-700/15 blur-[140px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Terminal Intro */}
        <AnimatePresence mode="wait">
          {showTerminal && (
            <motion.div
              key="terminal"
              className="flex items-center justify-center min-h-[40vh]"
            >
              <TerminalIntro onDone={handleTerminalDone} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Hero Content */}
        <AnimatePresence>
          {showContent && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[85vh]">
              
              {/* Text Content - Left Side */}
              <motion.div
                key="content"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1 relative z-20 pb-16 lg:pb-0"
              >
                {/* Available badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-5 py-2 mb-8 mx-auto lg:mx-0 text-xs font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 rounded-full border border-cyan-500/20 w-fit"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Available for New Projects
                </motion.div>

                {/* Subtle tagline */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-slate-500 text-sm font-bold tracking-[0.3em] uppercase mb-6"
                >
                  Full-Stack &nbsp;/&nbsp; DevOps &nbsp;/&nbsp; Cloud
                </motion.p>

                {/* Name */}
                <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-black mb-6 tracking-tight leading-[1.1]">
                  <span className="text-white/50 block text-lg sm:text-xl font-normal tracking-widest mb-3 uppercase">
                    Hi, I'm
                  </span>
                  <span className="gradient-text drop-shadow-[0_0_40px_rgba(167,139,250,0.25)] block">
                    <Typewriter
                      words={['Thotapelli Ruthwik']}
                      loop={1}
                      cursor
                      cursorStyle='|'
                      typeSpeed={60}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>

                {/* Roles */}
                <div className="h-10 md:h-12 mb-8">
                  <p className="text-xl md:text-2xl font-medium text-slate-400">
                    I build{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold border-b-2 border-cyan-500/30 pb-1 inline-block">
                      <Typewriter
                        words={roles}
                        loop={0}
                        cursor
                        cursorStyle='_'
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1500}
                      />
                    </span>
                  </p>
                </div>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="text-base md:text-lg text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
                >
                  {personalInfo.subtitle}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
                >
                  <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="group relative flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-[0_0_30px_rgba(6,182,212,0.4)] text-sm overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 flex items-center gap-2">
                       <Sparkles size={16} className="text-white" /> View Projects
                    </span>
                  </Link>

                  <a
                    href={personalInfo.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 bg-white/5 backdrop-blur text-white px-8 py-4 rounded-2xl font-medium hover:bg-white/10 transition-all border border-white/10 hover:border-cyan-500/40 text-sm shadow-xl"
                  >
                    Resume <FileText size={18} className="group-hover:scale-110 transition-transform text-cyan-400" />
                  </a>

                  <div className="flex gap-3 ml-0 lg:ml-2">
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                      className="p-4 bg-white/5 rounded-2xl text-slate-400 hover:text-white transition-all hover:scale-110 border border-white/5 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                      <Github size={20} />
                    </a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                      className="p-4 bg-white/5 rounded-2xl text-slate-400 hover:text-blue-400 transition-all hover:scale-110 border border-white/5 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Image Content - Right Side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
                className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 mt-4 lg:mt-0 relative z-10"
              >
                <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px]">
                  {/* Outer Premium Glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/60 to-purple-600/60 rounded-[3rem] blur-[80px] opacity-60 animate-pulse-glow" />
                  
                  {/* Floating glassmorphism frame */}
                  <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} perspective={1000} scale={1.03} transitionSpeed={2000} gyroscope className="w-full h-full">
                    <div className="w-full h-full relative z-10 p-[2px] rounded-[3rem] bg-gradient-to-br from-white/30 via-white/5 to-white/10 animate-float shadow-[0_0_50px_rgba(0,0,0,0.6)] overflow-hidden">
                      {/* Inner Glass Background */}
                      <div className="absolute inset-0 bg-[#050816]/30 backdrop-blur-2xl z-0" />
                      
                      {/* Inner border detail */}
                      <div className="absolute inset-3 border border-white/10 rounded-[2.2rem] z-20 pointer-events-none" />
                      
                      {/* Inner Glow Spotlight */}
                      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-cyan-400/30 blur-[60px] rounded-full z-0" />
                      
                      <img 
                        src="/unnamed.jpg"
                        alt="Thotapelli Ruthwik"
                        className="w-full h-full object-cover object-bottom relative z-10 scale-100 hover:scale-[1.08] transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
                      />
                    </div>
                  </Tilt>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Scroll indicator */}
        <AnimatePresence>
          {showContent && (
             <motion.div
               animate={{ opacity: [0.3, 1, 0.3], y: [0, 8, 0] }}
               transition={{ repeat: Infinity, duration: 2.5 }}
               className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
             >
               <div className="w-px h-12 bg-gradient-to-b from-cyan-500 to-transparent" />
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-500">Scroll</span>
             </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Hero;
