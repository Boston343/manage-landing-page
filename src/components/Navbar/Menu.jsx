import React from "react";
import "./menu.css";

const Menu = () => {
  function menuClick(event) {
    event.currentTarget.classList.toggle("open");
    document.getElementById("menu").classList.toggle("hidden");
  }

  return (
    <button
      id="menu-btn"
      onClick={menuClick}
      className={"block hamburger lg:hidden focus:outline-none"}
    >
      <span className="hamburger-top"></span>
      <span className="hamburger-mid"></span>
      <span className="hamburger-bot"></span>
    </button>
  );
};

export default Menu;
