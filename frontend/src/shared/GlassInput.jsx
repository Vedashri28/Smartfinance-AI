import React from 'react';

export default function GlassInput({ className = '', ...props }) {
  return (
    <input
      className={`w-full rounded-2xl border border-white/20 bg-white/70 px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-500 ${className}`.trim()}
      {...props}
    />
  );
}
