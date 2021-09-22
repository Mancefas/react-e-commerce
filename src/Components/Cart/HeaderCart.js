// import { useContext } from "react";
// import CartContext from "../../store/cart-context";
import "./HeaderCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function HeaderCart(props) {
  // const cartCntx = useContext(CartContext);
  // const nrOfItemsInCart = cartCntx.items.length;

  return (
    <button className="cartBtn" onClick={props.onClicked}>
      <span className="icon">
        <FontAwesomeIcon icon={faShoppingCart} size="2x"></FontAwesomeIcon>
      </span>
      <span className="your-cart">Your Cart</span>
      <span className="badge">{props.cartItems.length}</span>
    </button>
  );
}

export default HeaderCart;
