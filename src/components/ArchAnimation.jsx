import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Server, Smartphone, Lock, Cloud, Terminal, Github, Activity, ArrowRight, Layers } from 'lucide-react';

const Node = ({ icon: Icon, label, isActive, colorClass }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    className={`flex flex-col items-center gap-2 relative z-10 ${isActive ? '' : 'opacity-50 blur-[1px]'} transition-all duration-300`}
  >
    <div className={`w-16 h-16 premium-icon-container group ${
      isActive ? `${colorClass} ${colorClass.includes('cyan') ? 'icon-glow-blue' : colorClass.includes('indigo') ? 'icon-glow-purple' : 'shadow-lg'}` : 'border-white/10 bg-white/5 text-slate-500'
    }`}>
      <div className="premium-icon-glare" />
      <Icon size={24} className="relative z-10" />
    </div>
    <span className="text-[10px] font-bold text-white uppercase tracking-wider bg-black/50 px-2 py-1 rounded backdrop-blur-sm">{label}</span>
  </motion.div>
);

const ConnectionLine = ({ active, reverse = false }) => (
  <div className="flex-1 h-0.5 bg-white/10 relative overflow-hidden min-w-[30px] mx-2">
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ x: reverse ? '100%' : '-100%' }}
          animate={{ x: reverse ? '-100%' : '100%' }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-full h-full"
        />
      )}
    </AnimatePresence>
  </div>
);

const ArchAnimation = ({ projectType }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  if (projectType === "talentbridge") {
    return (
      <div className="p-8 bg-[#0a0f2c]/50 rounded-3xl border border-white/5 relative overflow-hidden flex items-center justify-between">
        <Node icon={Smartphone} label="Client App" isActive={step === 0 || step === 4} colorClass="bg-cyan-500/20 text-cyan-400 border-cyan-500/50" />
        <ConnectionLine active={step === 0 || step === 3} reverse={step === 3} />
        
        <div className="relative flex flex-col items-center gap-6">
          <Node icon={Server} label="API Gateway" isActive={step === 1 || step === 2 || step === 3} colorClass="bg-indigo-500/20 text-indigo-400 border-indigo-500/50" />
          
          {/* Internal microservice connection */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-indigo-500/20 rounded-full border-dashed animate-spin-slow opacity-50" />
          
          <div className="flex gap-4 absolute -bottom-24">
            <Node icon={Lock} label="Auth JWT" isActive={step === 1} colorClass="bg-purple-500/20 text-purple-400 border-purple-500/50" />
            <Node icon={Layers} label="ATS Engine" isActive={step === 2} colorClass="bg-emerald-500/20 text-emerald-400 border-emerald-500/50" />
          </div>
        </div>

        <ConnectionLine active={step === 2} />
        <Node icon={Database} label="MySQL DB" isActive={step === 2} colorClass="bg-orange-500/20 text-orange-400 border-orange-500/50" />
      </div>
    );
  }

  // CloudForge Animation
  return (
    <div className="p-8 bg-[#0a0f2c]/50 rounded-3xl border border-white/5 relative overflow-hidden flex items-center justify-between">
      <Node icon={Github} label="Git Push" isActive={step === 0} colorClass="bg-white/20 text-white border-white/50" />
      <ConnectionLine active={step === 0 || step === 1} />
      
      <Node icon={Terminal} label="CI Actions" isActive={step === 1} colorClass="bg-yellow-500/20 text-yellow-400 border-yellow-500/50" />
      <ConnectionLine active={step === 1 || step === 2} />
      
      <Node icon={Database} label="AWS ECR" isActive={step === 2} colorClass="bg-orange-500/20 text-orange-400 border-orange-500/50" />
      <ConnectionLine active={step === 2 || step === 3} />
      
      <div className="relative">
        <Node icon={Cloud} label="ECS Fargate" isActive={step >= 3} colorClass="bg-cyan-500/20 text-cyan-400 border-cyan-500/50" />
        {step >= 3 && (
          <motion.div
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 1 }}
            transition={{ duration: 0.5, yoyo: Infinity }}
            className="absolute -top-2 -right-2 text-emerald-400 bg-[#0a0f2c] rounded-full p-1 border border-emerald-500/30"
          >
            <Activity size={14} />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ArchAnimation;
