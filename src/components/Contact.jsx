import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import Tilt from 'react-parallax-tilt';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
      border: "border-blue-500/20"
    },
    { 
      id: 'phone', 
      icon: <Phone size={24} />, 
      title: "Call Directly", 
      value: personalInfo.phone, 
      href: `tel:${personalInfo.phone}`, 
      gradient: "from-cyan-500 to-emerald-600",
      border: "border-cyan-500/20"
    },
    { 
      id: 'linkedin', 
      icon: <Linkedin size={24} />, 
      title: "Let's Connect", 
      value: "ruthwik-thotapelli", 
      href: personalInfo.linkedin, 
      gradient: "from-blue-600 to-cyan-500",
      border: "border-blue-600/20"
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 mb-6 text-xs font-bold text-pink-500 glass-morphism rounded-full uppercase tracking-[0.3em] border border-pink-500/30">
              <MessageSquare size={14} /> Start a Conversation
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              Let's build <span className="gradient-text">Something</span> Great.
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
              Have a dedicated project in mind or just want to discuss some <span className="text-white">high-level tech</span>? My inbox is always open.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {contactOptions.map((opt, i) => (
                <Tilt key={i} tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} scale={1.02} transitionSpeed={1000} gyroscope>
                  <a
                    href={opt.href}
                    target={opt.href.startsWith('http') ? "_blank" : undefined}
                    rel={opt.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-8 glass-morphism p-8 rounded-[2.5rem] border ${opt.border} transition-all duration-300 group hover:bg-white/5 shadow-2xl`}
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${opt.gradient} text-white flex items-center justify-center shadow-xl group-hover:rotate-6 transition-all duration-500`}>
                      {opt.icon}
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">{opt.title}</h4>
                      <p className="text-white font-black text-lg tracking-tight">{opt.value}</p>
                    </div>
                  </a>
                </Tilt>
              ))}
              
              <div className="glass-morphism p-10 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden group">
                <div className="relative z-10 flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Base of Operations</h4>
                    <p className="text-white font-black text-base">Phagwara, Punjab (Hybrid/Remote)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="glass-morphism p-12 md:p-16 rounded-[4rem] border border-white/10 shadow-3xl relative overflow-hidden">
              <div className="relative z-10 space-y-10">
                <div className="space-y-2">
                  <h3 className="text-3xl font-black text-white tracking-tighter flex items-center gap-4">
                    Send a Message <Sparkles className="text-cyan-500" size={24} />
                  </h3>
                  <p className="text-slate-400 font-medium">I'll get back to you within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-all font-bold text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-all font-bold text-sm"
                        placeholder="hello@work.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-all font-bold text-sm"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Message</label>
                    <textarea
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-8 py-6 rounded-3xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-all font-bold text-sm resize-none"
                      placeholder="How can I help you?"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black px-12 py-5 rounded-2xl font-black text-base transition-all shadow-2xl hover:bg-cyan-400 group uppercase tracking-widest"
                  >
                    Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};


export default Contact;
