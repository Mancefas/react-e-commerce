import React from "react";
import coffeeLogo from "../coffeeLogo.png";
import HeaderCart from "./Cart/HeaderCart";

import "./NavBar.css";

function NavBar() {
  return (
    <header className="nav">
      <div className="logo">
        <img src={coffeeLogo} alt="logo"></img>
      </div>
      <ul>
        <li>Coffee Beans</li>
        <li>Coffee grinders</li>
        <li>Coffee Machines</li>
        <li>Accessories</li>
      </ul>
      <HeaderCart />
    </header>
  );
}

export default NavBar;
