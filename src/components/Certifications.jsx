import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/portfolioData';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#050816]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#050816]/95 to-[#050816] z-0" />
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 mb-6 text-xs font-bold text-emerald-400 glass-morphism rounded-full uppercase tracking-[0.3em] border border-emerald-500/30">
              <ShieldCheck size={14} /> Validated Expertise
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Certifications</span>.
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-medium">
              Continuous learning and professional validations from recognized industry institutions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} scale={1.02} transitionSpeed={1500} gyroscope>
                <div className="glass-morphism p-6 sm:p-10 rounded-3xl sm:rounded-[2.5rem] border border-white/5 transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/5 shadow-2xl group relative overflow-hidden h-full flex flex-col justify-between">
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[60px] group-hover:bg-emerald-500/20 transition-all duration-500" />
                  
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner">
                        <Award size={20} className="sm:size-24" />
                      </div>
                      
                      {cert.link && cert.link !== "#" && (
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all shadow-md backdrop-blur-sm group-hover:bg-emerald-500/10 group-hover:text-emerald-400 group-hover:border-emerald-500/30"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-3 tracking-tight group-hover:text-emerald-400 transition-colors uppercase leading-snug">
                      {cert.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-slate-400 font-bold uppercase tracking-widest text-xs">
                      <span>{cert.issuer}</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                    <span className="px-4 py-2 bg-white/5 rounded-xl text-[10px] font-black text-slate-400 flex items-center gap-2 border border-white/10 uppercase tracking-widest group-hover:border-emerald-500/20 group-hover:text-emerald-300 transition-colors">
                      <Calendar size={12} /> Issued {cert.date}
                    </span>
                  </div>
                  
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
