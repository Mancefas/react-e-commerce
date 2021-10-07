// import { useContext } from "react";
// import CartContext from "../../store/cart-context";
import "./HeaderCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function HeaderCart(props) {
  // const cartCntx = useContext(CartContext);
  // const nrOfItemsInCart = cartCntx.items.length;

  const noOfItems = props.cartItems
    .map((e) => e.qty)
    .reduce((a, b) => {
      return a + b;
    }, 0);

  return (
    <button className="cartBtn" onClick={props.onClicked}>
      <span className="icon">
        <FontAwesomeIcon icon={faShoppingCart} size="2x"></FontAwesomeIcon>
      </span>
      <span className="your-cart">Your Cart</span>
      <span className="badge">{noOfItems}</span>
    </button>
  );
}

export default HeaderCart;
