import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Code2, Server, ShieldCheck, Sparkles, User, GraduationCap } from 'lucide-react';

const About = () => {
  const highlightCards = [
    { 
      icon: <Code2 size={28} />, 
      title: "Full-Stack Dev", 
      desc: "Specializing in the MERN stack (MongoDB, Express, React, Node.js) for robust web solutions.",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      glow: "shadow-[0_0_30px_rgba(99,102,241,0.2)]"
    },
    { 
      icon: <Server size={28} />, 
      title: "DevOps Focus", 
      desc: "Architecting automated CI/CD pipelines and cloud-native deployments with AWS & Docker.",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      glow: "shadow-[0_0_30px_rgba(236,72,153,0.2)]"
    },
    { 
      icon: <ShieldCheck size={28} />, 
      title: "Security & Scale", 
      desc: "Ensuring applications are secure by design with RBAC, JWT, and scalable architectures.",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      glow: "shadow-[0_0_30px_rgba(20,184,166,0.2)]"
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#050816]">
      <div className="blob w-[500px] h-[500px] bg-indigo-600/10 top-[-20%] right-[-10%] animate-pulse-glow" />
      <div className="blob w-[400px] h-[400px] bg-purple-600/10 bottom-[-10%] left-[-10%] animate-float" />

      <div className="section-divider mb-24 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Visual/Card side */}
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
                  whileHover={{ scale: 1.05, x: 10 }}
                  className={`glass-vibrant p-8 rounded-3xl border border-white/5 transition-all duration-300 flex gap-6 items-start group ${card.glow} hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] hover:border-white/20`}
                >
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${card.gradient} text-white shadow-xl group-hover:rotate-6 transition-all duration-500`}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white mb-2 tracking-tight group-hover:text-white transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm font-medium">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Text content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-black text-indigo-300 glass rounded-full uppercase tracking-tighter glow-purple border border-white/5">
              <User size={16} className="text-pink-400" /> Professional Persona
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter">
              Crafting <span className="gradient-text">Future-Ready</span> Digital Infrastructure.
            </h2>

            <div className="space-y-6">
              <p className="text-xl text-slate-300 leading-relaxed font-medium italic border-l-4 border-indigo-500 pl-6 py-2">
                "{personalInfo.about}"
              </p>
              
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl font-medium">
                Focused on delivering high-impact solutions through technical rigor, I bridge the gap between frontend elegance and backend scale. I thrive on challenges that require deep diving into both development and operations.
              </p>

              <div className="flex flex-wrap gap-5 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl glass-vibrant flex items-center justify-center text-indigo-400 shadow-lg border border-white/10">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Education</p>
                    <p className="text-sm font-bold text-white">IT Engineering @ LPU</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl glass-vibrant flex items-center justify-center text-pink-400 shadow-lg border border-white/10">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Goal</p>
                    <p className="text-sm font-bold text-white">Production Reliability</p>
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
