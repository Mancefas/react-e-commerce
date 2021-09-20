import Modal from "../../UI/Modal";
import classes from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

function Cart(props) {
  // const cartArray = [{ id: "c1", name: "coffee", price: 12.99 }];
  const { cartItems, onAdd, onRemove } = props;
  // const cartItems = (
  //   <ul className={classes["cart-items"]}>
  //     {cartArray.map((item) => (
  //       <li>{item.name}</li>
  //     ))}
  //   </ul>
  // );

  return (
    <Modal onClose={props.onClose}>
      <aside>
        <h2 className={classes.cart_items_sign}>Cart Items</h2>
        <div className={classes.itemsInCart}>
          <div>{cartItems.length === 0 && <div>Cart Is Empty </div>}</div>
          {cartItems.map((item) => (
            <div>
              <div className={classes.item_qty} key={item.id}>
                <div className={classes.total}>{item.name.toUpperCase()}</div>
                <h3>{item.qty}</h3>
                <div>
                  <button
                    className={classes.btn}
                    onClick={() => onRemove(item)}
                    className="remove"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon>
                  </button>{" "}
                  <button
                    className={classes.btn}
                    onClick={() => onAdd(item)}
                    className="add"
                  >
                    <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>
      {/* {cartItems} */}
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
