const TechBadge = ({ tech, icon: Icon }) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-slate-400 uppercase tracking-widest hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default shadow-xl group">
      {Icon && <Icon size={12} className="text-cyan-500 group-hover:scale-110 transition-transform" />}
      <span>{tech}</span>
    </div>
  );
};

export default TechBadge;
