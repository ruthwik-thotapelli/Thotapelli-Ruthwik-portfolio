import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out, Ruthwik will get back to you shortly!');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactOptions = [
    { 
      id: 'email', 
      icon: <Mail size={24} />, 
      title: "Shoot an Email", 
      value: personalInfo.email, 
      href: `mailto:${personalInfo.email}`, 
      gradient: "from-blue-500 to-indigo-600",
      glow: "shadow-[0_0_40px_rgba(37,99,235,0.2)]"
    },
    { 
      id: 'phone', 
      icon: <Phone size={24} />, 
      title: "Call Directly", 
      value: personalInfo.phone, 
      href: `tel:${personalInfo.phone}`, 
      gradient: "from-emerald-500 to-teal-600",
      glow: "shadow-[0_0_40px_rgba(16,185,129,0.2)]"
    },
    { 
      id: 'linkedin', 
      icon: <Linkedin size={24} />, 
      title: "Let's Connect", 
      value: "ruthwik-thotapelli", 
      href: personalInfo.linkedin, 
      gradient: "from-blue-600 to-cyan-500",
      glow: "shadow-[0_0_40px_rgba(37,99,235,0.2)]"
    },
    { 
      id: 'github', 
      icon: <Github size={24} />, 
      title: "Check code", 
      value: "ruthwik-thotapelli", 
      href: personalInfo.github, 
      gradient: "from-slate-700 to-slate-900",
      glow: "shadow-[0_0_40px_rgba(255,255,255,0.05)]"
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050816]">
      <div className="blob w-[600px] h-[600px] bg-purple-600/10 bottom-[-15%] right-[-10%] animate-pulse-glow" />
      <div className="blob w-[400px] h-[400px] bg-indigo-600/10 top-[-10%] left-[-10%] animate-float" />

      <div className="section-divider mb-24 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2.5 mb-6 text-sm font-black text-pink-300 glass rounded-full uppercase tracking-widest glow-pink border border-white/5">
              <MessageSquare size={16} className="text-pink-400" /> Start a Conversation
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              Let's build <span className="gradient-text">Something</span> Together.
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
              Whether you have a project idea, a question, or just want to say hi, my inbox is always open.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Quick Info Pillar */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {contactOptions.map((opt, i) => (
                <a
                  key={i}
                  href={opt.href}
                  target={opt.href.startsWith('http') ? "_blank" : undefined}
                  rel={opt.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-6 glass-vibrant p-8 rounded-[2rem] border border-white/5 transition-all duration-300 group hover:scale-[1.02] ${opt.glow} hover:border-white/20`}
                >
                  <div className={`w-16 h-16 rounded-[1.25rem] bg-gradient-to-br ${opt.gradient} text-white flex items-center justify-center shadow-2xl group-hover:rotate-6 transition-all duration-500`}>
                    {opt.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-1">{opt.title}</h4>
                    <p className="text-white font-black text-base tracking-tight">{opt.value}</p>
                  </div>
                </a>
              ))}
              
              <div className="glass-vibrant p-10 rounded-[2.5rem] border border-white/5 shadow-2xl overflow-hidden relative group">
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/10">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Base of Operations</h4>
                    <p className="text-white font-bold text-sm">Phagwara, Punjab (Available for Relocation)</p>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/5 group-hover:bg-indigo-500/10 rounded-full transition-all group-hover:scale-150" />
              </div>
            </motion.div>
          </div>

          {/* Contact Form Pillar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="glass-vibrant p-12 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden gradient-border">
              <div className="relative z-10 space-y-10">
                <div className="space-y-2">
                  <h3 className="text-3xl font-black text-white tracking-tighter flex items-center gap-3">
                    Send a Message <Sparkles className="text-pink-400" size={24} />
                  </h3>
                  <p className="text-slate-400 font-medium">I typically respond within 12-24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-[0.1em] ml-1">Your Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-8 py-5 rounded-2xl glass border border-white/5 text-white placeholder-slate-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all font-bold text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-[0.1em] ml-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-8 py-5 rounded-2xl glass border border-white/5 text-white placeholder-slate-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all font-bold text-sm"
                        placeholder="hello@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-[0.1em] ml-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-8 py-5 rounded-2xl glass border border-white/5 text-white placeholder-slate-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all font-bold text-sm"
                      placeholder="Opportunities, collaboration, or a quick chat"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-[0.1em] ml-1">Your Message</label>
                    <textarea
                      name="message"
                      required
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-8 py-6 rounded-3xl glass border border-white/5 text-white placeholder-slate-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all font-bold text-sm resize-none"
                      placeholder="What's on your mind?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white px-12 py-5 rounded-2xl font-black text-base hover:scale-[1.03] active:scale-95 transition-all shadow-2xl glow-purple group"
                  >
                    Send to Ruthwik <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
