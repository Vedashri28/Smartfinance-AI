const AuroraBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816]">

      {/* Blue Glow */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-600/30 blur-[140px]" />

      {/* Purple Glow */}
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-600/30 blur-[170px]" />

      {/* Cyan Glow */}
      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
};

export default AuroraBackground;