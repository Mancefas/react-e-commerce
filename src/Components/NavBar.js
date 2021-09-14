import React from "react";
import coffeeLogo from "../coffeeLogo.png";
import Cart from "./Cart/Cart";
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
      <Cart />
    </header>
  );
}

export default NavBar;
