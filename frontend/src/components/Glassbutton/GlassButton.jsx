import "./GlassButton.css";

function GlassButton({
  children,
  type = "button",
  variant = "primary",
  onClick,
  disabled = false,
  className = "",
}) {
  return (
    <button
      type={type}
      className={`glass-btn ${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default GlassButton;