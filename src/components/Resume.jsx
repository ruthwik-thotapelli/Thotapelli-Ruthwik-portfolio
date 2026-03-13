import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle, ExternalLink, Sparkles, UserCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Resume = () => {
  const highlights = [
    { title: "MERN Stack Expert", body: "End-to-end development with MongoDB, Express, React, Node.js.", icon: <Sparkles size={20} /> },
    { title: "AWS Cloud & DevOps", body: "Automated infrastructures, containerized deployments, and CI/CD pipelines.", icon: <Sparkles size={20} /> },
    { title: "Enterprise Security", body: "Secure systems with JWT, RBAC, and production-ready architectures.", icon: <Sparkles size={20} /> },
    { title: "Collaborative Spirit", body: "Agile methodologies, Git flow, and effective team communication.", icon: <Sparkles size={20} /> },
  ];

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-[#050816]">
      <div className="blob w-[500px] h-[500px] bg-indigo-500/10 top-[-10%] right-[-10%] animate-pulse-glow" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2.5 mb-6 text-sm font-black text-indigo-300 glass rounded-full uppercase tracking-widest glow-blue border border-white/5">
              <FileText size={16} className="text-blue-400" /> Professional Credentials
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              The <span className="gradient-text">Complete</span> Profile.
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
              A comprehensive summary of my skills, experiences, and technical capabilities in a recruiter-friendly format.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-vibrant rounded-[3rem] p-8 md:p-20 border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)] relative overflow-hidden gradient-border"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
            
            {/* Left Column: Summary & Call to Action */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
                  Summary for <span className="text-indigo-400">Recruiters</span> <UserCheck size={28} className="text-pink-500" />
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed font-bold">
                  Bridging the gap between engineering excellence and business impact. Optimized for ATS and production standards.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {highlights.map((item, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="mt-1 w-12 h-12 rounded-xl glass-vibrant flex items-center justify-center text-indigo-400 border border-white/5 group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-black text-sm mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-xs font-medium leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-5 pt-8">
                <a
                  href={personalInfo.resume}
                  download
                  className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white px-10 py-5 rounded-2xl font-black text-base shadow-2xl glow-purple hover:scale-105 active:scale-95 transition-all"
                >
                  Download CV <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                </a>
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 glass-vibrant text-white px-10 py-5 rounded-2xl font-black text-base border border-white/10 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all shadow-xl"
                >
                  Quick View <ExternalLink size={20} />
                </a>
              </div>
            </div>

            {/* Right Column: Visual Preview */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <motion.div
                whileHover={{ rotateY: 10, rotateX: -5 }}
                className="w-full aspect-[3/4] glass-vibrant rounded-[2.5rem] p-12 flex flex-col items-center justify-center text-center relative group border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] cursor-default overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500" />
                
                <div className="w-24 h-24 rounded-3xl bg-white/5 flex items-center justify-center text-indigo-500 mb-8 border border-white/5 shadow-inner group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <FileText size={56} />
                </div>
                
                <h4 className="text-2xl font-black text-white mb-3">Resume Preview</h4>
                <p className="text-slate-400 font-medium mb-10 leading-relaxed text-sm">
                  Available in PDF format.<br />High-resolution and print-ready.
                </p>
                
                <div className="px-6 py-3 glass rounded-2xl border border-white/5">
                  <span className="text-[0.6rem] font-black text-indigo-400 uppercase tracking-[0.3em]">Scored Excellent by ATS</span>
                </div>

                <div className="absolute bottom-[-20%] right-[-20%] w-64 h-64 bg-indigo-500/5 group-hover:bg-indigo-500/10 rounded-full blur-3xl transition-all" />
              </motion.div>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
