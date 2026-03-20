import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Search, Cpu, Wrench } from 'lucide-react';

const ThinkingCard = ({ icon: Icon, title, description, keywords, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className="p-6 sm:p-8 rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(6,182,212,0.1)] transition-all group"
  >
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center text-cyan-400 mb-6 sm:mb-8 border border-white/5 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-transform">
      <Icon size={20} className="sm:size-24" />
    </div>
    <h3 className="text-xl sm:text-2xl font-black text-white mb-4 tracking-tight">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed mb-8">{description}</p>
    
    <div className="flex flex-wrap gap-2">
      {keywords.map((kw, i) => (
        <span key={i} className="px-3 py-1.5 rounded-lg bg-black/30 border border-white/5 text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover:border-cyan-500/20 group-hover:text-cyan-400/80 transition-colors">
          {kw}
        </span>
      ))}
    </div>
  </motion.div>
);

const ThinkingProcess = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] font-bold text-purple-400 border border-purple-500/30 rounded-full uppercase tracking-[0.2em] bg-purple-500/10">
              <Cpu size={14} /> My Engineering Mindset
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
              How I <span className="text-cyan-400">Think</span> as a Dev.
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
              Writing code is easy. Building scalable, maintainable, and robust systems requires a deep understanding of architecture and edge cases.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ThinkingCard 
            icon={Search}
            title="Problem First, Tech Second"
            description="I don't blindly adopt new frameworks. I analyze the business constraint, map out the data flow, and choose an architecture that offers the highest ROI with the least technical debt."
            keywords={['System Design', 'Trade-offs', 'Requirements']}
            index={0}
          />
          <ThinkingCard 
            icon={Wrench}
            title="Defensive Debugging"
            description="Bugs are features in disguise if you capture them correctly. I rely heavily on centralized logging, strict TypeScript/prop boundaries, and automated unit tests to catch errors before production."
            keywords={['Root Cause Analysis', 'CloudWatch', 'Observability']}
            index={1}
          />
          <ThinkingCard 
            icon={Layers}
            title="Design for Scale"
            description="I always assume traffic will spike. From implementing Redis caching strategies to leveraging stateless microservices via ECS Fargate, my systems auto-scale dynamically under load."
            keywords={['Microservices', 'Load Balancing', 'Caching']}
            index={2}
          />
        </div>
      </div>
    </section>
  );
};

export default ThinkingProcess;
