import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Github, ExternalLink, Shield, Cpu, Layers, Workflow, 
  Cloud, Terminal, Share2, Activity, Database, Lock, Server, 
  Layout, CheckCircle2, AlertCircle
} from 'lucide-react';

const iconMap = {
  Shield: Shield,
  Cpu: Cpu,
  Layers: Layers,
  Workflow: Workflow,
  Cloud: Cloud,
  Terminal: Terminal,
  Share2: Share2,
  Activity: Activity,
  Database: Database,
  Lock: Lock,
  Server: Server,
  Layout: Layout,
  Github: Github
};

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#050816]/90 backdrop-blur-md"
        />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-5xl max-h-[90vh] bg-[#0a0f2c] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
            <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-3">
              {project.title}
              <span className="text-xs font-bold px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 uppercase tracking-widest">
                Production-Level
              </span>
            </h2>
            <button 
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <div className="p-6 md:p-10 space-y-12">
              
              {/* Project Intro */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-indigo-400 font-bold uppercase tracking-wider text-sm mb-3">Project Overview</h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-bold hover:scale-105 transition-all shadow-lg glow-purple">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all border-glow">
                      <Github size={18} /> Source Code
                    </a>
                  </div>
                </div>
                
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-center text-2xl font-black text-white mb-8 tracking-tight">Key Features & Modular Design</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {project.features.map((feature, idx) => {
                    const Icon = iconMap[feature.icon] || CheckCircle2;
                    return (
                      <div key={idx} className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-purple-500/30 transition-all group">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                          <Icon size={20} />
                        </div>
                        <h4 className="text-white font-bold mb-2">{feature.title}</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">{feature.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* System Architecture */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-center">
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">System Architecture</h3>
                <p className="text-slate-400 mb-10 max-w-2xl mx-auto">{project.architecture.description}</p>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  {project.architecture.steps.map((step, idx) => {
                    const Icon = iconMap[step.icon] || Layers;
                    return (
                      <React.Fragment key={idx}>
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-xl">
                            <Icon size={32} />
                          </div>
                          <div>
                            <div className="text-white font-black text-sm">{step.label}</div>
                            <div className="text-indigo-300/60 text-xs font-bold">{step.tech}</div>
                          </div>
                        </div>
                        {idx < project.architecture.steps.length - 1 && (
                          <div className="hidden md:block w-12 h-px bg-gradient-to-r from-indigo-500/50 to-purple-600/50" />
                        )}
                        {idx < project.architecture.steps.length - 1 && (
                          <div className="md:hidden w-px h-8 bg-gradient-to-b from-indigo-500/50 to-purple-600/50" />
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {/* Technical Challenges */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.challenges.map((challenge, idx) => (
                  <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <AlertCircle size={80} />
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-red-500/10 text-red-400">
                        <AlertCircle size={18} />
                      </div>
                      <h4 className="text-white font-bold">Challenge: {challenge.title}</h4>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-green-500/10 text-green-400 mt-1">
                        <CheckCircle2 size={18} />
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        <span className="text-green-400/80 font-bold block mb-1 uppercase tracking-widest text-[10px]">Solution</span>
                        {challenge.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
          
          {/* Footer CTA */}
          <div className="p-6 bg-white/5 border-t border-white/10 flex items-center justify-center gap-4">
            <span className="text-slate-400 text-sm font-medium hidden sm:block">Want to see the implementation details?</span>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-indigo-500 transition-all">
              Explore Repository <Github size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
