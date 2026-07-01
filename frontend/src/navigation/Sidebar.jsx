import React from 'react';

export default function Sidebar({ items = [] }) {
  return (
    <aside className="w-64 rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl">
      <h2 className="px-2 text-lg font-semibold text-slate-900">SmartFinance</h2>
      <nav className="mt-4 space-y-2">
        {items.map((item, index) => (
          <a key={index} href={item.href} className="block rounded-2xl px-3 py-2 text-sm text-slate-700 hover:bg-white/40">
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
