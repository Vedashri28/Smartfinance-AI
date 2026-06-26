import React from "react";

const Sidebar = () => {
  return (
    <aside className="layout-sidebar">
      <div className="sidebar-brand">SmartFinance</div>
      <nav className="sidebar-nav">
        <a href="/dashboard">Dashboard</a>
        <a href="/transactions">Transactions</a>
        <a href="/upload-statement">Upload Statement</a>
        <a href="/ai-advisor">AI Advisor</a>
        <a href="/budget">Budget</a>
        <a href="/reports">Reports</a>
        <a href="/profile">Profile</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
