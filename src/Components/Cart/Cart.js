import Modal from "../../UI/Modal";
import classes from "./Cart.module.css";

function Cart(props) {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "coffee", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>total: $25 </span>
        <div className={classes.actions}>
          <button>Proceed to Checkout</button>
          <button onClick={props.onClose}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
