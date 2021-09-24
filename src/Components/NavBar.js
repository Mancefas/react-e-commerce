import React from "react";
import coffeeLogo from "../coffeeLogo.png";
import HeaderCart from "./Cart/HeaderCart";

import "./NavBar.css";
// import HamburgerMenu from "./Navbar/HamburgerMenu";

// 1. each button has own Value - done
// 2. when pressed array is sorted by that value - done
// 3. render new array instead of picture

function NavBar(props) {
  return (
    <header className="nav">
      <div className="logo" onClick={props.clickedLogo}>
        <img src={coffeeLogo} alt="logo"></img>
      </div>
      <ul>
        <li>
          <button
            value="beans"
            onClick={(e) => props.sortMerch(e.target.value)}
          >
            Coffee Beans
          </button>
        </li>

        <li>
          <button
            value="grinders"
            onClick={(e) => props.sortMerch(e.target.value)}
          >
            Coffee grinders
          </button>
        </li>

        <li>
          <button
            value="machines"
            onClick={(e) => props.sortMerch(e.target.value)}
          >
            Coffee Machines
          </button>
        </li>

        {/* <li>
          <button value="accessories">Accessories</button>
        </li> */}
      </ul>
      {/* <HamburgerMenu
        onHamburgerPress={props.onHamburgerPress}
        showMenu={props.showMenu}
      /> */}
      <HeaderCart
        onClicked={props.onClicked}
        products={props.products}
        cartItems={props.cartItems}
      />
    </header>
  );
}

export default NavBar;
