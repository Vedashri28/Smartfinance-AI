const GlassButton = ({
  children,
  onClick,
  type = "button",
  className = "",
  variant = "primary",
}) => {

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-[0_0_30px_rgba(99,102,241,.45)]",

    secondary:
      "bg-white/10 text-white border border-white/20 hover:bg-white/15",

    outline:
      "border border-blue-400 text-blue-400 hover:bg-blue-500/10",

    danger:
      "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        w-full
        rounded-2xl
        px-6
        py-3
        font-semibold
        transition-all
        duration-300
        hover:-translate-y-1
        active:scale-95
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default GlassButton;