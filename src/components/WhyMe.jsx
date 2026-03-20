import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Shield, Cpu, Zap, Code2, Server, Star } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const stats = [
  { value: '2', label: 'Production Projects', suffix: '+' },
  { value: '10', label: 'Technologies', suffix: '+' },
  { value: '150', label: 'DSA Problems Solved', suffix: '+' },
];

const usps = [
  {
    icon: <Layers size={24} />,
    title: 'Full-Stack + DevOps',
    body: 'One engineer who can own the entire stack — from React UI to AWS ECS deployments. No hand-offs needed.',
    color: 'cyan',
  },
  {
    icon: <Shield size={24} />,
    title: 'Production-Grade Projects',
    body: 'Both projects feature JWT auth, RBAC, REST APIs, and real-world architecture — not tutorial clones.',
    color: 'purple',
  },
  {
    icon: <Cpu size={24} />,
    title: 'Cloud-Native Architecture',
    body: 'Terraform, ECS Fargate, GitHub Actions, CloudWatch. I build for scale, not just for deadlines.',
    color: 'pink',
  },
];

const getColorClasses = (color) => ({
  bg: `bg-${color}-500/10`,
  border: `border-${color}-500/20`,
  text: `text-${color}-400`,
  glow: `shadow-[0_0_30px_rgba(var(--color-${color}),0.1)]`,
});

const WhyMe = () => {
  return (
    <section id="why-me" className="py-24 relative overflow-hidden bg-[#050816]">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 rounded-full border border-cyan-500/20">
            <Star size={12} /> For Recruiters
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            Why <span className="gradient-text">Choose Me</span>?
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            What sets me apart from other candidates — beyond the resume.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-8 bg-white/3 rounded-3xl border border-white/5 hover:border-white/10 transition-all group">
              <div className="text-4xl md:text-6xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors tracking-tighter">
                {stat.value}<span className="text-cyan-400">{stat.suffix}</span>
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* USP cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {usps.map((usp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="h-full"
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.03} transitionSpeed={1500} gyroscope className="h-full">
                <div className="group h-full p-8 bg-white/3 rounded-3xl border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all cursor-default shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                  <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform border border-white/10`}>
                    {usp.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{usp.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{usp.body}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Bold statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center p-12 bg-white/3 rounded-3xl border border-white/5 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0088ff] to-[#0055ff] p-0.5 shadow-2xl shadow-blue-500/20 mx-auto mb-8">
            <img src="/personal-logo.png" alt="logo" className="w-full h-full object-cover rounded-[0.9rem]" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tighter relative z-10">
            Ready for <span className="gradient-text">Production Roles</span>.
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed relative z-10">
            I don't just write code that works — I architect systems that <span className="text-white font-medium">scale, fail gracefully, and are secure by design</span>. My portfolio demonstrates this with real CI/CD pipelines, JWT auth flows, and cloud deployments.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyMe;
