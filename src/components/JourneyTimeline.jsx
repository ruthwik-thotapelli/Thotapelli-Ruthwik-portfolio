import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Server, Terminal, Rocket } from 'lucide-react';

const JourneyTimeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const journeySteps = [
    { title: "Started with HTML/CSS", desc: "Mastered the fundamentals of web structure, layout, and responsive design to build pixel-perfect user interfaces.", icon: Code, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30" },
    { title: "Built Full-Stack Apps", desc: "Scaled up to React and Node.js. Developed the architecture for MVC apps, integrated databases, and secured APIs with JWT.", icon: Server, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
    { title: "Learned DevOps", desc: "Shifted focus to infrastructure. Mastered Docker containerization, AWS deployments, and GitHub Actions for continuous integration.", icon: Terminal, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30" },
    { title: "Built Production Systems", desc: "Combined everything to engineer enterprise-grade architectures like CloudForge and TalentBridge with zero-downtime microservices.", icon: Rocket, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30" }
  ];

  return (
    <section className="py-32 relative bg-[#050816] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_100%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10" ref={containerRef}>
        
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 mb-6 text-xs font-bold text-cyan-400 bg-cyan-500/10 rounded-full uppercase tracking-widest border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <Rocket size={14} /> My Engineering Journey
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
              From Syntax to <span className="text-cyan-400">Systems.</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          {/* Timeline Track */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1.5 bg-white/5 md:-translate-x-1/2 rounded-full" />
          
          {/* Animated Fill */}
          <motion.div 
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-emerald-400 md:-translate-x-1/2 rounded-full origin-top"
            style={{ height: timelineHeight }}
          />

          {/* Steps */}
          <div className="space-y-24">
            {journeySteps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex items-center justify-start md:justify-between w-full`}>
                  
                  {/* Left Side (Empty on Odd for Desktop) */}
                  <div className={`hidden md:block w-[45%] ${isEven ? 'text-right pr-12' : 'opacity-0'}`}>
                    {isEven && (
                      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }}>
                        <h3 className={`text-2xl font-black text-white mb-3 tracking-tight ${step.color}`}>{step.title}</h3>
                        <p className="text-slate-400 text-lg leading-relaxed font-medium">{step.desc}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Icon Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 w-full md:w-auto">
                    <motion.div 
                      initial={{ scale: 0, rotate: -45 }} 
                      whileInView={{ scale: 1, rotate: 0 }} 
                      viewport={{ once: true, margin: "-100px" }}
                      className={`w-14 h-14 rounded-2xl ${step.bg} border-2 ${step.border} flex items-center justify-center shadow-2xl backdrop-blur-md absolute left-0 md:relative bg-[#050816]`}
                      style={{ marginLeft: '-22px' }}  // center on the line for mobile
                    >
                      <Icon size={24} className={step.color} />
                    </motion.div>
                  </div>

                  {/* Right Side (Empty on Even for Desktop) */}
                  <div className={`w-full pl-20 md:pl-0 md:w-[45%] ${isEven ? 'md:hidden' : 'md:text-left md:pl-12'}`}>
                    {(!isEven || true) && (
                      <motion.div 
                        initial={{ opacity: 0, x: 50 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true, margin: "-100px" }}
                        className={isEven ? "md:hidden" : ""}
                      >
                        <h3 className={`text-2xl font-black text-white mb-3 tracking-tight ${step.color}`}>{step.title}</h3>
                        <p className="text-slate-400 text-lg leading-relaxed font-medium">{step.desc}</p>
                      </motion.div>
                    )}
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
