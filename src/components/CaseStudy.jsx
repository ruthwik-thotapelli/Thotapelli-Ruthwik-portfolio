import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Github, ExternalLink, Play, Terminal, Shield, FileCode, Cloud, Zap, Cpu, Server, Lock, Database, Layout, Workflow, Package, Activity, Share2, Github as GithubIcon, 
} from 'lucide-react';
import { FaAws, FaShieldAlt, FaBolt, FaSearch, FaCloud } from 'react-icons/fa';
import ArchAnimation from './ArchAnimation';
import DemoSimulation from './DemoSimulation';

const CaseStudy = ({ project, isOpen, onClose }) => {
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.cursor = 'auto'; 
    } else {
      document.body.style.overflow = '';
      document.body.style.cursor = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.cursor = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
            className="fixed inset-0 z-[201] h-full w-full bg-[#050816] overflow-y-auto overflow-x-hidden"
            style={{ cursor: 'auto' }}
          >
            {/* Dynamic Interactive Background */}
            <div className="absolute inset-0 z-0 pointer-events-none h-full w-full fixed">
              <img src={project.image} alt="bg" className="w-full h-full object-cover opacity-40 scale-105 blur-lg" />
              <div className="absolute inset-0 bg-[#050816]/70" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050816]/90 to-[#050816]" />
            </div>

            <div className="relative z-10">
              {/* Header Bar - Like a Navbar for the modal */}
              <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 md:py-6 px-6 md:px-12 flex justify-between items-center bg-black/40 backdrop-blur-xl border-b border-white/5`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 hyper-logo-outer group">
                    <div className="hyper-logo-shell w-full h-full">
                      <div className="hyper-logo-glass">
                        <div className="hyper-logo-sheen" />
                        <span className="text-2xl font-black text-white leading-none relative z-10 italic pr-0.5">R</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="inline-flex items-center gap-2 text-[10px] font-bold text-cyan-400 uppercase tracking-[0.2em]">
                      <Terminal size={12} /> Case Study
                    </div>
                    <span className="text-lg font-black text-white tracking-tight">{project.title}</span>
                  </div>
                </div>
                
                <button
                  onClick={onClose}
                  className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all backdrop-blur-md"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Top Hero Spacer */}
              <div className="h-24" />

              {/* Header Hero Section */}
              <div className="relative h-[30vh] md:h-[40vh] min-h-[300px] md:min-h-[350px] overflow-hidden mx-6 md:mx-12 mt-4 rounded-2xl md:rounded-[3rem] border border-white/10 shadow-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute inset-0 bg-black/20" />
                
                <div className="absolute bottom-12 left-12 w-full max-w-5xl pr-12">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter mb-4 drop-shadow-2xl">{project.title}</h1>
                    <p className="text-base sm:text-xl md:text-2xl text-slate-200 font-medium max-w-2xl drop-shadow-lg">{project.description}</p>
                    
                    <div className="mt-8 flex flex-wrap gap-4 relative z-20">
                      <button 
                        onClick={() => setDemoOpen(true)}
                        className="flex items-center gap-3 px-8 py-4 bg-[#0088ff] hover:bg-[#0077ee] rounded-full text-white font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-500/25 hover:scale-105 text-sm"
                      >
                        <Play size={18} fill="currentColor" /> Explore My Work
                      </button>

                      {project.live && project.live !== "#" && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white border border-white hover:bg-transparent hover:text-white rounded-full text-black font-black uppercase tracking-widest transition-all hover:scale-105 text-sm shadow-xl">
                          <ExternalLink size={18} /> Live Demo
                        </a>
                      )}

                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-bold transition-all hover:scale-105 text-sm backdrop-blur-md">
                        <Github size={20} /> Repository
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Engineering Story */}
              <div className="px-6 md:px-12 py-16 max-w-6xl mx-auto space-y-20 md:space-y-28">
                
                {/* Problem & Approach */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-16"
                >
                  <div className="glass-morphism p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden group hover:border-cyan-500/30 transition-all shadow-xl hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[40px] group-hover:bg-cyan-500/20 transition-all" />
                    <h3 className="text-xs font-black text-cyan-500 uppercase tracking-[0.2em] mb-4">The Problem</h3>
                    <p className="text-slate-300 text-lg leading-relaxed relative z-10">{project.problem || project.longDescription}</p>
                  </div>
                  <div className="glass-morphism p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden group hover:border-emerald-500/30 transition-all shadow-xl hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[40px] group-hover:bg-emerald-500/20 transition-all" />
                    <h3 className="text-xs font-black text-emerald-500 uppercase tracking-[0.2em] mb-4">The Engineering Approach</h3>
                    <p className="text-slate-300 text-lg leading-relaxed relative z-10">{project.approach || "Adopted a scalable microservices architecture to handle dynamic loads, prioritizing code quality, security, and developer experience."}</p>
                  </div>
                </motion.div>

                {/* Features (if any) */}
                {project.features && (
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] font-bold text-slate-300 border border-white/10 rounded-full uppercase tracking-widest bg-white/5">
                      Core Capabilities
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-10">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {project.features.map((feat, i) => (
                        <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-white/[0.05] hover:-translate-y-2 hover:border-white/10 transition-all duration-300 group relative overflow-hidden shadow-xl">
                          <div className="absolute bottom-[-20%] right-[-20%] w-40 h-40 bg-cyan-500/10 rounded-full blur-[40px] group-hover:bg-cyan-500/20 transition-all" />
                          <h4 className="text-xl font-black text-white mb-3 relative z-10 tracking-tight leading-snug">{feat.title}</h4>
                          <p className="text-slate-400 leading-relaxed text-sm relative z-10 font-medium">{feat.desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Architecture Section */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative glass-morphism p-10 md:p-14 rounded-[3rem] border border-white/5 shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-purple-500/5 rounded-[3rem] -z-10" />
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] font-bold text-purple-400 border border-purple-500/30 rounded-full uppercase tracking-widest bg-purple-500/10">
                    System Design
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">Architecture</h2>
                  <p className="text-slate-400 mb-10 text-lg font-medium max-w-3xl leading-relaxed">{project.architecture.description}</p>
                  
                  {/* Embedded ArchAnimation */}
                  <div className="mb-4">
                    <ArchAnimation projectType={project.demoType || "talentbridge"} />
                  </div>
                </motion.div>

                {/* Challenges & Solutions */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-10">Technical Challenges</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.challenges && project.challenges.map((ch, i) => {
                      const ChallengeIcon = () => {
                         if (ch.icon === "Shield") return <FaShieldAlt size={24} className="text-rose-400" />;
                         if (ch.icon === "FileSearch") return <FaSearch size={22} className="text-rose-400" />;
                         if (ch.icon === "Cloud") return <FaCloud size={24} className="text-rose-400" />;
                         if (ch.icon === "Zap") return <FaBolt size={24} className="text-rose-400" />;
                         return <Terminal size={24} />;
                      };

                      return (
                        <div key={i} className="p-10 bg-white/[0.02] border border-white/5 rounded-2.5rem hover:bg-white/[0.04] transition-colors group relative overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(244,63,94,0.1)]">
                          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="w-16 h-16 premium-icon-container icon-glow-purple bg-rose-500/10 border border-rose-500/20 text-rose-400 mb-8 group-hover:scale-110 transition-all animate-premium-float">
                            <div className="premium-icon-glare" />
                            <ChallengeIcon />
                          </div>
                          <h4 className="text-2xl font-black text-white mb-4 tracking-tight leading-snug">{ch.title}</h4>
                          <p className="text-slate-400 leading-relaxed font-medium">{ch.solution}</p>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Business Impact */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="p-8 md:p-12 lg:p-16 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl md:rounded-[3rem] relative overflow-hidden text-center shadow-2xl"
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl max-h-2xl bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />
                  <h3 className="text-sm font-black text-cyan-400 uppercase tracking-[0.3em] mb-6 relative z-10">Measurable Impact</h3>
                  <p className="text-2xl md:text-3xl lg:text-4xl text-white font-medium leading-relaxed max-w-4xl mx-auto relative z-10 tracking-tight">
                    "{project.impact || "Delivered a high-performance system passing all staging benchmarks for enterprise release readiness."}"
                  </p>
                </motion.div>

                {/* Tech Stack */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="border-t border-white/10 pt-16"
                >
                  <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-8 text-center">Engineered With</h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {project.techStack.map((tech, i) => (
                      <motion.span 
                        key={i} 
                        whileHover={{ y: -5, scale: 1.05 }}
                        className="px-6 py-3 glass-morphism border border-white/10 rounded-2xl text-[10px] font-black uppercase text-slate-300 tracking-widest hover:bg-white/10 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors shadow-lg cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>

          {/* This goes above the CaseStudy modal if it opens */}
          <DemoSimulation 
            project={project}
            isOpen={demoOpen}
            onClose={() => setDemoOpen(false)}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default CaseStudy;
