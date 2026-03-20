import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Database, Users, CheckCircle, Activity, LayoutDashboard, Search, Bell } from 'lucide-react';

const TalentBridgeDemo = () => {
  const [activeTab, setActiveTab] = useState('kanban');

  return (
    <div className="flex h-full w-full bg-[#f3f4f6] text-slate-800 rounded-3xl overflow-hidden shadow-2xl">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white p-6 border-r border-slate-800 flex flex-col">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center font-black">TB</div>
          <span className="font-semibold tracking-wider">TalentBridge</span>
        </div>
        <div className="space-y-2">
          {['Dashboard', 'Candidates', 'Jobs', 'Settings'].map((item, i) => (
            <button key={i} onClick={() => setActiveTab(item.toLowerCase())} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === item.toLowerCase() ? 'bg-indigo-500/20 text-indigo-400' : 'hover:bg-white/5 text-slate-400'}`}>
              {i === 0 && <LayoutDashboard size={18} />}
              {i === 1 && <Users size={18} />}
              {i === 2 && <Database size={18} />}
              {i === 3 && <Activity size={18} />}
              {item}
            </button>
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
          <div className="flex items-center gap-4 bg-slate-100 px-4 py-2 rounded-lg w-96 text-slate-400">
            <Search size={16} />
            <input type="text" placeholder="Search candidates..." className="bg-transparent border-none outline-none text-sm w-full" disabled />
          </div>
          <div className="flex items-center gap-4">
            <Bell size={20} className="text-slate-400" />
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">TR</div>
          </div>
        </header>

        {/* Kanban Board */}
        <div className="flex-1 p-8 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6">Software Engineer Pipeline</h2>
          <div className="flex gap-6 h-full pb-8">
            {/* Columns */}
            {[
              { title: 'New Applied', count: 24, items: [{ name: 'Alex Johnson', score: '94%', role: 'Full Stack', match: 'High' }] },
              { title: 'Screening', count: 8, items: [{ name: 'Samantha Lee', score: '88%', role: 'Backend', match: 'Medium' }, { name: 'David Kim', score: '91%', role: 'Frontend', match: 'High' }] },
              { title: 'Interview', count: 3, items: [{ name: 'Emily Chen', score: '96%', role: 'Full Stack', match: 'Super Match' }] }
            ].map((col, cIdx) => (
              <div key={cIdx} className="w-80 flex-shrink-0 bg-slate-100 rounded-2xl p-4 flex flex-col gap-4">
                <div className="flex items-center justify-between px-1">
                  <h3 className="font-semibold text-slate-700">{col.title}</h3>
                  <span className="text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded-full font-bold">{col.count}</span>
                </div>
                {col.items.map((item, iIdx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: cIdx * 0.1 + iIdx * 0.2 }}
                    key={iIdx} 
                    className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 cursor-pointer hover:border-indigo-300 hover:shadow-md transition-all group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-semibold text-slate-800">{item.name}</span>
                      <span className={`text-xs font-bold px-2 py-1 rounded bg-${item.score > '90' ? 'emerald' : 'amber'}-100 text-${item.score > '90' ? 'emerald' : 'amber'}-700`}>ATS: {item.score}</span>
                    </div>
                    <p className="text-xs text-slate-500 mb-3">{item.role}</p>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className={`h-full bg-${item.score > '90' ? 'emerald' : 'amber'}-500 w-[${item.score}]`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CloudForgeDemo = () => {
  const [logs, setLogs] = useState([]);
  
  const mockLogs = [
    "[10:00:01] 🚀 Triggered via GitHub Push by ruthwik-thotapelli",
    "[10:00:03] 📦 Setting up job workflow dependencies...",
    "[10:00:08] 🔨 Running `npm run build` for React frontend...",
    "[10:00:15] ✅ Build successful! (14s)",
    "[10:00:16] 🐳 Building Docker image `cloudforge-app:v1.2`...",
    "[10:00:25] ⬆️ Pushing image to Amazon ECR...",
    "[10:00:30] ✅ Image pushed successfully.",
    "[10:00:32] ☁️ Deploying to AWS ECS Fargate cluster...",
    "[10:00:40] 🔄 Deregistering old task definition...",
    "[10:00:45] 🚀 Registering new task definition (rev 42)...",
    "[10:00:50] 🎯 Registering targets with Application Load Balancer...",
    "[10:00:55] 🚦 Waiting for health checks to pass...",
    "[10:01:00] ✅ Deployment COMPLETE. Zero downtime achieved."
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < mockLogs.length) {
        setLogs(prev => [...prev, mockLogs[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full h-full bg-[#0a0a0a] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative">
      {/* Top Bar map */}
      <div className="absolute top-0 w-full h-10 bg-[#161b22] border-b border-slate-800 flex items-center px-4 gap-2 z-10">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="text-slate-400 text-xs font-mono ml-4">admin@aws-prod-cluster ~ ./deploy.sh</span>
      </div>
      
      <div className="p-8 pt-16 w-full font-mono text-sm overflow-y-auto">
        {logs.map((log, idx) => (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            key={idx} 
            className={`mb-2 ${log.includes('✅') ? 'text-emerald-400' : log.includes('error') ? 'text-red-400' : 'text-slate-300'}`}
          >
            {log}
          </motion.div>
        ))}
        {logs.length < mockLogs.length && (
          <motion.div 
            animate={{ opacity: [1, 0, 1] }} 
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-3 h-5 bg-white inline-block ml-2 align-middle"
          />
        )}
      </div>

      {logs.length === mockLogs.length && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute bottom-10 right-10 bg-black/80 backdrop-blur border border-emerald-500/30 p-6 rounded-2xl flex items-center gap-6"
        >
          <div className="text-emerald-400">
            <CheckCircle size={40} />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-1">Production is Live</h3>
            <p className="text-emerald-400/70 text-sm">Health: 100% | Latency: 42ms</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

const DemoSimulation = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
      >
        <div className="absolute top-8 left-8 flex items-center gap-4">
          <div className="px-4 py-1.5 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Live Product Demo Mode
          </div>
          <span className="text-white font-black tracking-tight text-xl">{project.title}</span>
        </div>

        <button
          onClick={onClose}
          className="absolute top-8 right-8 z-[301] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all xl:scale-125"
        >
          <X size={24} />
        </button>

        <motion.div 
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: -20 }}
          className="w-full max-w-[1400px] h-[80vh] relative mt-12"
        >
          {project.demoType === 'talentbridge' ? <TalentBridgeDemo /> : <CloudForgeDemo />}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DemoSimulation;
