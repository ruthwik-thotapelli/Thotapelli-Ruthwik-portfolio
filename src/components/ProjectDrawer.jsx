import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Github, ExternalLink, Layout, Server, Lock, Database,
  Cloud, Terminal, Package, Activity, Share2, Cpu, Layers,
  Shield, Workflow, ArrowRight
} from 'lucide-react';

const ICONS = {
  Layout, Server, Lock, Database, Cloud, Terminal, Package,
  Activity, Share2, Cpu, Layers, Shield, Workflow, Github,
};

const ArchFlow = ({ steps }) => (
  <div className="flex flex-wrap items-center gap-3">
    {steps.map((step, i) => {
      const Icon = ICONS[step.icon] || Server;
      return (
        <React.Fragment key={i}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all">
              <Icon size={22} />
            </div>
            <span className="text-[10px] font-bold text-white uppercase tracking-wider">{step.label}</span>
            <span className="text-[9px] text-slate-500">{step.tech}</span>
          </motion.div>
          {i < steps.length - 1 && (
            <ArrowRight size={14} className="text-slate-600 mt-[-18px]" />
          )}
        </React.Fragment>
      );
    })}
  </div>
);

const ProjectDrawer = ({ project, isOpen, onClose }) => {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.cursor = 'auto'; // Override hidden cursor in drawer
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
            className="fixed top-0 right-0 z-[201] h-full w-full md:w-[75%] lg:w-[60%] bg-[#080d20] border-l border-white/10 shadow-[−40px_0_120px_rgba(0,0,0,0.6)] overflow-y-auto"
            style={{ cursor: 'auto' }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
            >
              <X size={20} />
            </button>

            {/* Project Image Header */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080d20]/50 to-[#080d20]" />
              <div className="absolute bottom-6 left-8">
                <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-1">{project.date}</p>
                <h2 className="text-4xl font-black text-white tracking-tight">{project.title}</h2>
              </div>
            </div>

            {/* Content */}
            <div className="px-8 pb-16 space-y-10">

              {/* Description */}
              <div>
                <p className="text-slate-400 text-base leading-relaxed">{project.longDescription}</p>
              </div>

              {/* Architecture */}
              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">Architecture Flow</h3>
                <div className="p-6 bg-white/3 rounded-3xl border border-white/5">
                  <ArchFlow steps={project.architecture.steps} />
                  <p className="text-xs text-slate-500 mt-5 leading-relaxed">{project.architecture.description}</p>
                </div>
              </div>

              {/* Features */}
              {project.features && (
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.features.map((feat, i) => {
                      const Icon = ICONS[feat.icon] || Cpu;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className="p-5 bg-white/3 rounded-2xl border border-white/5 hover:border-white/10 transition-all group"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 transition-all border border-white/5 flex-shrink-0">
                              <Icon size={18} />
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-white mb-1">{feat.title}</h4>
                              <p className="text-xs text-slate-500 leading-relaxed">{feat.desc}</p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Technical Challenges */}
              {project.challenges && (
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">Engineering Challenges</h3>
                  <div className="space-y-4">
                    {project.challenges.map((ch, i) => (
                      <div key={i} className="p-5 bg-white/3 rounded-2xl border border-white/5">
                        <h4 className="text-sm font-bold text-white mb-2">{ch.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed border-l-2 border-cyan-500/40 pl-4">{ch.solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-cyan-400 hover:border-cyan-500/30 transition-all cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact Statement */}
              <div className="p-6 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-3xl border border-white/5">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Why It Matters</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  This is not a tutorial project. It solves a <span className="text-white font-medium">real-world problem</span> with production-grade patterns — JWT auth, role-based access, clean REST APIs, and scalable architecture decisions that would hold up in an enterprise setting.
                </p>
              </div>

              {/* CTA Links */}
              <div className="flex gap-4 pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl text-sm font-semibold text-white transition-all"
                >
                  <Github size={16} /> GitHub
                </a>
                {project.live && project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-2xl text-sm font-bold text-black transition-all"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDrawer;
