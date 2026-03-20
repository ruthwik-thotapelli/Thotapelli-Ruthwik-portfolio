import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle, ExternalLink, Sparkles, UserCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Resume = () => {
  const highlights = [
    { title: "MERN Stack Expert", body: "End-to-end development with MongoDB, Express, React, Node.js.", icon: <Sparkles size={20} /> },
    { title: "Cloud & DevOps", body: "Architecting automated infrastructures and CI/CD pipelines.", icon: <Sparkles size={20} /> },
    { title: "System Security", body: "Secure architectures with JWT, RBAC, and auth best practices.", icon: <Sparkles size={20} /> },
    { title: "Agile & Git", body: "Fluent in modern development workflows and team collaboration.", icon: <Sparkles size={20} /> },
  ];

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-[#050816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 mb-6 text-xs font-bold text-cyan-400 glass-morphism rounded-full uppercase tracking-[0.3em] border border-cyan-500/30">
              <FileText size={14} /> Professional Credentials
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              The <span className="gradient-text">Complete</span> Profile.
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
              A comprehensive summary of my technical journey and capabilities, optimized for <span className="text-white">ATS standards</span>.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-morphism rounded-[3rem] p-12 md:p-20 border border-white/10 shadow-3xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
            
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-white tracking-tighter flex items-center gap-4">
                  Engineering <span className="text-cyan-400">Summary</span> <UserCheck size={28} className="text-pink-500" />
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed font-medium capitalize">
                  bridging the gap between code quality and business impact through architectural rigor and modern standards.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {highlights.map((item, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="mt-1 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-cyan-400 border border-white/10 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-black text-sm mb-1 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 text-xs font-medium leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 pt-8">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={personalInfo.resume}
                  download
                  className="flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl transition-all"
                >
                  Download CV <Download size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 glass-morphism text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest border border-white/20 hover:bg-white/10 transition-all shadow-xl"
                >
                  Quick View <ExternalLink size={20} />
                </motion.a>
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="w-full aspect-[3/4.5] glass-morphism rounded-[2.5rem] p-12 flex flex-col items-center justify-center text-center relative group border border-white/20 shadow-3xl"
              >
                <div className="w-24 h-24 rounded-3xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-8 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                  <FileText size={48} />
                </div>
                
                <h4 className="text-2xl font-black text-white mb-3 uppercase tracking-tight">Resume PDF</h4>
                <p className="text-slate-500 font-bold mb-10 leading-relaxed text-sm">
                  ATS Optimized Structure<br />Available for Download
                </p>
                
                <div className="px-6 py-3 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em]">Scored Excellent by recruitment AI</span>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/5 rounded-full blur-[120px]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
