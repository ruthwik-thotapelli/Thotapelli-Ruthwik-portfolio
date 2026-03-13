import { Github, Linkedin, Mail, ChevronUp, Heart, Terminal, Sparkles } from 'lucide-react';
import { Link } from 'react-scroll';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5 pt-24 pb-12 bg-[#050816]">
      {/* Decorative Blobs */}
      <div className="blob w-[300px] h-[300px] bg-indigo-600/10 bottom-[-20%] left-[-5%] animate-pulse-glow" />
      <div className="blob w-[200px] h-[200px] bg-pink-600/5 top-0 right-0 animate-float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20 items-start">

          {/* Brand/About Section */}
          <div className="lg:col-span-5 space-y-10">
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer group flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform duration-300">
                <Terminal size={24} />
              </div>
              <span className="text-3xl font-black text-white tracking-widest uppercase">
                Thotapelli Ruthwik<span className="text-indigo-500">.</span>
              </span>
            </Link>

            <p className="text-slate-500 text-lg leading-relaxed max-w-sm font-medium">
              Developing secure, scalable, and high-performance solutions for the modern web. Dedicated to engineering excellence and production reliability.
            </p>

            <div className="flex gap-4">
              {[
                { icon: <Github size={20} />, href: personalInfo.github, label: 'GitHub', color: 'hover:text-blue-400' },
                { icon: <Linkedin size={20} />, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:text-blue-500' },
                { icon: <Mail size={20} />, href: `mailto:${personalInfo.email}`, label: 'Email', color: 'hover:text-pink-400' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl glass-vibrant flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${item.color} border border-white/5 shadow-lg shadow-black/20`}
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Pillar */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-black mb-10 uppercase tracking-[0.2em] text-xs">Platform Nav</h4>
            <ul className="space-y-4">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-slate-500 hover:text-white transition-all duration-300 cursor-pointer text-sm font-black uppercase tracking-widest flex items-center gap-2 group"
                  >
                    <div className="w-0 h-0.5 bg-indigo-500 group-hover:w-4 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Pilllar */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-black mb-10 uppercase tracking-[0.2em] text-xs">Let's Talk Shop</h4>
            <div className="space-y-6">
              <a href={`mailto:${personalInfo.email}`} className="block group">
                <p className="text-[0.6rem] font-black text-slate-600 uppercase tracking-widest mb-1 group-hover:text-indigo-400 transition-colors">Direct Mail</p>
                <p className="text-white font-bold text-sm tracking-tight">{personalInfo.email}</p>
              </a>

              <div className="flex flex-col gap-1">
                <p className="text-[0.6rem] font-black text-slate-600 uppercase tracking-widest mb-1">Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-slate-400 font-black text-xs uppercase tracking-tighter">Available for Relocation</p>
                </div>
              </div>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="mt-6 flex items-center gap-3 text-indigo-400 font-bold text-sm hover:gap-5 transition-all group py-4 px-6 glass rounded-2xl border border-white/5 w-fit"
              >
                Reach for the sky <ChevronUp size={20} className="group-hover:-translate-y-2 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-xs font-black text-slate-600 uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
              © {currentYear} {personalInfo.name} <span className="text-slate-800">|</span>
              Made with <Heart size={14} className="text-rose-600 inline group-hover:scale-125 transition-transform" /> in India
            </p>
            <p className="text-[0.6rem] font-black text-slate-800 uppercase tracking-[0.5em]">
              DevOps <Sparkles size={10} className="inline mx-1" /> Full Stack <Sparkles size={10} className="inline mx-1" /> Security
            </p>
          </div>

          <div className="flex items-center gap-10">
            <div className="flex flex-col items-end gap-1">
              <span className="text-[0.6rem] font-black text-slate-700 uppercase tracking-widest">Tech Stack</span>
              <div className="flex gap-4">
                <span className="text-[0.6rem] font-bold text-slate-500 uppercase">React</span>
                <span className="text-[0.6rem] font-bold text-slate-500 uppercase">Tailwind v4</span>
                <span className="text-[0.6rem] font-bold text-slate-500 uppercase">Framer Motion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
