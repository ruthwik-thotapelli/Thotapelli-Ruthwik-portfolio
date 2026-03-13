import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, Terminal, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${scrolled ? 'glass-vibrant shadow-2xl py-3 border-white/10' : 'bg-transparent py-5 border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer group flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
              <Terminal size={20} />
            </div>
            <span className="text-xl font-black text-white tracking-widest uppercase">
              Thotapelli Ruthwik<span className="text-indigo-500">.</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="!text-white !bg-white/10 !border-white/20 shadow-lg"
                className="text-slate-400 hover:text-white px-5 py-2.5 rounded-xl text-sm font-bold cursor-pointer transition-all duration-300 border border-transparent"
              >
                {link.name}
              </Link>
            ))}
            
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 px-7 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl text-sm font-black hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] flex items-center gap-2"
            >
              Resume <ExternalLink size={14} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-2xl glass-vibrant text-slate-400 hover:text-white transition-all border border-white/10"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden glass-vibrant border-b border-white/10 overflow-hidden"
        >
          <div className="px-4 py-8 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="block text-slate-300 hover:text-white hover:bg-white/10 px-4 py-4 rounded-2xl text-lg font-bold transition-all cursor-pointer border border-transparent hover:border-white/10"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-5 rounded-2xl text-lg font-black mt-4 shadow-xl"
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
