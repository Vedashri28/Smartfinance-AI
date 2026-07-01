import React from 'react';

export default function GlassButton({ children, className = '', ...props }) {
  return (
    <button
      className={`rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-white/20 ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
