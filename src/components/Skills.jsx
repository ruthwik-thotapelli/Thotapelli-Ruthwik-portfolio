import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { Terminal } from 'lucide-react';

const categoryIcons = {
  'Languages': '💻',
  'Web Technologies': '🌐',
  'Frameworks & Libraries': '⚛️',
  'Databases & Tools': '🗄️',
  'Technical Skills': '🧠',
  'Soft Skills': '🤝',
};

const categoryGradients = [
  'from-indigo-500 to-blue-500',
  'from-cyan-500 to-teal-500',
  'from-purple-500 to-pink-500',
  'from-emerald-500 to-green-500',
  'from-orange-500 to-amber-500',
  'from-rose-500 to-red-500',
];

const categoryGlows = [
  'hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]',
  'hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]',
  'hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]',
  'hover:shadow-[0_0_40px_rgba(16,185,129,0.25)]',
  'hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]',
  'hover:shadow-[0_0_40px_rgba(244,63,94,0.25)]',
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#050816]">
      <div className="blob w-[500px] h-[500px] bg-indigo-600 bottom-[-10%] left-[-10%] animate-float" />

      <div className="blob w-[300px] h-[300px] bg-cyan-500 top-[10%] right-[-5%] animate-float-slow" />

      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-sm font-semibold text-cyan-300 glass rounded-full uppercase tracking-wider glow-blue">
              <Terminal size={14} /> Technical Stack
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              Skills & <span className="gradient-text-blue">Expertise</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Technologies I use to build production-level applications.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`glass-vibrant rounded-2xl p-7 transition-all duration-500 gradient-border group cursor-default ${categoryGlows[i]}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${categoryGradients[i]} flex items-center justify-center text-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {categoryIcons[category.category] || '⚡'}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:gradient-text transition-all">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, j) => (
                  <motion.span
                    key={j}
                    whileHover={{ scale: 1.1 }}
                    className="px-3.5 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-slate-300 font-medium hover:bg-white/15 hover:text-white hover:border-purple-500/30 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
