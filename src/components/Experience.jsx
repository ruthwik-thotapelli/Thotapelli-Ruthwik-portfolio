import React from 'react';
import { motion } from 'framer-motion';
import { internships, certifications, achievements, education } from '../data/portfolioData';
import { Award, GraduationCap, MapPin, Calendar, Briefcase, Trophy, Sparkles } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#050816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 mb-6 text-xs font-bold text-cyan-400 glass-morphism rounded-full uppercase tracking-[0.3em] border border-cyan-500/30">
              <Award size={14} /> Professional Milestones
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              Learning & <span className="gradient-text">Growing</span>.
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-medium">
              A journey of technical rigor, from academic foundations to <span className="text-white">production-level</span> engineering.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Work & Internships */}
          <div className="space-y-12">
            <h3 className="text-2xl font-black text-white flex items-center gap-4 uppercase tracking-tighter">
              <Briefcase size={20} className="text-cyan-400" /> Internships
            </h3>
            
            <div className="space-y-8 relative">
              {internships.map((intern, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} scale={1.01} transitionSpeed={1500} gyroscope>
                    <div className="glass-morphism p-6 sm:p-10 rounded-3xl sm:rounded-[2.5rem] border border-white/5 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/5 shadow-2xl relative overflow-hidden">
                      <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-4">
                        <div>
                          <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-cyan-400 transition-colors uppercase">{intern.title}</h4>
                          <p className="text-cyan-400/60 font-black text-[9px] sm:text-[10px] uppercase tracking-[0.2em] mt-1">{intern.type}</p>
                        </div>
                        <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 rounded-xl text-[9px] sm:text-[10px] font-black text-slate-400 flex items-center gap-2 border border-white/10 uppercase tracking-widest">
                          <Calendar size={12} /> {intern.date}
                        </span>
                      </div>
                      
                      <p className="text-slate-400 mb-8 leading-relaxed font-medium text-xs sm:text-sm border-l-2 border-cyan-500/50 pl-4 sm:pl-6">
                        {intern.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {intern.techStack.map((tech, i) => (
                          <span key={i} className="px-3 py-1.5 bg-cyan-500/5 border border-cyan-500/10 text-cyan-400 rounded-lg text-[10px] font-black uppercase tracking-widest">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <ul className="grid grid-cols-1 gap-4 overflow-hidden">
                        {intern.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-4 text-slate-400 text-xs leading-relaxed font-medium">
                            <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="space-y-16">
            <div className="space-y-12">
              <h3 className="text-2xl font-black text-white flex items-center gap-4 uppercase tracking-tighter">
                <GraduationCap size={20} className="text-pink-500" /> Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} scale={1.02} transitionSpeed={1500} gyroscope>
                      <div className="glass-morphism p-6 sm:p-10 rounded-3xl sm:rounded-[2.5rem] border border-white/5 transition-all duration-300 hover:border-pink-500/30 hover:bg-white/5 shadow-2xl group relative overflow-hidden">
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">
                          <div className="sm:w-1/3">
                            <div className="text-pink-500/80 font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-1">{edu.duration}</div>
                            <div className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-widest">{edu.location}</div>
                          </div>
                          <div className="sm:w-2/3">
                            <h4 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight group-hover:text-pink-500 transition-colors uppercase">{edu.institution}</h4>
                            <div className="text-white/60 font-black text-[10px] sm:text-xs mb-4 tracking-widest uppercase">
                              {edu.degree} <span className="text-slate-500 mx-2">/</span> <span className="text-pink-500">{edu.score}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tilt>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <h3 className="text-2xl font-black text-white flex items-center gap-4 uppercase tracking-tighter">
                <Trophy size={20} className="text-amber-500" /> Awards
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {achievements.map((ach, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} perspective={1000} scale={1.03} transitionSpeed={1500} gyroscope className="h-full">
                      <div className="h-full glass-morphism p-8 rounded-[2rem] border border-white/5 transition-all duration-300 hover:border-amber-500/30 hover:bg-white/5 shadow-2xl group relative overflow-hidden">
                        <div className="w-14 h-14 premium-icon-container icon-glow-amber bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-premium-float">
                          <div className="premium-icon-glare" />
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent" />
                          <Trophy size={28} className="relative z-10 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                        </div>
                        <div>
                          <h4 className="text-lg font-black text-white mb-2 tracking-tight transition-colors uppercase">{ach.title}</h4>
                          <p className="text-slate-400 text-xs font-medium leading-relaxed uppercase tracking-wider">{ach.description}</p>
                        </div>
                        <div className="absolute top-6 right-8 text-[10px] font-black text-slate-600 uppercase tracking-widest">{ach.date}</div>
                      </div>
                    </Tilt>
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
