import React from "react";

const Navbar = () => {
  return (
    <header className="layout-navbar">
      <div className="navbar-left">
        <button className="navbar-menu-button">Menu</button>
        <h1 className="navbar-title">SmartFinance</h1>
      </div>
      <div className="navbar-right">
        <button className="navbar-action">Notifications</button>
        <button className="navbar-action">Profile</button>
      </div>
    </header>
  );
};

export default Navbar;
