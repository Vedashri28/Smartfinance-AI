import React from 'react';

export default function GlassCard({ children, className = '', ...props }) {
  return (
    <div
      className={`rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.12)] ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
