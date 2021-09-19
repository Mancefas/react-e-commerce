import React from "react";

function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;

  return (
    <aside>
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart Is Empty </div>}</div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <div>{item.name}</div>
          <div>{item.qty}</div>
          <div>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>{" "}
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
          </div>
        </div>
      ))}
    </aside>
  );
}

export default Basket;
