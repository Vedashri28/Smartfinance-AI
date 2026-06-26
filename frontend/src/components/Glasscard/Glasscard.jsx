const GlassCard = ({
  children,
  className = "",
  hover = true,
}) => {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[28px]
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-2xl
        transition-all
        duration-500
        ${
          hover
            ? "hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(59,130,246,.25)]"
            : ""
        }
        ${className}
      `}
    >
      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 pointer-events-none" />

      {/* Shine Effect */}
      <div className="absolute -left-40 top-0 h-full w-24 rotate-12 bg-white/10 blur-xl transition-all duration-700 group-hover:left-[120%]" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
