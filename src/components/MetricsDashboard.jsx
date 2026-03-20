import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Github, Server, Code, Zap } from 'lucide-react';

const MetricCard = ({ icon: Icon, value, label, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="relative p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden group hover:border-cyan-500/30 transition-all"
  >
    <div className={`absolute -right-6 -top-6 w-24 h-24 bg-${color}-500/10 rounded-full blur-2xl group-hover:bg-${color}-500/20 transition-all`} />
    <div className="flex items-center gap-4 mb-4">
      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-${color}-500/10 flex items-center justify-center text-${color}-400 border border-${color}-500/20 group-hover:scale-110 transition-transform`}>
        <Icon size={20} className="sm:size-24" />
      </div>
      <span className="text-2xl sm:text-3xl font-black text-white tracking-tighter">{value}</span>
    </div>
    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</p>
  </motion.div>
);

const MetricsDashboard = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0f2c] border-y border-white/5 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-full uppercase tracking-[0.2em]">
              <Activity size={12} className="animate-pulse" /> Live System Metrics
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
              Engineering <span className="text-cyan-400">Velocity</span>.
            </h2>
          </div>
          <div className="text-center md:text-right w-full md:w-auto">
            <p className="text-sm text-slate-400 max-w-sm mx-auto md:ml-auto font-medium">Aggregated data representing continuous integration, lines of code, and deployment consistency.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard icon={Github} value="1,240+" label="Github Commits" color="cyan" delay={0} />
          <MetricCard icon={Server} value="15+" label="Production Deployments" color="purple" delay={0.1} />
          <MetricCard icon={Code} value="50k+" label="Lines of Code" color="emerald" delay={0.2} />
          <MetricCard icon={Zap} value="99.9%" label="Uptime Tracked" color="amber" delay={0.3} />
        </div>
      </div>
    </section>
  );
};

export default MetricsDashboard;
