import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdAccountBalanceWallet,
  MdOutlineUploadFile,
  MdOutlinePsychology,
  MdBarChart,
  MdPerson,
} from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="layout-sidebar">
      <div className="sidebar-brand">
        💎 SmartFinance AI
      </div>

      <nav className="sidebar-nav">

        <NavLink to="/dashboard">
          <MdDashboard />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/transactions">
          <MdAccountBalanceWallet />
          <span>Transactions</span>
        </NavLink>

        <NavLink to="/upload-statement">
          <MdOutlineUploadFile />
          <span>Upload Statement</span>
        </NavLink>

        <NavLink to="/ai-advisor">
          <MdOutlinePsychology />
          <span>AI Advisor</span>
        </NavLink>

        <NavLink to="/budget">
          <FaChartPie />
          <span>Budget</span>
        </NavLink>

        <NavLink to="/reports">
          <MdBarChart />
          <span>Reports</span>
        </NavLink>

        <NavLink to="/profile">
          <MdPerson />
          <span>Profile</span>
        </NavLink>

      </nav>
    </aside>
  );
};

export default Sidebar;
