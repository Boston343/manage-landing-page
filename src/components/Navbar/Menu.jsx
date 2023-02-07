import React from "react";
import "./menu.css";

const Menu = () => {
  return (
    <button
      id="menu-btn"
      className="block hamburger lg:hidden focus:outline-none"
    >
      <span className="hamburger-top"></span>
      <span className="hamburger-mid"></span>
      <span className="hamburger-bot"></span>
    </button>
  );
};

export default Menu;
