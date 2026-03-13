import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, FileText, Github, Linkedin, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img src="/hero-bg.png" alt="" className="w-full h-full object-cover opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 via-[#050816]/40 to-[#050816]" />
      </div>

      {/* Animated Blobs */}
      <div className="blob w-[600px] h-[600px] bg-purple-600 top-[-15%] left-[-10%] animate-float" />
      <div className="blob w-[500px] h-[500px] bg-blue-500 bottom-[-15%] right-[-10%] animate-float-slow" />
      <div className="blob w-[300px] h-[300px] bg-pink-500 top-[50%] right-[20%] animate-pulse-glow" />
      <div className="blob w-[200px] h-[200px] bg-cyan-400 top-[20%] left-[60%] animate-float opacity-8" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 1.5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 mb-8 text-sm font-semibold tracking-wider text-purple-300 uppercase glass rounded-full glow-purple"
          >
            <Sparkles size={14} className="text-pink-400" /> Open to Opportunities
          </motion.div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
            <span className="text-white/90">Hi, I'm</span>
            <br />
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl font-medium mb-3"
          >
            <span className="gradient-text-blue">{personalInfo.title}</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg text-slate-400 mb-14 max-w-2xl mx-auto leading-relaxed"
          >
            {personalInfo.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 text-white px-9 py-4 rounded-2xl font-bold transition-all glow-purple hover:scale-105 active:scale-95 cursor-pointer"
            >
              View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 glass-vibrant text-white px-9 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all hover:scale-105 active:scale-95 border border-white/10"
            >
              Resume <FileText size={18} />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-vibrant rounded-2xl text-slate-300 hover:text-white hover:bg-white/15 transition-all hover:scale-110 hover:glow-blue"
            >
              <Github size={22} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-vibrant rounded-2xl text-slate-300 hover:text-white hover:bg-white/15 transition-all hover:scale-110 hover:glow-blue"
            >
              <Linkedin size={22} />
            </a>
          </motion.div>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-slate-600/50 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-1.5 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
