import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  return (
    <button className="cartBtn">
      <span className="icon">
        <FontAwesomeIcon icon={faShoppingCart} size="2x"></FontAwesomeIcon>
      </span>
      <span className="your-cart">Your Cart</span>
      <span className="badge">3</span>
    </button>
  );
}

export default Cart;
