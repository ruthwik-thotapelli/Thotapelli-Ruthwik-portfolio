import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, Terminal, ExternalLink, Activity } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Navbar = ({ onToggleFastMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-500 rounded-2xl px-6 py-3 flex justify-between items-center border ${scrolled ? 'bg-black/60 backdrop-blur-2xl border-white/10 shadow-2xl' : 'bg-black/20 backdrop-blur-md border-white/5'}`}>
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer group flex items-center gap-4">
            <motion.div 
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-12 h-12 rounded-2xl bg-[#0088ff] flex items-center justify-center shadow-lg relative overflow-hidden group"
            >
              <span className="text-3xl font-black text-white leading-none relative z-10 italic pr-0.5">R</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
            </motion.div>
            <span className="text-lg font-black text-white tracking-tight hidden sm:block">
              Ruthwik<span className="text-cyan-400">.</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="!text-[#00e1ff] bg-white/5"
                className="text-slate-400 hover:text-white px-5 py-2.5 rounded-2xl text-[15px] font-bold cursor-pointer transition-all duration-300 border border-transparent hover:bg-white/5"
              >
                {link.name}
              </Link>
            ))}
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2 bg-white text-black rounded-xl text-sm font-semibold transition-all hover:bg-cyan-400 flex items-center gap-1.5"
            >
              Resume <ExternalLink size={14} />
            </motion.a>
            <button
              onClick={onToggleFastMode}
              className="ml-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-black rounded-xl text-sm font-black uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.4)] flex items-center gap-2"
            >
              <Activity size={14} /> 10s Fast View
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-2xl bg-white/5 text-white hover:bg-white/10 transition-all border border-white/10"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden px-4 mt-4"
          >
            <div className="glass-morphism border border-white/10 rounded-[2.5rem] p-8 space-y-4 shadow-3xl">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="!text-cyan-400 bg-white/10 shadow-[0_0_20px_rgba(6,182,212,0.2)] border-cyan-500/30"
                  onClick={() => setIsOpen(false)}
                  className="block text-slate-400 hover:text-cyan-400 hover:bg-white/5 px-6 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all cursor-pointer border border-transparent hover:border-cyan-500/20"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white text-black px-6 py-5 rounded-2xl text-sm font-black uppercase tracking-widest mt-6 shadow-2xl hover:bg-cyan-400 transition-colors"
              >
                Cloud Resume
              </a>
              <button
                onClick={() => {
                  onToggleFastMode();
                  setIsOpen(false);
                }}
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-orange-500 text-black px-6 py-5 rounded-2xl text-sm font-black uppercase tracking-widest shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:scale-[1.02] transition-transform"
              >
                10s Fast View
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
