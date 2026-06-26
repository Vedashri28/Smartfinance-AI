import { useState } from "react";

const GlassInput = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full">

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(value !== "")}
        className="
          peer
          w-full
          rounded-2xl
          border
          border-white/20
          bg-white/5
          px-5
          pt-6
          pb-2
          text-white
          backdrop-blur-xl
          outline-none
          transition-all
          duration-300
          focus:border-cyan-400
          focus:shadow-[0_0_20px_rgba(34,211,238,.35)]
        "
      />

      <label
        className={`
          absolute
          left-5
          transition-all
          duration-300
          pointer-events-none
          ${
            focused || value
              ? "top-2 text-xs text-cyan-300"
              : "top-4 text-gray-400"
          }
        `}
      >
        {label}
      </label>

    </div>
  );
};

export default GlassInput;