import React from 'react';

export default function SectionTitle({ title, subtitle, className = '' }) {
  return (
    <div className={`mb-4 ${className}`.trim()}>
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      {subtitle ? <p className="mt-1 text-sm text-slate-600">{subtitle}</p> : null}
    </div>
  );
}
