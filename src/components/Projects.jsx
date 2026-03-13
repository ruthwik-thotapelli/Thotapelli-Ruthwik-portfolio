import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { 
  Briefcase, Github, ExternalLink, Calendar, 
  ArrowUpRight, Info, ChevronRight 
} from 'lucide-react';
import ProjectModal from './ProjectModal';
import TechBadge from './TechBadge';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#050816]">
      {/* Background Blobs */}
      <div className="blob w-[500px] h-[500px] bg-blue-600 top-[10%] right-[-15%] animate-float-slow opacity-20" />
      <div className="blob w-[300px] h-[300px] bg-pink-500 bottom-[10%] left-[-10%] animate-float opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-sm font-semibold text-indigo-300 glass rounded-full uppercase tracking-wider glow-purple">
              <Briefcase size={14} /> Featured Work
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
              My <span className="gradient-text">Project Showcase</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Production-level systems engineered for <span className="text-white font-bold">scalability</span>, <span className="text-indigo-400 font-bold">security</span>, and <span className="text-pink-400 font-bold">reliability</span>.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group rounded-[2.5rem] overflow-hidden glass-vibrant card-hover transition-all duration-500 gradient-border flex flex-col h-full"
            >
              {/* Card Image Wrapper */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent" />
                
                {/* Date Badge */}
                <div className="absolute top-6 right-6 glass px-4 py-2 rounded-2xl text-xs font-bold text-white flex items-center gap-2 border border-white/10 shadow-xl">
                  <Calendar size={14} className="text-indigo-400" /> {project.date}
                </div>

                {/* Floating Tech Stack (Partial) */}
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-2 max-w-[80%] pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                  {project.techStack.slice(0, 3).map((tech, tid) => (
                    <div key={tid} className="px-3 py-1 bg-[#050816]/80 backdrop-blur-md rounded-lg text-[10px] font-bold text-white border border-white/10 uppercase tracking-widest">
                      {tech}
                    </div>
                  ))}
                </div>

                {/* Interactive Overlay on Hover */}
                <div className="absolute inset-0 bg-[#0a0f2c]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center">
                   <motion.div 
                     initial={{ scale: 0.8, opacity: 0 }}
                     whileHover={{ scale: 1 }}
                     animate={{ 
                       scale: selectedProject === project ? 1 : 0.8,
                       opacity: 1 
                      }}
                     className="space-y-6"
                   >
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-3 px-8 py-4 bg-white text-[#050816] rounded-2xl font-black text-sm uppercase tracking-tighter hover:bg-indigo-400 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
                      >
                        View Project Details <ChevronRight size={18} />
                      </button>
                      <div className="flex items-center justify-center gap-4 translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-all">
                          <Github size={22} />
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-all">
                          <ExternalLink size={22} />
                        </a>
                      </div>
                   </motion.div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-10 flex flex-col flex-1">
                <div className="mb-6">
                  <h3 className="text-3xl font-black text-white mb-2 tracking-tight group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="w-12 h-1.5 bg-indigo-500 rounded-full group-hover:w-24 transition-all duration-500" />
                </div>
                
                <p className="text-slate-400 text-base leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {project.techStack.map((tech, tIndex) => (
                    <TechBadge key={tIndex} tech={tech} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
