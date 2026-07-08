import "./GlassInput.css";

function GlassInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <div className="glass-input-group">
      {label && <label>{label}</label>}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className="glass-input"
      />
    </div>
  );
}

export default GlassInput;