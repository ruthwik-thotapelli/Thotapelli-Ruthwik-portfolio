import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { projects } from '../data/portfolioData';
import { 
  Briefcase, Github, ExternalLink, Calendar, 
  ArrowUpRight, Info, ChevronRight, Layout, Server, Lock, Database
} from 'lucide-react';
import CaseStudy from './CaseStudy';
import TechBadge from './TechBadge';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-transition py-24 relative overflow-hidden bg-[#050816]">
      {/* Background Blobs */}
      <div className="blob w-[600px] h-[600px] bg-indigo-600/10 top-[-10%] right-[-10%] blur-[120px]" />
      <div className="blob w-[500px] h-[500px] bg-purple-600/10 bottom-[-10%] left-[-10%] blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 mb-6 text-xs font-bold text-cyan-400 glass-morphism rounded-full uppercase tracking-[0.3em] border border-cyan-500/30">
              <Briefcase size={14} /> My Portfolio
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
              A collection of high-impact systems spanning <span className="text-white">Full-Stack Development</span>, <span className="text-cyan-400">Cloud Infrastructure</span>, and <span className="text-purple-400">DevOps</span>.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1500}
                gyroscope={true}
                className="h-full"
              >
                <div 
                  className="group relative h-full rounded-[3rem] p-px overflow-hidden bg-gradient-to-br from-white/10 to-transparent hover:from-cyan-500/40 hover:to-purple-500/20 transition-all duration-500 shadow-2xl shadow-black"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-full bg-[#0a0f2c]/80 backdrop-blur-2xl rounded-[3rem] overflow-hidden flex flex-col cursor-pointer">
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2c] to-transparent opacity-80" />
                      
                      {/* Date Overlay */}
                      <div className="absolute top-6 right-6 glass-morphism px-4 py-2 rounded-2xl text-[10px] font-black text-cyan-400 border border-cyan-500/20 uppercase tracking-widest">
                        {project.date}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-10 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-black text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        <div className="p-3 glass-morphism rounded-2xl text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowUpRight size={20} />
                        </div>
                      </div>

                      <p className="text-slate-400 text-base leading-relaxed mb-8 flex-1 font-medium">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                        {project.techStack.map((tech, tIndex) => (
                          <TechBadge key={tIndex} tech={tech} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>

      <CaseStudy 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
