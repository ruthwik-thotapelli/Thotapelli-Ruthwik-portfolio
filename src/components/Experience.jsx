import React from 'react';
import { motion } from 'framer-motion';
import { internships, certifications, achievements, education } from '../data/portfolioData';
import { Award, GraduationCap, MapPin, Calendar, Briefcase, Trophy, Sparkles } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#050816]">
      <div className="blob w-[500px] h-[500px] bg-purple-600/10 top-[20%] left-[-15%] animate-float" />
      <div className="blob w-[400px] h-[400px] bg-blue-600/10 bottom-[10%] right-[-10%] animate-pulse-glow" />

      <div className="section-divider mb-24 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2.5 mb-6 text-sm font-black text-blue-300 glass rounded-full uppercase tracking-widest glow-blue border border-white/5">
              <Award size={16} className="text-cyan-400" /> Professional Milestones
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              Learning & <span className="gradient-text">Growing</span>.
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
              A timeline of my professional experience, academic achievements, and continuous self-improvement in the world of tech.
            </p>
          </motion.div>
        </div>

        {/* Timeline Layout for Internships / Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Work & Internships */}
          <div className="space-y-12">
            <h3 className="text-3xl font-black text-white flex items-center gap-4 border-b border-white/5 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                <Briefcase size={24} />
              </div>
              Internships
            </h3>
            
            <div className="space-y-8 relative">
              {/* Vertical timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-20" />
              
              {internships.map((intern, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-16 group"
                >
                  {/* timeline dot */}
                  <div className="absolute left-[1.125rem] top-0 w-6 h-6 rounded-full glass border-2 border-indigo-500/50 flex items-center justify-center z-10 group-hover:bg-indigo-500 group-hover:scale-125 transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="glass-vibrant p-10 rounded-[2.5rem] border border-white/5 card-hover shadow-xl hover:border-white/15">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
                      <div>
                        <h4 className="text-2xl font-black text-white tracking-tight">{intern.title}</h4>
                        <p className="text-indigo-400 font-black text-sm uppercase tracking-widest mt-1">{intern.type}</p>
                      </div>
                      <span className="px-4 py-2 glass rounded-2xl text-xs font-black text-slate-400 flex items-center gap-2 border border-white/5">
                        <Calendar size={14} /> {intern.date}
                      </span>
                    </div>
                    
                    <p className="text-slate-400 mb-8 leading-relaxed font-bold text-sm bg-white/5 p-4 rounded-2xl border border-white/5 border-l-4 border-l-indigo-500">
                      {intern.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {intern.techStack.map((tech, i) => (
                        <span key={i} className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-xl text-xs font-black uppercase tracking-tighter">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {intern.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-400 text-xs leading-relaxed font-medium">
                          <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Achievements Column */}
          <div className="space-y-16">
            
            {/* Education */}
            <div className="space-y-10">
              <h3 className="text-3xl font-black text-white flex items-center gap-4 border-b border-white/5 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg">
                  <GraduationCap size={24} />
                </div>
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="glass-vibrant p-10 rounded-[2.5rem] border border-white/5 card-hover shadow-xl hover:border-white/15 flex flex-col sm:flex-row gap-8 items-start group relative overflow-hidden"
                  >
                    <div className="sm:w-1/4 pt-1">
                      <div className="text-indigo-400 font-black text-sm uppercase tracking-widest mb-1">{edu.duration}</div>
                      <div className="text-xs font-black text-slate-500 uppercase tracking-tighter">{edu.location}</div>
                    </div>
                    <div className="sm:w-3/4">
                      <h4 className="text-2xl font-black text-white mb-2 leading-tight group-hover:gradient-text transition-all duration-300">{edu.institution}</h4>
                      <div className="text-pink-400 font-black text-sm mb-4 tracking-tighter">
                        {edu.degree} <span className="text-slate-500 mx-2">•</span> <span className="text-emerald-400">{edu.score}</span>
                      </div>
                    </div>
                    <GraduationCap className="absolute -bottom-8 -right-8 w-32 h-32 text-indigo-500/5 group-hover:text-indigo-500/10 transition-all rotate-12" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements & Awards */}
            <div className="space-y-10">
              <h3 className="text-3xl font-black text-white flex items-center gap-4 border-b border-white/5 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-lg">
                  <Trophy size={24} />
                </div>
                Awards
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {achievements.map((ach, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="glass-vibrant p-8 rounded-3xl border border-white/5 card-hover shadow-xl hover:border-white/15 flex flex-col gap-6 group relative overflow-hidden"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center text-amber-400 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-orange-600 group-hover:text-white transition-all duration-500 shadow-xl border border-amber-500/10">
                      <Trophy size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-white mb-2 tracking-tight group-hover:text-white transition-colors">{ach.title}</h4>
                      <p className="text-slate-400 text-sm font-medium leading-relaxed">{ach.description}</p>
                    </div>
                    <div className="absolute top-4 right-6 text-[0.6rem] font-black text-slate-600 uppercase tracking-widest">{ach.date}</div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
