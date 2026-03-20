import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code, Layers, Terminal, Activity, CheckCircle, Smartphone } from 'lucide-react';
import { personalInfo, projects, skills } from '../data/portfolioData';

const RecruiterFastMode = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all shadow-2xl"
        >
          <X size={24} />
        </button>

        <motion.div 
          initial={{ scale: 0.9, y: 50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#0a0f2c] to-[#050816] border border-cyan-500/30 rounded-[3rem] p-8 md:p-12 shadow-[0_0_100px_rgba(6,182,212,0.15)] scrollbar-hide"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-8 border-b border-white/10 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-[10px] font-black text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-full uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                <Activity size={14} /> 10-Second Executive Summary
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">{personalInfo.name}</h2>
              <p className="text-xl text-cyan-400 font-bold mt-2">{personalInfo.title}</p>
            </div>
            
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-black uppercase tracking-widest hover:bg-cyan-400 transition-colors shadow-xl"
            >
              📥 Download Resume <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Column 1: Core Competency */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <Terminal size={16} className="text-cyan-400" /> Engineering Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.flatMap(s => s.items).slice(0, 12).map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-slate-300">
                      {skill}
                    </span>
                  ))}
                  <span className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-xs font-bold text-cyan-400">+ Advanced DevOps</span>
                </div>
              </div>

              <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
                <h3 className="text-sm font-black text-emerald-500 uppercase tracking-widest mb-3">TL;DR Value Prop</h3>
                <p className="text-slate-300 text-sm leading-relaxed font-medium">
                  {personalInfo.about}
                </p>
              </div>
            </div>

            {/* Column 2 & 3: Featured Production Systems */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-2 mb-2">
                <Layers size={16} className="text-purple-400" /> Top Projects (Production Grade)
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.slice(0, 2).map((project, i) => (
                  <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-cyan-500/30 transition-colors">
                    <h4 className="text-xl font-black text-white mb-2">{project.title}</h4>
                    <p className="text-slate-400 text-xs font-bold mb-4 uppercase tracking-wider">{project.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {project.features.slice(0, 2).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2">
                          <CheckCircle size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300 leading-snug">{feat.desc}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                      {project.techStack.slice(0, 4).map((tech, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                          {tech} {tIdx < 3 && '•'}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RecruiterFastMode;
