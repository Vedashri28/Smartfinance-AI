import React from 'react';

export default function Loader({ label = 'Loading...' }) {
  return (
    <div className="flex items-center justify-center gap-3 py-6 text-sm text-slate-600">
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-slate-700" />
      <span>{label}</span>
    </div>
  );
}
