
const TechBadge = ({ tech, icon: Icon }) => {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-slate-300 hover:border-purple-500/50 hover:text-purple-300 transition-all cursor-default glow-purple/20">
      {Icon && <Icon size={12} className="text-purple-400" />}
      <span>{tech}</span>
    </div>
  );
};

export default TechBadge;
