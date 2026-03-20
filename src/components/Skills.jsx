import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { Code2, Globe, Layers, Database, Cpu, Users, Sparkles, BrainCircuit, Users2, Zap, Clock, MessageSquare, Network, LayoutTemplate, MousePointer2 } from 'lucide-react';
import { SiC, SiCplusplus, SiHtml5, SiJavascript, SiBootstrap, SiTailwindcss, SiReact, SiNodedotjs, SiExpress, SiThreedotjs, SiMysql, SiMongodb, SiPostman, SiDocker, SiGit, SiGithub } from 'react-icons/si';
import { FaJava, FaDatabase, FaReact, FaAws, FaCss3Alt } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const skillIconMap = {
  "C": <SiC className="text-[#A8B9CC]" />,
  "C++": <SiCplusplus className="text-[#00599C]" />,
  "Java": <FaJava className="text-[#007396]" />,
  "Data Structures and Algorithms": <Network className="text-cyan-400" size={16} />,
  "HTML": <SiHtml5 className="text-[#E34F26]" />,
  "CSS": <FaCss3Alt className="text-[#1572B6]" />,
  "JavaScript": <SiJavascript className="text-[#F7DF1E]" />,
  "Bootstrap": <SiBootstrap className="text-[#7952B3]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
  "React.js": <SiReact className="text-[#61DAFB]" />,
  "Node.js": <SiNodedotjs className="text-[#339933]" />,
  "Express.js": <SiExpress className="text-white" />,
  "Three.js": <SiThreedotjs className="text-white" />,
  "Recoil": <FaReact className="text-[#3578E5]" />,
  "Aceternity UI": <LayoutTemplate className="text-violet-400" size={16} />,
  "DBMS": <FaDatabase className="text-[#336791]" />,
  "MySQL": <SiMysql className="text-[#4479A1]" />,
  "MongoDB": <SiMongodb className="text-[#47A248]" />,
  "Postman": <SiPostman className="text-[#FF6C37]" />,
  "AWS": <FaAws className="text-[#FF9900]" />,
  "Docker": <SiDocker className="text-[#2496ED]" />,
  "Git": <SiGit className="text-[#F05032]" />,
  "GitHub": <SiGithub className="text-white" />,
  "UI/UX Design": <MousePointer2 className="text-pink-400" size={16} />,
  "DevOps Fundamentals": <SiDocker className="text-cyan-500" size={16} />,
  "Artificial Intelligence Fundamentals": <BrainCircuit className="text-purple-400" size={16} />,
  "Problem-Solving": <Zap className="text-amber-400" size={16} />,
  "Adaptability": <Sparkles className="text-emerald-400" size={16} />,
  "Team Collaboration": <Users2 className="text-blue-400" size={16} />,
  "Time Management": <Clock className="text-rose-400" size={16} />,
  "Effective Communication": <MessageSquare className="text-indigo-400" size={16} />
};

const categoryConfig = {
  "Languages": { icon: Code2, color: "#06b6d4", gradient: "from-cyan-500/20 to-cyan-500/5" },
  "Web Technologies": { icon: Globe, color: "#a855f7", gradient: "from-purple-500/20 to-purple-500/5" },
  "Frameworks & Libraries": { icon: Layers, color: "#10b981", gradient: "from-emerald-500/20 to-emerald-500/5" },
  "Databases & Tools": { icon: Database, color: "#f43f5e", gradient: "from-rose-500/20 to-rose-500/5" },
  "Technical Skills": { icon: Cpu, color: "#f59e0b", gradient: "from-amber-500/20 to-amber-500/5" },
  "Soft Skills": { icon: Users, color: "#3b82f6", gradient: "from-blue-500/20 to-blue-500/5" }
};

const SkillCard = ({ category, items, index }) => {
  const config = categoryConfig[category] || { icon: Code2, color: "#06b6d4", gradient: "from-cyan-500/20 to-cyan-500/5" };
  const Icon = config.icon;
  const color = config.color;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} perspective={1000} scale={1.03} transitionSpeed={1000} gyroscope className="h-full">
        <div className="group flex flex-col h-full bg-[#0a0f1c] rounded-[2rem] border border-white/5 hover:border-white/10 transition-all shadow-xl hover:shadow-2xl relative overflow-hidden">
          
          {/* Animated Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-[50px] group-hover:bg-white/10 transition-colors pointer-events-none" style={{ backgroundColor: `${color}15` }} />

          <div className="p-8 relative z-10 flex flex-col h-full">
            {/* Header: Icon + Title */}
            <div className="flex items-center gap-5 mb-8">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative overflow-hidden"
                style={{ backgroundColor: `${color}15`, borderColor: `${color}30` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: `radial-gradient(circle at center, ${color}40 0%, transparent 70%)` }} />
                <Icon size={28} style={{ color }} className="relative z-10" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white group-hover:text-white transition-colors uppercase tracking-tight" style={{ color }}>
                  {category}
                </h3>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Specialized Area</p>
              </div>
            </div>

            {/* Skills list */}
            <div className="flex flex-wrap gap-3 mt-auto relative z-20">
              {items.map((skill, j) => (
                <motion.div
                  key={j}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all cursor-default shadow-sm hover:shadow-md hover:border-white/20 group/skill"
                  style={{ hoverBackgroundColor: `${color}10` }}
                >
                  <span className="text-lg opacity-80 group-hover/skill:opacity-100 group-hover/skill:scale-110 transition-all duration-300 drop-shadow-md">
                    {skillIconMap[skill] || <Sparkles size={14} className="text-slate-400" />}
                  </span>
                  <span className="text-xs text-slate-300 font-bold uppercase tracking-wider group-hover/skill:text-white transition-colors">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#050816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 mb-6 text-xs font-bold text-cyan-400 glass-morphism rounded-full uppercase tracking-[0.3em] border border-cyan-500/30">
              <Sparkles size={14} /> Core Competencies
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              Technical <span className="gradient-text">Arsenal</span>.
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
              A comprehensive toolkit of modern technologies, frameworks, and methodologies.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, i) => (
            <SkillCard
              key={i}
              index={i}
              category={skillGroup.category}
              items={skillGroup.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
