import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Code2, Server, ShieldCheck, Sparkles, User, GraduationCap } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const About = () => {
  const highlightCards = [
    { 
      icon: <Code2 size={24} />, 
      title: "Full-Stack Dev", 
      desc: "Specializing in the MERN stack for robust, responsive web solutions.",
      gradient: "from-blue-500 to-indigo-600",
      border: "border-blue-500/20"
    },
    { 
      icon: <Server size={24} />, 
      title: "DevOps Focus", 
      desc: "Architecting automated CI/CD pipelines with AWS & Docker.",
      gradient: "from-purple-500 to-pink-600",
      border: "border-purple-500/20"
    },
    { 
      icon: <ShieldCheck size={24} />, 
      title: "Security & Scale", 
      desc: "Ensuring applications are secure by design with JWT and RBAC.",
      gradient: "from-cyan-500 to-emerald-600",
      border: "border-cyan-500/20"
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#050816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-1 gap-6">
              {highlightCards.map((card, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} perspective={1000} scale={1.02} transitionSpeed={1500} gyroscope className="h-full w-full">
                    <div className={`glass-morphism p-8 rounded-[2rem] border ${card.border} transition-all duration-300 flex gap-6 items-start group hover:bg-white/5 shadow-2xl`}>
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${card.gradient} text-white shadow-xl group-hover:rotate-6 transition-transform duration-500`}>
                        {card.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-white mb-2 tracking-tight group-hover:text-cyan-400 transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed text-sm font-medium">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 text-xs font-bold text-cyan-400 glass-morphism rounded-full uppercase tracking-[0.3em] border border-cyan-500/30">
              <User size={14} className="text-pink-500" /> Professional Persona
            </div>
            
            <div className="relative group mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0088ff] to-[#0055ff] p-0.5 shadow-2xl shadow-blue-500/20 group-hover:rotate-6 transition-transform duration-500 overflow-hidden"
              >
                <img src="/personal-logo.png" alt="logo" className="w-full h-full object-cover rounded-[0.9rem]" />
              </motion.div>
              <div className="absolute -inset-2 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
              Crafting <span className="text-[#0088ff]">Future-Ready</span> Engineering Solutions.
            </h2>

            <div className="space-y-6">
              <p className="text-xl text-slate-300 leading-relaxed font-medium italic border-l-4 border-cyan-500 pl-6 py-2">
                "{personalInfo.about}"
              </p>
              
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl font-medium">
                Focused on delivering high-impact systems through technical rigor. I bridge the gap between frontend elegance and backend scale.
              </p>

              <div className="flex flex-wrap gap-8 pt-6 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl glass-morphism flex items-center justify-center text-cyan-400 shadow-xl border border-cyan-500/20">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Education</p>
                    <p className="text-sm font-black text-white">IT Engineering @ LPU</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl glass-morphism flex items-center justify-center text-pink-500 shadow-xl border border-pink-500/20">
                    <Sparkles size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Goal</p>
                    <p className="text-sm font-black text-white">System Reliability</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};


export default About;
