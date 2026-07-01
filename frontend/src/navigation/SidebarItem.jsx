import React from 'react';

export default function SidebarItem({ label, href = '#', active = false }) {
  return (
    <a
      href={href}
      className={`block rounded-2xl px-3 py-2 text-sm transition ${active ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-white/40'}`.trim()}
    >
      {label}
    </a>
  );
}
