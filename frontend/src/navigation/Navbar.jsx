import React from 'react';

export default function Navbar({ title = 'Dashboard' }) {
  return (
    <header className="flex items-center justify-between rounded-3xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-xl">
      <h1 className="text-lg font-semibold text-slate-900">{title}</h1>
      <div className="text-sm text-slate-600">Welcome back</div>
    </header>
  );
}
